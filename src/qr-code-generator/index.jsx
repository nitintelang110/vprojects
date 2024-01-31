import { useState } from "react";
import QRCode from "react-qr-code";
import './qr.css'

export const QRCodeGenerator=() =>{
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput('')
  }

  return (
    <div className="qrContainer">
      <h1>QR Code Generator</h1>
      <div>
        <input 
          className="inp"
          onChange={(e) => setInput(e.target.value)}
          type="text"
          name="qr-code"
          value={input}
          placeholder="Enter your any value here"
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
          className="gen_btn"
        >
          Generate
        </button>
      </div>
      <div className="qr_content">
        <QRCode id="qr-code-value" value={qrCode}  />
      </div>
    </div>
  );
}
