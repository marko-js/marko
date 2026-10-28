# Render `{"title":"a"}`
```html
<output>
  la
</output>
<button>
  toggle
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  Ua
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "la" => "Ua"
```

# Update `{"title":"b"}`
```html
<output>
  Ub
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "Ua" => "Ub"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output>
  lb
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "Ub" => "lb"
```

# Update `{"title":"c"}`
```html
<output>
  lc
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "lb" => "lc"
```

# Update `{"title":"c"}`
