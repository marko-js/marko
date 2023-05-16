# Render {}
```html
<div>
  <div>
    Marko: HTML Reimagined
  </div>
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
container.querySelector("#add").click()

```html
<div>
  <div>
    Marko: HTML Reimagined
  </div>
  <div>
    JavaScript: Java, but scriptier
  </div>
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
inserted div0/div1
```


# Render 
container.querySelector("#remove").click()

```html
<div>
  <div>
    Marko: HTML Reimagined
  </div>
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
removed div after div0/div0
```


# Render 
container.querySelector("#remove").click()

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
inserted div0/#text0
removed div before div0/#text0
```


# Render 
container.querySelector("#add").click()

```html
<div>
  <div>
    JavaScript: Java, but scriptier
  </div>
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
inserted div0/div0
removed #text before div0/div0
```