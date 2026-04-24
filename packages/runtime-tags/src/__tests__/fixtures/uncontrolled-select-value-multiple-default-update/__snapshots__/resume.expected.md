# Render
```html
<select
  multiple=""
>
  <option />
  <option
    selected=""
    value="a"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<!--M_*1 #select/2-->
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<!--M_*1 #select/3-->
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
<select
  multiple=""
>
  <option />
  <option
    selected=""
    value="a"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    value="b"
  />
</select>
<select
  multiple=""
>
  <option />
  <option
    default-selected=""
    value="b"
  />
</select>
<!--M_*1 #select/2-->
<select
  multiple=""
>
  <option />
  <option
    default-selected=""
    value="b"
  />
</select>
<!--M_*1 #select/3-->
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
UPDATE select3/option1[selected] null => ""
UPDATE select2/option1[selected] null => ""
```