# Render `{"items":[],"count":10}`
```html
<button>
  0
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"items":["a"],"count":10}`
```html
<button>
  1
</button>
<p>
  a
</p>
<p>
  a
</p>
```
## Change
```
INSERT: button + p
INSERT: p:nth-of-type(1) + p
```
## Console
```
LOG "row count" "a" 10
LOG "row count" "a" 1
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<p>
  a
</p>
<p>
  a
</p>
```
## Change
```
UPDATE: button::text "1" => "2"
```
## Console
```
LOG "row count" "a" 2
```
