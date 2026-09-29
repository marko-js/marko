# Render
```html
<button
  id="first"
>
  first
</button>
<button
  id="third"
>
  third
</button>
idle
```

# Update
```js
document.querySelector("#first").click();
```

# Update
```html
<button
  id="first"
>
  first
</button>
<button
  id="third"
>
  third
</button>
LOADING
```
## Change
```
INSERT: #third + ::text("LOADING")
REMOVE: ::text + ::text("idle")
```

# Update
```html
<button
  id="first"
>
  first
</button>
<button
  id="third"
>
  third
</button>
second
```
## Change
```
INSERT: #third + ::text("second")
REMOVE: ::text + ::text("LOADING")
```

# Update
```js
document.querySelector("#third").click();
```

# Update
```html
<button
  id="first"
>
  first
</button>
<button
  id="third"
>
  third
</button>
LOADING
```
## Change
```
INSERT: #third + ::text("LOADING")
REMOVE: ::text + ::text("second")
```

# Update
```html
<button
  id="first"
>
  first
</button>
<button
  id="third"
>
  third
</button>
fourth
```
## Change
```
INSERT: #third + ::text("fourth")
REMOVE: ::text + ::text("LOADING")
```
