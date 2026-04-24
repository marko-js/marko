# Render
```html
<div>
  <button>
    Test
  </button>
  <!--M_*2 #button/0-->
  <!--M_|1 #text/0 2-->
  <div />
  <!--M_*1 #div/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      items: ["hello"]
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_items 2"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<div>
  <!--M_|1 #text/0 2-->
  <!--M_*2 #button/0-->
  <div>
    hello
  </div>
  <!--M_*1 #div/1-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      items: ["hello"]
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_1_items 2"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT div/div/#text
REMOVE div/#comment0 after div/#comment1
INSERT div/#comment0
REMOVE button before div/#comment0
```