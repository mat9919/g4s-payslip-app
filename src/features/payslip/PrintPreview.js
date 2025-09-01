import React, { useRef } from 'react';

const PrintPreview = ({
  formData,
  totalIncome,
  totalDeduction,
  netIncome,
  formatNumber,
  onClose,
}) => {
  const printRef = useRef();

  const handleActualPrint = () => {
    const printWindow = window.open('', '_blank');
    // Tailwind CSS styles might not work directly. For production, you'd link a stylesheet.
    // For simplicity, we'll rely on browser default styles for printing.
    printWindow.document.write('<html><head><title>Print Payslip</title>');
    // A simple style for better print layout
    printWindow.document.write(`
      <style>
        body { font-family: sans-serif; margin: 20px; }
        .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
        .text-right { text-align: right; }
        .font-bold { font-weight: bold; }
        .border-t { border-top: 1px solid #ccc; }
        .pt-1 { padding-top: 4px; }
        .mt-1 { margin-top: 4px; }
        .mb-2 { margin-bottom: 8px; }
        .mb-4 { margin-bottom: 16px; }
        .text-center { text-align: center; }
        .text-xs { font-size: 0.75rem; }
        .text-lg { font-size: 1.125rem; }
        .text-xl { font-size: 1.25rem; }
        .text-2xl { font-size: 1.5rem; }
        h1, h2, h3 { margin: 0; }
      </style>
    `);
    printWindow.document.write('</head><body>');
    printWindow.document.write(printRef.current.innerHTML);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  };

  // Filtered lists for cleaner display
  const incomeItems = [
    { label: 'เงินเดือน/ค่าแรง', value: formData.salary },
    { label: 'ค่าล่วงเวลา', value: formData.overtime },
    { label: 'วันนักขัตฤกษ์', value: formData.holidayWage },
    { label: 'ค่าล่วงเวลาวันนักขัตฤกษ์', value: formData.holidayOvertime },
    { label: 'วันหยุด', value: formData.weeklyOff },
    { label: 'ค่าล่วงเวลาวันหยุด', value: formData.overtimeWeeklyOff },
    { label: 'ค่าภาษา', value: formData.language },
    { label: 'ค่าโทรศัพท์', value: formData.telephone },
    { label: 'ค่าเช่าบ้าน', value: formData.housing },
    { label: 'ค่าตำแหน่ง', value: formData.position },
    { label: 'รางวัล/เบี้ยขยัน', value: formData.incentive },
    { label: 'ค่าอาวุธ', value: formData.weapon },
    // ... add other income fields if they can have values
  ].filter(item => parseFloat(String(item.value).replace(/,/g, '')) > 0);

  const deductionItems = [
    { label: 'ภาษี', value: formData.tax },
    { label: 'ประกันสังคม', value: formData.socialSecurity },
    { label: 'เบิกล่วงหน้า', value: formData.advance },
    { label: 'ใบอนุญาต รปภ', value: formData.securityLicense },
    // ... add other deduction fields if they can have values
  ].filter(item => parseFloat(String(item.value).replace(/,/g, '')) > 0);


  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white text-black rounded-lg shadow-xl max-w-4xl w-full max-h-screen flex flex-col">
        {/* Content to be printed */}
        <div className="p-6 overflow-y-auto" ref={printRef}>
          <div className="border p-6">
            <div className="text-center mb-4">
              <h1 className="text-xl font-bold">บริษัท รักษาความปลอดภัย จี4เอส เซอร์วิสเซส(ประเทศไทย) จำกัด</h1>
              <p className="text-xs text-gray-600">588 ซอยศรีนครินทร์ 16 ถนนศรีนครินทร์ แขวงพัฒนาการ เขตสวนหลวง กรุงเทพมหานคร 10250</p>
            </div>
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-1">ใบแจ้งรายได้ / PAY SLIP</h2>
              <div className="grid grid-cols-3 gap-4 text-xs">
                <div><strong>งวดวันที่:</strong> {formData.payPeriod}</div>
                <div><strong>งวดที่:</strong> {formData.periodNo}</div>
                <div><strong>วันที่จ่ายเงิน:</strong> {formData.payDate}</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4 text-sm">
              <div><strong>ชื่อพนักงาน:</strong> {formData.employeeName} ({formData.employeeId})</div>
              <div><strong>แผนก:</strong> {formData.department}</div>
            </div>
            
            {/* Income Section */}
            <div className="mb-4">
              <h3 className="text-md font-bold border-b pb-1 mb-2">รายการเงินได้ (INCOME)</h3>
              <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-xs">
                {incomeItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <div>{item.label}</div>
                    <div></div>
                    <div className="text-right">{formatNumber(item.value)}</div>
                  </React.Fragment>
                ))}
                <div className="col-span-2 font-bold border-t pt-1 mt-1">ยอดรวมเงินได้</div>
                <div className="text-right font-bold border-t pt-1 mt-1">{totalIncome}</div>
              </div>
            </div>

            {/* Deduction Section */}
            <div className="mb-4">
              <h3 className="text-md font-bold border-b pb-1 mb-2">รายการเงินหัก (DEDUCTIONS)</h3>
              <div className="grid grid-cols-3 gap-x-4 gap-y-1 text-xs">
                {deductionItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <div>{item.label}</div>
                    <div></div>
                    <div className="text-right">{formatNumber(item.value)}</div>
                  </React.Fragment>
                ))}
                <div className="col-span-2 font-bold border-t pt-1 mt-1">ยอดรวมเงินหัก</div>
                <div className="text-right font-bold border-t pt-1 mt-1">{totalDeduction}</div>
              </div>
            </div>

            {/* Final Summary */}
            <div className="grid grid-cols-2 gap-x-6 mb-4 text-xs">
              <div>
                <div><strong>รายได้สะสม:</strong> {formatNumber(formData.yearAccIncome)}</div>
                <div><strong>ภาษีสะสม:</strong> {formatNumber(formData.yearAccTax)}</div>
                <div><strong>ประกันสังคม:</strong> {formatNumber(formData.yearAccSoc)}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold mt-2">เงินได้สุทธิ: {netIncome}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end p-4 space-x-4 bg-gray-100 rounded-b-lg border-t">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
          >
            ปิด
          </button>
          <button
            onClick={handleActualPrint}
            className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            พิมพ์
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrintPreview;
