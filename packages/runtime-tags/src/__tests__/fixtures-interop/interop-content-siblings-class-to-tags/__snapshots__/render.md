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
UPDATE: #class::text "0" => "1"
UPDATE: #passthrough::text@12 "0" => "1"
UPDATE: #spread::text@7 "0" => "1"
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
    thing 1
  </button>
</div>
```
## Change
```
UPDATE: #class::text "1" => "2"
UPDATE: #passthrough::text@12 "1" => "2"
UPDATE: #spread::text@7 "1" => "2"
```
