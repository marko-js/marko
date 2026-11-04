# Render `{"show":false}`

# Update `{"show":true}`
```html
<p>
  1
</p>
<button>
  *1
</button>
<button>
  2
</button>
<span>
  *1
</span>
<span>
  2
</span>
```
## Change
```
INSERT: p
INSERT: p + button
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + span
INSERT: span:nth-of-type(1) + span
UPDATE: button:nth-of-type(1)::text@0 "" => "*"
UPDATE: span:nth-of-type(1)::text@0 "" => "*"
```

# Update
```js
document.querySelector("button:last-of-type").click();
```
```html
<p>
  2
</p>
<button>
  1
</button>
<button>
  *2
</button>
<span>
  1
</span>
<span>
  *2
</span>
```
## Change
```
UPDATE: p::text "1" => "2"
UPDATE: button:nth-of-type(1)::text "*" => ""
UPDATE: button:nth-of-type(2)::text@0 "" => "*"
UPDATE: span:nth-of-type(1)::text "*" => ""
UPDATE: span:nth-of-type(2)::text@0 "" => "*"
```

# Update `{"show":true}`

# Update `{"show":false}`
## Change
```
REMOVE: p
REMOVE: button
REMOVE: button
REMOVE: span
REMOVE: span
```

# Update `{"show":true}`
```html
<p>
  1
</p>
<button>
  *1
</button>
<button>
  2
</button>
<span>
  *1
</span>
<span>
  2
</span>
```
## Change
```
INSERT: p
INSERT: p + button
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + span
INSERT: span:nth-of-type(1) + span
UPDATE: button:nth-of-type(1)::text@0 "" => "*"
UPDATE: span:nth-of-type(1)::text@0 "" => "*"
```
