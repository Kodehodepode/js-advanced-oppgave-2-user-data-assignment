# Data structure

In localStorage, an array of objects is stored under the key `fridge`, having the following structure:

```
[
    {
        product: String,
        expires: Date
    },
    ...
]
```

- `product` is the name of a product in the fridge
- `expires` is the best-before date, in milliseconds since the epoch (raw Date())
