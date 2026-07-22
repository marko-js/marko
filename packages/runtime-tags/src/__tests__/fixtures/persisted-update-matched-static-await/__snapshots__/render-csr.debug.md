# Render `{"title":"First","$global":{"persisted":true}}`
```html
<h1>
  First
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
  First
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

# Update `{"title":"Second","$global":{"persisted":true}}`
```html
<h1>
  Second
</h1>
<button>
  clicked 1
</button>
<section />
<footer />
```
## Change
```
UPDATE: h1::text "First" => "Second"
```

# Update `{"title":"Second","$global":{"persisted":true}}`

# Update
```js
document.querySelector("button").click();
```
```html
<h1>
  Second
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

# Update `{"title":"First","$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button>
  clicked 2
</button>
<section />
<footer />
```
## Change
```
UPDATE: h1::text "Second" => "First"
```

# Update `{"title":"First","$global":{"persisted":true}}`
