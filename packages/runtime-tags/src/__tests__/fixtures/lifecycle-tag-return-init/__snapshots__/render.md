# Render
```html
<div
  id="ref"
/>
<button
  id="increment"
>
  Increment
</button>
```

# Update `click("#increment")`
```html
<div
  id="ref"
>
  {"x":1,"w":1,"y":0,"u":5}
</div>
<button
  id="increment"
>
  Increment
</button>
```
## Change
```
INSERT: #ref::text("{\"x\":1,\"w\":1,\"y\":0,\"u\":5}")
```
