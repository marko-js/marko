# Render `{"show":false,"$global":{"flag":"!","serializedGlobals":["flag"]}}`
```html
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"$global":{"flag":"!","serializedGlobals":["flag"]}}`
```html
<p>
  1!
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p::text " " => "1!"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  2!
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "1!" => "2!"
```
