# Render
```html
<button
  id="t"
>
  t
</button>
<section
  id="c"
>
  <p>
    0
  </p>
</section>
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<section
  id="c"
/>
```
## Change
```
REMOVE: #c > p
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<section
  id="c"
>
  <p>
    2
  </p>
</section>
```
## Change
```
INSERT: #c > p
UPDATE: #c > p::text "1" => "2"
```

# Update
```js
document.getElementById("t").click();
```
```html
<button
  id="t"
>
  t
</button>
<section
  id="c"
/>
```
## Change
```
REMOVE: #c > p
```
