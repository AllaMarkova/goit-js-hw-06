const categoriesList = document.querySelector("#categories");
const itemsList = categoriesList.querySelectorAll(".item");

// Порахувати кількість категорій
console.log(`Number of categories: ${itemsList.length}`);

// Вивести назву категорії та кількість елементів в ній
itemsList.forEach((item) => {
  const heading = item.querySelector("h2");
  const items = item.querySelectorAll("li");

  console.log(`Category: ${heading.textContent}`);
  console.log(`Elements: ${items.length}`);
});

