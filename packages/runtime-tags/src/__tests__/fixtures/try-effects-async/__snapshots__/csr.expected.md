# Render
```html
<button>
  inc
</button>
<div />
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT button, div, #comment0, #text, #comment1, #comment2
```

# Render ASYNC
```html
<button>
  inc
</button>
<div />
LOADING...
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
<button>
  inc
</button>
<div>
  0
</div>
<!---->
Async: 0
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #text0, #text1, #comment1
REMOVE #text after #comment1
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  0
</div>
<!---->
Async: 0
<!---->
<!---->
```


# Render ASYNC
```html
<button>
  inc
</button>
<div>
  0
</div>
LOADING...
<!---->
```

# Mutations
```
INSERT #text
REMOVE #document-fragment/#comment0 after #text
REMOVE #document-fragment/#text0 after #text
REMOVE #document-fragment/#text1 after #text
REMOVE #document-fragment/#comment1 after #text
```

# Render ASYNC
```html
<button>
  inc
</button>
<div>
  1
</div>
<!---->
Async: 1
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #text0, #text1, #comment1
REMOVE #text after #comment1
REMOVE #text in div
INSERT #text
REMOVE #text in div
INSERT div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  1
</div>
<!---->
Async: 1
<!---->
<!---->
```


# Render ASYNC
```html
<button>
  inc
</button>
<div>
  1
</div>
LOADING...
<!---->
```

# Mutations
```
INSERT #text
REMOVE #document-fragment/#comment0 after #text
REMOVE #document-fragment/#text0 after #text
REMOVE #document-fragment/#text1 after #text
REMOVE #document-fragment/#comment1 after #text
```

# Render ASYNC
```html
<button>
  inc
</button>
<div>
  1
</div>
Error: ERROR!
<!---->
```

# Mutations
```
INSERT #text
REMOVE #text after #text
UPDATE #text " " => "Error: ERROR!"
```