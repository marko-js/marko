# Render `{"label":"a"}`
```html
<button>
  0a
</button>
<div>
  script:a
</div>
```

# Update `{"label":"b"}`
```html
<button>
  0b
</button>
<div>
  script:b
</div>
```
## Change
```
UPDATE: button::text "0a" => "0b"
REMOVE: div::text("script:a")
INSERT: div::text("script:b")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1b
</button>
<div>
  script:b
</div>
```
## Change
```
UPDATE: button::text "0b" => "1b"
```

# Update `{"label":"c"}`
```html
<button>
  1c
</button>
<div>
  script:c
</div>
```
## Change
```
UPDATE: button::text "1b" => "1c"
REMOVE: div::text("script:b")
INSERT: div::text("script:c")
```
