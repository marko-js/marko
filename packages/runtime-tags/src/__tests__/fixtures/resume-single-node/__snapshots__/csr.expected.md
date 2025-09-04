# Render
```html
<!---->
<div>
  a
</div>
<!---->
<button>
  More
</button>
```

# Mutations
```
INSERT #comment0, div, #text, #comment1, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  a
</div>
<div>
  b
</div>
<!---->
<div>
  a
</div>
<div>
  b
</div>
<!---->
<button>
  More
</button>
```

# Mutations
```
INSERT div2, #text, #comment2
INSERT div1
REMOVE #text after div1
INSERT div3
REMOVE #text after div3
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<div>
  a
</div>
<div>
  b
</div>
<!---->
<div>
  a
</div>
<div>
  b
</div>
<!---->
<div>
  a
</div>
<div>
  b
</div>
<!---->
<button>
  More
</button>
```

# Mutations
```
INSERT div4, #text, #comment3
INSERT div5
REMOVE #text after div5
```