import React from 'react';
import IncomeForm from './IncomeForm';
import DeductionForm from './DeductionForm';
import Summary from './Summary';

const PayslipSection = ({
  formData,
  handleChange,
  totalIncome,
  totalDeduction,
  netIncome,
}) => {
  return (
    <div className="lg:col-span-2">
      <div className="bg-white rounded-lg p-6 shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800 border-b pb-2">สลิปเงินเดือน</h2>
          <div className="text-sm text-gray-500">
            รายได้รวม: <span className="text-green-600 font-semibold">{totalIncome}</span>
          </div>
        </div>

        {/* ส่วนฟอร์มรายได้ */}
        <IncomeForm
          formData={formData}
          handleChange={handleChange}
          totalIncome={totalIncome}
        />

        {/* ส่วนฟอร์มรายการหัก */}
        <DeductionForm
          formData={formData}
          handleChange={handleChange}
          totalDeduction={totalDeduction}
        />

        {/* ส่วนสรุปยอด */}
        <Summary formData={formData} netIncome={netIncome} />
        
      </div>
    </div>
  );
};

export default PayslipSection;

