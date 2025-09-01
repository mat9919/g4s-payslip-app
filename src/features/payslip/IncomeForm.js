
import React from 'react';
import FormField from '../../components/FormField';

// รายการฟิลด์รายได้ทั้งหมด
const incomeItems = [
  { label: 'เงินเดือน/ค่าแรง', field: 'salary' },
  { label: 'ค่าล่วงเวลา', field: 'overtime' },
  { label: 'วันนักขัตฤกษ์', field: 'holidayWage' },
  { label: 'ค่าล่วงเวลาวันนักขัตฤกษ์', field: 'holidayOvertime' },
  { label: 'วันหยุด', field: 'weeklyOff' },
  { label: 'ค่าล่วงเวลาวันหยุด', field: 'overtimeWeeklyOff' },
  { label: 'ค่าภาษา', field: 'language' },
  { label: 'ค่าโทรศัพท์', field: 'telephone' },
  { label: 'ค่าเช่าบ้าน', field: 'housing' },
  { label: 'ค่าตำแหน่ง', field: 'position' },
  { label: 'รางวัล/เบี้ยขยัน', field: 'incentive' },
  { label: 'ค่าอาวุธ', field: 'weapon' },
  { label: 'เงินค้างจ่าย', field: 'accruedWage' },
  { label: 'ค่าเดินทาง', field: 'transport' },
  { label: 'ค่าเบี้ยเลี้ยง', field: 'otherAllowance' },
  { label: 'โบนัส', field: 'bonus' },
  { label: 'ค่าลาคลอด', field: 'maternity' },
  { label: 'ลากิจ', field: 'personalLeave' },
  { label: 'ค่าพักร้อน', field: 'vacation' },
  { label: 'โบนัส2', field: 'bonus2' },
  { label: 'ค่ากะ/เงินพิเศษ', field: 'shift' },
  { label: 'ลาป่วย', field: 'sickLeave' },
  { label: 'ค่าน้ำมัน', field: 'gasoline' },
  { label: 'รายได้อื่น ๆ', field: 'otherIncome' }
];

const IncomeForm = ({ formData, handleChange, totalIncome }) => {
  return (
    <div className="mb-6">
      <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-2">รายได้ (INCOME)</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {incomeItems.map((item) => (
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
          <span className="text-green-700">ยอดรวมเงินได้</span>
          <span className="text-green-700">{totalIncome}</span>
        </div>
      </div>
    </div>
  );
};

export default IncomeForm;
