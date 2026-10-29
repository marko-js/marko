# Render `{"show":false,"label":"a"}`

# Update `{"show":true,"label":"b"}`
```html
<button>
  plain
</button>
<p
  class="x"
>
  x
</p>
```
## Change
```
INSERT: button, .cM_0, .x
```

# Update `{"show":true,"label":"c"}`
```html
<button>
  plain
</button>
<p
  class="x"
>
  x
</p>
```
## Change
```
REMOVE: .cM_0::text(".cM_0~*{--M_b0:red;}")
INSERT: .cM_0::text(".cM_0~*{--M_b0:blue;}")
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"label":"d"}`
