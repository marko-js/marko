# Render
```html
<!---->
<button>
  0,0
</button>
```

# Mutations
```
INSERT #comment, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  0,1
</button>
```

# Mutations
```
UPDATE button/#text "0,0" => "0,1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  1,2
</button>
```

# Mutations
```
UPDATE button/#text "0,1" => "1,2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  2,3
</button>
```

# Mutations
```
UPDATE button/#text "1,2" => "2,3"
```