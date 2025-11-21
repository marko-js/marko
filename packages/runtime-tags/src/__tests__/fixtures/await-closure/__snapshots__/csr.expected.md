# Render
```html
<button>
  1
</button>
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT button, #comment0, #text, #comment1, #comment2
```

# Render ASYNC
```html
<button>
  1
</button>
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

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
loading...
<!---->
```

# Mutations
```
UPDATE button/#text "1" => "2"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
</button>
loading...
<!---->
```

# Mutations
```
UPDATE button/#text "2" => "3"
```

# Render ASYNC
```html
<button>
  3
</button>
<!---->
<span>
  3
</span>
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, span, #comment1
REMOVE #text after #comment1
UPDATE span/#text " " => "3"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
</button>
<!---->
<span>
  4
</span>
<!---->
<!---->
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE span/#text "3" => "4"
```