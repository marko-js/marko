# Render `{"$global":{"data":{"items":["a","b"]},"serializedGlobals":{"data":true}}}`
```html
<button
  class="count"
>
  0
</button>
<button
  class="open"
>
  open
</button>
<p>
  A2/0
</p>
<p>
  B2/0
</p>
```

# Update
```js
document.querySelector(sel).click();
```
```html
<button
  class="count"
>
  1
</button>
<button
  class="open"
>
  open
</button>
<p>
  A2/1
</p>
<p>
  B2/1
</p>
```
## Change
```
UPDATE: .count::text "0" => "1"
UPDATE: p:nth-of-type(1)::text@3 "0" => "1"
UPDATE: p:nth-of-type(2)::text@3 "0" => "1"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<button
  class="count"
>
  1
</button>
<button
  class="open"
>
  open
</button>
<p
  class="summary"
>
  {"n":2}
</p>
<p
  class="total"
>
  2
</p>
<p>
  A2/1
</p>
<p>
  B2/1
</p>
```
## Change
```
INSERT: .open + :is(.summary, .total)
UPDATE: .summary::text " " => "{\"n\":2}"
UPDATE: .total::text " " => "2"
```

# Update `{"$global":{"data":{"items":["a","b","c"]},"serializedGlobals":{"data":true}}}`
```html
<button
  class="count"
>
  1
</button>
<button
  class="open"
>
  open
</button>
<p
  class="summary"
>
  {"n":3}
</p>
<p
  class="total"
>
  3
</p>
<p>
  A3/1
</p>
<p>
  B3/1
</p>
<p>
  C3/1
</p>
```
## Change
```
UPDATE: p:nth-of-type(3)::text@0 "A2" => "A3"
UPDATE: p:nth-of-type(4)::text@0 "B2" => "B3"
INSERT: p:nth-of-type(4) + p
UPDATE: .summary::text "{\"n\":2}" => "{\"n\":3}"
UPDATE: .total::text "2" => "3"
UPDATE: p:nth-of-type(5)::text@3 "" => "1"
```

# Update
```js
document.querySelector(sel).click();
```
```html
<button
  class="count"
>
  2
</button>
<button
  class="open"
>
  open
</button>
<p
  class="summary"
>
  {"n":3}
</p>
<p
  class="total"
>
  3
</p>
<p>
  A3/2
</p>
<p>
  B3/2
</p>
<p>
  C3/2
</p>
```
## Change
```
UPDATE: .count::text "1" => "2"
UPDATE: p:nth-of-type(3)::text@3 "1" => "2"
UPDATE: p:nth-of-type(4)::text@3 "1" => "2"
UPDATE: p:nth-of-type(5)::text@3 "1" => "2"
```
