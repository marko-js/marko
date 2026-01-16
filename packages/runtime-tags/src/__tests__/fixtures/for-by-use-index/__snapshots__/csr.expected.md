# Render
```html
<div>
  <button>
    hello
  </button>
</div>
<!---->
```

# Mutations
```
INSERT div, #text, #comment
```

# Render
```js
container.querySelector("button").click();
```
```html
<div />
<div>
  0
</div>
<!---->
```

# Mutations
```
REMOVE button in div0
INSERT div1
REMOVE #text after div1
UPDATE div1/#text " " => "0"
```