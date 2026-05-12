# Render `{"value":1}`

```html
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #text, #comment1, #comment2
```

# Render ASYNC
```html
<!---->
<button>
  : 
</button>
<!---->
<!---->
```

# Mutations
```
INSERT button
REMOVE #text after button
```

# Render ASYNC
```html
<!---->
<button>
  x: 1
</button>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text0 "" => "x"
UPDATE button/#text2 "" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  x: 2
</button>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text2 "1" => "2"
```