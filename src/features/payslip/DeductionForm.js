
import React from 'react';
import FormField from '../../components/FormField';

// รายการฟิลด์รายการหักทั้งหมด
const deductionItems = [
  { label: 'ภาษี', field: 'tax' },
  { label: 'ประกันสังคม', field: 'socialSecurity' },
  { label: 'เบิกล่วงหน้า', field: 'advance' },
  { label: 'ค่าเครื่องแบบ', field: 'uniform' },
  { label: 'อุปกรณ์เบิกเพิ่ม', field: 'accessory' },
  { label: 'ใบอนุญาต รปภ', field: 'securityLicense' },
  { label: 'ค่าอาหาร', field: 'food' },
  { label: 'ค่าเช่าบ้าน', field: 'housingFee' },
  { label: 'ค่าปรับ', field: 'penalty' },
  { label: 'กยศ.', field: 'studentLoan' },
  { label: 'ค่าประกันชีวิต', field: 'lifeInsurance' },
  { label: 'เบิกล่วงหน้าฉุกเฉิน', field: 'advanceExpress' },
  { label: 'ค่าทรัพย์สินเสียหาย', field: 'lossDamage' },
  { label: 'สาย/ขาดงาน', field: 'lateAbsence' },
  { label: 'บัตร ATM', field: 'atmCard' },
  { label: 'หักอื่นๆ', field: 'otherDeduction' }
];

const DeductionForm = ({ formData, handleChange, totalDeduction }) => {
  return (
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-2">รายการเงินหัก (DEDUCTIONS)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {deductionItems.map((item) => (
          <FormField
            key={item.field}
            label={item.label}
            field={item.field}
            value={formData[item.field]}
            onChange={handleChange}
            isTextRight={true}
          />
        ))}
      </div>
      <div className="mt-4 pt-4 border-t">
        <div className="flex justify-between items-center font-bold text-md">
          <span className="text-red-700">ยอดรวมเงินหัก</span>
          <span className="text-red-700">{totalDeduction}</span>
        </div>
      </div>
    </div>
  );
};

export default DeductionForm;
