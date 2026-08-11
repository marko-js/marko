# Render
```html
<button
  id="direct"
>
  direct
</button>
<button
  id="alias"
>
  alias
</button>
<button
  id="nullary"
>
  nullary
</button>
<button
  id="defaulted"
>
  defaulted
</button>
<div>
  pending
</div>
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="direct"
>
  direct
</button>
<button
  id="alias"
>
  alias
</button>
<button
  id="nullary"
>
  nullary
</button>
<button
  id="defaulted"
>
  defaulted
</button>
<div>
  A:42
</div>
```
## Change
```
UPDATE: div::text "pending" => "A:42"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="direct"
>
  direct
</button>
<button
  id="alias"
>
  alias
</button>
<button
  id="nullary"
>
  nullary
</button>
<button
  id="defaulted"
>
  defaulted
</button>
<div>
  1-2-3
</div>
```
## Change
```
UPDATE: div::text "A:42" => "1-2-3"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="direct"
>
  direct
</button>
<button
  id="alias"
>
  alias
</button>
<button
  id="nullary"
>
  nullary
</button>
<button
  id="defaulted"
>
  defaulted
</button>
<div>
  none
</div>
```
## Change
```
UPDATE: div::text "1-2-3" => "none"
```

# Update
```js
document.querySelector(`#${id}`).click();
```
```html
<button
  id="direct"
>
  direct
</button>
<button
  id="alias"
>
  alias
</button>
<button
  id="nullary"
>
  nullary
</button>
<button
  id="defaulted"
>
  defaulted
</button>
<div>
  x:def
</div>
```
## Change
```
UPDATE: div::text "none" => "x:def"
```
