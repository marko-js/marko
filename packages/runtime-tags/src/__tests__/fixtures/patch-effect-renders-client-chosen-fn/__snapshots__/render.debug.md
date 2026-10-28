# Render `{"title":"a"}`
```html
<output>
  la
</output>
<button>
  toggle
</button>
```
## Console
```
LOG "run" "la"
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
## Console
```
LOG "run" "Ua"
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
## Console
```
LOG "run" "Ub"
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
## Console
```
LOG "run" "lb"
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
## Console
```
LOG "run" "lc"
```
