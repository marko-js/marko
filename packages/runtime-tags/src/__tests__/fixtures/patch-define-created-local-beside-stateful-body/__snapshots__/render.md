# Render `{"show":false,"open":true,"label":"a"}`
```html
<button>
  toggle
</button>
<em>
  a!
</em>
```

# Update `{"show":true,"open":true,"label":"b"}`
```html
<button>
  toggle
</button>
<em>
  b?
</em>
<em>
  1
</em>
<button>
  inc
</button>
<em>
  b!
</em>
```
## Change
```
INSERT: button:nth-of-type(1) + :is(em, button)
UPDATE: em:nth-of-type(3)::text "a!" => "b!"
INSERT: button:nth-of-type(1) + em
UPDATE: em:nth-of-type(2)::text " " => "1"
UPDATE: em:nth-of-type(1)::text " " => "b?"
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  toggle
</button>
<em>
  b?
</em>
<em>
  2
</em>
<button>
  inc
</button>
<em>
  b!
</em>
```
## Change
```
UPDATE: em:nth-of-type(2)::text "1" => "2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  toggle
</button>
<em>
  b?
</em>
<em>
  2
</em>
<button>
  inc
</button>
```
## Change
```
REMOVE: button:nth-of-type(2) + em
```

# Update `{"show":true,"open":true,"label":"c"}`
```html
<button>
  toggle
</button>
<em>
  c?
</em>
<em>
  2
</em>
<button>
  inc
</button>
```
## Change
```
UPDATE: em:nth-of-type(1)::text "b?" => "c?"
```

# Update `{"show":false,"open":true,"label":"d"}`
```html
<button>
  toggle
</button>
```
## Change
```
REMOVE: button + em
REMOVE: button + em
REMOVE: button + button
```

# Update `{"show":true,"open":true,"label":"e"}`
```html
<button>
  toggle
</button>
<em>
  e?
</em>
<em>
  1
</em>
<button>
  inc
</button>
```
## Change
```
INSERT: button:nth-of-type(1) + :is(em, button)
INSERT: button:nth-of-type(1) + em
UPDATE: em:nth-of-type(2)::text " " => "1"
UPDATE: em:nth-of-type(1)::text " " => "e?"
```
