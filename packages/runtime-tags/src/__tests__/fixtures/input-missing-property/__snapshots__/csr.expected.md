# Render
```html
<button>
  0
</button>
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT button, #comment0, #text, #comment1, #comment2
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<!---->
<!---->
<div>
  Fallback
</div>
<!---->
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "0" => "1"
INSERT #comment1, #text, #comment2
REMOVE #text after #comment2
INSERT div
REMOVE #text after div
UPDATE div/#text " " => "Fallback"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<!---->
<!---->
<div>
  Fallback
</div>
<!---->
<!---->
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
<button>
  3
</button>
<!---->
<!---->
<div>
  Fallback
</div>
<!---->
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "2" => "3"
```