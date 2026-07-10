# Render
```html
<button>
  inc
</button>
<div>
  count:0
</div>
loading
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  count:1
</div>
loading
```
## Change
```
UPDATE: div::text@6 "0" => "1"
```

# Update
```html
<button>
  inc
</button>
<div>
  count:1
</div>
<span>
  v closure:1
</span>
```
## Change
```
INSERT: span::text("v closure:")
INSERT: span::text@0 + ::text("1")
REMOVE: ::text("loading")
INSERT: div + span
UPDATE: span::text@10 "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<div>
  count:2
</div>
<span>
  v closure:2
</span>
```
## Change
```
UPDATE: div::text@6 "1" => "2"
UPDATE: span::text@10 "1" => "2"
```
