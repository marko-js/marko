# Render `{"label":"a","x":0}`
```html
<p>
  f:a0
</p>
<button>
  more
</button>
<span>
  0
</span>
```
## Console
```
LOG "run" "f:a0"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  f:a1
</p>
<button>
  more
</button>
<span>
  0
</span>
```
## Change
```
UPDATE: p::text "f:a0" => "f:a1"
```
## Console
```
LOG "run" "f:a1"
```

# Update `{"label":"a","x":1}`
```html
<p>
  f:a1
</p>
<button>
  more
</button>
<span>
  1
</span>
```
## Change
```
UPDATE: span::text "0" => "1"
```

# Update `{"label":"b","x":1}`
```html
<p>
  f:b1
</p>
<button>
  more
</button>
<span>
  1
</span>
```
## Change
```
UPDATE: p::text "f:a1" => "f:b1"
```
## Console
```
LOG "run" "f:b1"
```
