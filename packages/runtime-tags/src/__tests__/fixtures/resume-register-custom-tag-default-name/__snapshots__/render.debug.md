# Render
```html
<button
  id="inc"
>
  0
</button>
<div
  class="box"
>
  box body
</div>
<section
  class="box"
>
  box body
</section>
<button
  id="toggle"
>
  toggle
</button>
```

# Update
```js
document.querySelector("#inc").click();
```
```html
<button
  id="inc"
>
  1
</button>
<div
  class="box"
>
  box body
</div>
<section
  class="box"
>
  box body
</section>
<button
  id="toggle"
>
  toggle
</button>
```
## Change
```
UPDATE: #inc::text "0" => "1"
```

# Update
```js
document.querySelector("#toggle").click();
```
```html
<button
  id="inc"
>
  1
</button>
<div
  class="box"
>
  box body
</div>
<section
  class="box"
>
  box body
</section>
<button
  id="toggle"
>
  toggle
</button>
box body
```
## Change
```
INSERT: #toggle + ::text("box body")
```
