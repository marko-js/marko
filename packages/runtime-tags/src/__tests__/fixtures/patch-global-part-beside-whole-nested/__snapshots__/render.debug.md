# Render `{"$global":{"meta":{"title":"a","flag":1},"serializedGlobals":["meta"]}}`
```html
<button>
  t
</button>
<p>
  a:1
</p>
```

# Update `{"$global":{"meta":{"title":"b","flag":2},"serializedGlobals":["meta"]}}`
```html
<button>
  t
</button>
<p>
  b:2
</p>
```
## Change
```
UPDATE: p::text "a:1" => "b:2"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
```
## Change
```
REMOVE: button + p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  t
</button>
<p>
  b:2
</p>
```
## Change
```
INSERT: button + p
UPDATE: p::text " " => "b:2"
```

# Update `{"$global":{"meta":{"title":"c","flag":3},"serializedGlobals":["meta"]}}`
```html
<button>
  t
</button>
<p>
  c:3
</p>
```
## Change
```
UPDATE: p::text "b:2" => "c:3"
```
