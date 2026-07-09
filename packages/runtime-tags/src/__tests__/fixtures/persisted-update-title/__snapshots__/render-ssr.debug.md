# Render `{"$global":{"persisted":true,"docTitle":"Home","serializedGlobals":{"docTitle":true}}}`
```html
<button>
  0
</button>
<p>
  Home
</p>
<output />
```

# Update
```js
container.querySelector("output").textContent = container.querySelector("title").textContent;
```
```html
<button>
  0
</button>
<p>
  Home
</p>
<output>
  App — Home
</output>
```
## Change
```
INSERT: output::text("App — Home")
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  1
</button>
<p>
  Home
</p>
<output>
  App — Home
</output>
```
## Change
```
UPDATE: button::text "0" => "1"
```

# Update `{"$global":{"persisted":true,"docTitle":"Detail","serializedGlobals":{"docTitle":true}}}`
```html
<button>
  1
</button>
<p>
  Detail
</p>
<output>
  App — Home
</output>
```
## Change
```
UPDATE: p::text "Home" => "Detail"
```

# Update
```js
container.querySelector("output").textContent = container.querySelector("title").textContent;
```
```html
<button>
  1
</button>
<p>
  Detail
</p>
<output>
  App — Detail
</output>
```
## Change
```
REMOVE: output::text("App — Home")
INSERT: output::text("App — Detail")
```

# Update
```js
container.querySelector("button").click();
```
```html
<button>
  2
</button>
<p>
  Detail
</p>
<output>
  App — Detail
</output>
```
## Change
```
UPDATE: button::text "1" => "2"
```
