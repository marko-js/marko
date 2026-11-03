# Render `{"show":false,"label":"a"}`
```html
<button>
  +
</button>
```

# Update `{"show":true,"label":"b"}`
```html
<p>
  0
</p>
<div>
  <button>
    b:0
  </button>
</div>
<button>
  +
</button>
```
## Change
```
INSERT: p, div
UPDATE: p::text " " => "0"
UPDATE: div > button::text@2 "" => "0"
```

# Update
```js
for (const button of container.querySelectorAll("button")) button.click();
```
```html
<p>
  1
</p>
<div>
  <button>
    b:1
  </button>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "0" => "1"
UPDATE: div > button::text@2 "0" => "1"
```

# Update `{"show":true,"label":"c"}`
```html
<p>
  1
</p>
<div>
  <button>
    c:1
  </button>
</div>
<button>
  +
</button>
```
## Change
```
UPDATE: div > button::text@0 "b" => "c"
```
