# Render `{"show":false}`
```html
<button>
  +
</button>
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true}`
```html
<p>
  0:1
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p
UPDATE: p::text@2 "" => "1"
```
## Console
```
LOG "effect 1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  0:2
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text@2 "1" => "2"
```
## Console
```
LOG "effect 2"
```
