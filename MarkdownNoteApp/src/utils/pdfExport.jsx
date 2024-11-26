import jsPDF from "jspdf";

export function exportToPDF(content) {
  const doc = new jsPDF();
  doc.text(content, 10, 10);
  doc.save("note.pdf");
}
