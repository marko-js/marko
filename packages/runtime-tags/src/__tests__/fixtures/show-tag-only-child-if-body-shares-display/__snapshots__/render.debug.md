# Render
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
    yes
  </p>
</section>
```
## Change
```
INSERT: #c > p
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
INSERT: #c > i
REMOVE: #document-fragment > i + p
REMOVE: #c > i
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
    yes
  </p>
</section>
```
## Change
```
INSERT: #c > p
```
