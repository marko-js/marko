# Render `{"color":"red"}`
```html
<svg>
  <style
    class="sM_1"
  >
    .sM_1~*{--M___tests__-1btemplate-1amarko_0:red;}
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
    class="sM_1"
  >
    .sM_1~*{--M___tests__-1btemplate-1amarko_0:blue;}
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
REMOVE: .sM_1::text(".sM_1~*{--M___tests__-1btemplate-1amarko_0:red;}")
INSERT: .sM_1::text(".sM_1~*{--M___tests__-1btemplate-1amarko_0:blue;}")
```
