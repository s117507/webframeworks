import type { Item } from "../types/Interfaces"

// const, not let — this is a seed value, nothing should reassign the whole array.
// camelCase for data; PascalCase is reserved for components and types.
export const goodies: Item[] = [
    { name: "iPhone 12",             price: 699,  inStock: false },
    { name: "iPhone 12 Pro",         price: 999,  inStock: true  },
    { name: "iPhone 12 Pro Max",     price: 1099, inStock: true  },
    { name: "Samsung Galaxy S20",    price: 799,  inStock: true  },
    { name: "Samsung Galaxy S10",    price: 699,  inStock: false },
    { name: "Samsung Galaxy S20 Ultra", price: 999, inStock: true },
    { name: "Huawei P30",            price: 499,  inStock: true  },
    { name: "Huawei P40",            price: 599,  inStock: true  },
    { name: "Nokia 3310",            price: 399,  inStock: false },
]
