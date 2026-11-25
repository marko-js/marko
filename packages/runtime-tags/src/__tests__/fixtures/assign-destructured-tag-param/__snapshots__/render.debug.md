# Render
```html
<button
  class="counter"
>
  1
</button>
<button
  class="amount"
>
  10
</button>
<button
  class="side"
>
  100
</button>
<button
  class="label"
>
  a function
</button>
<div>
  1 10 100 a
</div>
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="counter"
>
  2
</button>
<button
  class="amount"
>
  10
</button>
<button
  class="side"
>
  100
</button>
<button
  class="label"
>
  a function
</button>
<div>
  2 10 100 a
</div>
```
## Change
```
UPDATE: .counter::text "1" => "2"
UPDATE: div::text@0 "1" => "2"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="counter"
>
  2
</button>
<button
  class="amount"
>
  15
</button>
<button
  class="side"
>
  100
</button>
<button
  class="label"
>
  a function
</button>
<div>
  2 15 100 a
</div>
```
## Change
```
UPDATE: .amount::text "10" => "15"
UPDATE: div::text@2 "10" => "15"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="counter"
>
  2
</button>
<button
  class="amount"
>
  15
</button>
<button
  class="side"
>
  99
</button>
<button
  class="label"
>
  a function
</button>
<div>
  2 15 99 a
</div>
```
## Change
```
UPDATE: .side::text "100" => "99"
UPDATE: div::text@5 "100" => "99"
```

# Update
```js
document.querySelector(selector).click();
```
```html
<button
  class="counter"
>
  2
</button>
<button
  class="amount"
>
  15
</button>
<button
  class="side"
>
  99
</button>
<button
  class="label"
>
  a! function
</button>
<div>
  2 15 99 a!
</div>
```
## Change
```
UPDATE: .label::text@0 "a" => "a!"
UPDATE: div::text@8 "a" => "a!"
```
