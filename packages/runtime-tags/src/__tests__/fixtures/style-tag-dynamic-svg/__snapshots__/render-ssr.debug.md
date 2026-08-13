# Render `{"color":"red"}`
```html
<svg>
  <style
    class="sM_1"
  >
    .sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:red;}
  </style>
  <circle
    cx="5"
    cy="5"
    r="4"
  />
</svg>
<button>
  update
</button>
```

# Update
```js
document.querySelector("button").click();
```
```html
<svg>
  <style
    class="sM_1"
  >
    .sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:blue;}
  </style>
  <circle
    cx="5"
    cy="5"
    r="4"
  />
</svg>
<button>
  update
</button>
```
## Change
```
REMOVE: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:red;}")
INSERT: .sM_1::text(".sM_1~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:blue;}")
```
