# Render
```html
<input
  type="checkbox"
/>
<input
  type="checkbox"
/>
<!--M_*1 #input/0-->
<input
  type="checkbox"
/>
<!--M_*1 #input/1-->
<button>
  Update
</button>
<!--M_*1 #button/2-->
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
  type="checkbox"
/>
<input
  default-checked=""
  type="checkbox"
/>
<!--M_*1 #input/0-->
<input
  default-checked=""
  type="checkbox"
/>
<!--M_*1 #input/1-->
<button>
  Update
</button>
<!--M_*1 #button/2-->
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
UPDATE input1[checked] null => ""
UPDATE input2[checked] null => ""
```