# Render
```html
<div>
  1
</div>
<div>
  1
</div>
<button>
  1
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
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: div:nth-of-type(1)::text "1" => "2"
UPDATE: div:nth-of-type(2)::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  3
</div>
<div>
  3
</div>
<button>
  3
</button>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: div:nth-of-type(1)::text "2" => "3"
UPDATE: div:nth-of-type(2)::text "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  4
</div>
<div>
  4
</div>
<button>
  4
</button>
```
## Change
```
UPDATE: button::text "3" => "4"
UPDATE: div:nth-of-type(1)::text "3" => "4"
UPDATE: div:nth-of-type(2)::text "3" => "4"
```
