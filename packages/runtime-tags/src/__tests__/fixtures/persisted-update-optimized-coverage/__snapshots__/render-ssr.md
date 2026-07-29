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
document.querySelector("button").click();
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
<div />
```
## Change
```
REMOVE: div > h2
```
## Console
```
ERROR "navigate() document fallback: Error: span"
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  count 2
</button>
<div />
```
## Change
```
UPDATE: button::text@6 "1" => "2"
```

# Update update frame 1 of 2

# Update `{"id":3,"kind":"custom","tag":"span","$global":{"persisted":true}}`
```html
<button>
  count 2
</button>
<p>
   
</p>
<div />
```
## Change
```
INSERT: p
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  count 3
</button>
<p>
   
</p>
<div />
```
## Change
```
UPDATE: button::text@6 "2" => "3"
```
