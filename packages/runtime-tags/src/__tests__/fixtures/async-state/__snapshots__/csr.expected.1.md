# Render
```html
<button>
  inc
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
  inc
</button>
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
<!---->
0
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #text, #comment1
REMOVE #text after #comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<!---->
0
<!---->
<!---->
```


# Render ASYNC
```html
<button>
  inc
</button>
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
<!---->
1
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #text, #comment1
REMOVE #text after #comment1
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<!---->
1
<!---->
<!---->
```


# Render ASYNC
```html
<button>
  inc
</button>
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
<!---->
2
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #text, #comment1
REMOVE #text after #comment1
```