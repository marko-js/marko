# Render
```html
<button>
  inc
</button>
<div>
  2 | 5
</div>
```

# Update
```js
c.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  4 | 10
</div>
```
## Change
```
UPDATE: div::text@0 "2" => "4"
UPDATE: div::text@4 "5" => "10"
```

# Update
```js
c.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  6 | 15
</div>
```
## Change
```
UPDATE: div::text@0 "4" => "6"
UPDATE: div::text@4 "10" => "15"
```
