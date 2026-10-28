# Render `{"$global":{"suffix":"a","serializedGlobals":["suffix"]}}`
```html
<button>
  0a
</button>
<p>
  0a
</p>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1a
</button>
<p>
  1a
</p>
<b>
  1a
</b>
```
## Change
```
UPDATE: p::text "0a" => "1a"
INSERT: p + b
UPDATE: button::text "0a" => "1a"
UPDATE: b::text " " => "1a"
```

# Update `{"$global":{"suffix":"b","serializedGlobals":["suffix"]}}`
```html
<button>
  1b
</button>
<p>
  1b
</p>
<b>
  1b
</b>
```
## Change
```
UPDATE: p::text "1a" => "1b"
UPDATE: button::text "1a" => "1b"
UPDATE: b::text "1a" => "1b"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2b
</button>
<p>
  2b
</p>
<b>
  2b
</b>
```
## Change
```
UPDATE: p::text "1b" => "2b"
UPDATE: button::text "1b" => "2b"
UPDATE: b::text "1b" => "2b"
```
