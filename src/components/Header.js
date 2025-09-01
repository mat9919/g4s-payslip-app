import React from 'react';

const Header = ({ onPrint, onReset }) => { // รับ onReset เพิ่ม
  return (
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
            {/* เพิ่มปุ่ม Reset */}
            <button
              onClick={onReset}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-5 py-2 rounded-lg font-semibold transition-colors"
            >
              ล้างข้อมูล
            </button>
            <button
              onClick={onPrint}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg font-semibold transition-colors"
            >
              พิมพ์สลิป
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
