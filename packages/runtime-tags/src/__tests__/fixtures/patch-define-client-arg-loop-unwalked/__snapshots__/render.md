# Render `{"show":true}`
```html
<em>
  0
</em>
<em>
  0
</em>
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  1
</em>
<em>
  1
</em>
<button>
  +
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "0" => "1"
UPDATE: em:nth-of-type(2)::text "0" => "1"
```

# Update `{"show":true}`

# Update `{"show":false}`
```html
<button>
  +
</button>
```
## Change
```
REMOVE: em
REMOVE: em
```

# Update `{"show":true}`
```html
<em>
  1
</em>
<em>
  1
</em>
<button>
  +
</button>
```
## Change
```
INSERT: em
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(1)::text " " => "1"
UPDATE: em:nth-of-type(2)::text " " => "1"
```
