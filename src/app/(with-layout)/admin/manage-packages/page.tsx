"use client";
import RTable from "@/components/Table/RTable";
import ActionBar from "@/components/UI/ActionBar";
import RModal from "@/components/UI/RModal";
import { useDebounced } from "@/hooks/useDebounced";
import {
  useDeletePackageMutation,
  usePackagesQuery,
} from "@/redux/api/packageApi";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusSquareOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";

const ManagePackagePage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [packageId, setPackagerId] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedSearchTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedSearchTerm) {
    query["searchTerm"] = debouncedSearchTerm;
  }
  const { data, isLoading } = usePackagesQuery({ ...query });
  const [deletePackage] = useDeletePackageMutation();
  if (isLoading) return;

  const packages = data?.packages;
  const meta = data?.meta;

  const deletePackageHandler = async (id: string) => {
    // console.log(id);
    try {
      const res = await deletePackage(id);
      if (res) {
        message.success("Package Successfully Deleted!");
        setOpen(false);
      }
    } catch (error: any) {
      message.error(error.message);
    }
  };
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
    },
    {
      title: "Package Name",
      dataIndex: "name",
    },
    {
      title: "Bandwidth",
      // dataIndex: "bandwidth",
      render: function (data: any) {
        return `${data.bandwidth} mbps`;
      },
      sorter: true,
    },
    {
      title: "BDIX",
      render: function (data: any) {
        return `${data.bdix ? "supported" : "not supported"} `;
      },
    },
    {
      title: "IPTV",
      render: function (data: any) {
        return `${data.iptv ? "supported" : "not supported"} `;
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      sorter: true,
    },
    {
      title: "Action",
      dataIndex: "id",
      render: function (data: any) {
        return (
          <>
            <Link href={`/admin/manage-packages/details/${data}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EyeOutlined />
              </Button>
            </Link>
            <Link href={`/admin/manage-packages/edit/${data}`}>
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              onClick={() => {
                setOpen(true);
                setPackagerId(data);
              }}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
        );
      },
    },
  ];
  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };
  return (
    <div>
      <ActionBar title="Internet Package List">
        <Input
          size="large"
          placeholder="Search"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "20%",
          }}
        />
        <div>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              style={{ margin: "0px 5px" }}
              type="primary"
              onClick={resetFilters}
            >
              <ReloadOutlined />
            </Button>
          )}
          <Link href={"/admin/manage-packages/create"}>
            <Button
              style={{
                margin: "0px 5px",
              }}
              type="primary"
            >
              <PlusSquareOutlined />
            </Button>
          </Link>
        </div>
      </ActionBar>
      <RTable
        loading={isLoading}
        columns={columns}
        dataSource={packages}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
      <RModal
        title="Remove admin"
        isOpen={open}
        closeModal={() => setOpen(false)}
        handleOk={() => deletePackageHandler(packageId)}
      >
        <p className="my-5">Are you sure about deleting this package?</p>
      </RModal>
    </div>
  );
};

export default ManagePackagePage;
