# Render `{"show":true}`

```html
<!---->
0
<button>
  Update
</button>
```

# Mutations
```
INSERT #comment, #text, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
1
<button>
  Update
</button>
```

# Mutations
```
UPDATE #text "0" => "1"
```