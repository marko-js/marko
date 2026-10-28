# Render `{"v":"a","promise":{"value":"hi"}}`
```html
<button>
  hide
</button>
```

# Update
```html
<button>
  hide
</button>
<em>
  hi
</em>
```
## Change
```
INSERT: button + em
INSERT: em::text("hi")
```
