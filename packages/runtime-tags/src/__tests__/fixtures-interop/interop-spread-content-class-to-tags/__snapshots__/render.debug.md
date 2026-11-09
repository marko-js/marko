# Render
```html
<button
  id="class"
>
  0
</button>
<div
  id="spread"
>
  Hello 0
  <button
    class="thing"
  >
    thing 0
  </button>
</div>
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
<div
  id="spread"
>
  Hello 1
  <button
    class="thing"
  >
    thing 0
  </button>
</div>
```
## Change
```
UPDATE: #class::text "0" => "1"
UPDATE: #spread::text@6 "0" => "1"
```

# Update
```js
(document.querySelector(".thing"))?.click();
```
```html
<button
  id="class"
>
  1
</button>
<div
  id="spread"
>
  Hello 1
  <button
    class="thing"
  >
    thing 1
  </button>
</div>
```
## Change
```
UPDATE: .thing::text@6 "0" => "1"
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
<div
  id="spread"
>
  Hello 2
  <button
    class="thing"
  >
    thing 1
  </button>
</div>
```
## Change
```
UPDATE: #class::text "1" => "2"
UPDATE: #spread::text@6 "1" => "2"
```
