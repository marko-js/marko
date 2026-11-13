# Render `{"label":"a","tag":"t1"}`
```html
<button>
  clear
</button>
<em>
  a
</em>
<span>
  t1
</span>
<span>
  t1
</span>
<span>
  t1
</span>
<button>
  toggle
</button>
```

# Update `{"label":"b","tag":"t2"}`
```html
<button>
  clear
</button>
<em>
  b
</em>
<span>
  t2
</span>
<span>
  t2
</span>
<span>
  t2
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: span:nth-of-type(2)::text "t1" => "t2"
UPDATE: span:nth-of-type(3)::text "t1" => "t2"
UPDATE: em::text "a" => "b"
UPDATE: span:nth-of-type(1)::text "t1" => "t2"
```

# Update
```js
d.querySelectorAll("button")[1].click();
```
```html
<button>
  clear
</button>
<em>
  b
</em>
<button>
  toggle
</button>
```
## Change
```
REMOVE: em + span
REMOVE: em + span
REMOVE: em + span
```

# Update `{"label":"c","tag":"t3"}`
```html
<button>
  clear
</button>
<em>
  c
</em>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "b" => "c"
```

# Update
```js
d.querySelectorAll("button")[1].click();
```
```html
<button>
  clear
</button>
<em>
  c
</em>
<span>
  t3
</span>
<em>
  three
</em>
<button>
  toggle
</button>
```
## Change
```
INSERT: em:nth-of-type(1) + span
UPDATE: span::text " " => "t3"
INSERT: span + em
```

# Update `{"label":"d","tag":"t4"}`
```html
<button>
  clear
</button>
<em>
  d
</em>
<span>
  t4
</span>
<button>
  toggle
</button>
```
## Change
```
UPDATE: em::text "c" => "d"
UPDATE: span::text "t3" => "t4"
REMOVE: span + em
```
