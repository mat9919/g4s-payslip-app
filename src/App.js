import React, { useState } from 'react';

// Import Custom Hook สำหรับจัดการ Logic
import { usePayslip } from './features/payslip/usePayslip'; 

// Import Components ที่เราสร้างขึ้น
import Header from './components/Header';
import EmployeeInfoForm from './features/payslip/EmployeeInfoForm';
import PayslipSection from './features/payslip/PayslipSection';
import PrintPreview from './features/payslip/PrintPreview';

const App = () => {
  // ดึง State และ Functions ทั้งหมดมาจาก Custom Hook
  const {
    formData,
    handleChange,
    resetForm, // ดึงฟังก์ชัน resetForm ออกมา
    totalIncome,
    totalDeduction,
    netIncome,
    formatNumber,
  } = usePayslip();

  // State สำหรับควบคุมการแสดง/ซ่อนหน้า Print Preview
  const [showPrintPreview, setShowPrintPreview] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* 1. Header Component */}
      <Header
        onPrint={() => setShowPrintPreview(true)}
        onReset={resetForm} // ส่งฟังก์ชัน resetForm เข้าไป
      />

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 2. Employee Info Form Component (ฝั่งซ้าย) */}
          <EmployeeInfoForm formData={formData} handleChange={handleChange} />

          {/* 3. Payslip Section Component (ฝั่งขวา) */}
          <PayslipSection
            formData={formData}
            handleChange={handleChange}
            totalIncome={totalIncome}
            totalDeduction={totalDeduction}
            netIncome={netIncome}
          />

        </div>
      </main>

      {/* 4. Print Preview Component (จะแสดงเมื่อ showPrintPreview เป็น true) */}
      {showPrintPreview && (
        <PrintPreview
          formData={formData}
          totalIncome={totalIncome}
          totalDeduction={totalDeduction}
          netIncome={netIncome}
          formatNumber={formatNumber}
          onClose={() => setShowPrintPreview(false)}
        />
      )}
    </div>
  );
};

export default App;
