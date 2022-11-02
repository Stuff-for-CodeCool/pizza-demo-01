const buildPizza = (pizza, i) => {
    return `
<div class="pizza">
    <img src="${pizza.image}" alt="${pizza.name}">
    <h1>${pizza.name}</h1>
    <ul>
        ${pizza.ingredients.map((i) => `<li>${i}</li>`).join("")}
    </ul>
    <div class="buttons">
        <button class="add" data-index="${i}">+</button>
        <span>1</span>
        <button class="remove" data-index="${i}">-</button>
        <button class="buy">Add to cart</button>
    </div>
</div>
    `;
};

const fetchPizzas = async () => {
    const request = await fetch("/api/pizzas");
    if (request.ok) {
        const response = await request.json();

        const output = response.map((p, i) => buildPizza(p, i)).join("");
        document.body.insertAdjacentHTML("beforeend", output);

        document.querySelectorAll(".add").forEach(add => {
            add.addEventListener("click", e => {
                console.log(`Buying ${add.dataset.index}`)
            })
        })

        document.querySelectorAll(".remove").forEach((add) => {
            add.addEventListener("click", (e) => {
                console.log(`Not buying ${add.dataset.index}`);
            });
        });
    }
};

fetchPizzas();
