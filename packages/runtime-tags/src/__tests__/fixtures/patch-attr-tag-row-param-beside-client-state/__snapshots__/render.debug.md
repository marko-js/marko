# Render `{"items":["a"]}`
```html
<div>
  ac
</div>
<button>
  rename
</button>
```

# Update `{"items":["b"]}`
```html
<div>
  bc
</div>
<button>
  rename
</button>
```
## Change
```
UPDATE: div::text "ac" => "bc"
```

# Update
```js
document.querySelector("button").click();
```
```html
<div>
  bc!
</div>
<button>
  rename
</button>
```
## Change
```
UPDATE: div::text "bc" => "bc!"
```

# Update `{"items":["d","e"]}`
```html
<div>
  dc!
</div>
<div>
  ec!
</div>
<button>
  rename
</button>
```
## Change
```
INSERT: div:nth-of-type(1) + div
INSERT: div:nth-of-type(2)::text("ec!")
UPDATE: div:nth-of-type(1)::text "bc!" => "dc!"
UPDATE: div:nth-of-type(2)::text " " => "ec!"
```
