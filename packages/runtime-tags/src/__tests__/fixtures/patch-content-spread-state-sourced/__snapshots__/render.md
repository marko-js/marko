# Render `{"kind":"a","note":"x"}`
```html
<div
  class="a"
  data-count="0"
>
  <em>
    x
  </em>
</div>
<button>
  +
</button>
```

# Update `{"kind":"b","note":"y"}`
```html
<div
  class="b"
  data-count="0"
>
  <em>
    y
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: .b[class] "a" => "b"
UPDATE: .b > em::text "x" => "y"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="b"
  data-count="1"
>
  <em>
    y
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: .b[data-count] "0" => "1"
```

# Update `{"kind":"c","note":"z"}`
```html
<div
  class="c"
  data-count="1"
>
  <em>
    z
  </em>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: .c[class] "b" => "c"
UPDATE: .c > em::text "y" => "z"
```
