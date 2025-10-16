# Render
```html
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment0, #comment1, #text0, #comment2, #comment3, #text1, #comment4, #comment5, #text2, #comment6, #comment7
```

# Render ASYNC
```html
<!---->
<!---->
<!---->
Rejected B
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #text1
REMOVE #comment after #text1
REMOVE #text after #text1
REMOVE #comment after #text1
```

# Render ASYNC
```html
<!---->
<!---->
<div>
  Resolved A: A Value
</div>
<!---->
Rejected B
<!---->
<div>
  Resolved C: C Value
</div>
<button>
  Before
</button>
<!---->
<!---->
```

# Mutations
```
INSERT div0
REMOVE #text after div0
UPDATE div0/#text1 "" => "A Value"
INSERT div1, button
REMOVE #text after button
UPDATE div1/#text1 "" => "C Value"
```

# Render
```js
container.querySelector("button").click();
```
```html
<!---->
<!---->
<div>
  Resolved A: A Value
</div>
<!---->
Rejected B
<!---->
<div>
  Resolved C: C Value
</div>
<button>
  After
</button>
<!---->
<!---->
```

# Mutations
```
REMOVE #text in button
INSERT button/#text
```