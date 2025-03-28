# Render
```html
<html>
  <head>
    <style
      m_=""
    >
      t{display:none}
    </style>
  </head>
  <body>
    <!--M_[2-->
    <!--M_[4-->
    <div
      class="a"
      level="1"
    >
      <!--M_[5-->
      <!--M_[6-->
      <div
        class="a"
        level="2"
      >
        <!--M_[7-->
        <!--M_[9-->
        <div
          class="b"
          level="3"
        >
          <!--M_[10-->
          <!--M_[11-->
          <div
            class="b"
            level="4"
          />
          <!--M_]10 #text/0-->
          <!--M_]9 #text/1-->
        </div>
        <!--M_]7 #text/0-->
        <!--M_]6 #text/1-->
      </div>
      <!--M_]5 #text/0-->
      <!--M_]4 #text/1-->
    </div>
    <!--M_]2 #text/0-->
    <!--M_]1 #text/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,_.a={"ConditionalScope:#text/0":_.b={"#BranchAccessor":"#text/0"},promiseA:new Promise((f,r)=&gt;_.c={f,r})},_.b],_.b["#PlaceholderContent"]=_._["__tests__/template.marko_4_renderer"](_.a),_.d)];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.c.f("a"),_.j=[1,_.e={"ConditionalScope:#text/1":_.f={"#BranchAccessor":"#text/1"}},_.f,_.g={"ConditionalScope:#text/1":_.h={"#BranchAccessor":"#text/1"},promiseB:new Promise((f,r)=&gt;_.i={f,r})},_.h],_.f["#PlaceholderContent"]=_._["__tests__/template.marko_5_renderer"](_.e),_.h["#PlaceholderContent"]=_._["__tests__/template.marko_10_renderer"](_.g),(_.b["ConditionalScope:#text/0"]=_.e),(_.f["ConditionalScope:#text/0"]=_.g),_.j));M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.i.f("b"),_.m=[1,_.k={"ConditionalScope:#text/1":_.l={"#BranchAccessor":"#text/1"}},_.l,_.n={}],_.l["#PlaceholderContent"]=_._["__tests__/template.marko_11_renderer"](_.k),(_.h["ConditionalScope:#text/0"]=_.k),(_.l["ConditionalScope:#text/0"]=_.n),_.m));M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/div/#text
INSERT html/body/div/div/div/#text
```