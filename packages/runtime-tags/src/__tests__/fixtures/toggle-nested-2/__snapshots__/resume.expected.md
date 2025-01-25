# Render
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
      <!--M_|1 #text/1 2-->
      <!--M_]0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector("#count").click();
```
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
      <!--M_|1 #text/1 2-->
      <!--M_]0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "0" => "1"
```

# Render
```js
container.querySelector("#count").click();
```
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
      <!--M_|1 #text/1 2-->
      <!--M_]0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "1" => "2"
```

# Render
```js
container.querySelector("#inner").click();
```
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
      <!--M_]0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment3 after html/body/div/#comment4
INSERT html/body/div/#comment3
REMOVE button after html/body/div/#comment3
```

# Render
```js
container.querySelector("#inner").click();
```
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
      <!--M_]0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/button2
REMOVE #comment after html/body/div/button2
UPDATE html/body/div/button2/#text " " => "2"
```

# Render
```js
container.querySelector("#count").click();
```
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
      <!--M_]0 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "2" => "3"
```

# Render
```js
container.querySelector("#outer").click();
```
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
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/div/#comment1 after #comment
INSERT html/body/div/#comment1
REMOVE #comment after html/body/div/#comment1
REMOVE button after html/body/div/#comment1
REMOVE #comment after html/body/div/#comment1
REMOVE button after html/body/div/#comment1
REMOVE #comment after html/body/div/#comment1
```

# Render
```js
container.querySelector("#outer").click();
```
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
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/button1
INSERT #text
INSERT html/body/div/#comment1
REMOVE #comment after html/body/div/#comment1
INSERT html/body/div/button2
REMOVE #text after html/body/div/button2
UPDATE html/body/div/button2/#text " " => "3"
```

# Render
```js
container.querySelector("#count").click();
```
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
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d={0:_.a={outer:!0,inner:!0,count:0,"#text/1(":_._["__tests__/template.marko_1_renderer"],"#text/1!":_.b={"#text/1(":_._["__tests__/template.marko_2_renderer"],"#text/1!":_.c={}}},1:_.b,2:_.c},_.b._=_.a,_.c._=_.b,_.d),2,"__tests__/template.marko_2_count/subscriber",2,"__tests__/template.marko_2_count",1,"__tests__/template.marko_1_inner",0,"__tests__/template.marko_0_outer",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/div/button2/#text "3" => "4"
```