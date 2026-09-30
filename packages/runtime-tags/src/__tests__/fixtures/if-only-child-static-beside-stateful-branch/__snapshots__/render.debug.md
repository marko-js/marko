# Render `{"show":true}`
```html
<div
  class="c0"
>
  <span>
    0
  </span>
</div>
<button>
  inc
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  class="c1"
>
  <span>
    1
  </span>
</div>
0
<button>
  inc
</button>
```
## Change
```
UPDATE: .c1[class] "c0" => "c1"
INSERT: .c1 + ::text("0")
UPDATE: .c1 > span::text "0" => "1"
UPDATE: ::text " " => "0"
```
