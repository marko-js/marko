# Render
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show-of"
>
  show
</button>
<button
  id="show-in"
>
  show
</button>
<button
  id="show-nested"
>
  show
</button>
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show-of"
>
  show
</button>
Of 0
<button
  id="show-in"
>
  show
</button>
<button
  id="show-nested"
>
  show
</button>
```
## Change
```
INSERT: #show-of + :is(::text("Of "), ::text("0"))
UPDATE: ::text@3 "" => "0"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show-of"
>
  show
</button>
Of 0
<button
  id="show-in"
>
  show
</button>
In 0
<button
  id="show-nested"
>
  show
</button>
```
## Change
```
INSERT: #show-in + :is(::text("In "), ::text("0"))
UPDATE: ::text@7 "" => "0"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show-of"
>
  show
</button>
Of 0
<button
  id="show-in"
>
  show
</button>
In 0
<button
  id="show-nested"
>
  show
</button>
Cell 0
```
## Change
```
INSERT: #show-nested + :is(::text("Cell "), ::text("0"))
UPDATE: ::text@13 "" => "0"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="inc"
>
  inc
</button>
<button
  id="show-of"
>
  show
</button>
Of 1
<button
  id="show-in"
>
  show
</button>
In 1
<button
  id="show-nested"
>
  show
</button>
Cell 1
```
## Change
```
UPDATE: ::text@3 "0" => "1"
UPDATE: ::text@7 "0" => "1"
UPDATE: ::text@13 "0" => "1"
```
