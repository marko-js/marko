# Render
```html
<button>
  0
</button>
<button>
  0
</button>
<div>
  0 0
</div>
```

# Update
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  1
</button>
<button>
  1
</button>
<div>
  1 1
</div>
```
## Change
```
UPDATE: div::text@0 "0" => "1"
UPDATE: div::text@2 "0" => "1"
UPDATE: button:nth-of-type(1)::text "0" => "1"
UPDATE: button:nth-of-type(2)::text "0" => "1"
```

# Update
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  2
</button>
<button>
  2
</button>
<div>
  2 2
</div>
```
## Change
```
UPDATE: div::text@0 "1" => "2"
UPDATE: div::text@2 "1" => "2"
UPDATE: button:nth-of-type(1)::text "1" => "2"
UPDATE: button:nth-of-type(2)::text "1" => "2"
```

# Update
```js
container.querySelectorAll("button").forEach(item => item.click());
```
```html
<button>
  3
</button>
<button>
  3
</button>
<div>
  3 3
</div>
```
## Change
```
UPDATE: div::text@0 "2" => "3"
UPDATE: div::text@2 "2" => "3"
UPDATE: button:nth-of-type(1)::text "2" => "3"
UPDATE: button:nth-of-type(2)::text "2" => "3"
```
