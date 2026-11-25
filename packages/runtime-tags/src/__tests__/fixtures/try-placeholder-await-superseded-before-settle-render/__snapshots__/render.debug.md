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
REMOVE: ::text("idle")
INSERT: ::text("LOADING")
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
REMOVE: ::text("LOADING")
INSERT: ::text("second")
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
REMOVE: ::text("second")
INSERT: ::text("LOADING")
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
REMOVE: ::text("LOADING")
INSERT: ::text("fourth")
```
