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
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,1,_.c={input_level:4},_.a={"ConditionalScope:#text/1":_.b={"#BranchAccessor":"#text/1"},_:_.c},_.b],_.b._=_.a,_.b["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_renderer"](_.a),_.d),_=&gt;(_.h=[_.j={_:_.b},_.g={input_level:3},_.e={"ConditionalScope:#text/1":_.f={"#BranchAccessor":"#text/1"},_:_.g},_.f],_.f._=_.e,_.f["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_renderer"](_.e),(_.i=new Set).add(_.j),(_.b["ConditionalScope:#text/0"]=_.j),_.h)];REORDER_RUNTIME(M._);M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.n=[1,_.p={_:_.f},_.m={input_level:2},_.k={"ConditionalScope:#text/1":_.l={"#BranchAccessor":"#text/1"},_:_.m},_.l],_.l._=_.k,_.l["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_renderer"](_.k),(_.o=new Set).add(_.p),(_.f["ConditionalScope:#text/0"]=_.p),_.n),_=&gt;(_.t=[_.v={_:_.l},_.s={input_level:1},_.q={"ConditionalScope:#text/1":_.r={"#BranchAccessor":"#text/1"},_:_.s},_.r],_.r._=_.q,_.r["#PlaceholderContent"]=_._["__tests__/tags/recurse.marko_4_renderer"](_.q),(_.u=new Set).add(_.v),(_.l["ConditionalScope:#text/0"]=_.v),_.t));M._.w()
    </script>
    <script>
      M._.r.push(_=&gt;(_.w=[1,_.y={_:_.r},{input_level:0}],(_.x=new Set).add(_.y),(_.r["ConditionalScope:#text/0"]=_.y),_.w));M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
INSERT html/body/div/div/div/#text
```