# Render `{"rows":["1"],"open":true,"label":"a"}`
```html
<em>
  1
</em>
<em>
  1
</em>
<em>
  a!
</em>
<button>
  toggle
</button>
```

# Update `{"rows":["1","2"],"open":true,"label":"b"}`
```html
<em>
  1
</em>
<em>
  1
</em>
<em>
  2
</em>
<em>
  2
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
INSERT: em:nth-of-type(2) + em
UPDATE: em:nth-of-type(5)::text "a!" => "b!"
INSERT: em:nth-of-type(2) + em
UPDATE: em:nth-of-type(4)::text " " => "2"
UPDATE: em:nth-of-type(3)::text " " => "2"
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
<em>
  2
</em>
<em>
  2
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em:nth-of-type(4) + em
```

# Update `{"rows":["2","3"],"open":true,"label":"c"}`
```html
<em>
  2
</em>
<em>
  2
</em>
<em>
  3
</em>
<em>
  3
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "1" => "2"
UPDATE: em:nth-of-type(2)::text "1" => "2"
UPDATE: em:nth-of-type(4)::text "2" => "3"
UPDATE: em:nth-of-type(3)::text "2" => "3"
```
