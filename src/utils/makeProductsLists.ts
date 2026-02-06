import { getCategories } from "../api/getCategories";
import { getProducts } from "../api/getGoods"
import type { Category } from "../types/Category";

/*
type Category List Type :
{
id: number;
name: string;
products: Product[];
}

*/

export const makeProductsLists = async () => {
   const products = await getProducts();
   const categories: Category[] = await getCategories();

   if (!products || !categories) return [];

   // Создадим map: categoryId -> [products]
   const categoryMap = new Map<number, typeof products>();

   // Инициализация map
   categories.forEach(cat => {
      cat.productCategoriesList.forEach(catId => {
         categoryMap.set(catId, []);
      });
   });

   // Разбросаем товары по categoryId
   products.forEach(product => {
      const prodCatId = +product.categoryId;
      if (categoryMap.has(prodCatId)) {
         categoryMap.get(prodCatId)!.push(product);
      }
   });

   // Соберем итоговый массив
   const lists = categories.map(cat => {
      const catProducts: typeof products = [];
      cat.productCategoriesList.forEach(catId => {
         catProducts.push(...(categoryMap.get(catId) || []));
      });
      return {
         id: cat.id,
         name: cat.name,
         products: catProducts
      }
   });
   console.log(lists);
   return lists;
}