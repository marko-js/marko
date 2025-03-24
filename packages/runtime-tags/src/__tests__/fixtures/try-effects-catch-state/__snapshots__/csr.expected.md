# Render
```html
<div>
  0
</div>
<button>
  inc
</button>
-- ‍
<!---->
```

# Mutations
```
INSERT div, button, #text0, #text1, #comment
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
<button>
  inc
</button>
-- ‍
<!---->
```

# Mutations
```
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<div>
  1
</div>
Error: ERROR!
<!---->
```

# Mutations
```
INSERT #text
REMOVE button after #text
REMOVE #text after #text
REMOVE #text after #text
UPDATE #text " " => "Error: ERROR!"
```