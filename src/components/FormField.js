import React from 'react';

const FormField = ({ label, field, value, onChange, placeholder = "0.00", isTextRight = false }) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-gray-600 mb-1">{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(field, e.target.value)}
        className={`border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 ${isTextRight ? 'text-right' : ''}`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormField;

