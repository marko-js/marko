# Render `{"id":3,"$global":{"persisted":true}}`
```html
<button>
  clicked 0
</button>
<p>
  server patch 3 / server have 3
</p>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  clicked 1
</button>
<p>
  server patch 3 / server have 3
</p>
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update `{"id":0,"$global":{"persisted":true}}`
```html
<button>
  clicked 1
</button>
<p>
  nothing selected
</p>
```
## Change
```
INSERT: p + p
REMOVE: button + p
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  clicked 2
</button>
<p>
  nothing selected
</p>
```
## Change
```
UPDATE: button::text@8 "1" => "2"
```

# Update `{"id":5,"$global":{"persisted":true}}`
```html
<button>
  clicked 2
</button>
<p>
  server patch 5 / server have 5
</p>
```
## Change
```
INSERT: p
REMOVE: button + p
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  clicked 3
</button>
<p>
  server patch 5 / server have 5
</p>
```
## Change
```
UPDATE: button::text@8 "2" => "3"
```
