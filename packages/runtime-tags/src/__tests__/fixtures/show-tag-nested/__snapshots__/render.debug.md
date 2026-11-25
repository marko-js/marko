# Render
```html
<button
  id="o"
>
  outer
</button>
<button
  id="i"
>
  inner
</button>
before  after
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="o"
>
  outer
</button>
<button
  id="i"
>
  inner
</button>
before
<em>
  nested
</em>
after
```
## Change
```
INSERT: em
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="o"
>
  outer
</button>
<button
  id="i"
>
  inner
</button>
```
## Change
```
REMOVE: ::text(" after")
REMOVE: ::text("before ")
REMOVE: em
```

# Update
```js
document.querySelector(`#${id}`).click();
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="o"
>
  outer
</button>
<button
  id="i"
>
  inner
</button>
before  after
```
## Change
```
INSERT: ::text("before "), ::text(" after")
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="o"
>
  outer
</button>
<button
  id="i"
>
  inner
</button>
before
<em>
  nested
</em>
after
```
## Change
```
INSERT: em
```
