# Render `{"title":"a"}`
```html
<output
  data-kind="function"
>
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
<output
  data-kind="function"
>
  Ua
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "la" => "Ua"
UPDATE: output[data-kind] "function" => "function"
```

# Update `{"title":"b"}`
```html
<output
  data-kind="function"
>
  Ub
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "Ua" => "Ub"
UPDATE: output[data-kind] "function" => "function"
```

# Update
```js
document.querySelector("button").click();
```
```html
<output
  data-kind="function"
>
  lb
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "Ub" => "lb"
UPDATE: output[data-kind] "function" => "function"
```

# Update `{"title":"c"}`
```html
<output
  data-kind="function"
>
  lc
</output>
<button>
  toggle
</button>
```
## Change
```
UPDATE: output::text "lb" => "lc"
UPDATE: output[data-kind] "function" => "function"
```

# Update `{"title":"c"}`
