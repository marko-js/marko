# Render
```html
<div>
  <button>
    Inc
  </button>
</div>
```

# Update
```html
<div>
  Got: a 0
  <button>
    Inc
  </button>
</div>
```
## Change
```
INSERT: div > :is(::text("Got: "), ::text("a"), ::text(" "), ::text("0"))
UPDATE: div::text@5 "" => "a"
UPDATE: div::text@7 "" => "0"
```

# Update
```html
<div>
  Got: a 0Got: c 0
  <button>
    Inc
  </button>
</div>
```
## Change
```
INSERT: div::text@7 + :is(::text("Got: "), ::text("c"), ::text(" "), ::text("0"))
UPDATE: div::text@13 "" => "c"
UPDATE: div::text@15 "" => "0"
```

# Update
```html
<div>
  Got: a 0Got: b 0Got: c 0
  <button>
    Inc
  </button>
</div>
```
## Change
```
INSERT: div::text@7 + :is(::text("Got: "), ::text("b"), ::text(" "), ::text("0"))
UPDATE: div::text@13 "" => "b"
UPDATE: div::text@15 "" => "0"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Got: a 1Got: b 1Got: c 1
  <button>
    Inc
  </button>
</div>
```
## Change
```
UPDATE: div::text@7 "0" => "1"
UPDATE: div::text@15 "0" => "1"
UPDATE: div::text@23 "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Got: a 2Got: b 2Got: c 2
  <button>
    Inc
  </button>
</div>
```
## Change
```
UPDATE: div::text@7 "1" => "2"
UPDATE: div::text@15 "1" => "2"
UPDATE: div::text@23 "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  Got: a 3Got: b 3Got: c 3
  <button>
    Inc
  </button>
</div>
```
## Change
```
UPDATE: div::text@7 "2" => "3"
UPDATE: div::text@15 "2" => "3"
UPDATE: div::text@23 "2" => "3"
```
