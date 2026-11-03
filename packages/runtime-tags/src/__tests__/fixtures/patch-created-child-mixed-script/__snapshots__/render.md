# Render `{"show":false,"a":"a1"}`

# Update `{"show":true,"a":"a2"}`
```html
<p>
  a2
</p>
<button>
  +
</button>
```
## Change
```
INSERT: p, button
INSERT: #document > html > head > title
INSERT: #document > html > head > title::text("a20")
```

# Update
```js
document.querySelector("button").click();
```
```html
<p>
  a2
</p>
<button>
  +
</button>
```
## Change
```
REMOVE: #document > html > head > title::text("a20")
INSERT: #document > html > head > title::text("a21")
```

# Update `{"show":true,"a":"a3"}`
```html
<p>
  a3
</p>
<button>
  +
</button>
```
## Change
```
UPDATE: p::text "a2" => "a3"
REMOVE: #document > html > head > title::text("a21")
INSERT: #document > html > head > title::text("a31")
```
