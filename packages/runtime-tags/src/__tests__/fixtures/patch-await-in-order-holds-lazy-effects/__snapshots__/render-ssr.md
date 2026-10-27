# Render `{"label":"a"}`
```html
<button>
  0
</button>
<p>
  a
</p>
```

# Update
```js
document.querySelector("button")?.click();
```

# Update
```html
<button>
  0
</button>
<p>
  a
</p>
<div>
  a
</div>
```
## Change
```
INSERT: p + div
INSERT: div::text("a")
```
## Console
```
LOG "child effect"
```

# Update
```js
document.querySelector("button")?.click();
```
```html
<button>
  1
</button>
<p>
  a
</p>
<div>
  a
</div>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"label":"b"}`
```html
<button>
  1
</button>
<p>
  b
</p>
<div>
  b
</div>
```
## Change
```
UPDATE: p::text "a" => "b"
REMOVE: div
INSERT: p + div
```

# Update
```js
document.querySelector("button")?.click();
```
```html
<button>
  2
</button>
<p>
  b
</p>
<div>
  b
</div>
```
## Change
```
UPDATE: button::text "1" => "2"
```
