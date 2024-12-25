export const generateCode = (initialCode="", businessName="") => {
    // Chuyển tên doanh nghiệp thành chữ in hoa và loại bỏ khoảng trắng
    const cleanName = businessName.toUpperCase().replace(/\s+/g, '');
    
    // Ghép mã số đầu và phần tên doanh nghiệp
    return `${initialCode}${cleanName}`;
  }
  