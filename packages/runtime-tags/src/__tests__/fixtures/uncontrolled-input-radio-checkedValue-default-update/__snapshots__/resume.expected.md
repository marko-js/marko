# Render
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  type="radio"
  value="b"
/>
<!--M_*1 #input/2-->
<input
  type="radio"
  value="b"
/>
<!--M_*1 #input/3-->
<button>
  Update
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<input
  checked=""
  type="radio"
  value="a"
/>
<input
  type="radio"
  value="b"
/>
<input
  default-checked=""
  type="radio"
  value="b"
/>
<!--M_*1 #input/2-->
<input
  default-checked=""
  type="radio"
  value="b"
/>
<!--M_*1 #input/3-->
<button>
  Update
</button>
<!--M_*1 #button/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE input2[checked] null => ""
UPDATE input3[checked] null => ""
```