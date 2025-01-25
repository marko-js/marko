# Render
```html
<input
  disabled=""
/>
<button>
  enable
</button>
```

# Mutations
```
INSERT input, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<input />
<button>
  disable
</button>
```

# Mutations
```
UPDATE input[disabled] "" => null
UPDATE button/#text "enable" => "disable"
```

# Render
```js
container.querySelector("button").click();
```
```html
<input
  disabled=""
/>
<button>
  enable
</button>
```

# Mutations
```
UPDATE input[disabled] null => ""
UPDATE button/#text "disable" => "enable"
```

# Render
```js
container.querySelector("button").click();
```
```html
<input />
<button>
  disable
</button>
```

# Mutations
```
UPDATE input[disabled] "" => null
UPDATE button/#text "enable" => "disable"
```