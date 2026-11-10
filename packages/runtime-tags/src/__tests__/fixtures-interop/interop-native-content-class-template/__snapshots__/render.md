# Render
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="tags"
>
  0
</button>
<button
  class="thing"
>
  thing 0
</button>
<div
  data-n="0"
>
  <button
    class="thing"
  >
    thing 0
  </button>
</div>
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="tags"
>
  0
</button>
<button
  class="thing"
>
  thing 0
</button>
<div
  data-n="0"
>
  <button
    class="thing"
  >
    thing 1
  </button>
</div>
```
## Change
```
UPDATE: div > button::text@6 "0" => "1"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="tags"
>
  1
</button>
<button
  class="thing"
>
  thing 0
</button>
<div
  data-n="1"
>
  <button
    class="thing"
  >
    thing 1
  </button>
</div>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: div[data-n] "0" => "1"
```

# Update
```js
(document.querySelector(selector)).click();
```
```html
<button
  id="toggle"
>
  toggle
</button>
<button
  id="tags"
>
  1
</button>
<button
  class="thing"
>
  thing 0
</button>
<div
  data-n="1"
>
  <button
    class="thing"
  >
    thing 1
  </button>
</div>
<section>
  <button
    class="thing"
  >
    thing 0
  </button>
</section>
```
## Change
```
INSERT: div + section
INSERT: section > button
INSERT: section > button::text("thing ")
INSERT: section > button::text@0 + ::text("0")
```
