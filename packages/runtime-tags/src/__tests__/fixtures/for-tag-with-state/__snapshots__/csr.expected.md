# Render
```html
<!---->
<div>
  0: 1
</div>
<div>
  1: 2
</div>
<div>
  2: 3
</div>
<div>
  0: 1
</div>
<div>
  1: 2
</div>
<div>
  2: 3
</div>
<!---->
```

# Mutations
```
INSERT #comment0, div0, div1, div2, div3, div4, div5, #comment1
```

# Render ASYNC
```html
<!---->
<div>
  0: 1
</div>
<div>
  1: 2
</div>
<div>
  2: 3
</div>
<div>
  0: 1
</div>
<div>
  1: 2
</div>
<!---->
```

# Mutations
```
REMOVE div after div4
```