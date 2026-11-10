# Render
```html
<button
  id="class"
>
  0
</button>
<section
  id="items"
>
  <div
    class="first"
  >
    One 0
  </div>
  <div>
    Two
  </div>
</section>
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  1
</button>
<section
  id="items"
>
  <div
    class="first"
  >
    One 1
  </div>
  <div>
    Two
  </div>
</section>
```
## Change
```
UPDATE: #class::text "0" => "1"
UPDATE: .first::text@4 "0" => "1"
```

# Update
```js
(document.querySelector("#class")).click();
```
```html
<button
  id="class"
>
  2
</button>
<section
  id="items"
>
  <div
    class="first"
  >
    One 2
  </div>
  <div>
    Two
  </div>
</section>
```
## Change
```
UPDATE: #class::text "1" => "2"
UPDATE: .first::text@4 "1" => "2"
```
