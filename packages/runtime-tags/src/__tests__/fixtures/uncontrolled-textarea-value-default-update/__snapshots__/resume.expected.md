# Render
```html
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<!--M_*1 #textarea/2-->
<textarea>
  a
</textarea>
<!--M_*1 #textarea/3-->
<textarea>
  a
</textarea>
<!--M_*1 #textarea/4-->
<textarea>
  a
</textarea>
<!--M_*1 #textarea/5-->
<button>
  Update
</button>
<!--M_*1 #button/6-->
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
<textarea>
  a
</textarea>
<textarea>
  a
</textarea>
<textarea
  default-value="b"
>
  a
</textarea>
<!--M_*1 #textarea/2-->
<textarea
  default-value="b"
>
  a
</textarea>
<!--M_*1 #textarea/3-->
<textarea
  default-value="b"
>
  a
</textarea>
<!--M_*1 #textarea/4-->
<textarea
  default-value="b"
>
  a
</textarea>
<!--M_*1 #textarea/5-->
<button>
  Update
</button>
<!--M_*1 #button/6-->
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
REMOVE #text in textarea2
INSERT textarea2/#text
REMOVE #text in textarea3
INSERT textarea3/#text
REMOVE #text in textarea4
INSERT textarea4/#text
REMOVE #text in textarea5
INSERT textarea5/#text
```