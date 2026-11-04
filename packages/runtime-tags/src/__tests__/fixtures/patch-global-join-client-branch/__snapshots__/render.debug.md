# Render `{"a":"a0","$global":{"g":"g0","serializedGlobals":["g"]}}`
```html
<button>
  0
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  t:a0g0
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
INSERT: button + p
UPDATE: p::text@2 "" => "a0g0"
```

# Update `{"a":"a1","$global":{"g":"g1","serializedGlobals":["g"]}}`
```html
<button>
  1
</button>
<p>
  t:a1g1
</p>
```
## Change
```
UPDATE: p::text@2 "a0g0" => "a1g1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
REMOVE: button + p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  3
</button>
<p>
  t:a1g1
</p>
```
## Change
```
UPDATE: button::text "2" => "3"
INSERT: button + p
UPDATE: p::text@2 "" => "a1g1"
```
