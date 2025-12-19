# Render
```html
<!---->
<button>
  0
</button>
<!---->
```

# Mutations
```
INSERT #comment0, button, #comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  0
</button>
<button>
  1
</button>
<!---->
```

# Mutations
```
INSERT button1
UPDATE button1/#text " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<!---->
```

# Mutations
```
INSERT button2
UPDATE button2/#text " " => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<!---->
```

# Mutations
```
INSERT button3
UPDATE button3/#text " " => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<button>
  4
</button>
<!---->
```

# Mutations
```
INSERT button4
UPDATE button4/#text " " => "4"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  0
</button>
<button>
  1
</button>
<button>
  2
</button>
<button>
  3
</button>
<button>
  4
</button>
<button>
  5
</button>
<!---->
```

# Mutations
```
INSERT button5
UPDATE button5/#text " " => "5"
```