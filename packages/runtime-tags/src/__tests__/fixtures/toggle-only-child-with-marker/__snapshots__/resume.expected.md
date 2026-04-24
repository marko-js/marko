# Render `{"show":true}`

```html
<button>
  <span
    id="count"
  >
    0
  </span>
</button>
<!--M_*1 #button/0-->
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
<button>
  <span
    id="count"
  >
    1
  </span>
</button>
<!--M_*1 #button/0-->
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
REMOVE #text in button/span
INSERT button/span/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  <span
    id="count"
  >
    2
  </span>
</button>
<!--M_*1 #button/0-->
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
REMOVE #text in button/span
INSERT button/span/#text
```