# Render
```html
<button />
<div
  id="one"
>
  Fail
</div>
<div
  id="two"
>
  Fail
</div>
<!---->
<!---->
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT button, div0, div1, #comment0, #comment1, #text0, #text1, #comment2, #comment3, #comment4
```

# Render ASYNC
```html
<button />
<div
  id="one"
>
  Fail
</div>
<div
  id="two"
>
  Fail
</div>
<!---->
loading...
<!---->
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
<button />
<div
  id="one"
>
  Fail
</div>
<div
  id="two"
>
  Fail
</div>
<!---->
<!---->
1
<!---->
<!---->
<!---->
```

# Mutations
```
INSERT #comment1, #text0, #text1, #comment2
REMOVE #text after #comment2
UPDATE #text0 " " => "1"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button />
<div
  id="one"
>
  Pass
</div>
<div
  id="two"
>
  Pass
</div>
<!---->
```

# Mutations
```
INSERT #text
REMOVE #comment after #text
REMOVE #comment after #text
REMOVE #text after #text
REMOVE #text after #text
REMOVE #comment after #text
REMOVE #comment after #text
REMOVE #text in div0
INSERT div0/#text
REMOVE #text in div1
INSERT div1/#text
```