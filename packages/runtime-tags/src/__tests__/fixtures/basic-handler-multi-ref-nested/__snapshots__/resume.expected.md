# Render
```html
<button>
  0
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      a: [0],
      b: 1
    }]),
    "__tests__/template.marko_0_a_b 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      a: [0],
      b: 1
    }]),
    "__tests__/template.marko_0_a_b 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "0" => "1"
```