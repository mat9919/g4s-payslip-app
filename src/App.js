import React, { useState, useRef } from 'react';

const initialFormData = {
  employeeName: 'ฮาซัน ยะโกะ', employeeId: '455846', department: 'ปฏิบัติการ',
  zone: 'BKK Expressway & Metros', employeeType: 'Direct Staff', payPeriod: '16/07/2025 - 15/08/2025',
  periodNo: '236', payDate: '31/08/2025', bankName: 'The Siam Commercial Bank Company Ltd.',
  bankAccount: '01403862294835', yearAccIncome: '141,078.48', yearAccTax: '0.00',
  yearAccSoc: '3,555.00', totalHours: '348.00', wageRate: '46.500', cash: '0.00',
  salary: '8,556.00', overtime: '4,278.00', holidayWage: '372.00', holidayOvertime: '744.00',
  weeklyOff: '744.00', overtimeWeeklyOff: '1,488.00', language: '', telephone: '',
  housing: '', position: '833.50', incentive: '408.34', weapon: '744.00',
  accruedWage: '', transport: '', otherAllowance: '', bonus: '', maternity: '',
  personalLeave: '', vacation: '', bonus2: '', shift: '', sickLeave: '',
  gasoline: '', otherIncome: '', tax: '484.00', socialSecurity: '343.00',
  advance: '60.00', uniform: '', accessory: '', securityLicense: '887.00',
  food: '', housingFee: '', penalty: '', studentLoan: '', lifeInsurance: '',
  advanceExpress: '', lossDamage: '', lateAbsence: '', atmCard: '', otherDeduction: '',
};

const incomeFields = [
  'salary', 'overtime', 'holidayWage', 'holidayOvertime', 'weeklyOff', 'overtimeWeeklyOff', 'language', 'telephone', 'housing', 'position', 'incentive', 'weapon', 'accruedWage', 'transport', 'otherAllowance', 'bonus', 'maternity', 'personalLeave', 'vacation', 'bonus2', 'shift', 'sickLeave', 'gasoline', 'otherIncome'
];
const deductionFields = [
  'tax', 'socialSecurity', 'advance', 'uniform', 'accessory', 'securityLicense', 'food', 'housingFee', 'penalty', 'studentLoan', 'lifeInsurance', 'advanceExpress', 'lossDamage', 'lateAbsence', 'atmCard', 'otherDeduction'
];

const App = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const printRef = useRef();

  const handleChange = (field, value) => setFormData(prev => ({ ...prev, [field]: value }));
  const resetForm = () => setFormData(initialFormData);

  const calculateTotal = (fields) => fields.reduce((total, field) => total + (parseFloat(String(formData[field]).replace(/,/g, '')) || 0), 0);

  const totalIncome = calculateTotal(incomeFields);
  const totalDeduction = calculateTotal(deductionFields);
  const netIncome = totalIncome - totalDeduction;

  const formatNumber = (value) => {
    const num = parseFloat(String(value).replace(/,/g, ''));
    return isNaN(num) ? '0.00' : num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };
      
  const handleActualPrint = () => {
    const printContent = printRef.current.innerHTML;
    const tailwindUrl = "https://cdn.tailwindcss.com"; // URL for Tailwind CSS
    const printWindow = window.open('', '_blank');
    printWindow.document.write(`<html><head><title>Print</title><script src="${tailwindUrl}"></script></head><body>${printContent}</body></html>`);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
        printWindow.print();
        printWindow.close();
    }, 500); // Wait for styles to load
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="bg-white shadow-md"><div className="max-w-7xl mx-auto px-4 py-4"><div className="flex items-center justify-between"><div><h1 className="text-2xl font-bold text-gray-900">ระบบบันทึกรายรับ-รายจ่าย</h1><p className="text-gray-500 mt-1">G4S Payroll System</p></div><div className="flex items-center space-x-4"><button onClick={resetForm} className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg font-semibold transition-colors">ล้างข้อมูล</button><button onClick={() => setShowPrintPreview(true)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors">พิมพ์สลิป</button></div></div></div></div>
      <main className="max-w-7xl mx-auto px-4 py-8"><div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-lg p-6 shadow"><h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">ข้อมูลพนักงาน</h2><div className="space-y-4">{Object.entries({ 'ชื่อพนักงาน': 'employeeName', 'รหัสพนักงาน': 'employeeId', 'แผนก': 'department', 'เขต': 'zone', 'ประเภท': 'employeeType' }).map(([label, field]) => (<div key={field}><label className="block text-sm font-medium text-gray-600 mb-1">{label}</label><input type="text" value={formData[field]} onChange={(e) => handleChange(field, e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" /></div>))}</div></div>
          <div className="bg-white rounded-lg p-6 shadow"><h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">ข้อมูลการจ่ายเงิน</h2><div className="space-y-4">{Object.entries({ 'งวดวันที่': 'payPeriod', 'งวดที่': 'periodNo', 'วันที่จ่าย': 'payDate' }).map(([label, field]) => (<div key={field}><label className="block text-sm font-medium text-gray-600 mb-1">{label}</label><input type="text" value={formData[field]} onChange={(e) => handleChange(field, e.target.value)} className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500" /></div>))}</div></div>
        </div>
        <div className="lg:col-span-2"><div className="bg-white rounded-lg p-6 shadow">
          <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">สลิปเงินเดือน</h2>
          <div className="mb-6"><h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-2">รายได้ (INCOME)</h3><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{[{ label: 'เงินเดือน/ค่าแรง', field: 'salary' }, { label: 'ค่าล่วงเวลา', field: 'overtime' }, { label: 'วันนักขัตฤกษ์', field: 'holidayWage' }, { label: 'ค่าล่วงเวลาวันนักขัตฤกษ์', field: 'holidayOvertime' }, { label: 'วันหยุด', field: 'weeklyOff' }, { label: 'ค่าล่วงเวลาวันหยุด', field: 'overtimeWeeklyOff' }, { label: 'ค่าภาษา', field: 'language' }, { label: 'ค่าโทรศัพท์', field: 'telephone' }, { label: 'ค่าเช่าบ้าน', field: 'housing' }, { label: 'ค่าตำแหน่ง', field: 'position' }, { label: 'รางวัล/เบี้ยขยัน', field: 'incentive' }, { label: 'ค่าอาวุธ', field: 'weapon' }, { label: 'เงินค้างจ่าย', field: 'accruedWage' }, { label: 'ค่าเดินทาง', field: 'transport' }, { label: 'ค่าเบี้ยเลี้ยง', field: 'otherAllowance' }, { label: 'โบนัส', field: 'bonus' }, { label: 'ค่าลาคลอด', field: 'maternity' }, { label: 'ลากิจ', field: 'personalLeave' }, { label: 'ค่าพักร้อน', field: 'vacation' }, { label: 'โบนัส2', field: 'bonus2' }, { label: 'ค่ากะ/เงินพิเศษ', field: 'shift' }, { label: 'ลาป่วย', field: 'sickLeave' }, { label: 'ค่าน้ำมัน', field: 'gasoline' }, { label: 'รายได้อื่น ๆ', field: 'otherIncome' }].map(item => (<div key={item.field} className="flex flex-col"><label className="text-sm text-gray-600 mb-1">{item.label}</label><input type="text" value={formData[item.field]} onChange={(e) => handleChange(item.field, e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-right focus:ring-2 focus:ring-blue-500" placeholder="0.00" /></div>))}<div className="mt-4 pt-4 border-t"><div className="flex justify-between items-center font-bold text-md"><span className="text-green-700">ยอดรวมเงินได้</span><span className="text-green-700">{formatNumber(totalIncome)}</span></div></div></div>
          <div className="mb-6"><h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-2">รายการเงินหัก (DEDUCTIONS)</h3><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">{[{ label: 'ภาษี', field: 'tax' }, { label: 'ประกันสังคม', field: 'socialSecurity' }, { label: 'เบิกล่วงหน้า', field: 'advance' }, { label: 'ค่าเครื่องแบบ', field: 'uniform' }, { label: 'อุปกรณ์เบิกเพิ่ม', field: 'accessory' }, { label: 'ใบอนุญาต รปภ', field: 'securityLicense' }, { label: 'ค่าอาหาร', field: 'food' }, { label: 'ค่าเช่าบ้าน', field: 'housingFee' }, { label: 'ค่าปรับ', field: 'penalty' }, { label: 'กยศ.', field: 'studentLoan' }, { label: 'ค่าประกันชีวิต', field: 'lifeInsurance' }, { label: 'เบิกล่วงหน้าฉุกเฉิน', field: 'advanceExpress' }, { label: 'ค่าทรัพย์สินเสียหาย', field: 'lossDamage' }, { label: 'สาย/ขาดงาน', field: 'lateAbsence' }, { label: 'บัตร ATM', field: 'atmCard' }, { label: 'หักอื่นๆ', field: 'otherDeduction' }].map(item => (<div key={item.field} className="flex flex-col"><label className="text-sm text-gray-600 mb-1">{item.label}</label><input type="text" value={formData[item.field]} onChange={(e) => handleChange(item.field, e.target.value)} className="border border-gray-300 rounded-lg px-3 py-2 text-right focus:ring-2 focus:ring-blue-500" placeholder="0.00" /></div>))}<div className="mt-4 pt-4 border-t"><div className="flex justify-between items-center font-bold text-md"><span className="text-red-700">ยอดรวมเงินหัก</span><span className="text-red-700">{formatNumber(totalDeduction)}</span></div></div></div>
          <div className="bg-gray-50 rounded-lg p-4"><div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm"><div><div className="text-gray-500">รายได้สะสม</div><div className="font-bold text-gray-800">{formData.yearAccIncome}</div></div><div><div className="text-gray-500">ภาษีสะสม</div><div className="font-bold text-gray-800">{formData.yearAccTax}</div></div><div><div className="text-gray-500">ประกันสังคม</div><div className="font-bold text-gray-800">{formData.yearAccSoc}</div></div><div><div className="text-gray-500">เงินสด</div><div className="font-bold text-gray-800">{formData.cash}</div></div></div><div className="mt-4 pt-4 border-t"><div className="flex justify-between items-center"><div><div className="text-sm text-gray-600">เงินได้สุทธิ</div><div className="text-xl font-bold text-green-600">{formatNumber(netIncome)}</div></div><div className="text-right text-sm"><div className="font-medium">{formData.bankName}</div><div className="text-gray-500">{formData.bankAccount}</div></div></div></div></div>
        </div></div>
      </main>
      {showPrintPreview && (<div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"><div className="bg-white text-black rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto"><div className="p-6" ref={printRef}><div className="border p-6"><div className="text-center mb-4"><h1 className="text-xl font-bold">บริษัท รักษาความปลอดภัย จี4เอส เซอร์วิสเซส(ประเทศไทย) จำกัด</h1><p className="text-xs">588 ซอยศรีนครินทร์ 16 ถนนศรีนครินทร์ แขวงพัฒนาการ เขตสวนหลวง กรุงเทพมหานคร 10250</p></div><div className="text-center mb-6"><h2 className="text-2xl font-bold mb-1">ใบแจ้งรายได้ / PAY SLIP</h2></div><div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-sm"><div><strong>ชื่อพนักงาน:</strong> {formData.employeeName} ({formData.employeeId})</div><div><strong>แผนก:</strong> {formData.department}</div><div><strong>งวดวันที่:</strong> {formData.payPeriod}</div><div><strong>วันที่จ่ายเงิน:</strong> {formData.payDate}</div></div><div className="grid grid-cols-2 gap-4 mb-4"><div className="pr-2 border-r"> <h3 className="text-md font-bold border-b pb-1 mb-2">รายการเงินได้</h3><div className="space-y-1 text-xs">{incomeFields.filter(f => parseFloat(String(formData[f]).replace(/,/g, '')) > 0).map(f => (<div key={f} className="flex justify-between"><span>{f.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}</span><span>{formatNumber(formData[f])}</span></div>))}</div></div><div><h3 className="text-md font-bold border-b pb-1 mb-2">รายการเงินหัก</h3><div className="space-y-1 text-xs">{deductionFields.filter(f => parseFloat(String(formData[f]).replace(/,/g, '')) > 0).map(f => (<div key={f} className="flex justify-between"><span>{f.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}</span><span>{formatNumber(formData[f])}</span></div>))}</div></div></div><div className="grid grid-cols-2 gap-4 border-t pt-2"><div className="font-bold flex justify-between pr-2 border-r"><span>ยอดรวมเงินได้</span><span>{formatNumber(totalIncome)}</span></div><div className="font-bold flex justify-between"><span>ยอดรวมเงินหัก</span><span>{formatNumber(totalDeduction)}</span></div></div><div className="text-right text-lg font-bold mt-4 border-t pt-2">เงินได้สุทธิ: {formatNumber(netIncome)}</div></div></div><div className="flex justify-end p-4 space-x-4 bg-gray-100 rounded-b-lg"><button onClick={() => setShowPrintPreview(false)} className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500">ปิด</button><button onClick={handleActualPrint} className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">พิมพ์</button></div></div></div>)}
    </div>
  );
};

export default App;

