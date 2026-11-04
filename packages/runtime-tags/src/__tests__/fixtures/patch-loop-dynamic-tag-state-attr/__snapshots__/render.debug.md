# Render `{"items":[1]}`
```html
<p
  data-n="0"
>
  1
</p>
<button>
  +
</button>
```

# Update `{"items":[1,2]}`
```html
<p
  data-n="0"
>
  1
</p>
<div
  data-n="0"
>
  2
</div>
<button>
  +
</button>
```
## Change
```
INSERT: p + div
UPDATE: div[data-n] null => "0"
UPDATE: div::text " " => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p
  data-n="1"
>
  1
</p>
<div
  data-n="1"
>
  2
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: p[data-n] "0" => "1"
UPDATE: div[data-n] "0" => "1"
```

# Update `{"items":[1,2,3]}`
```html
<p
  data-n="1"
>
  1
</p>
<div
  data-n="1"
>
  2
</div>
<p
  data-n="1"
>
  3
</p>
<button>
  +
</button>
```
## Change
```
INSERT: div + p
UPDATE: p:nth-of-type(2)[data-n] null => "1"
UPDATE: p:nth-of-type(2)::text " " => "3"
```
