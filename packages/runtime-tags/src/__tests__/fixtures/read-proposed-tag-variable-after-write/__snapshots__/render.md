# Render
```html
<div>
  <button>
    0
  </button>
  <div />
  <div />
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    1
  </button>
  <div>
    0
  </div>
  <div>
    1
  </div>
</div>
```
## Change
```
INSERT: div > div:nth-of-type(1)::text("0")
INSERT: div > div:nth-of-type(2)::text("1")
UPDATE: div > button::text "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    2
  </button>
  <div>
    1
  </div>
  <div>
    2
  </div>
</div>
```
## Change
```
REMOVE: div > div:nth-of-type(1)::text("0")
INSERT: div > div:nth-of-type(1)::text("1")
REMOVE: div > div:nth-of-type(2)::text("1")
INSERT: div > div:nth-of-type(2)::text("2")
UPDATE: div > button::text "1" => "2"
```

# Update
```js
container.querySelector("button").click();
```
```html
<div>
  <button>
    3
  </button>
  <div>
    2
  </div>
  <div>
    3
  </div>
</div>
```
## Change
```
REMOVE: div > div:nth-of-type(1)::text("1")
INSERT: div > div:nth-of-type(1)::text("2")
REMOVE: div > div:nth-of-type(2)::text("2")
INSERT: div > div:nth-of-type(2)::text("3")
UPDATE: div > button::text "2" => "3"
```
