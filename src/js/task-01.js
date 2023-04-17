const categoriesElement = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesElement.length}`);

categoriesElement.forEach((item) => {
    const categoryTitle = item.querySelector("h2");
    const categoryItem = item.querySelectorAll("li");

    console.log(`Category: ${categoryTitle.textContent}`);
    console.log(`Elements: ${categoryItem.length}`)
})