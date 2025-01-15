# Render {}
```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <!--M_[1-->
      <button
        id="inner"
      />
      <!--M_*1 #button/0-->
      <button
        id="count"
      >
        0
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
      <!--M_$2-->
      <!--M_|1 #text/1 2-->
      <!--M_$1-->
      <!--M_]0 #text/1-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```

```


# Render 
container.querySelector("#count").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <!--M_[1-->
      <button
        id="inner"
      />
      <!--M_*1 #button/0-->
      <button
        id="count"
      >
        1
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
      <!--M_$2-->
      <!--M_|1 #text/1 2-->
      <!--M_$1-->
      <!--M_]0 #text/1-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button5/#text0: "0" => "1"
```


# Render 
container.querySelector("#count").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <!--M_[1-->
      <button
        id="inner"
      />
      <!--M_*1 #button/0-->
      <button
        id="count"
      >
        2
        <!--M_*2 #text/1-->
      </button>
      <!--M_*2 #button/0-->
      <!--M_$2-->
      <!--M_|1 #text/1 2-->
      <!--M_$1-->
      <!--M_]0 #text/1-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button5/#text0: "1" => "2"
```


# Render 
container.querySelector("#inner").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <!--M_[1-->
      <button
        id="inner"
      />
      <!--M_*1 #button/0-->
      <!--M_|1 #text/1 2-->
      <!--M_*2 #button/0-->
      <!--M_$2-->
      <!--M_$1-->
      <!--M_]0 #text/1-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/#comment5 after #document/html0/body1/div0/#comment7
inserted #document/html0/body1/div0/#comment5
removed button after #document/html0/body1/div0/#comment5
```


# Render 
container.querySelector("#inner").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <!--M_[1-->
      <button
        id="inner"
      />
      <!--M_*1 #button/0-->
      <button
        id="count"
      >
        2
      </button>
      <!--M_*2 #button/0-->
      <!--M_$2-->
      <!--M_$1-->
      <!--M_]0 #text/1-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/button5
removed #comment after #document/html0/body1/div0/button5
#document/html0/body1/div0/button5/#text0: " " => "2"
```


# Render 
container.querySelector("#count").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <!--M_[1-->
      <button
        id="inner"
      />
      <!--M_*1 #button/0-->
      <button
        id="count"
      >
        3
      </button>
      <!--M_*2 #button/0-->
      <!--M_$2-->
      <!--M_$1-->
      <!--M_]0 #text/1-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button5/#text0: "2" => "3"
```


# Render 
container.querySelector("#outer").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <!--M_]0 #text/1-->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/div0/#comment2 after #comment
inserted #document/html0/body1/div0/#comment2
removed #comment after #document/html0/body1/div0/#comment2
removed button after #document/html0/body1/div0/#comment2
removed #comment after #document/html0/body1/div0/#comment2
removed button after #document/html0/body1/div0/#comment2
removed #comment after #document/html0/body1/div0/#comment2
removed #comment after #document/html0/body1/div0/#comment2
removed #comment after #document/html0/body1/div0/#comment2
```


# Render 
container.querySelector("#outer").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <button
        id="inner"
      />
      <button
        id="count"
      >
        3
      </button>
      <!---->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div0/button2
inserted #text
inserted #document/html0/body1/div0/#comment4
removed #comment after #document/html0/body1/div0/#comment4
inserted #document/html0/body1/div0/button3
removed #text after #document/html0/body1/div0/button3
#document/html0/body1/div0/button3/#text0: " " => "3"
```


# Render 
container.querySelector("#count").click()

```html
<html>
  <head />
  <body>
    <div>
      <button
        id="outer"
      />
      <!--M_*0 #button/0-->
      <button
        id="inner"
      />
      <button
        id="count"
      >
        4
      </button>
      <!---->
    </div>
    <!--M_$0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
#document/html0/body1/div0/button3/#text0: "3" => "4"
```