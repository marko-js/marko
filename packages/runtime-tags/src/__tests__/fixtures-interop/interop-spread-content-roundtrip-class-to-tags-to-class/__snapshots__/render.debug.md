# Render
```html
<button
  id="class"
>
  0
</button>
<p
  id="roundtrip"
>
  Hello 0
  <button
    class="thing"
  >
    thing 0
  </button>
</p>
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
<p
  id="roundtrip"
>
  Hello 1
  <button
    class="thing"
  >
    thing 0
  </button>
</p>
```
## Change
```
UPDATE: #class::text "0" => "1"
UPDATE: #roundtrip::text@6 "0" => "1"
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
<p
  id="roundtrip"
>
  Hello 1
  <button
    class="thing"
  >
    thing 1
  </button>
</p>
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
<p
  id="roundtrip"
>
  Hello 2
  <button
    class="thing"
  >
    thing 1
  </button>
</p>
```
## Change
```
UPDATE: #class::text "1" => "2"
UPDATE: #roundtrip::text@6 "1" => "2"
```
