# Render
```html
<div>
  Hit
</div>
<button>
  0
</button>
<!---->
```

# Mutations
```
INSERT div, button, #text, #comment
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Hit
</div>
<button>
  1
</button>
<!---->
```

# Mutations
```
UPDATE button/#text "0" => "1"
INSERT #text
REMOVE #text after #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Hit
</div>
<button>
  2
</button>
<!---->
```

# Mutations
```
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  Hit
</div>
<button>
  3
</button>
<!---->
```

# Mutations
```
UPDATE button/#text "2" => "3"
```