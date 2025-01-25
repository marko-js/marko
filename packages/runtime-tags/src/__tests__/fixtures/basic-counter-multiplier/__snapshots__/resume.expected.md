# Render {}
```html
<html>
  <head />
  <body>
    <button
      id="multiplier"
    >
      increase multiplier (
      <!---->
      1
      <!--M_*0 #text/1-->
      )
    </button>
    <!--M_*0 #button/0-->
    <button
      id="count"
    >
      increase count
    </button>
    <!--M_*0 #button/2-->
    <div>
      0
      <!--M_*0 #text/3-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{count:0,multiplier:1}}),0,"__tests__/template.marko_0_count",0,"__tests__/template.marko_0_multiplier",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button#count").click()

```html
<html>
  <head />
  <body>
    <button
      id="multiplier"
    >
      increase multiplier (
      <!---->
      1
      <!--M_*0 #text/1-->
      )
    </button>
    <!--M_*0 #button/0-->
    <button
      id="count"
    >
      increase count
    </button>
    <!--M_*0 #button/2-->
    <div>
      1
      <!--M_*0 #text/3-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{count:0,multiplier:1}}),0,"__tests__/template.marko_0_count",0,"__tests__/template.marko_0_multiplier",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div4/#text0: "0" => "1"
```


# Render 
container.querySelector("button#count").click()

```html
<html>
  <head />
  <body>
    <button
      id="multiplier"
    >
      increase multiplier (
      <!---->
      1
      <!--M_*0 #text/1-->
      )
    </button>
    <!--M_*0 #button/0-->
    <button
      id="count"
    >
      increase count
    </button>
    <!--M_*0 #button/2-->
    <div>
      2
      <!--M_*0 #text/3-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{count:0,multiplier:1}}),0,"__tests__/template.marko_0_count",0,"__tests__/template.marko_0_multiplier",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div4/#text0: "1" => "2"
```


# Render 
container.querySelector("button#multiplier").click()

```html
<html>
  <head />
  <body>
    <button
      id="multiplier"
    >
      increase multiplier (
      <!---->
      2
      <!--M_*0 #text/1-->
      )
    </button>
    <!--M_*0 #button/0-->
    <button
      id="count"
    >
      increase count
    </button>
    <!--M_*0 #button/2-->
    <div>
      4
      <!--M_*0 #text/3-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a={0:{count:0,multiplier:1}}),0,"__tests__/template.marko_0_count",0,"__tests__/template.marko_0_multiplier",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text2: "1" => "2"
#document/html0/body1/div4/#text0: "2" => "4"
```