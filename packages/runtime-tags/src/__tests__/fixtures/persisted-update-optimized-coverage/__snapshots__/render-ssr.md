# Render `{"id":1,"kind":"native","tag":"div","$global":{"persisted":true}}`
```html
<button>
  count 0
</button>
<div>
  <h2>
    server title 1
  </h2>
</div>
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  count 1
</button>
<div>
  <h2>
    server title 1
  </h2>
</div>
```
## Change
```
UPDATE: button::text@6 "0" => "1"
```

# Update `{"id":2,"kind":"dynamic","tag":"span","$global":{"persisted":true}}`
```html
<button>
  count 1
</button>
<span>
  server title 2
</span>
<div />
```
## Change
```
INSERT: button + span
REMOVE: div > h2
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  count 2
</button>
<span>
  server title 2
</span>
<div />
```
## Change
```
UPDATE: button::text@6 "1" => "2"
```

# Update `{"id":3,"kind":"custom","tag":"span","$global":{"persisted":true}}`
```html
<button>
  count 2
</button>
<p />
<div />
```
## Change
```
INSERT: p
REMOVE: button + span
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  count 3
</button>
<p />
<div />
```
## Change
```
UPDATE: button::text@6 "2" => "3"
```
