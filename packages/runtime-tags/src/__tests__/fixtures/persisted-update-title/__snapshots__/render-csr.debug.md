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

# Update `{"$global":{"persisted":true,"docTitle":"Detail","serializedGlobals":{"docTitle":true}}}`

# Update
```js
container.querySelector("output").textContent = container.querySelector("title").textContent;
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
REMOVE: output::text("App — Home")
INSERT: output::text("App — Home")
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
  Home
</p>
<output>
  App — Home
</output>
```
## Change
```
UPDATE: button::text "1" => "2"
```
