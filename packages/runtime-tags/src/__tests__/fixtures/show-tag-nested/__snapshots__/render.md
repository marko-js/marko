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
container.querySelector(`#${id}`).click();
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
INSERT: ::text@0 + em
```

# Update
```js
container.querySelector(`#${id}`).click();
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
REMOVE: #i + ::text("before ")
REMOVE: #i + em
REMOVE: #i + ::text(" after")
```

# Update
```js
container.querySelector(`#${id}`).click();
```

# Update
```js
container.querySelector(`#${id}`).click();
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
INSERT: #i + :is(::text("before "), ::text(" after"))
```

# Update
```js
container.querySelector(`#${id}`).click();
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
INSERT: ::text@0 + em
```
