# Render `{"show":false}`

# Update `{"show":true,"a":"a"}`
```html
<div>
  a
</div>
<button>
  t
</button>
```
## Change
```
INSERT: div, button
UPDATE: div::text " " => "a"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  a
</div>
<p>
  const
</p>
<button>
  t
</button>
```
## Change
```
INSERT: div + p
UPDATE: p::text " " => "const"
```

# Update `{"show":true,"a":"b"}`
```html
<div>
  b
</div>
<p>
  const
</p>
<button>
  t
</button>
```
## Change
```
UPDATE: div::text "a" => "b"
```
