# Render `{"title":"one","items":{}}`
```html
<p>
  one none
</p>
<button>
  go
</button>
```

# Update `{"title":"two","items":{}}`
```html
<p>
  two none
</p>
<button>
  go
</button>
```
## Change
```
UPDATE: p::text@0 "one" => "two"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  two c,d
</p>
<button>
  go
</button>
```
## Change
```
UPDATE: p::text@4 "none" => "c,d"
```
