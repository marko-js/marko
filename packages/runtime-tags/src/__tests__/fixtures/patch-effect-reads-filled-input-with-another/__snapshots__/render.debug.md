# Render `{"label":"a","other":"x"}`
```html
<button>
  0a
</button>
<div>
  script:ax
</div>
```

# Update `{"label":"b","other":"x"}`
```html
<button>
  0b
</button>
<div>
  script:bx
</div>
```
## Change
```
UPDATE: button::text "0a" => "0b"
REMOVE: div::text("script:ax")
INSERT: div::text("script:bx")
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
  script:bx
</div>
```
## Change
```
UPDATE: button::text "0b" => "1b"
```

# Update `{"label":"c","other":"y"}`
```html
<button>
  1c
</button>
<div>
  script:cy
</div>
```
## Change
```
UPDATE: button::text "1b" => "1c"
REMOVE: div::text("script:bx")
INSERT: div::text("script:cy")
REMOVE: div::text("script:cy")
INSERT: div::text("script:cy")
```

# Update `{"label":"d","other":"y"}`
```html
<button>
  1d
</button>
<div>
  script:dy
</div>
```
## Change
```
UPDATE: button::text "1c" => "1d"
REMOVE: div::text("script:cy")
INSERT: div::text("script:dy")
```
