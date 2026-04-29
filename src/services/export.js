// services/export.js
import jsPDF from 'jspdf';

export const exportExpensesToPDF = async (expenses) => {
  const pdf = new jsPDF();
  const pageHeight = pdf.internal.pageSize.getHeight();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 10;
  const lineHeight = 7;
  let yPosition = margin + 10;

  // Title
  pdf.setFontSize(20);
  pdf.text('Reporte de Gastos Hormiga', pageWidth / 2, margin + 5, { align: 'center' });

  // Date
  pdf.setFontSize(10);
  pdf.text(`Generado: ${new Date().toLocaleDateString('es-CO')}`, pageWidth / 2, margin + 12, { align: 'center' });

  yPosition += 10;

  // Table header
  pdf.setFontSize(11);
  pdf.setFont(undefined, 'bold');
  pdf.text('Descripción', margin, yPosition);
  pdf.text('Valor', margin + 80, yPosition);
  pdf.text('Fecha', margin + 110, yPosition);
  pdf.text('Categoría', margin + 140, yPosition);

  yPosition += lineHeight + 2;

  // Separator line
  pdf.setDrawColor(200, 200, 200);
  pdf.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 3;

  // Table rows
  pdf.setFont(undefined, 'normal');
  pdf.setFontSize(9);
  let totalValue = 0;

  expenses.forEach(expense => {
    const descripcion = expense.descripcion.substring(0, 20);
    const valor = `$${expense.valor.toLocaleString()}`;
    const fecha = expense.fecha;
    const categoria = expense.categoria.substring(0, 15);

    // Check if we need to add a new page
    if (yPosition > pageHeight - margin - 10) {
      pdf.addPage();
      yPosition = margin + 10;
    }

    pdf.text(descripcion, margin, yPosition);
    pdf.text(valor, margin + 80, yPosition);
    pdf.text(fecha, margin + 110, yPosition);
    pdf.text(categoria, margin + 140, yPosition);

    totalValue += expense.valor;
    yPosition += lineHeight;
  });

  // Separator line
  pdf.setDrawColor(200, 200, 200);
  pdf.line(margin, yPosition, pageWidth - margin, yPosition);
  yPosition += 3;

  // Total
  pdf.setFont(undefined, 'bold');
  pdf.setFontSize(11);
  pdf.text(`Total: $${totalValue.toLocaleString()}`, margin + 80, yPosition);

  // Footer
  const pageCount = pdf.getNumberOfPages();
  pdf.setFontSize(8);
  pdf.setFont(undefined, 'normal');
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    pdf.text(`Página ${i} de ${pageCount}`, pageWidth / 2, pageHeight - margin + 2, { align: 'center' });
  }

  // Download
  pdf.save(`gastos-hormiga-${new Date().toISOString().split('T')[0]}.pdf`);
};