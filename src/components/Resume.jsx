import React, { useContext, useRef } from "react";
import { ResumeContext } from "../context api/ResumeContext";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Resume = () => {
  const { formData } = useContext(ResumeContext);
  const resumeRef = useRef();
  
  const downloadPDF = async () => {
    const element = resumeRef.current;

    // Capture canvas
    const canvas = await html2canvas(element, { scale: 2, useCORS: true });
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    // Calculate image ratio and size
    const imgProps = {
      width: canvas.width,
      height: canvas.height,
    };
    const ratio = Math.min(pdfWidth / imgProps.width, pdfHeight / imgProps.height);
    const imgWidth = imgProps.width * ratio;
    const imgHeight = imgProps.height * ratio;

    // Center horizontally
    const xOffset = (pdfWidth - imgWidth) / 2;

    pdf.addImage(imgData, "PNG", xOffset, 0, imgWidth, imgHeight);
    pdf.save("resume.pdf");
  };

  if(!formData){
    
  }

  return (
    <div style={{ backgroundColor: "#000000", minHeight: "100vh", paddingBottom: "50px" }}>
      {/* HEADER */}
      <div
        style={{
          backgroundColor: "#1d4ed8",
          color: "#ffffff",
          textAlign: "center",
          padding: "16px",
          fontSize: "1.75rem",
          fontWeight: "600",
        }}
      >
        Resume Builder
      </div>

      {/* RESUME CONTENT */}
      <div style={{ display: "flex", justifyContent: "center", padding: "24px" }}>
        <div
          ref={resumeRef}
          style={{
            width: "210mm",
            minHeight: "297mm",
            backgroundColor: "#ffffff",
            padding: "32px",
            boxSizing: "border-box",
            color: "#1f2937",
            fontFamily: "Arial, sans-serif",
          }}
        >
          {/* PROFILE */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "32px" }}>
            <div
              style={{
                height: "150px",
                width: "150px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "1px solid #d1d5db",
                marginBottom: "16px",
              }}
            >
              {formData.image && (
                <img
                  src={URL.createObjectURL(formData.image)}
                  alt="Profile"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
            </div>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "700", color: "#1f2937", textAlign: "center" }}>
              {formData.name}
            </h1>
          </div>

          {/* CONTACT INFO */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>
              Contact Information
            </h2>
            <table style={{ width: "100%", borderCollapse: "separate", borderSpacing: "0 8px" }}>
              <tbody>
                {[
                  ["Email", formData.email],
                  ["Mobile", formData.mobile],
                  ["Address", formData.address],
                ].map(([label, value]) => (
                  <tr key={label}>
                    <td style={{ width: "120px", color: "#4b5563", fontWeight: "500", verticalAlign: "top" }}>{label}</td>
                    <td style={{ width: "20px", textAlign: "center" }}>:</td>
                    <td style={{ color: "#374151", verticalAlign: "top", wordBreak: "break-word" }}>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* ABOUT */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "8px" }}>
              About
            </h2>
            <p style={{ color: "#374151", lineHeight: "1.5", fontSize: "1rem" }}>{formData.description}</p>
          </section>

          {/* HOBBIES */}
          <section style={{ marginBottom: "32px" }}>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "8px" }}>Hobbies</h2>
            <p style={{ color: "#374151", fontSize: "1rem" }}>{formData.hobbies}</p>
          </section>

          {/* STUDY */}
          <section>
            <h2 style={{ fontSize: "1.75rem", fontWeight: "600", color: "#1f2937", marginBottom: "16px" }}>Education & Skills</h2>
            {[
              ["Qualification", formData.qualification],
              ["Achievements", formData.achievement],
              ["Skills", formData.skills],
            ].map(([title, value]) => (
              <div key={title} style={{ marginBottom: "16px" }}>
                <h3 style={{ fontSize: "1.25rem", fontWeight: "600", color: "#374151", marginBottom: "4px" }}>{title}</h3>
                <p style={{ color: "#374151", fontSize: "1rem", marginLeft: "8px" }}>{value}</p>
              </div>
            ))}
          </section>
        </div>
      </div>

      {/* DOWNLOAD BUTTON */}
      <div style={{ textAlign: "center" }}>
        <button
        className="bg-blue-800 py-2  text-2xl text-white font-medium rounded w-[90vw]"
          onClick={downloadPDF}
         
        >
          Download PDF
        </button>
      </div>
    </div>
  );
};

export default Resume;
