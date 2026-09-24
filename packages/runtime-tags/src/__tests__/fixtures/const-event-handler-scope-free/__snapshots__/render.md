# Render
```html
<a
  href="#x"
>
  link
</a>
<button
  id="mark"
>
  mark
</button>
<button
  id="inc"
>
  0
</button>
<p
  id="t"
>
  unmarked
</p>
```

# Update
```js
document.querySelector(selector).click();
```

# Update
```js
document.querySelector(selector).click();
```
```html
<a
  href="#x"
>
  link
</a>
<button
  id="mark"
>
  mark
</button>
<button
  id="inc"
>
  1
</button>
<p
  id="t"
>
  unmarked
</p>
```
## Change
```
UPDATE: #inc::text "0" => "1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<a
  href="#x"
>
  link
</a>
<button
  id="mark"
>
  mark
</button>
<button
  id="inc"
>
  1
</button>
<p
  id="t"
>
  marked
</p>
```
## Change
```
REMOVE: #t::text("unmarked")
INSERT: #t::text("marked")
```
