# Render `{"title":"a"}`
```html
<p>
  la
</p>
<button>
  more
</button>
```

# Update `{"title":"b"}`
```html
<p>
  lb
</p>
<button>
  more
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

# Update `{"title":"c"}`
```html
<p>
  lc
</p>
<button>
  more
</button>
```
## Change
```
UPDATE: p::text "lb" => "lc"
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"title":"d"}`
```html
<p>
  ld
</p>
<button>
  more
</button>
```
## Change
```
UPDATE: p::text "lc" => "ld"
```
