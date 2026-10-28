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
UPDATE: em::text " " => "hi"
```

# Update `{"v":"a","promise":{"value":"ho"}}`

# Update
```html
<button>
  hide
</button>
```
## Change
```
REMOVE: button + em
```

# Update
```html
<button>
  hide
</button>
<em>
  ho
</em>
```
## Change
```
INSERT: button + em
```
