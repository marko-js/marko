# Render `{"title":"a"}`
```html
<p>
  la
</p>
<button>
  toggle
</button>
```
## Console
```
LOG "run" "la"
```

# Update `{"title":"b"}`
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
UPDATE: p::text "la" => "lb"
```
## Console
```
LOG "run" "lb"
```

# Update
```js
document.querySelector("button").click();
```
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
UPDATE: p::text "lb" => "Ub"
```
## Console
```
LOG "run" "Ub"
```

# Update `{"title":"c"}`
```html
<p>
  Uc
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "Ub" => "Uc"
```
## Console
```
LOG "run" "Uc"
```

# Update
```js
document.querySelector("button").click();
```
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
UPDATE: p::text "Uc" => "lc"
```
## Console
```
LOG "run" "lc"
```

# Update `{"title":"d"}`
```html
<p>
  ld
</p>
<button>
  toggle
</button>
```
## Change
```
UPDATE: p::text "lc" => "ld"
```
## Console
```
LOG "run" "ld"
```
