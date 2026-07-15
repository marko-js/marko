# Render `{"title":"First","note":"Ships tomorrow","$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button>
  clicked 0
</button>
<section />
```

# Update
```js
container.querySelector("button").click();
```
```html
<h1>
  First
</h1>
<button>
  clicked 1
</button>
<section />
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update `{"title":"Second","note":"Backordered","$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button>
  clicked 1
</button>
<section />
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update `{"title":"Second","note":"Backordered","$global":{"persisted":true}}`

# Update
```js
container.querySelector("button").click();
```
```html
<h1>
  Second
</h1>
<button>
  clicked 2
</button>
<section />
```
## Change
```
UPDATE: button::text@8 "1" => "2"
```
