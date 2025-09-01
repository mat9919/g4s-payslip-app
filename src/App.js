import React, { useState, useRef } from 'react';

const App = () => {
  const [formData, setFormData] = useState({
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
  });

  const [showPrintPreview, setShowPrintPreview] = useState(false);
  const printRef = useRef();

  const handleChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const calculateTotalIncome = () => {
    const incomeFields = [
      'salary', 'overtime', 'holidayWage', 'holidayOvertime', 'weeklyOff', 
      'overtimeWeeklyOff', 'language', 'telephone', 'housing', 'position', 
      'incentive', 'weapon', 'accruedWage', 'transport', 'otherAllowance', 
      'bonus', 'maternity', 'personalLeave', 'vacation', 'bonus2', 'shift', 
      'sickLeave', 'gasoline', 'otherIncome'
    ];
        
    return incomeFields.reduce((total, field) => {
      const value = parseFloat(String(formData[field]).replace(/,/g, '')) || 0;
      return total + value;
    }, 0).toFixed(2);
  };

  const calculateTotalDeduction = () => {
    const deductionFields = [
      'tax', 'socialSecurity', 'advance', 'uniform', 'accessory', 
      'securityLicense', 'food', 'housingFee', 'penalty', 'studentLoan', 
      'lifeInsurance', 'advanceExpress', 'lossDamage', 'lateAbsence', 
      'atmCard', 'otherDeduction'
    ];
        
    return deductionFields.reduce((total, field) => {
      const value = parseFloat(String(formData[field]).replace(/,/g, '')) || 0;
      return total + value;
    }, 0).toFixed(2);
  };

  const calculateNetIncome = () => {
    const totalIncome = parseFloat(calculateTotalIncome());
    const totalDeduction = parseFloat(calculateTotalDeduction());
    return (totalIncome - totalDeduction).toFixed(2);
  };

  const handlePrint = () => {
    setShowPrintPreview(true);
  };

  const formatNumber = (value) => {
    if (!value) return '';
    const num = parseFloat(String(value).replace(/,/g, ''));
    return isNaN(num) ? '' : num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <div className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                ระบบบันทึกรายรับ-รายจ่าย
              </h1>
              <p className="text-gray-500 mt-1">G4S Payroll System</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                สถานะ: ออนไลน์
              </div>
              <button
                onClick={handlePrint}
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
              >
                พิมพ์สลิป
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Main Form */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Employee Info */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">ข้อมูลพนักงาน</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">ชื่อพนักงาน</label>
                  <input
                    type="text"
                    value={formData.employeeName}
                    onChange={(e) => handleChange('employeeName', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">รหัสพนักงาน</label>
                  <input
                    type="text"
                    value={formData.employeeId}
                    onChange={(e) => handleChange('employeeId', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">แผนก</label>
                  <input
                    type="text"
                    value={formData.department}
                    onChange={(e) => handleChange('department', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">เขต</label>
                  <input
                    type="text"
                    value={formData.zone}
                    onChange={(e) => handleChange('zone', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">ประเภทพนักงาน</label>
                  <input
                    type="text"
                    value={formData.employeeType}
                    onChange={(e) => handleChange('employeeType', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Pay Period Info */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h2 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">ข้อมูลการจ่ายเงิน</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">งวดวันที่</label>
                  <input
                    type="text"
                    value={formData.payPeriod}
                    onChange={(e) => handleChange('payPeriod', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">งวดที่</label>
                  <input
                    type="text"
                    value={formData.periodNo}
                    onChange={(e) => handleChange('periodNo', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">วันที่จ่ายเงิน</label>
                  <input
                    type="text"
                    value={formData.payDate}
                    onChange={(e) => handleChange('payDate', e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Pay Slip */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg p-6 shadow">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800 border-b pb-2">สลิปเงินเดือน</h2>
                <div className="text-sm text-gray-500">
                  รายได้รวม: <span className="text-green-600 font-semibold">{calculateTotalIncome()}</span>
                </div>
              </div>

              {/* Income Section */}
              <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-2">รายได้ (INCOME)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
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
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <label className="text-sm text-gray-600 mb-1">{item.label}</label>
                      <input
                        type="text"
                        value={formData[item.field]}
                        onChange={(e) => handleChange(item.field, e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-right focus:ring-2 focus:ring-blue-500"
                        placeholder="0.00"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center font-bold text-md">
                    <span className="text-green-700">ยอดรวมเงินได้</span>
                    <span className="text-green-700">{calculateTotalIncome()}</span>
                  </div>
                </div>
              </div>

              {/* Deductions Section */}
              <div className="mb-6">
                <h3 className="text-md font-semibold text-gray-700 mb-3 border-b pb-2">รายการเงินหัก (DEDUCTIONS)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
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
                  ].map((item, index) => (
                    <div key={index} className="flex flex-col">
                      <label className="text-sm text-gray-600 mb-1">{item.label}</label>
                      <input
                        type="text"
                        value={formData[item.field]}
                        onChange={(e) => handleChange(item.field, e.target.value)}
                        className="border border-gray-300 rounded-lg px-3 py-2 text-right focus:ring-2 focus:ring-blue-500"
                        placeholder="0.00"
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center font-bold text-md">
                    <span className="text-red-700">ยอดรวมเงินหัก</span>
                    <span className="text-red-700">{calculateTotalDeduction()}</span>
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                  <div>
                    <div className="text-gray-500">รายได้สะสม</div>
                    <div className="font-bold text-gray-800">{formData.yearAccIncome}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">ภาษีสะสม</div>
                    <div className="font-bold text-gray-800">{formData.yearAccTax}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">ประกันสังคม</div>
                    <div className="font-bold text-gray-800">{formData.yearAccSoc}</div>
                  </div>
                  <div>
                    <div className="text-gray-500">เงินสด</div>
                    <div className="font-bold text-gray-800">{formData.cash}</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">เงินได้สุทธิ</div>
                      <div className="text-xl font-bold text-green-600">{calculateNetIncome()}</div>
                    </div>
                    <div className="text-right text-sm">
                      <div className="font-medium">{formData.bankName}</div>
                      <div className="text-gray-500">{formData.bankAccount}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Preview Modal */}
      {showPrintPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white text-black rounded-lg shadow-xl max-w-4xl w-full max-h-screen overflow-y-auto">
            <div className="p-6" ref={printRef}>
              {/* Print Version of Pay Slip */}
              <div className="border p-6">
                <div className="text-center mb-4">
                  <h1 className="text-xl font-bold">บริษัท รักษาความปลอดภัย จี4เอส เซอร์วิสเซส(ประเทศไทย) จำกัด</h1>
                  <p className="text-xs text-gray-600">588 ซอยศรีนครินทร์ 16 ถนนศรีนครินทร์ แขวงพัฒนาการ เขตสวนหลวง กรุงเทพมหานคร 10250</p>
                  <p className="text-xs text-gray-600">สายด่วน: 02-020-2432, 02-020-2400 | Email: speakout@g4s.com</p>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold mb-1">ใบแจ้งรายได้ / PAY SLIP</h2>
                  <div className="grid grid-cols-3 gap-4 text-xs">
                    <div>
                      <strong>ประจำเดือน:</strong> {formData.payPeriod}
                    </div>
                    <div>
                      <strong>งวดที่:</strong> {formData.periodNo}
                    </div>
                    <div>
                      <strong>วันที่จ่ายเงิน:</strong> {formData.payDate}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-sm">
                  <div>
                    <strong>ชื่อพนักงาน:</strong> {formData.employeeName} ({formData.employeeId})
                  </div>
                  <div>
                    <strong>แผนก:</strong> {formData.department}
                  </div>
                  <div>
                    <strong>เขต:</strong> {formData.zone}
                  </div>
                  <div>
                    <strong>ประเภทพนักงาน:</strong> {formData.employeeType}
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-md font-bold border-b pb-1 mb-2">รายการเงินได้ (INCOME)</h3>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-xs">
                    {[
                      { label: 'เงินเดือน/ค่าแรง', value: formData.salary },
                      { label: 'ค่าล่วงเวลา', value: formData.overtime },
                      { label: 'วันนักขัตฤกษ์', value: formData.holidayWage },
                      { label: 'ค่าล่วงเวลาวันนักขัตฤกษ์', value: formData.holidayOvertime },
                      { label: 'วันหยุด', value: formData.weeklyOff },
                      { label: 'ค่าล่วงเวลาวันหยุด', value: formData.overtimeWeeklyOff },
                      { label: 'ค่าภาษา', value: formData.language },
                      { label: 'ค่าโทรศัพท์', value: formData.telephone },
                      { label: 'ค่าเช่าบ้าน', value: formData.housing },
                      { label: 'ค่าตำแหน่ง', value: 'position' },
                      { label: 'รางวัล/เบี้ยขยัน', value: formData.incentive },
                      { label: 'ค่าอาวุธ', value: formData.weapon },
                      { label: 'เงินค้างจ่าย', value: formData.accruedWage },
                      { label: 'ค่าเดินทาง', value: formData.transport },
                      { label: 'ค่าเบี้ยเลี้ยง', value: formData.otherAllowance },
                      { label: 'โบนัส', value: formData.bonus },
                      { label: 'ค่าลาคลอด', value: formData.maternity },
                      { label: 'ลากิจ', value: formData.personalLeave },
                      { label: 'ค่าพักร้อน', value: formData.vacation },
                      { label: 'โบนัส2', value: formData.bonus2 },
                      { label: 'ค่ากะ/เงินพิเศษ', value: formData.shift },
                      { label: 'ลาป่วย', value: formData.sickLeave },
                      { label: 'ค่าน้ำมัน', value: formData.gasoline },
                      { label: 'รายได้อื่น ๆ', value: formData.otherIncome }
                    ].filter(item => item.value).map((item, index) => (
                      <React.Fragment key={index}>
                        <div>{item.label}</div>
                        <div></div>
                        <div className="text-right">{formatNumber(item.value)}</div>
                      </React.Fragment>
                    ))}
                    <div className="col-span-2 font-bold border-t pt-1 mt-1">ยอดรวมเงินได้</div>
                    <div className="text-right font-bold border-t pt-1 mt-1">{calculateTotalIncome()}</div>
                  </div>
                </div>

                <div className="mb-4">
                  <h3 className="text-md font-bold border-b pb-1 mb-2">รายการเงินหัก (DEDUCTIONS)</h3>
                  <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-xs">
                    {[
                      { label: 'ภาษี', value: formData.tax },
                      { label: 'ประกันสังคม', value: formData.socialSecurity },
                      { label: 'เบิกล่วงหน้า', value: formData.advance },
                      { label: 'ค่าเครื่องแบบ', value: formData.uniform },
                      { label: 'อุปกรณ์เบิกเพิ่ม', value: formData.accessory },
                      { label: 'ใบอนุญาต รปภ', value: formData.securityLicense },
                      { label: 'ค่าอาหาร', value: formData.food },
                      { label: 'ค่าเช่าบ้าน', value: formData.housingFee },
                      { label: 'ค่าปรับ', value: formData.penalty },
                      { label: 'กยศ.', value: formData.studentLoan },
                      { label: 'ค่าประกันชีวิต', value: formData.lifeInsurance },
                      { label: 'เบิกล่วงหน้าฉุกเฉิน', value: formData.advanceExpress },
                      { label: 'ค่าทรัพย์สินเสียหาย', value: formData.lossDamage },
                      { label: 'สาย/ขาดงาน', value: formData.lateAbsence },
                      { label: 'บัตร ATM', value: formData.atmCard },
                      { label: 'หักอื่นๆ', value: formData.otherDeduction }
                    ].filter(item => item.value).map((item, index) => (
                      <React.Fragment key={index}>
                        <div>{item.label}</div>
                        <div></div>
                        <div className="text-right">{formatNumber(item.value)}</div>
                      </React.Fragment>
                    ))}
                    <div className="col-span-2 font-bold border-t pt-1 mt-1">ยอดรวมเงินหัก</div>
                    <div className="text-right font-bold border-t pt-1 mt-1">{calculateTotalDeduction()}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-x-6 mb-4 text-xs">
                  <div>
                    <div><strong>รายได้สะสม:</strong> {formatNumber(formData.yearAccIncome)}</div>
                    <div><strong>ภาษีสะสม:</strong> {formatNumber(formData.yearAccTax)}</div>
                    <div><strong>ประกันสังคม:</strong> {formatNumber(formData.yearAccSoc)}</div>
                    <div><strong>เงินสด:</strong> {formatNumber(formData.cash)}</div>
                  </div>
                  <div className="text-right">
                    <div><strong>ชื่อธนาคาร:</strong> {formData.bankName}</div>
                    <div><strong>เลขที่บัญชีธนาคาร:</strong> {formData.bankAccount}</div>
                    <div className="text-lg font-bold mt-2">เงินได้สุทธิ: {calculateNetIncome()}</div>
                  </div>
                </div>

                <div className="border-t pt-2 text-xs">
                  <div className="flex justify-between mb-2">
                    <div><strong>จำนวนรายชั่วโมงทุกประเภท:</strong> {formData.totalHours}</div>
                    <div><strong>อัตราค่าจ้างต่อชั่วโมง:</strong> {formData.wageRate}</div>
                  </div>
                  <div className="border-t pt-1 italic text-gray-600" style={{fontSize: '8px'}}>
                    หมายเหตุ: บริษัทถือว่าเงินเดือนและค่าจ้างเป็นความลับห้ามเปิดเผย กรณีข้อมูลไม่ถูกต้องกรุณาแจ้งแผนกเงินเดือน เอกสารฉบับนี้เป็นเอกสารสำคัญออกจากระบบอิเล็กทรอนิกส์ ออกโดยบริษัทซึ่งสามารถใช้แทนหนังสือรับรองการทำงานและหนังสือรับรองเงินเดือนได้
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end p-4 space-x-4 bg-gray-100 rounded-b-lg">
              <button
                onClick={() => setShowPrintPreview(false)}
                className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
              >
                ปิด
              </button>
              <button
                onClick={() => {
                  const printWindow = window.open('', '_blank');
                  printWindow.document.write('<html><head><title>Print</title>');
                  printWindow.document.write('<style>@media print { body { -webkit-print-color-adjust: exact; } }</style>');
                  printWindow.document.write('</head><body>');
                  printWindow.document.write(printRef.current.innerHTML);
                  printWindow.document.write('</body></html>');
                  printWindow.document.close();
                  printWindow.print();
                }}
                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                พิมพ์
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
