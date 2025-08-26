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
INSERT #comment0, #text0, #text1, #comment1
INSERT button
INSERT button/#text0
INSERT button/#text4
INSERT button/#text1
INSERT button/#text3
INSERT button/#text2
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  1
</button>
<!---->
```

# Mutations
```
UPDATE button/#text2 "0" => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  2
</button>
<!---->
```

# Mutations
```
UPDATE button/#text2 "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<button>
  3
</button>
<!---->
```

# Mutations
```
UPDATE button/#text2 "2" => "3"
```