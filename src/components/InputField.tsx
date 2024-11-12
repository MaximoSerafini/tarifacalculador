import React from 'react';

interface InputFieldProps {
  label: string;
  value: string | number;
  onChange: (value: any) => void;
  type?: string;
  step?: string;
  min?: string;
  max?: string;
}

export function InputField({
  label,
  value,
  onChange,
  type = "text",
  ...props
}: InputFieldProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(type === "number" ? Number(e.target.value) : e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        {...props}
      />
    </div>
  );
}