const productList = [
  {
    id: "P001",
    name: "Wireless Mouse",
    price: 19.99
  },
  {
    id: "P002",
    name: "Bluetooth Headphones",
    price: 49.99
  },
  {
    id: "P003",
    name: "Portable Charger",
    price: 29.99
  },
  {
    id: "P004",
    name: "Smartphone Stand",
    price: 12.99
  },
  {
    id: "P005",
    name: "LED Desk Lamp",
    price: 25.99
  },
  {
    id: "P006",
    name: "USB-C Cable",
    price: 9.99
  },
  {
    id: "P007",
    name: "Laptop Sleeve",
    price: 19.99
  },
  {
    id: "P008",
    name: "Fitness Tracker",
    price: 69.99
  },
  {
    id: "P009",
    name: "Noise Cancelling Earbuds",
    price: 39.99
  },
  {
    id: "P010",
    name: "Smart Watch",
    price: 129.99
  },
  {
    id: "P011",
    name: "Portable Speaker",
    price: 34.99
  },
  {
    id: "P012",
    name: "Wireless Keyboard",
    price: 24.99
  },
  {
    id: "P013",
    name: "External Hard Drive",
    price: 89.99
  },
  {
    id: "P014",
    name: "Electric Toothbrush",
    price: 39.99
  },
  {
    id: "P015",
    name: "Smartphone Case",
    price: 14.99
  }
]

let currentList = productList;
const sortCategory = document.getElementById("sort");
const filterPriceMin = document.getElementById("filter-min");
const filterPriceMax = document.getElementById("filter-max");
const filterName = document.getElementById("filter-name");
const filterButton = document.getElementById("filter");
const removeFilter = document.getElementById("remove-filter");
const table = document.querySelector("table");
const span = document.getElementById("no-results");
let priceMax = 0;
let priceMin = Infinity;

for (let key in productList) {
  let price = productList[key].price

  price < priceMin ?
    priceMin = price
    : price > priceMax ?
      priceMax = price
      : price;
}

filterPriceMin.setAttribute("min", priceMin);
filterPriceMin.setAttribute("max", priceMax);
filterPriceMin.setAttribute("value", priceMin);
filterPriceMax.setAttribute("min", priceMin);
filterPriceMax.setAttribute("max", priceMax);
filterPriceMax.setAttribute("value", priceMax);


sortCategory.addEventListener("input", () => {
  sortList();
})

function initializeTable() {
  createTable(productList);
}

initializeTable();

function createTable() {
  const head = document.getElementById("table-head");
  const body = document.getElementById("table-body");

  head.replaceChildren();
  body.replaceChildren();

  Object.keys(currentList[0]).forEach(key => {
    let th = document.createElement('th');
    th.textContent = titleCase(key);
    head.appendChild(th);
  });

  currentList.forEach(item => {
    let tr = document.createElement("tr");
    let index = 0;
    let classes = ["id", "name", "price"]

    Object.values(item).forEach(value => {
      let td = document.createElement("td");
      td.textContent = value;
      td.classList.add(classes[index]);
      index = (index+1) % 3; 
      tr.appendChild(td);
    });

    body.appendChild(tr);
  })
}

function resetTable() {
  currentList = productList;

  if (table.hasAttribute("hidden")) toggleHidden();
  sortList();
  createTable();
}

function sortList() {
  switch (sortCategory.value) {
    case "ID":
      currentList = currentList.sort((a, b) => {
        const idA = a.id.toUpperCase();
        const idB = b.id.toUpperCase();

        if (idA < idB) {
          return -1;
        } else if (idA > idB) {
          return 1;
        }

        return 0;
      });
      break;
    case "ID-rev":
      currentList = currentList.sort((a, b) => {
        const idA = a.id.toUpperCase();
        const idB = b.id.toUpperCase();

        if (idA < idB) {
          return -1;
        } else if (idA > idB) {
          return 1;
        }

        return 0;
      });
      currentList = currentList.reverse();
      break;
    case "name":
      currentList = currentList.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      break;
    case "name-rev":
      currentList = currentList.sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1;
        } else if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
      currentList = currentList.reverse();
      break;
    case "price":
      currentList = currentList.sort((a, b) => a.price - b.price);
      break;
    case "price-rev":
      currentList = currentList.sort((a, b) => a.price - b.price).reverse();
      break;
  }

  createTable();
}

filterPriceMax.addEventListener("input", () => {
  filterPriceMin.setAttribute("max", `${filterPriceMax.value}`);
})

filterButton.addEventListener("click", () => {
  filter();
});

removeFilter.addEventListener("click", () => {
  resetTable();
})

function filter() {
  const min = filterPriceMin.value;
  const max = filterPriceMax.value;
  const name = titleCase(filterName.value);
  currentList = productList;
  sortList();
  
  if (name) currentList = currentList.filter((item) => item.name.includes(name));
  if ((max-min) >= 0) currentList = currentList.filter((item) => ((min <= item.price) && (item.price <= max)));
  console.log(currentList.length)

  if (currentList.length) {
    if (table.hasAttribute("hidden")) toggleHidden();
    createTable();
  } else if (!table.hasAttribute("hidden")){
    toggleHidden();
  }
}

function toggleHidden() {
  table.toggleAttribute("hidden");
  span.toggleAttribute("hidden");
}

function titleCase(str) {
  return str.replace(/\b\w+/g, name => name.charAt(0).toUpperCase() + name.substring(1).toLowerCase());
}