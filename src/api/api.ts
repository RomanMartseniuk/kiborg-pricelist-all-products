const baseUrl = 'https://kiborg-products-server.onrender.com/';

export const get = async (url: string) => {
   const data = await fetch(`${baseUrl}${url}`);
   if (!data) return undefined;
   return data;
}