# Render `{"n":5}`
```html
<p>
  picked -1
</p>
<div
  class="from"
>
  <button>
    1
  </button>
  <button>
    3
  </button>
  <button>
    5
  </button>
</div>
<div
  class="step"
>
  <button>
    0
  </button>
  <button>
    3
  </button>
</div>
```

# Update `{"n":9}`
```html
<p>
  picked -1
</p>
<div
  class="from"
>
  <button>
    1
  </button>
  <button>
    3
  </button>
  <button>
    5
  </button>
  <button>
    7
  </button>
  <button>
    9
  </button>
</div>
<div
  class="step"
>
  <button>
    0
  </button>
  <button>
    3
  </button>
  <button>
    6
  </button>
</div>
```
## Change
```
INSERT: .from > button:nth-of-type(3) + button
INSERT: .from > button:nth-of-type(4) + button
UPDATE: .from > button:nth-of-type(4)::text " " => "7"
UPDATE: .from > button:nth-of-type(5)::text " " => "9"
INSERT: .step > button:nth-of-type(2) + button
UPDATE: .step > button:nth-of-type(3)::text " " => "6"
```

# Update
```js
document
.querySelector(selector) 
.querySelector("button:last-child") 
.click();
```
```html
<p>
  picked 9
</p>
<div
  class="from"
>
  <button>
    1
  </button>
  <button>
    3
  </button>
  <button>
    5
  </button>
  <button>
    7
  </button>
  <button>
    9
  </button>
</div>
<div
  class="step"
>
  <button>
    0
  </button>
  <button>
    3
  </button>
  <button>
    6
  </button>
</div>
```
## Change
```
UPDATE: p::text@7 "-1" => "9"
```

# Update
```js
document
.querySelector(selector) 
.querySelector("button:last-child") 
.click();
```
```html
<p>
  picked 6
</p>
<div
  class="from"
>
  <button>
    1
  </button>
  <button>
    3
  </button>
  <button>
    5
  </button>
  <button>
    7
  </button>
  <button>
    9
  </button>
</div>
<div
  class="step"
>
  <button>
    0
  </button>
  <button>
    3
  </button>
  <button>
    6
  </button>
</div>
```
## Change
```
UPDATE: p::text@7 "9" => "6"
```

# Update `{"n":3}`
```html
<p>
  picked 6
</p>
<div
  class="from"
>
  <button>
    1
  </button>
  <button>
    3
  </button>
</div>
<div
  class="step"
>
  <button>
    0
  </button>
</div>
```
## Change
```
REMOVE: .from > button:nth-of-type(2) + button
REMOVE: .from > button:nth-of-type(2) + button
REMOVE: .from > button:nth-of-type(2) + button
REMOVE: .step > button + button
REMOVE: .step > button + button
```

# Update
```js
document
.querySelector(selector) 
.querySelector("button:last-child") 
.click();
```
```html
<p>
  picked 3
</p>
<div
  class="from"
>
  <button>
    1
  </button>
  <button>
    3
  </button>
</div>
<div
  class="step"
>
  <button>
    0
  </button>
</div>
```
## Change
```
UPDATE: p::text@7 "6" => "3"
```

# Update
```js
document
.querySelector(selector) 
.querySelector("button:last-child") 
.click();
```
```html
<p>
  picked 0
</p>
<div
  class="from"
>
  <button>
    1
  </button>
  <button>
    3
  </button>
</div>
<div
  class="step"
>
  <button>
    0
  </button>
</div>
```
## Change
```
UPDATE: p::text@7 "3" => "0"
```
