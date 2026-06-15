# Render
```html
<button>
  inc 2
</button>
<div>
  d2
  <div>
    d1
    <div>
      d0
    </div>
  </div>
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc 3
</button>
<div>
  d3
  <div>
    d2
    <div>
      d1
      <div>
        d0
      </div>
    </div>
  </div>
</div>
```
## Change
```
UPDATE: button::text@4 "2" => "3"
UPDATE: div::text@1 "2" => "3"
UPDATE: div > div::text@1 "1" => "2"
UPDATE: div > div > div::text@1 "0" => "1"
INSERT: div > div > div::text@1 + div
UPDATE: div > div > div > div::text@1 "" => "0"
```
