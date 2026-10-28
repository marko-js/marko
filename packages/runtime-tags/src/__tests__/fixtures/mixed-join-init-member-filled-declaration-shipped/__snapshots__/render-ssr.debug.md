# Render `{"show":true,"x":"a"}`
```html
<div>
  <em>
    a
  </em>
</div>
<span>
  <i>
    0:a
  </i>
</span>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    a
  </em>
</div>
<span>
  <i>
    1:a
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "0:a" => "1:a"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  <em>
    a
  </em>
</div>
<span>
  <i>
    2:a
  </i>
</span>
<button>
  +
</button>
```
## Change
```
UPDATE: span > i::text "1:a" => "2:a"
```
