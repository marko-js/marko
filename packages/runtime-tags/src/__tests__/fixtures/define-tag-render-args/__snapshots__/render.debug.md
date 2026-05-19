# Render
```html
<div>
  1|Hello|1
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
  1|Hello|2
</div>
<button>
  2
</button>
```
## Change
```
UPDATE: div::text@8 "1" => "2"
UPDATE: button::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  1|Hello|3
</div>
<button>
  3
</button>
```
## Change
```
UPDATE: div::text@8 "2" => "3"
UPDATE: button::text "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  1|Hello|4
</div>
<button>
  4
</button>
```
## Change
```
UPDATE: div::text@8 "3" => "4"
UPDATE: button::text "3" => "4"
```
