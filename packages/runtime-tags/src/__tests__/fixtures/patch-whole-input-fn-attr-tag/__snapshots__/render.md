# Render `{"label":"a"}`
```html
<button>
  read
</button>
<p />
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  read
</button>
<p>
  a:a
</p>
```
## Change
```
UPDATE: p::text "" => "a:a"
```

# Update `{"label":"b"}`

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  read
</button>
<p>
  b:b
</p>
```
## Change
```
UPDATE: p::text "a:a" => "b:b"
```
