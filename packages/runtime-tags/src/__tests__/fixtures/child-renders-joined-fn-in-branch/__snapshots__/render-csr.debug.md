# Render `{"title":"a"}`
```html
<p>
  la
</p>
<span>
  x
</span>
<button>
  toggle
</button>
```

# Update `{"title":"b"}`
```html
<p>
  lb
</p>
<span>
  x
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "la" => "lb"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  Ub
</p>
<span>
  x
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "lb" => "Ub"
```

# Update `{"title":"c"}`
```html
<p>
  Uc
</p>
<span>
  x
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "Ub" => "Uc"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  lc
</p>
<span>
  x
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "Uc" => "lc"
```

# Update `{"title":"d"}`
```html
<p>
  ld
</p>
<span>
  x
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "lc" => "ld"
```
