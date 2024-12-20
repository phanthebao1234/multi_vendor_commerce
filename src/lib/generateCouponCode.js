export const generateCouponCode = (title="", expiryDate="") => {
    const formattedTitle = title.toUpperCase().replace(/\s+/g, "")
    
    // Format the expiry date to "DDMMYYYY"
    const formattedExpiryDate = expiryDate
        .split("-")
        .reverse()
        .join("");
        
    return `${formattedTitle}-${formattedExpiryDate}`;
}