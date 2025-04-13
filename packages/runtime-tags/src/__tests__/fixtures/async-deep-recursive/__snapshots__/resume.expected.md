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
    <div
      data-level="4"
    >
      <!--M_[4-->
      <!--M_[5-->
      <div
        data-level="3"
      >
        <!--M_[8-->
        <!--M_[10-->
        <div
          data-level="2"
        >
          <!--M_[13-->
          <!--M_[14-->
          <div
            data-level="1"
          >
            <!--M_[17-->
            <!--M_[19-->
            <!--M_]17 #text/0-->
            <!--M_]16 #text/1-->
          </div>
          <!--M_]13 #text/0-->
          <!--M_]12 #text/1-->
        </div>
        <!--M_]8 #text/0-->
        <!--M_]7 #text/1-->
      </div>
      <!--M_]4 #text/0-->
      <!--M_]3 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,1,{input_level:4},_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"}},_.b],_.b["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_renderer"](_.a),_.c),_=&gt;(_.f=[_.g={},{input_level:3},_.d={"ConditionalScope:#text/1":_.e={"#BranchAccessor":"#text/1"}},_.e],_.e["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_renderer"](_.d),(_.b["ConditionalScope:#text/0"]=_.g),_.f)];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.j=[1,_.k={},{input_level:2},_.h={"ConditionalScope:#text/1":_.i={"#BranchAccessor":"#text/1"}},_.i],_.i["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_renderer"](_.h),(_.e["ConditionalScope:#text/0"]=_.k),_.j),_=&gt;(_.n=[_.o={},{input_level:1},_.l={"ConditionalScope:#text/1":_.m={"#BranchAccessor":"#text/1"}},_.m],_.m["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_renderer"](_.l),(_.i["ConditionalScope:#text/0"]=_.o),_.n));M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.p=[1,_.q={},{input_level:0}],(_.m["ConditionalScope:#text/0"]=_.q),_.p));M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
INSERT html/body/div/div/div/#text
```