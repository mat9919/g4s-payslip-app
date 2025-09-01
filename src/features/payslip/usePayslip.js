import { useState } from 'react';

// ข้อมูลเริ่มต้นของฟอร์ม
const initialFormData = {
  employeeName: 'ฮาซัน ยะโกะ',
  employeeId: '455846',
  department: 'ปฏิบัติการ',
  zone: 'BKK Expressway & Metros',
  employeeType: 'Direct Staff',
  payPeriod: '16/07/2025 - 15/08/2025',
  periodNo: '236',
  payDate: '31/08/2025',
  bankName: 'The Siam Commercial Bank Company Ltd.',
  bankAccount: '01403862294835',
  yearAccIncome: '141,078.48',
  yearAccTax: '0.00',
  yearAccSoc: '3,555.00',
  totalHours: '348.00',
  wageRate: '46.500',
  cash: '0.00',
  // Income fields
  salary: '8,556.00',
  overtime: '4,278.00',
  holidayWage: '372.00',
  holidayOvertime: '744.00',
  weeklyOff: '744.00',
  overtimeWeeklyOff: '1,488.00',
  language: '',
  telephone: '',
  housing: '',
  position: '833.50',
  incentive: '408.34',
  weapon: '744.00',
  accruedWage: '',
  transport: '',
  otherAllowance: '',
  bonus: '',
  maternity: '',
  personalLeave: '',
  vacation: '',
  bonus2: '',
  shift: '',
  sickLeave: '',
  gasoline: '',
  otherIncome: '',
  // Deductions
  tax: '484.00',
  socialSecurity: '343.00',
  advance: '60.00',
  uniform: '',
  accessory: '',
  securityLicense: '887.00',
  food: '',
  housingFee: '',
  penalty: '',
  studentLoan: '',
  lifeInsurance: '',
  advanceExpress: '',
  lossDamage: '',
  lateAbsence: '',
  atmCard: '',
  otherDeduction: '',
};

// รายชื่อฟิลด์สำหรับคำนวณ
const incomeFields = [
  'salary', 'overtime', 'holidayWage', 'holidayOvertime', 'weeklyOff', 
  'overtimeWeeklyOff', 'language', 'telephone', 'housing', 'position', 
  'incentive', 'weapon', 'accruedWage', 'transport', 'otherAllowance', 
  'bonus', 'maternity', 'personalLeave', 'vacation', 'bonus2', 'shift', 
  'sickLeave', 'gasoline', 'otherIncome'
];

const deductionFields = [
  'tax', 'socialSecurity', 'advance', 'uniform', 'accessory', 
  'securityLicense', 'food', 'housingFee', 'penalty', 'studentLoan', 
  'lifeInsurance', 'advanceExpress', 'lossDamage', 'lateAbsence', 
  'atmCard', 'otherDeduction'
];


export const usePayslip = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // ฟังก์ชันใหม่สำหรับรีเซ็ตฟอร์ม
  const resetForm = () => {
    setFormData(initialFormData);
  };

  const calculateTotal = (fields) => {
    return fields.reduce((total, field) => {
      const value = parseFloat(String(formData[field]).replace(/,/g, '')) || 0;
      return total + value;
    }, 0).toFixed(2);
  };

  const totalIncome = calculateTotal(incomeFields);
  const totalDeduction = calculateTotal(deductionFields);
  const netIncome = (parseFloat(totalIncome) - parseFloat(totalDeduction)).toFixed(2);

  const formatNumber = (value) => {
    if (!value) return '';
    const num = parseFloat(String(value).replace(/,/g, ''));
    return isNaN(num) ? '' : num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // ส่งค่าและฟังก์ชันทั้งหมดที่จำเป็นออกไปให้ Component อื่นใช้
  return {
    formData,
    handleChange,
    resetForm, // ส่งฟังก์ชัน resetForm ออกไปด้วย
    totalIncome,
    totalDeduction,
    netIncome,
    formatNumber,
    incomeFields,
    deductionFields
  };
};
