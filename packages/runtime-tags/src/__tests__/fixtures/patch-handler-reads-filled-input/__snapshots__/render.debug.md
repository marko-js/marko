# Render `{"label":"a"}`
```html
<button>
  0a
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1a
</button>
```
## Change
```
INSERT: #document > html > head > title
INSERT: #document > html > head > title::text("a")
UPDATE: button::text "0a" => "1a"
```

# Update `{"label":"b"}`
```html
<button>
  1b
</button>
```
## Change
```
UPDATE: button::text "1a" => "1b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2b
</button>
```
## Change
```
REMOVE: #document > html > head > title::text("a")
INSERT: #document > html > head > title::text("b")
UPDATE: button::text "1b" => "2b"
```
