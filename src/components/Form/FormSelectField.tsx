"use client";

import { Select } from "antd";
import { Controller, useFormContext } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  options: SelectOptions[];
  name: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  placeholder?: string;
  label?: string;
  required?: boolean;
  defaultValue?: SelectOptions;
  handleChange?: (el: any) => void;
};

const FormSelectField = ({
  options,
  name,
  size,
  value,
  placeholder,
  label,
  required,
  defaultValue,
  handleChange,
}: SelectFieldProps) => {
  const { control } = useFormContext();
  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Select
            // onChange={onChange}
            onChange={handleChange ? handleChange : onChange}
            options={options}
            value={value}
            size={size}
            style={{ width: "100%" }}
            placeholder={placeholder}
          />
        )}
      />
    </>
  );
};

export default FormSelectField;
