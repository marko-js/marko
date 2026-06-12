# Render `{"$global":{"config":{"step":2},"serializedGlobals":["config"]}}`

# Update
```html
<button>
  count: 0
</button>
```
## Change
```
INSERT: button
UPDATE: button::text@7 "" => "0"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  count: 2
</button>
```
## Change
```
UPDATE: button::text@7 "0" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  count: 4
</button>
```
## Change
```
UPDATE: button::text@7 "2" => "4"
```
