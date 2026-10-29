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
REMOVE: .cM_0::text(".cM_0~*{}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcreated-19child-19let-19fn-19style-1btags-1bouter-1amarko_0:red;}")
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
REMOVE: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcreated-19child-19let-19fn-19style-1btags-1bouter-1amarko_0:red;}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bcreated-19child-19let-19fn-19style-1btags-1bouter-1amarko_0:blue;}")
```

# Update
```js
document.querySelector("button").click();
```

# Update `{"show":true,"label":"d"}`
