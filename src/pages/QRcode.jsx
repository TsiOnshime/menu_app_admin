import React from "react";

const QRcode = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
        <h2 className="text-2xl font-bold mb-2">Menu QR Code</h2>
        <p className="text-gray-500 mb-6">
          Customers can scan this to view the menu
        </p>

        <div className="flex justify-center mb-6">
          <img
            src="/qrcode.png"
            alt="Menu QR Code"
            className="w-56 h-56 object-contain border rounded-xl p-3"
          />
        </div>

        <p className="text-sm text-gray-600 mb-4 break-all">
          https://burger-house-nwgr.onrender.com
        </p>

        <a
          href="/qrcode.png"
          download="burger-house-qr.png"
          className="inline-block bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Download QR
        </a>
      </div>
    </div>
  );
};

export default QRcode;
