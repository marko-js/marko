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
    <!--M_[2-->
    <div>
      Count: 
      <!---->
      1
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={x:1,"#text/2!":_.c={}}},1:_.b,2:_.c},_.b["#text/2("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/components/custom-tag.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("button").click()

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
    <!--M_[2-->
    <div>
      Count: 
      <!---->
      2
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={x:1,"#text/2!":_.c={}}},1:_.b,2:_.c},_.b["#text/2("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/components/custom-tag.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/div3/#text2: "1" => "2"
```


# Render 
container.querySelector("button").click()

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
    <!--M_[2-->
    <div>
      Count: 
      <!---->
      3
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={x:1,"#text/2!":_.c={}}},1:_.b,2:_.c},_.b["#text/2("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/components/custom-tag.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/div3/#text2: "2" => "3"
```


# Render 
container.querySelector("button").click()

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
    <!--M_[2-->
    <div>
      Count: 
      <!---->
      4
      <!--M_*2 #text/0-->
    </div>
    <!--M_]1 #text/2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={x:1,"#text/2!":_.c={}}},1:_.b,2:_.c},_.b["#text/2("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/components/custom-tag.marko_0_x",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "3" => "4"
#document/html0/body1/div3/#text2: "3" => "4"
```