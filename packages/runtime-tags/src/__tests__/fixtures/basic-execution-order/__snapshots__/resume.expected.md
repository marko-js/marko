# Render
```html
<button>
  hide
</button>
<!--M_*1 #button/0-->
hi
<!--M_*2 #text/0-->
<!--M_|1 #text/1 2-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      message_text: "hi"
    },
    {
      _: _.a
    }]),
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
<button>
  hide
</button>
<!--M_*1 #button/0-->
<!--M_|1 #text/1 2-->
<!--M_*2 #text/0-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.b = [0, _.a = {
      message_text: "hi"
    },
    {
      _: _.a
    }]),
    "__tests__/template.marko_0 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment1 after #comment2
INSERT #comment1
REMOVE #text after #comment1
```