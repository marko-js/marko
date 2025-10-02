# Render
```html
<button>
  1
</button>
<!---->
<span />
<!---->
<!---->
```

# Mutations
```
INSERT button, #comment0, span, #comment1, #comment2
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
<span />
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
<span />
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "2" => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<!---->
<span />
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "3" => "4"
```