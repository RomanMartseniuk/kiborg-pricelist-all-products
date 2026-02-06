const categoriesJson = '/data/categories_tactic.json';

export async function getCategories() {
   try {
      const data = await fetch(categoriesJson);

      return data.json();
   }
   catch {
      return [];
   }
}