# Render
```html
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, #text, #comment2, #comment3
```

# Render ASYNC
```html
<!---->
loading...
<!---->
```

# Mutations
```
INSERT #text
REMOVE #document-fragment/#comment0 after #text
REMOVE #document-fragment/#text after #text
REMOVE #document-fragment/#comment1 after #text
```

# Render ASYNC
```html
<!---->
<!---->
<button>
  1
</button>
<span>
  1
</span>
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment1, button, #text, #comment2, #comment3
REMOVE #text after #comment3
UPDATE button/#text " " => "1"
INSERT span
REMOVE #text after span
UPDATE span/#text " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<button>
  2
</button>
<span>
  2
</span>
<!---->
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE span/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<button>
  3
</button>
<span>
  3
</span>
<!---->
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE span/#text "2" => "3"
```