# Data structure

In localStorage, an array of objects is stored under the key `fridge`, having the following structure:

```
[
    {
        product: String,
        expiration: Date
    },
    ...
]
```

- `product` is the name of a product in the fridge
- `expiration` is the best-before date, in milliseconds since the epoch (raw Date())
