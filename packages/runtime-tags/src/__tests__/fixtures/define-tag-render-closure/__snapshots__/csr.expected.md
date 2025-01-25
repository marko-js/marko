# Render
```html
<!---->
<div>
  1
</div>
<button>
  1
</button>
```

# Mutations
```
INSERT #comment, div, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  2
</div>
<button>
  2
</button>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE div/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  3
</div>
<button>
  3
</button>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE div/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  4
</div>
<button>
  4
</button>
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE div/#text "3" => "4"
```