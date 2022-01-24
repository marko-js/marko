# Render {}
```html
<div>
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
inserted div0
```


# Render 
container.querySelector("#add").click();

```html
<div>
  1
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
inserted div0/#text0
removed  before div0/#text0
```


# Render 
container.querySelector("#add").click();

```html
<div>
  12
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
inserted div0/#text1
```


# Render 
container.querySelector("#remove").click();

```html
<div>
  1
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
removed  after div0/#text0
```


# Render 
container.querySelector("#add").click();

```html
<div>
  13
  <button
    id="add"
  >
    Add
  </button>
  <button
    id="remove"
  >
    Remove
  </button>
</div>
```

# Mutations
```
inserted div0/#text1
```