# Render
```html
<div
  id="outside"
>
  0
</div>
<!---->
<!---->
<pre />
```

# Mutations
```
INSERT div, #comment0, #text, #comment1, pre
```

# Render ASYNC
```html
<div
  id="outside"
>
  0
</div>
loading...
<pre />
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
<div
  id="outside"
>
  0
</div>
<!---->
<div
  id="inside"
>
  0
</div>
<!---->
<pre>
  
effect ran value=0
setup effect ran
</pre>
```

# Mutations
```
INSERT #comment0, div1, #comment1
REMOVE #text after #comment1
INSERT #text
REMOVE #text in pre
INSERT pre/#text
```

# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
<!---->
<div
  id="inside"
>
  0
</div>
<!---->
<pre>
  
effect ran value=0
setup effect ran
</pre>
```

# Mutations
```
UPDATE div0/#text "0" => "1"
```

# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
loading...
<pre>
  
effect ran value=0
setup effect ran
</pre>
```

# Mutations
```
INSERT #text
REMOVE #document-fragment/#comment0 after #text
REMOVE #document-fragment/div after #text
REMOVE #document-fragment/#comment1 after #text
```

# Render ASYNC
```html
<div
  id="outside"
>
  1
</div>
<!---->
<div
  id="inside"
>
  1
</div>
<!---->
<pre>
  
effect ran value=0
setup effect ran
effect ran value=1
</pre>
```

# Mutations
```
INSERT #comment0, div1, #comment1
REMOVE #text after #comment1
REMOVE #text in pre
INSERT pre/#text
```