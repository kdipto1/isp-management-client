"use client";

// import { getErrorMessageByPropertyName } from "@/utils/schema-validatior";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  min?: number;
  max?: number;
}

const FormInput = ({
  name,
  type,
  size,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  disabled,
  min,
  max,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  // const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      {required ? <span style={{ color: "red" }}>*</span> : null}
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              required={required}
              disabled={disabled}
            />
          ) : (
            <Input
              type={type}
              size={size}
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              required={required}
              disabled={disabled}
            />
          )
        }
      />
      {/* <small style={{ color: "red" }}>{errorMessage}</small> */}
    </>
  );
};

export default FormInput;
