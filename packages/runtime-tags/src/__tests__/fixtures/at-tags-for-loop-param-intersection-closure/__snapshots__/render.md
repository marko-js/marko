# Render
```html
246
<button>
  Multiplier: 2
</button>
```

# Update
```js
container.querySelector("button").click();
```
```html
369
<button>
  Multiplier: 3
</button>
```
## Change
```
UPDATE: button::text@12 "2" => "3"
UPDATE: ::text@0 "2" => "3"
UPDATE: ::text@1 "4" => "6"
UPDATE: ::text@2 "6" => "9"
```

# Update
```js
container.querySelector("button").click();
```
```html
4812
<button>
  Multiplier: 4
</button>
```
## Change
```
UPDATE: button::text@12 "3" => "4"
UPDATE: ::text@0 "3" => "4"
UPDATE: ::text@1 "6" => "8"
UPDATE: ::text@2 "9" => "12"
```

# Update
```js
container.querySelector("button").click();
```
```html
51015
<button>
  Multiplier: 5
</button>
```
## Change
```
UPDATE: button::text@12 "4" => "5"
UPDATE: ::text@0 "4" => "5"
UPDATE: ::text@1 "8" => "10"
UPDATE: ::text@3 "12" => "15"
```
