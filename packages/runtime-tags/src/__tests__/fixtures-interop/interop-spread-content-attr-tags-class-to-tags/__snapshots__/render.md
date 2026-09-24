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
REMOVE: .first > :is(::text("One "), ::text("0"))
REMOVE: #items > div:nth-of-type(2)::text("Two")
UPDATE: #class::text "0" => "1"
INSERT: .first::text("One ")
INSERT: .first::text@0 + ::text("1")
INSERT: #items > div:nth-of-type(2)::text("Two")
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
REMOVE: .first > :is(::text("One "), ::text("1"))
REMOVE: #items > div:nth-of-type(2)::text("Two")
UPDATE: #class::text "1" => "2"
INSERT: .first::text("One ")
INSERT: .first::text@0 + ::text("2")
INSERT: #items > div:nth-of-type(2)::text("Two")
```
