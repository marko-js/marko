# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      1
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),1,"__tests__/tags/child.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      2
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),1,"__tests__/tags/child.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/div2/#text0: "1" => "2"
```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      3
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),1,"__tests__/tags/child.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/div2/#text0: "2" => "3"
```


# Render 
container.querySelector("button.inc").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      4
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <div>
      4
      <!--M_*0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_data/var"](_.a),_.c),1,"__tests__/tags/child.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "3" => "4"
#document/html0/body1/div2/#text0: "3" => "4"
```