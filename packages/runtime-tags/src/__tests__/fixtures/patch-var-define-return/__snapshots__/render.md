# Render `{"b":1}`
```html
<div
  data-total="1"
>
  1
</div>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  data-total="2"
>
  2
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div::text "1" => "2"
UPDATE: div[data-total] "1" => "2"
```

# Update `{"b":2}`
```html
<div
  data-total="3"
>
  3
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div::text "2" => "3"
UPDATE: div[data-total] "2" => "3"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div
  data-total="4"
>
  4
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div::text "3" => "4"
UPDATE: div[data-total] "3" => "4"
```

# Update `{"b":3}`
```html
<div
  data-total="5"
>
  5
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div::text "4" => "5"
UPDATE: div::text "3" => "5"
UPDATE: div[data-total] "4" => "5"
UPDATE: div[data-total] "5" => "5"
```
