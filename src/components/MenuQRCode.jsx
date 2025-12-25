import { QRCodeCanvas } from "qrcode.react";

const MENU_URL = import.meta.env.VITE_MENU_URL;
export default function MenuQRCode() {
  const downloadQR = () => {
    const canvas = document.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "burger-house-menu-qr.png";
    downloadLink.click();
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
      <h2 className="text-xl font-bold mb-2">Menu QR Code</h2>
      <p className="text-gray-500 mb-4">Customers scan to view the menu</p>

      <div className="flex justify-center mb-4">
        <QRCodeCanvas
          value={MENU_URL}
          size={220}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
        />
      </div>

      <p className="text-sm text-gray-600 mb-4 break-all">{MENU_URL}</p>

      <button
        onClick={downloadQR}
        className="bg-orange-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-orange-600"
      >
        Download QR
      </button>
    </div>
  );
}
