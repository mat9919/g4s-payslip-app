import React from 'react';
import FormField from '../../components/FormField'; // เราจะ import FormField ที่สร้างไว้มาใช้

// Component ย่อยสำหรับแต่ละการ์ด
const InfoCard = ({ title, children }) => (
  <div className="bg-white rounded-lg p-6 shadow">
    <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">{title}</h2>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

const EmployeeInfoForm = ({ formData, handleChange }) => {
  return (
    <div className="lg:col-span-1 space-y-6">
      {/* การ์ดข้อมูลพนักงาน */}
      <InfoCard title="ข้อมูลพนักงาน">
        <FormField
          label="ชื่อพนักงาน"
          field="employeeName"
          value={formData.employeeName}
          onChange={handleChange}
          isTextRight={false}
        />
        <FormField
          label="รหัสพนักงาน"
          field="employeeId"
          value={formData.employeeId}
          onChange={handleChange}
          isTextRight={false}
        />
        <FormField
          label="แผนก"
          field="department"
          value={formData.department}
          onChange={handleChange}
          isTextRight={false}
        />
        <FormField
          label="เขต"
          field="zone"
          value={formData.zone}
          onChange={handleChange}
          isTextRight={false}
        />
        <FormField
          label="ประเภทพนักงาน"
          field="employeeType"
          value={formData.employeeType}
          onChange={handleChange}
          isTextRight={false}
        />
      </InfoCard>

      {/* การ์ดข้อมูลการจ่ายเงิน */}
      <InfoCard title="ข้อมูลการจ่ายเงิน">
        <FormField
          label="งวดวันที่"
          field="payPeriod"
          value={formData.payPeriod}
          onChange={handleChange}
          isTextRight={false}
        />
        <FormField
          label="งวดที่"
          field="periodNo"
          value={formData.periodNo}
          onChange={handleChange}
          isTextRight={false}
        />
        <FormField
          label="วันที่จ่ายเงิน"
          field="payDate"
          value={formData.payDate}
          onChange={handleChange}
          isTextRight={false}
        />
      </InfoCard>
    </div>
  );
};

export default EmployeeInfoForm;

