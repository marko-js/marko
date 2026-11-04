# Render `{"name":"amy","$global":{"prefix":"hi","serializedGlobals":["prefix"]}}`
```html
<button>
  inc
</button>
<span>
  hi:amy 0
</span>
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
<span>
  hi:amy 1
</span>
```
## Change
```
UPDATE: span::text@7 "0" => "1"
```

# Update `{"name":"amy","$global":{"prefix":"yo","serializedGlobals":["prefix"]}}`
```html
<button>
  inc
</button>
<span>
  yo:amy 1
</span>
```
## Change
```
UPDATE: span::text@0 "hi:amy" => "yo:amy"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  inc
</button>
```
## Change
```
REMOVE: button + span
```

# Update `{"name":"bob","$global":{"prefix":"yo","serializedGlobals":["prefix"]}}`
