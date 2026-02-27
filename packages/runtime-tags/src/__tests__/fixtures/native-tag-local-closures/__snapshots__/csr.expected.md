# Render
```html
<!---->
<!---->
<div>
  0
</div>
<!---->
<button>
  Add
</button>
```

# Mutations
```
INSERT #comment0, #comment1, div, #comment2, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<div>
  0
</div>
<div>
  1
</div>
<!---->
<button>
  Add
</button>
```

# Mutations
```
INSERT div1
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<div>
  0
</div>
<div>
  1
</div>
<div>
  2
</div>
<!---->
<button>
  Add
</button>
```

# Mutations
```
INSERT div2
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<div>
  0
</div>
<div>
  1
</div>
<div>
  2
</div>
<div>
  3
</div>
<!---->
<button>
  Add
</button>
```

# Mutations
```
INSERT div3
```