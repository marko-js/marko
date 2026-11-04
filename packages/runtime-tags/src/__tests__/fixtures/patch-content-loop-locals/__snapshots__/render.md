# Render `{"labels":["a","b"],"show":false}`
```html
<em>
  a0
</em>
<em>
  b0
</em>
<button>
  0
</button>
```

# Update `{"labels":["a","b","c"],"show":true}`
```html
<em>
  a0
</em>
<b>
  a!
</b>
<em>
  b0
</em>
<b>
  b!
</b>
<em>
  c0
</em>
<b>
  c!
</b>
<button>
  0
</button>
```
## Change
```
INSERT: em:nth-of-type(1) + b
INSERT: em:nth-of-type(2) + b
INSERT: b:nth-of-type(2) + :is(em, b)
UPDATE: em:nth-of-type(3)::text " " => "c0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  a1
</em>
<b>
  a!
</b>
<em>
  b1
</em>
<b>
  b!
</b>
<em>
  c1
</em>
<b>
  c!
</b>
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
UPDATE: em:nth-of-type(1)::text "a0" => "a1"
UPDATE: em:nth-of-type(2)::text "b0" => "b1"
UPDATE: em:nth-of-type(3)::text "c0" => "c1"
```

# Update `{"labels":["c"],"show":false}`
```html
<em>
  c1
</em>
<button>
  1
</button>
```
## Change
```
REMOVE: em + b
REMOVE: em + em
REMOVE: em + b
REMOVE: em + em
REMOVE: em + b
UPDATE: em::text "a1" => "c1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  c2
</em>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: em::text "c1" => "c2"
```
