# Render
```html
<div
  id="cM_0"
/>
<div
  id="cM_1"
/>
```

# Mutations
```
INSERT div0, div1
```

# Render ASYNC
```html
<div
  id="cM_0"
>
  <div>
    cM_0
  </div>
</div>
<div
  id="cM_1"
>
  <div>
    cM_1
  </div>
</div>
```

# Mutations
```
INSERT div0/div
INSERT div1/div
UPDATE div0/div/#text " " => "cM_0"
UPDATE div1/div/#text " " => "cM_1"
```