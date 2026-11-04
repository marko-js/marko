# Render `{"rows":[1],"open":true,"label":"a"}`
```html
<em>
  a1
</em>
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update `{"rows":[1,2],"open":true,"label":"b"}`
```html
<em>
  b1
</em>
<em>
  b2
</em>
<em>
  b!
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "a1" => "b1"
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(3)::text "a!" => "b!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<em>
  b1
</em>
<em>
  b2
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em:nth-of-type(2) + em
```

# Update `{"rows":[2,3],"open":true,"label":"c"}`
```html
<em>
  c2
</em>
<em>
  c3
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "b1" => "c2"
UPDATE: em:nth-of-type(2)::text "b2" => "c3"
```
