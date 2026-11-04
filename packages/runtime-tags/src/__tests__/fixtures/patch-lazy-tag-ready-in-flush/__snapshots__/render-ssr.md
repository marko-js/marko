# Render `{"label":"top","a":{},"b":{"value":"b1"}}`
```html
<button>
  top:0
</button>
<i>
  loading
</i>
```

# Update `{"label":"top2","a":{},"b":{}}`

# Update
```html
<button>
  top2:0
</button>
<i>
  loading
</i>
```
## Change
```
UPDATE: button::text@0 "top" => "top2"
```

# Update
```html
<button>
  top2:0
</button>
<b>
  a2
</b>
<button>
  in-try:0
</button>
<em>
  b1
</em>
```
## Change
```
INSERT: em::text("b1")
REMOVE: i
INSERT: button:nth-of-type(1) + :is(b, button, em)
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  top2:0
</button>
<b>
  a2
</b>
<button>
  in-try:1
</button>
<em>
  b1
</em>
```
## Change
```
UPDATE: button:nth-of-type(2)::text@7 "0" => "1"
```
