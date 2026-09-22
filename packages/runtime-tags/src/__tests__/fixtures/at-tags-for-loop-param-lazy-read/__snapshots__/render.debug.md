# Render
```html
<button
  id="rename"
>
  rename
</button>
<div
  id="out"
/>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
```

# Update
```js
document.querySelectorAll(selector)[index].click();
```
```html
<button
  id="rename"
>
  rename
</button>
<div
  id="out"
>
  b
</div>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
```
## Change
```
UPDATE: #out::text "" => "b"
```

# Update
```js
document.querySelectorAll(selector)[index].click();
```
```html
<button
  id="rename"
>
  rename
</button>
<div
  id="out"
>
  nested a
</div>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
```
## Change
```
UPDATE: #out::text "b" => "nested a"
```

# Update
```js
document.querySelectorAll(selector)[index].click();
```

# Update
```js
document.querySelectorAll(selector)[index].click();
```
```html
<button
  id="rename"
>
  rename
</button>
<div
  id="out"
>
  b!
</div>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
```
## Change
```
UPDATE: #out::text "nested a" => "b!"
```

# Update
```js
document.querySelectorAll(selector)[index].click();
```
```html
<button
  id="rename"
>
  rename
</button>
<div
  id="out"
>
  nested a!
</div>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
<button
  class="direct"
>
  direct
</button>
<button
  class="nested"
>
  nested
</button>
```
## Change
```
UPDATE: #out::text "b!" => "nested a!"
```
