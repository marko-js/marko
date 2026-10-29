# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  plain
</button>
<input
  value="w-b"
/>
<textarea>
  w-b
</textarea>
```
## Change
```
INSERT: button, input, textarea
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  plain
</button>
<input
  default-value="w-c"
  value="w-b"
/>
<textarea
  default-value="w-c"
>
  w-b
</textarea>
```
## Change
```
UPDATE: input[value] "w-b" => "w-c"
REMOVE: textarea::text("w-b")
INSERT: textarea::text("w-c")
```

# Update
```js
document.querySelector("button").click();
```
```html
<button>
  plain
</button>
<input
  default-value="p-c"
  value="w-b"
/>
<textarea
  default-value="p-c"
>
  w-b
</textarea>
```
## Change
```
UPDATE: input[value] "w-c" => "p-c"
REMOVE: textarea::text("w-c")
INSERT: textarea::text("p-c")
```

# Update `{"show":true,"label":"d"}`
```html
<button>
  plain
</button>
<input
  default-value="p-d"
  value="w-b"
/>
<textarea
  default-value="p-d"
>
  w-b
</textarea>
```
## Change
```
UPDATE: input[value] "p-c" => "p-d"
REMOVE: textarea::text("p-c")
INSERT: textarea::text("p-d")
```
