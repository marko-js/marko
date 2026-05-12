# Render `{"value":"hello"}`

```html
<button>
  Inc
</button>
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT button, #comment0, #text, #comment1, #comment2, #comment3
```

# Render ASYNC
```html
<button>
  Inc
</button>
<!---->
<div>
  : 
</div>
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT div
REMOVE #text after div
```

# Render ASYNC
```html
<button>
  Inc
</button>
<!---->
<div>
  x: 0
</div>
<!---->
<!---->
<!---->
```

# Mutations
```
UPDATE div/#text2 "" => "0"
UPDATE div/#text0 "" => "x"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #comment after #text
REMOVE div after #text
REMOVE #comment after #text
REMOVE #comment after #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!---->
<div>
  x: 2
</div>
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #text, #comment1, #comment2
REMOVE #text after #comment2
INSERT div
REMOVE #text after div
UPDATE div/#text2 "" => "2"
UPDATE div/#text0 "" => "x"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #comment after #text
REMOVE div after #text
REMOVE #comment after #text
REMOVE #comment after #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  Inc
</button>
<!---->
<div>
  x: 4
</div>
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #text, #comment1, #comment2
REMOVE #text after #comment2
INSERT div
REMOVE #text after div
UPDATE div/#text2 "" => "4"
UPDATE div/#text0 "" => "x"
```