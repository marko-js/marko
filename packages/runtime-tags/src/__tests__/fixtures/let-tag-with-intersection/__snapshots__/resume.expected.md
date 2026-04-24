# Render
```html
<button>
  1
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
2
<!--M_*1 #text/2-->
<!---->
3
<!--M_*1 #text/3-->
<!---->
5
<!--M_*1 #text/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
    }]),
    "__tests__/template.marko_0_x 1"
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
  2
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
3
<!--M_*1 #text/2-->
<!---->
4
<!--M_*1 #text/3-->
<!---->
7
<!--M_*1 #text/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "1" => "2"
UPDATE #text0 "2" => "3"
UPDATE #text2 "3" => "4"
UPDATE #text4 "5" => "7"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  3
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
4
<!--M_*1 #text/2-->
<!---->
5
<!--M_*1 #text/3-->
<!---->
9
<!--M_*1 #text/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "2" => "3"
UPDATE #text0 "3" => "4"
UPDATE #text2 "4" => "5"
UPDATE #text4 "7" => "9"
```

# Render
```js
container.querySelector("button").click();
```
```html
<button>
  4
  <!--M_*1 #text/1-->
</button>
<!--M_*1 #button/0-->
5
<!--M_*1 #text/2-->
<!---->
6
<!--M_*1 #text/3-->
<!---->
11
<!--M_*1 #text/4-->
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      x: 1
    }]),
    "__tests__/template.marko_0_x 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button/#text "3" => "4"
UPDATE #text0 "4" => "5"
UPDATE #text2 "5" => "6"
UPDATE #text4 "9" => "11"
```