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
  Spread 0
</div>
<div
  id="passthrough"
>
  Passthrough 0
</div>
<div
  id="thing"
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
  Spread 1
</div>
<div
  id="passthrough"
>
  Passthrough 1
</div>
<div
  id="thing"
>
  <button
    class="thing"
  >
    thing 0
  </button>
</div>
```
## Change
```
REMOVE: #spread > :is(::text("Spread "), ::text("0"))
REMOVE: #passthrough::text@12 + ::text("Passthrough ")
REMOVE: #passthrough::text@12 + ::text("0")
REMOVE: #thing > .thing
UPDATE: #class::text "0" => "1"
INSERT: #thing > .thing
INSERT: .thing::text("thing ")
INSERT: .thing::text@0 + ::text("0")
INSERT: #passthrough::text("Passthrough ")
INSERT: #passthrough::text@0 + ::text("1")
INSERT: #spread::text("Spread ")
INSERT: #spread::text@0 + ::text("1")
```

# Update
```js
(document.querySelector(".thing")).click();
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
  Spread 1
</div>
<div
  id="passthrough"
>
  Passthrough 1
</div>
<div
  id="thing"
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
  Spread 2
</div>
<div
  id="passthrough"
>
  Passthrough 2
</div>
<div
  id="thing"
>
  <button
    class="thing"
  >
    thing 0
  </button>
</div>
```
## Change
```
REMOVE: #spread > :is(::text("Spread "), ::text("1"))
REMOVE: #passthrough::text@12 + ::text("Passthrough ")
REMOVE: #passthrough::text@12 + ::text("1")
REMOVE: #thing > .thing
UPDATE: #class::text "1" => "2"
INSERT: #thing > .thing
INSERT: .thing::text("thing ")
INSERT: .thing::text@0 + ::text("0")
INSERT: #passthrough::text("Passthrough ")
INSERT: #passthrough::text@0 + ::text("2")
INSERT: #spread::text("Spread ")
INSERT: #spread::text@0 + ::text("2")
```
