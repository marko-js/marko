# Render {}
```html
<button>
  0
</button>
```

# Mutations
```
inserted button0
```


# Render 
container.querySelector("button").click();

```html
<button>
  1
</button>
```

# Mutations
```
removed #text in button0
inserted button0/#text0
```


# Render 
container.querySelector("button").click();

```html
<button>
  2Error: Reading a mutated value or value derived from a mutated value is not permitted.
</button>
```

# Mutations
```
removed #text in button0
inserted button0/#text0
```