# Render `{"title":"Trailhead 40L Pack","related":[{"id":11,"name":"Rain Cover","price":24.5},{"id":12,"name":"Hip Belt","price":39}],"note":"Ships tomorrow","$global":{"persisted":true}}`
```html
<h1>
  Trailhead 40L Pack
</h1>
<button>
  clicked 0
</button>
<section />
<footer />
```

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  Trailhead 40L Pack
</h1>
<button>
  clicked 1
</button>
<section />
<footer />
```
## Change
```
UPDATE: button::text@8 "0" => "1"
```

# Update `{"title":"Summit 65L Pack","related":[{"id":12,"name":"Hip Belt","price":39},{"id":21,"name":"Ice Axe Loop","price":11.5}],"note":"Backordered","$global":{"persisted":true}}`
```html
<h1>
  Summit 65L Pack
</h1>
<button>
  clicked 1
</button>
<section />
<footer />
```
## Change
```
UPDATE: h1::text "Trailhead 40L Pack" => "Summit 65L Pack"
```

# Update `{"title":"Summit 65L Pack","related":[{"id":12,"name":"Hip Belt","price":39},{"id":21,"name":"Ice Axe Loop","price":11.5}],"note":"Backordered","$global":{"persisted":true}}`

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  Summit 65L Pack
</h1>
<button>
  clicked 2
</button>
<section />
<footer />
```
## Change
```
UPDATE: button::text@8 "1" => "2"
```

# Update `{"title":"Trailhead 40L Pack","related":[{"id":11,"name":"Rain Cover","price":24.5},{"id":12,"name":"Hip Belt","price":39}],"note":"Ships tomorrow","$global":{"persisted":true}}`
```html
<h1>
  Trailhead 40L Pack
</h1>
<button>
  clicked 2
</button>
<section />
<footer />
```
## Change
```
UPDATE: h1::text "Summit 65L Pack" => "Trailhead 40L Pack"
```

# Update `{"title":"Trailhead 40L Pack","related":[{"id":11,"name":"Rain Cover","price":24.5},{"id":12,"name":"Hip Belt","price":39}],"note":"Ships tomorrow","$global":{"persisted":true}}`
