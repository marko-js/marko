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
REMOVE: #spread > :is(::text("Hello "), ::text("0"), .thing)
UPDATE: #class::text "0" => "1"
INSERT: #spread::text("Hello ")
INSERT: #spread::text@0 + ::text("1")
INSERT: #spread::text@6 + .thing
INSERT: .thing::text("thing ")
INSERT: .thing::text@0 + ::text("0")
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
    thing 0
  </button>
</div>
```
## Change
```
REMOVE: #spread > :is(::text("Hello "), ::text("1"), .thing)
UPDATE: #class::text "1" => "2"
INSERT: #spread::text("Hello ")
INSERT: #spread::text@0 + ::text("2")
INSERT: #spread::text@6 + .thing
INSERT: .thing::text("thing ")
INSERT: .thing::text@0 + ::text("0")
```
