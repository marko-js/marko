# Render `{"label":"a"}`
```html
<div>
  <button>
    read
  </button>
</div>
<p />
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    read
  </button>
</div>
<p>
  a
</p>
```
## Change
```
UPDATE: p::text "" => "a"
```

# Update `{"label":"b"}`

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <button>
    read
  </button>
</div>
<p>
  b
</p>
```
## Change
```
UPDATE: p::text "a" => "b"
```
