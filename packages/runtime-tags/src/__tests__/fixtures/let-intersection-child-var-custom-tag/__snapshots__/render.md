# Render `{"$global":{"count":0}}`
```html
<div>
  0
</div>
<div>
  1
</div>
<button>
  0,1
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  2
</div>
<div>
  2
</div>
<button>
  2,2
</button>
```
## Change
```
UPDATE: div:nth-of-type(2)::text "1" => "2"
UPDATE: div:nth-of-type(1)::text "0" => "2"
UPDATE: button::text "0,1" => "2,2"
```

# Update
```js
container.querySelector("button").click();
```

# Update
```js
container.querySelector("button").click();
```
