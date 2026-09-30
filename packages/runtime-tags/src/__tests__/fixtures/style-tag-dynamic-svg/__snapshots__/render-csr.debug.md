# Render `{"color":"red"}`
```html
<svg>
  <style
    class="cM_0"
  >
    .cM_0~*{--M___tests__-1btemplate-1amarko_0:red;}
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

# Update `click("button")`
```html
<svg>
  <style
    class="cM_0"
  >
    .cM_0~*{--M___tests__-1btemplate-1amarko_0:blue;}
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
REMOVE: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:red;}")
INSERT: .cM_0::text(".cM_0~*{--M___tests__-1btemplate-1amarko_0:blue;}")
```
