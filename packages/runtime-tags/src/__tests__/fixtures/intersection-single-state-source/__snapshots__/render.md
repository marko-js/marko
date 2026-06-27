# Render
```html
<button>
  increment
</button>
<div>
  -- 1 -- 2 -- 3 -- 5
</div>
```

# Update
```js
c.querySelector("button").click();
```
```html
<button>
  increment
</button>
<div>
  -- 2 -- 4 -- 6 -- 10
</div>
```
## Change
```
UPDATE: div::text@3 "1" => "2"
UPDATE: div::text@8 "2" => "4"
UPDATE: div::text@13 "3" => "6"
UPDATE: div::text@18 "5" => "10"
```

# Update
```js
c.querySelector("button").click();
```
```html
<button>
  increment
</button>
<div>
  -- 3 -- 6 -- 9 -- 15
</div>
```
## Change
```
UPDATE: div::text@3 "2" => "3"
UPDATE: div::text@8 "4" => "6"
UPDATE: div::text@13 "6" => "9"
UPDATE: div::text@18 "10" => "15"
```
