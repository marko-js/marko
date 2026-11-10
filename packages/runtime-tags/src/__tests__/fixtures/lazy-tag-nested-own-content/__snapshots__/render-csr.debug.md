# Render

# Update
```html
<button>
  count:0
</button>
<button>
  add 10
</button>
```
## Change
```
INSERT: button, button
UPDATE: button:nth-of-type(1)::text@6 "" => "0"
```

# Update
```js
document.querySelectorAll("button")[0].click();
```
```html
<button>
  count:1
</button>
<button>
  add 10
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@6 "0" => "1"
```

# Update
```js
document.querySelectorAll("button")[1].click();
```
```html
<button>
  count:11
</button>
<button>
  add 10
</button>
```
## Change
```
UPDATE: button:nth-of-type(1)::text@6 "1" => "11"
```
