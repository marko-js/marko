# Render `{"label":"a"}`
```html
<button>
  clear
</button>
<button
  class="inc"
>
  inc
</button>
<span>
  a:0
</span>
<button
  class="inc"
>
  inc
</button>
<span>
  a:0
</span>
```

# Update
```js
(document.querySelector(".inc")).click();
```
```html
<button>
  clear
</button>
<button
  class="inc"
>
  inc
</button>
<span>
  a:1
</span>
<button
  class="inc"
>
  inc
</button>
<span>
  a:0
</span>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@2 "0" => "1"
```
