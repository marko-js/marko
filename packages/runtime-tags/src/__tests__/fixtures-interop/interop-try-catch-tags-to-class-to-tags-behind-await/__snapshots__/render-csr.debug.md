# Render
```html
<div
  id="class"
/>
```

# Update
```html
<div
  id="class"
>
  <div
    id="caught"
  >
    caught
  </div>
</div>
```
## Change
```
INSERT: #class > #caught
```

# Update
```html
<div
  id="slow"
>
  slow
</div>
<div
  id="class"
>
  <div
    id="caught"
  >
    caught
  </div>
</div>
```
## Change
```
INSERT: #slow
UPDATE: #slow::text " " => "slow"
```
