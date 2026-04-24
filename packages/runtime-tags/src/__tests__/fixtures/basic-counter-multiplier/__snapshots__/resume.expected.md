# Render
```html
<button
  id="multiplier"
>
  increase multiplier (
  <!---->
  1
  <!--M_*1 #text/1-->
  )
</button>
<!--M_*1 #button/0-->
<button
  id="count"
>
  increase count
</button>
<!--M_*1 #button/2-->
<div>
  0
  <!--M_*1 #text/3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      multiplier: 1
    }]),
    "__tests__/template.marko_0_count 1 __tests__/template.marko_0_multiplier 1"
  ];
  M._.w()
</script>
```


# Render
```js
container.querySelector("button#count").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (
  <!---->
  1
  <!--M_*1 #text/1-->
  )
</button>
<!--M_*1 #button/0-->
<button
  id="count"
>
  increase count
</button>
<!--M_*1 #button/2-->
<div>
  1
  <!--M_*1 #text/3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      multiplier: 1
    }]),
    "__tests__/template.marko_0_count 1 __tests__/template.marko_0_multiplier 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text "0" => "1"
```

# Render
```js
container.querySelector("button#count").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (
  <!---->
  1
  <!--M_*1 #text/1-->
  )
</button>
<!--M_*1 #button/0-->
<button
  id="count"
>
  increase count
</button>
<!--M_*1 #button/2-->
<div>
  2
  <!--M_*1 #text/3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      multiplier: 1
    }]),
    "__tests__/template.marko_0_count 1 __tests__/template.marko_0_multiplier 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE div/#text "1" => "2"
```

# Render
```js
container.querySelector("button#multiplier").click();
```
```html
<button
  id="multiplier"
>
  increase multiplier (
  <!---->
  2
  <!--M_*1 #text/1-->
  )
</button>
<!--M_*1 #button/0-->
<button
  id="count"
>
  increase count
</button>
<!--M_*1 #button/2-->
<div>
  4
  <!--M_*1 #text/3-->
</div>
<script>
  WALKER_RUNTIME("M")("_");
  M._.r = [_ =&gt; (_.a = [0,
    {
      count: 0,
      multiplier: 1
    }]),
    "__tests__/template.marko_0_count 1 __tests__/template.marko_0_multiplier 1"
  ];
  M._.w()
</script>
```

# Mutations
```
UPDATE button0/#text1 "1" => "2"
UPDATE div/#text "2" => "4"
```