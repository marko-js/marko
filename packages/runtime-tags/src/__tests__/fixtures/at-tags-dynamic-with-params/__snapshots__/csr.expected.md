# Render
```html
<!---->
<!---->
y: 1
<!---->
<button>
  Toggle
</button>
```

# Mutations
```
INSERT #comment0, #comment1, #text0, #text1, #comment2, button
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<!---->
<button>
  Toggle
</button>
```

# Mutations
```
INSERT #text
REMOVE #text after #text
REMOVE #text after #text
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
y: 1
<!---->
<button>
  Toggle
</button>
```

# Mutations
```
INSERT #text0, #text1
REMOVE #text after #text1
UPDATE #text1 "" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<!---->
<button>
  Toggle
</button>
```

# Mutations
```
INSERT #text
REMOVE #text after #text
REMOVE #text after #text
```