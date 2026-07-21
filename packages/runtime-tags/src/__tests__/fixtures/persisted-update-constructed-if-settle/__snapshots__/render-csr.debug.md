# Render `{"title":"First","missing":true,"$global":{"persisted":true}}`
```html
<h1>
  First
</h1>
<button>
  clicked 0
</button>
<p>
  gone
</p>
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
<p>
  gone
</p>
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
5&gt;
<h2>
  long Second
</h2>
<section />
```
## Change
```
UPDATE: h1::text "First" => "Second"
INSERT: button + section
REMOVE: section + p
INSERT: button + :is(::text(" 5> "), h2)
UPDATE: h2::text@5 "" => "Second"
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
5&gt;
<h2>
  long Second
</h2>
<section />
```
## Change
```
UPDATE: button::text@8 "1" => "2"
```

# Update `{"title":"Deluxe","$global":{"persisted":true}}`
```html
<h1>
  Deluxe
</h1>
<button>
  clicked 2
</button>
5&gt;
<h2>
  long Deluxe
</h2>
<section />
```
## Change
```
UPDATE: h1::text "Second" => "Deluxe"
UPDATE: h2::text@5 "Second" => "Deluxe"
```

# Update `{"title":"Deluxe","$global":{"persisted":true}}`
