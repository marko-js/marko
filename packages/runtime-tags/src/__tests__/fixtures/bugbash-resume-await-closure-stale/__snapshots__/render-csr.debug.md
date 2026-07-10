# Render
```html
<button>
  inc
</button>
<div>
  count:0
</div>
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
loading
```
## Change
```
INSERT: div + ::text("loading")
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
INSERT: div + span
REMOVE: span + ::text("loading")
UPDATE: span::text@10 "" => "1"
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
