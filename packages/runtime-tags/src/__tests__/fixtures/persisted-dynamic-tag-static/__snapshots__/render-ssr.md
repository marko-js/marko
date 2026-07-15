# Render `{"$global":{"persisted":true,"caption":"Home","serializedGlobals":{"caption":true}}}`
```html
<button>
  count 0
</button>
<em>
  badge
</em>
<p>
  Home
</p>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  count 1
</button>
<em>
  badge
</em>
<p>
  Home
</p>
```
## Change
```
UPDATE: button::text@6 "0" => "1"
```

# Update `{"$global":{"persisted":true,"caption":"Detail","serializedGlobals":{"caption":true}}}`
```html
<button>
  count 1
</button>
<em>
  badge
</em>
<p>
  Detail
</p>
```
## Change
```
UPDATE: p::text "Home" => "Detail"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  count 2
</button>
<em>
  badge
</em>
<p>
  Detail
</p>
```
## Change
```
UPDATE: button::text@6 "1" => "2"
```
