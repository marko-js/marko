# Render `{"show":false}`
```html
<p>
  0
</p>
```

# Update `{"show":true}`
```html
<textarea />
<button>
  +
</button>
<textarea />
<button>
  +
</button>
<p>
  0
</p>
```
## Change
```
INSERT: textarea, button, textarea, button
```

# Update
```js
document
.querySelector("textarea") 
.dispatchEvent(
  new document.defaultView.Event("keydown", { bubbles: true }),
);
```
```html
<textarea />
<button>
  +
</button>
<textarea />
<button>
  +
</button>
<p>
  1
</p>
```
## Change
```
UPDATE: p::text "0" => "1"
```

# Update
```js
document.querySelector("button").click();
```
```html
<textarea />
<button>
  +
</button>
<textarea />
<button>
  +
</button>
<p>
  11
</p>
```
## Change
```
UPDATE: p::text "1" => "11"
```
