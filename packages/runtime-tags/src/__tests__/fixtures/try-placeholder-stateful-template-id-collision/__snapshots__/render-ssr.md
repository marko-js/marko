# Render
```html
<button>
  clicks 0
</button>
<button
  class="swap"
>
  swap
</button>
<button
  class="n1"
>
  placeholder 0 0
</button>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  clicks 1
</button>
<button
  class="swap"
>
  swap
</button>
<button
  class="n1"
>
  placeholder 1 0
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@7 "0" => "1"
UPDATE: .n1::text@0 "placeholder 0" => "placeholder 1"
```

# Update
```html
<button>
  clicks 1
</button>
<button
  class="swap"
>
  swap
</button>
<button
  class="n5"
>
  body 1 0
</button>
```
## Change
```
INSERT: .n5::text("body 1")
INSERT: .n5::text@0 + ::text(" ")
INSERT: .n5::text@6 + ::text("0")
REMOVE: button
INSERT: .swap + .n5
UPDATE: .n5::text@0 "body 0" => "body 1"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  clicks 2
</button>
<button
  class="swap"
>
  swap
</button>
<button
  class="n5"
>
  body 2 0
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@7 "1" => "2"
UPDATE: .n5::text@0 "body 1" => "body 2"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button>
  clicks 2
</button>
<button
  class="swap"
>
  swap
</button>
<div
  class="n2"
>
  body 2
</div>
```
## Change
```
INSERT: .swap + .n2
REMOVE: .n2 + button
UPDATE: .n2::text " " => "body 2"
```
