# Render `{"items":[{"name":"a"},{"name":"b"},{"name":"c"},{"name":"d"}]}`
```html
<button>
  inc
</button>
<span>
  a: 0
</span>
<span>
  b: 0
</span>
<span>
  c: 0
</span>
<span>
  d: 0
</span>
<div>
  <span>
    a
  </span>
  <em>
    0
  </em>
</div>
<div>
  <span>
    b
  </span>
  <em>
    0
  </em>
</div>
<div>
  <span>
    c
  </span>
  <em>
    0
  </em>
</div>
<div>
  <span>
    d
  </span>
  <em>
    0
  </em>
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
<span>
  a: 1
</span>
<span>
  b: 1
</span>
<span>
  c: 1
</span>
<span>
  d: 1
</span>
<div>
  <span>
    a
  </span>
  <em>
    1
  </em>
</div>
<div>
  <span>
    b
  </span>
  <em>
    1
  </em>
</div>
<div>
  <span>
    c
  </span>
  <em>
    1
  </em>
</div>
<div>
  <span>
    d
  </span>
  <em>
    1
  </em>
</div>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@3 "0" => "1"
UPDATE: span:nth-of-type(2)::text@3 "0" => "1"
UPDATE: span:nth-of-type(3)::text@3 "0" => "1"
UPDATE: span:nth-of-type(4)::text@3 "0" => "1"
UPDATE: div:nth-of-type(1) > em::text "0" => "1"
UPDATE: div:nth-of-type(2) > em::text "0" => "1"
UPDATE: div:nth-of-type(3) > em::text "0" => "1"
UPDATE: div:nth-of-type(4) > em::text "0" => "1"
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  inc
</button>
<span>
  a: 2
</span>
<span>
  b: 2
</span>
<span>
  c: 2
</span>
<span>
  d: 2
</span>
<div>
  <span>
    a
  </span>
  <em>
    2
  </em>
</div>
<div>
  <span>
    b
  </span>
  <em>
    2
  </em>
</div>
<div>
  <span>
    c
  </span>
  <em>
    2
  </em>
</div>
<div>
  <span>
    d
  </span>
  <em>
    2
  </em>
</div>
```
## Change
```
UPDATE: span:nth-of-type(1)::text@3 "1" => "2"
UPDATE: span:nth-of-type(2)::text@3 "1" => "2"
UPDATE: span:nth-of-type(3)::text@3 "1" => "2"
UPDATE: span:nth-of-type(4)::text@3 "1" => "2"
UPDATE: div:nth-of-type(1) > em::text "1" => "2"
UPDATE: div:nth-of-type(2) > em::text "1" => "2"
UPDATE: div:nth-of-type(3) > em::text "1" => "2"
UPDATE: div:nth-of-type(4) > em::text "1" => "2"
```
