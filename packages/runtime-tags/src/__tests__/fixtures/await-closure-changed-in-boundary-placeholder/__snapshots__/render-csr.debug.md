# Render
```html
<button>
  inc
</button>
<span>
  1
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<span>
  2
</span>
```
## Change
```
UPDATE: span::text "1" => "2"
```

# Update
```html
<button>
  inc
</button>
loading...
```
## Change
```
INSERT: button + ::text("loading...")
REMOVE: ::text + span
```

# Update
```html
<button>
  inc
</button>
<span>
  2
</span>
<b>
  2
</b>
```
## Change
```
INSERT: button + :is(span, b)
REMOVE: b + ::text("loading...")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<span>
  3
</span>
<b>
  3
</b>
```
## Change
```
UPDATE: span::text "2" => "3"
UPDATE: b::text "2" => "3"
```
