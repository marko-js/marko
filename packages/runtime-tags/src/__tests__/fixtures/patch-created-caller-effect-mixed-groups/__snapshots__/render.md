# Render `{"show":false,"label":"a"}`
```html
<button>
  0
</button>
```

# Update `{"show":true,"label":"b"}`
```html
<button>
  0
</button>
<p>
  probe
</p>
```
## Change
```
INSERT: button + p
```
## Console
```
LOG "probe" "b" 0
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
  probe
</p>
```
## Change
```
UPDATE: button::text "0" => "1"
```
## Console
```
LOG "probe" "b" 1
```

# Update `{"show":true,"label":"c"}`
## Console
```
LOG "probe" "c" 1
```
