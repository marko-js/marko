# Write
```html
  <div class=obj>{"a":1,"b":2,"c":3}<!--M_*1 #text/0--></div><div class=partialObj>{"b":2,"c":3}<!--M_*1 #text/1--></div><div class=a>1<!--M_*1 #text/2--></div><div class=b>2<!--M_*1 #text/3--></div><div class=a>removed a<!--M_*1 #text/4--></div><button>Update</button><!--M_*1 #button/5--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{}]),"__tests__/template.marko_0",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div
      class="obj"
    >
      {"a":1,"b":2,"c":3}
      <!--M_*1 #text/0-->
    </div>
    <div
      class="partialObj"
    >
      {"b":2,"c":3}
      <!--M_*1 #text/1-->
    </div>
    <div
      class="a"
    >
      1
      <!--M_*1 #text/2-->
    </div>
    <div
      class="b"
    >
      2
      <!--M_*1 #text/3-->
    </div>
    <div
      class="a"
    >
      removed a
      <!--M_*1 #text/4-->
    </div>
    <button>
      Update
    </button>
    <!--M_*1 #button/5-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.a = [0,
        {}]),
        "__tests__/template.marko_0",
        1
      ];
      M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/div0
INSERT html/body/div0/#text
INSERT html/body/div0/#comment
INSERT html/body/div1
INSERT html/body/div1/#text
INSERT html/body/div1/#comment
INSERT html/body/div2
INSERT html/body/div2/#text
INSERT html/body/div2/#comment
INSERT html/body/div3
INSERT html/body/div3/#text
INSERT html/body/div3/#comment
INSERT html/body/div4
INSERT html/body/div4/#text
INSERT html/body/div4/#comment
INSERT html/body/button
INSERT html/body/button/#text
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```