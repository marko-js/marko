# Render
```html
<button>
  0
</button>
<button />
```

# Mutations
```
INSERT button0, button1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<button />
```

# Mutations
```
UPDATE button0/#text "0" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<button />
```

# Mutations
```
UPDATE button0/#text "2" => "4"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  6
</button>
<button />
```

# Mutations
```
UPDATE button0/#text "4" => "6"
```