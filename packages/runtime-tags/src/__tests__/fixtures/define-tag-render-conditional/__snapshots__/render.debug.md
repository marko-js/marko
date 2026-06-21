# Render
```html
<div>
  Hello 1
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
  Hello 2
</div>
<button>
  2
</button>
```
## Change
```
UPDATE: button::text "1" => "2"
UPDATE: div::text@6 "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Hello 3
</div>
<button>
  3
</button>
```
## Change
```
UPDATE: button::text "2" => "3"
UPDATE: div::text@6 "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Hello 4
</div>
<button>
  4
</button>
```
## Change
```
UPDATE: button::text "3" => "4"
UPDATE: div::text@6 "3" => "4"
```
