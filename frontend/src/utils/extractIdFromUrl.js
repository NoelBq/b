export function extractIdFromUrl(url) {
    const regex = /\/product\/(\d+)-/;
        const match = url.match(regex);
    
    if (match) {
      return match[1];
    }
    
    return null; 
  }