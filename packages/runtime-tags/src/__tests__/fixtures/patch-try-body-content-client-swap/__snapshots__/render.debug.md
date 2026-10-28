# Render `{"label":"a"}`
```html
<button>
  B
</button>
<p>
  ok
</p>
<i>
  B a
</i>
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  A
</button>
<p>
  ok
</p>
<em>
  A a
</em>
```
## Change
```
UPDATE: button::text "B" => "A"
INSERT: p + em
REMOVE: em + i
UPDATE: em::text@2 "" => "a"
```

# Update `{"label":"b"}`
```html
<button>
  A
</button>
<p>
  ok
</p>
<em>
  A b
</em>
```
## Change
```
UPDATE: em::text@2 "a" => "b"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  B
</button>
<p>
  ok
</p>
<i>
  B b
</i>
```
## Change
```
UPDATE: button::text "A" => "B"
INSERT: p + i
REMOVE: i + em
UPDATE: i::text@2 "" => "b"
```

# Update `{"label":"c"}`
```html
<button>
  B
</button>
<p>
  ok
</p>
<i>
  B c
</i>
```
## Change
```
UPDATE: i::text@2 "b" => "c"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  A
</button>
<p>
  ok
</p>
<em>
  A c
</em>
```
## Change
```
UPDATE: button::text "B" => "A"
INSERT: p + em
REMOVE: em + i
UPDATE: em::text@2 "" => "c"
```
