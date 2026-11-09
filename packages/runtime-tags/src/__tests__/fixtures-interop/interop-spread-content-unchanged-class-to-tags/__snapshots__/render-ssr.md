# Render
```html
<button
  id="class"
>
  0
</button>
<button
  id="tags"
>
  0
</button>
<div
  data-m="0"
>
  <b>
    content 0
  </b>
</div>
```
## Console
```
LOG "content render" 0
LOG "content render" 0
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<button
  id="class"
>
  0
</button>
<button
  id="tags"
>
  1
</button>
<div
  data-m="1"
>
  <b>
    content 0
  </b>
</div>
```
## Change
```
UPDATE: #tags::text "0" => "1"
UPDATE: div[data-m] "0" => "1"
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
<button
  id="tags"
>
  1
</button>
<div
  data-m="1"
>
  <b>
    content 1
  </b>
</div>
```
## Change
```
UPDATE: #class::text "0" => "1"
UPDATE: div > b::text@8 "0" => "1"
```
## Console
```
LOG "content render" 1
```

# Update
```js
(document.querySelector("#tags")).click();
```
```html
<button
  id="class"
>
  1
</button>
<button
  id="tags"
>
  2
</button>
<div
  data-m="2"
>
  <b>
    content 1
  </b>
</div>
```
## Change
```
UPDATE: #tags::text "1" => "2"
UPDATE: div[data-m] "1" => "2"
```
