# Render `{"title":"a"}`
```html
<p>
  la
</p>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  Ua
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "la" => "Ua"
```

# Update `{"title":"b"}`
```html
<p>
  Ub
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "Ua" => "Ub"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  lb
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "Ub" => "lb"
```

# Update `{"title":"c"}`
```html
<p>
  lc
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "lb" => "lc"
```

# Update `{"title":"c"}`
