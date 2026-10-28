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
<div>
  <p>
    body
  </p>
</div>
<div>
  <p>
    body
  </p>
</div>
```
## Change
```
INSERT: button + div
INSERT: div:nth-of-type(1) + div
```
## Console
```
LOG "content count" 10
LOG "content count" 1
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<div>
  <p>
    body
  </p>
</div>
<div>
  <p>
    body
  </p>
</div>
```
## Change
```
UPDATE: button::text "1" => "2"
```
## Console
```
LOG "content count" 2
```
