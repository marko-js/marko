# Render
```html
<textarea>
  before
</textarea>
<!--M_*1 #textarea/0-->
<button>
  update
</button>
<!--M_*1 #button/1-->
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
<textarea
  default-value="after"
>
  before
</textarea>
<!--M_*1 #textarea/0-->
<button>
  update
</button>
<!--M_*1 #button/1-->
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
REMOVE #text in textarea
INSERT textarea/#text
```