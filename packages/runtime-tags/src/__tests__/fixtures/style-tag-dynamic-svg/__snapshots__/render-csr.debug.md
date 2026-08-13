# Render `{"color":"red"}`
```html
<svg>
  <style
    class="cM_0"
  >
    .cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:red;}
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
    class="cM_0"
  >
    .cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:blue;}
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
REMOVE: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:red;}")
INSERT: .cM_0::text(".cM_0~*{--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bstyle-19tag-19dynamic-19svg-1btemplate-1amarko_0:blue;}")
```
