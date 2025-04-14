# Render
```html
<html>
  <head />
  <body>
    <div>
      0
    </div>
    <!--M_*1 #div/0-->
    <!--M_[2-->
    <button>
      inc
    </button>
    <!--M_*2 #button/0-->
     -- 
    <!---->
    ‍
    <!--M_*2 #text/1-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},_.b],_.b._=_.a,_.b["#CatchContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),"__tests__/template.marko_1_clickCount",2];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      1
    </div>
    <!--M_*1 #div/0-->
    <!--M_[2-->
    <button>
      inc
    </button>
    <!--M_*2 #button/0-->
     -- 
    <!---->
    ‍
    <!--M_*2 #text/1-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},_.b],_.b._=_.a,_.b["#CatchContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),"__tests__/template.marko_1_clickCount",2];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE #text in html/body/div
INSERT html/body/div/#text
```

# Render
```js
container.querySelector("button").click();
```
```html
<html>
  <head />
  <body>
    <div>
      1
    </div>
    <!--M_*1 #div/0-->
    Error: ERROR!
    <!--M_*2 #text/1-->
    <!--M_]1 #text/1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,_.a={"ConditionalScope:#text/1":_.b={"ClosureSignalIndex:clickCount":0,"#BranchAccessor":"#text/1"},clickCount:0,"ClosureScopes:clickCount":_.d=new Set},_.b],_.b._=_.a,_.b["#CatchContent"]=_._["__tests__/template.marko_2_renderer"](_.a),(_.d).add(_.b),_.c),"__tests__/template.marko_1_clickCount",2];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE #comment after html/body/#text
REMOVE button after html/body/#text
REMOVE #comment after html/body/#text
REMOVE #text after html/body/#text
REMOVE #comment after html/body/#text
REMOVE #text after html/body/#text
UPDATE html/body/#text " " => "Error: ERROR!"
```