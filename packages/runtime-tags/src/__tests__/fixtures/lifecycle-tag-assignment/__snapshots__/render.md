# Render
```html
<div>
  x=
  <span>
    0
  </span>
  , was=
</div>
<button
  id="increment"
>
  Increment
</button>
```

# Update
```js
container.querySelector("#increment")?.click();
```
```html
<div>
  x=
  <span>
    1
  </span>
  , was=0
</div>
<button
  id="increment"
>
  Increment
</button>
```
## Change
```
UPDATE: div > span::text "0" => "1"
UPDATE: div::text@8 "" => "0"
```

# Update
```js
container.querySelector("#increment")?.click();
```
```html
<div>
  x=
  <span>
    2
  </span>
  , was=0
</div>
<button
  id="increment"
>
  Increment
</button>
```
## Change
```
UPDATE: div > span::text "1" => "2"
```

# Update
```html
<div>
  x=
  <span>
    2
  </span>
  , was=1
</div>
<button
  id="increment"
>
  Increment
</button>
```
## Change
```
UPDATE: div::text@8 "0" => "1"
```
