# Render `{"color":"red"}`
```html
<svg>
  <style
    class="sM_1"
  >
    .sM_1~*{--M_a0:red;}
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
    .sM_1~*{--M_a0:blue;}
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
REMOVE: .sM_1::text(".sM_1~*{--M_a0:red;}")
INSERT: .sM_1::text(".sM_1~*{--M_a0:blue;}")
```
