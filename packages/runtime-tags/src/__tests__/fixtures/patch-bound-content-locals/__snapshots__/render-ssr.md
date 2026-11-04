# Render `{"show":false,"items":[{"text":"a"}]}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"items":[{"text":"b"},{"text":"c"}]}`
```html
<button>
  +
</button>
<button>
  copy
</button>
<em>
  b 0
</em>
<em>
  c 0
</em>
```
## Change
```
INSERT: button:nth-of-type(1) + button
INSERT: button:nth-of-type(2) + em
INSERT: em:nth-of-type(1) + em
UPDATE: em:nth-of-type(1)::text@2 "" => "0"
UPDATE: em:nth-of-type(2)::text@2 "" => "0"
```

# Update
```js
d.querySelector("button").click();
```
```html
<button>
  +
</button>
<button>
  copy
</button>
<em>
  b 1
</em>
<em>
  c 1
</em>
```
## Change
```
UPDATE: em:nth-of-type(1)::text@2 "0" => "1"
UPDATE: em:nth-of-type(2)::text@2 "0" => "1"
```

# Update `{"show":true,"items":[{"text":"d"},{"text":"e"}]}`
