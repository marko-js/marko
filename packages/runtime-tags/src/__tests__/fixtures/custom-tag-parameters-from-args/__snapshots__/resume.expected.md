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
      ,
      <!---->
      10
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Counts: 
      <!---->
      1
      <!--M_*2 #text/0-->
      ,
      <!---->
      10
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/3-->
    <!--M_$1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={x:1,y:10,"#text/3!":_.c={}}},1:_.b,2:_.c},_.b["#text/3("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/tags/custom-tag.marko_0_x_y",0];M._.w()
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
      ,
      <!---->
      11
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Counts: 
      <!---->
      2
      <!--M_*2 #text/0-->
      ,
      <!---->
      11
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/3-->
    <!--M_$1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={x:1,y:10,"#text/3!":_.c={}}},1:_.b,2:_.c},_.b["#text/3("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/tags/custom-tag.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "1" => "2"
#document/html0/body1/button0/#text4: "10" => "11"
#document/html0/body1/div3/#text2: "1" => "2"
#document/html0/body1/div3/#text6: "10" => "11"
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
      ,
      <!---->
      12
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Counts: 
      <!---->
      3
      <!--M_*2 #text/0-->
      ,
      <!---->
      12
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/3-->
    <!--M_$1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={x:1,y:10,"#text/3!":_.c={}}},1:_.b,2:_.c},_.b["#text/3("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/tags/custom-tag.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "2" => "3"
#document/html0/body1/button0/#text4: "11" => "12"
#document/html0/body1/div3/#text2: "2" => "3"
#document/html0/body1/div3/#text6: "11" => "12"
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
      ,
      <!---->
      13
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Counts: 
      <!---->
      4
      <!--M_*2 #text/0-->
      ,
      <!---->
      13
      <!--M_*2 #text/1-->
    </div>
    <!--M_]1 #text/3-->
    <!--M_$1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={"#childScope/0":_.b={x:1,y:10,"#text/3!":_.c={}}},1:_.b,2:_.c},_.b["#text/3("]=_._["__tests__/template.marko_1_renderer"](_.a),_.d),1,"__tests__/tags/custom-tag.marko_0_x_y",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/button0/#text0: "3" => "4"
#document/html0/body1/button0/#text4: "12" => "13"
#document/html0/body1/div3/#text2: "3" => "4"
#document/html0/body1/div3/#text6: "12" => "13"
```