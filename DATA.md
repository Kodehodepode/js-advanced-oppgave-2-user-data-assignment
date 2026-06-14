# Data structure

In localStorage, an array of objects is stored under the key `fridge`, having the following structure:

```
[
    {
        product: String,
        quantity: Number,
        expires: Date
    },
    ...
]
```

- `product` is the name of a product in the fridge
- `quantity` is the count of the product, as a number with or without decimals
- `expires` is the best-before date, in the strict ISO format as returned by date input fields
