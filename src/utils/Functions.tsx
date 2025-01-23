export function formatCurrency(value: number): string {  
  return value
    .toFixed(2) 
    .replace('.', ',') 
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.'); 
}