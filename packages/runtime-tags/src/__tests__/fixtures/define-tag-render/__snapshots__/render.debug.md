# Render
```html
<div>
  Hello Ryan 1
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
  Hello Ryan 2
</div>
<button>
  2
</button>
```
## Change
```
UPDATE: div::text@11 "1" => "2"
UPDATE: button::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Hello Ryan 3
</div>
<button>
  3
</button>
```
## Change
```
UPDATE: div::text@11 "2" => "3"
UPDATE: button::text "2" => "3"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Hello Ryan 4
</div>
<button>
  4
</button>
```
## Change
```
UPDATE: div::text@11 "3" => "4"
UPDATE: button::text "3" => "4"
```
