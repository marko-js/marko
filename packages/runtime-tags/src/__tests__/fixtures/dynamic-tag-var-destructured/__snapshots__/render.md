# Render
```html
<span>
  child:1
</span>
<button
  class="inc"
>
  inc
</button>
<div>
  1
</div>
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<span>
  child:2
</span>
<button
  class="inc"
>
  inc
</button>
<div>
  2
</div>
```
## Change
```
UPDATE: div::text "1" => "2"
UPDATE: span::text@6 "1" => "2"
```

# Update
```js
document.querySelector("button.inc").click();
```
```html
<span>
  child:3
</span>
<button
  class="inc"
>
  inc
</button>
<div>
  3
</div>
```
## Change
```
UPDATE: div::text "2" => "3"
UPDATE: span::text@6 "2" => "3"
```
