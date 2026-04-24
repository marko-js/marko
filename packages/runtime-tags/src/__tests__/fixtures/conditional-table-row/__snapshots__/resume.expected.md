# Render
```html
<table>
  <tbody>
    <!--M_}1 #tbody/0-->
  </tbody>
</table>
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button").click();
```
```html
<table>
  <tbody>
    <!--M_}1 #tbody/0-->
    <tr>
      <td>
        Hi
      </td>
    </tr>
  </tbody>
</table>
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT table/tbody/tr
```

# Render
```js
container.querySelector("button").click();
```
```html
<table>
  <tbody />
</table>
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
REMOVE #comment, tr in table/tbody
```

# Render
```js
container.querySelector("button").click();
```
```html
<table>
  <tbody>
    <tr>
      <td>
        Hi
      </td>
    </tr>
  </tbody>
</table>
<button>
  Toggle
</button>
<!--M_*1 #button/1-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      show: !1
    }]),
    "__tests__/template.marko_0_show 1"
  ];
  M._.w()
</script>
```

# Mutations
```
INSERT table/tbody/tr
```