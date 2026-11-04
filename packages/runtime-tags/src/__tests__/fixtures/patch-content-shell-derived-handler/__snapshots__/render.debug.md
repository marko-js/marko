# Render `{"show":false,"label":"a"}`
```html
<p />
```

# Update `{"show":true,"label":"b"}`
```html
<div>
  <button>
    show
  </button>
</div>
<p />
```
## Change
```
INSERT: div
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    show
  </button>
</div>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "" => "b"
```

# Update `{"show":true,"label":"c"}`

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    show
  </button>
</div>
<p>
  c
</p>
```
## Change
```
UPDATE: p::text "b" => "c"
```
