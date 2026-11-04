# Render `{"a":"a1","x":"x1"}`
```html
<p>
  a1x1
</p>
<button>
  toggle
</button>
```

# Update `{"a":"a2","x":"x2"}`
```html
<p>
  a2x2
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "a1x1" => "a2x2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: p
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a2x2
</p>
<button>
  toggle
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "a2x2"
```

# Update `{"a":"a3","x":"x3"}`
```html
<p>
  a3x3
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "a2x2" => "a3x3"
```
