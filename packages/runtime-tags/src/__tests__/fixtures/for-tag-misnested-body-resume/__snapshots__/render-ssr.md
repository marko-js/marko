# Render
```html
<div>
  1
</div>
<div>
  2
</div>
<table />
<button
  class="count"
>
  0
</button>
<button
  class="clear"
>
  clear
</button>
```

# Update
```js
document.querySelector(".count").click();
```
```html
<div>
  1
</div>
<div>
  2
</div>
<table />
<button
  class="count"
>
  1
</button>
<button
  class="clear"
>
  clear
</button>
```
## Change
```
UPDATE: .count::text "0" => "1"
```
