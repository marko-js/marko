# Render
```html
<button>
  Count: 1
</button>
<div>
  1
</div>
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 2
</button>
<div>
  2
</div>
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
```
## Change
```
UPDATE: button::text@7 "1" => "2"
UPDATE: div:nth-of-type(1)::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 3
</button>
<div>
  3
</div>
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
```
## Change
```
UPDATE: button::text@7 "2" => "3"
UPDATE: div:nth-of-type(1)::text "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  Count: 4
</button>
<div>
  4
</div>
<div>
  false
</div>
<div>
  true
</div>
<div>
  "spread1"
</div>
```
## Change
```
UPDATE: button::text@7 "3" => "4"
UPDATE: div:nth-of-type(1)::text "3" => "4"
```
