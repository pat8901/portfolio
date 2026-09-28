// 1. Get the base address (e.g., http://localhost:3000)
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function convertApt() {
  const response = await fetch(`${BASE_URL}/apt/convert`);
  return response.json(); 
}

// export async function deleteProduct(id) {
//   const response = await fetch(`${BASE_URL}/api/products/${id}`, {
//     method: 'DELETE'
//   });
//   return response.json();
// 