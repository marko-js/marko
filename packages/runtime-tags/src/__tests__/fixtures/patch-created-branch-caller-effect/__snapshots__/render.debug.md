# Render `{"show":false,"count":10}`
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

# Update `{"show":true,"count":10}`
```html
<button>
  1
</button>
<p>
  shown
</p>
<p>
  shown
</p>
```
## Change
```
INSERT: button + p
INSERT: p:nth-of-type(1) + p
```
## Console
```
LOG "count" 10
LOG "count" 1
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
  shown
</p>
<p>
  shown
</p>
```
## Change
```
UPDATE: button::text "1" => "2"
```
## Console
```
LOG "count" 2
```

# Update `{"show":true,"count":11}`
## Console
```
LOG "count" 11
```
