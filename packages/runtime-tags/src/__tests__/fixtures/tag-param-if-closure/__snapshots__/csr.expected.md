# Render
```html
<button>
  Increment
</button>
<!---->
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT button, #comment0, #comment1, #text, #comment2, #comment3, #comment4
```

# Render
```js
container?.querySelector("button").click();
```
```html
<button>
  Increment
</button>
<!---->
<!---->
abc
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #text
REMOVE #text after #text
UPDATE #text " " => "abc"
```