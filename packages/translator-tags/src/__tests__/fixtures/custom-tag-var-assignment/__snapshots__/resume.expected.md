# Render {}
```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      1
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      class="inc-parent"
    >
      1
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*0 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:1,"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/components/counter.marko_0/valueChange"](_.b),_.c),1,"__tests__/components/counter.marko_0_x",0,"__tests__/template.marko_0",0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button.inc-child").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      2
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      class="inc-parent"
    >
      2
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*0 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:1,"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/components/counter.marko_0/valueChange"](_.b),_.c),1,"__tests__/components/counter.marko_0_x",0,"__tests__/template.marko_0",0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/button2/#text0: "1" => "2"
```


# Render 
container.querySelector("button.inc-parent").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      3
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      class="inc-parent"
    >
      3
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*0 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:1,"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/components/counter.marko_0/valueChange"](_.b),_.c),1,"__tests__/components/counter.marko_0_x",0,"__tests__/template.marko_0",0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/button2/#text0: "2" => "3"
```


# Render 
container.querySelector("button.reset").click()

```html
<html>
  <head />
  <body>
    <button
      class="inc-child"
    >
      0
      <!--M_*1 #text/1-->
    </button>
    <!--M_*1 #button/0-->
    <button
      class="inc-parent"
    >
      0
      <!--M_*0 #text/2-->
    </button>
    <!--M_*0 #button/1-->
    <button
      class="reset"
    >
      reset
    </button>
    <!--M_*0 #button/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c={0:_.a={count:1,"#childScope/0":_.b={x:1}},1:_.b},_.b["/"]=_._["__tests__/template.marko_0_count/var"](_.a),_.b["@"]=_._["__tests__/components/counter.marko_0/valueChange"](_.b),_.c),1,"__tests__/components/counter.marko_0_x",0,"__tests__/template.marko_0",0,"__tests__/template.marko_0_count",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "3" => "0"
#document/html0/body1/button2/#text0: "3" => "0"
```