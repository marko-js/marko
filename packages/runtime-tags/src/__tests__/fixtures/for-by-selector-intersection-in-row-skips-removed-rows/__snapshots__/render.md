# Render
```html
<span
  class="on"
>
  1
</span>
<span>
  2
</span>
<span>
  3
</span>
<button>
  go
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<span
  class=""
>
  1
</span>
<button>
  go
</button>
```
## Change
```
REMOVE: span + span
REMOVE: span + span
UPDATE: span[class] "on" => ""
```
