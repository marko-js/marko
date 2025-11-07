# Write
```html
  <div><svg><a href=#></a><a href=#bar><!--M_[-->Hi<!--M_]2 #a/0 3--></a><!--M_'1 #text/2 2--></svg><math><a href=#></a><a href=#bar><!--M_[-->Hi<!--M_]4 #a/0 5--></a><!--M_'1 #text/4 4--></math><div><!--M_[--><a href=#></a><!--M_]6 #div/0 7--></div><!--M_'1 #text/5 6--><button class=toggle-parent>Toggle Parent</button><!--M_*1 #button/6--><button class=toggle-child>Toggle Child</button><!--M_*1 #button/7--></div><!--M_*1 #div/0--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.b=[0,_.a={"ConditionalRenderer:#text/2":"a","ConditionalRenderer:#text/4":"a","ConditionalRenderer:#text/5":"div",input_value:"\x3Ca href=#>\x3C/a>",Parent:"div",Child:"a"},{"ConditionalRenderer:#a/0":"__tests__/template.marko_2_content"},1,{"ConditionalRenderer:#a/0":"__tests__/template.marko_3_content"},1,{"ConditionalRenderer:#div/0":"__tests__/template.marko_1_content"},_.d={_:_.a}],(_.c=new Set).add(_.d),_.b),"__tests__/template.marko_0_Parent_Child",1,"__tests__/template.marko_0_Child",1,"__tests__/template.marko_0_Parent",1];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <div>
      <svg>
        <a
          href="#"
        />
        <a
          href="#bar"
        >
          <!--M_[-->
          Hi
          <!--M_]2 #a/0 3-->
        </a>
        <!--M_'1 #text/2 2-->
      </svg>
      <math>
        <a
          href="#"
        />
        <a
          href="#bar"
        >
          <!--M_[-->
          Hi
          <!--M_]4 #a/0 5-->
        </a>
        <!--M_'1 #text/4 4-->
      </math>
      <div>
        <!--M_[-->
        <a
          href="#"
        />
        <!--M_]6 #div/0 7-->
      </div>
      <!--M_'1 #text/5 6-->
      <button
        class="toggle-parent"
      >
        Toggle Parent
      </button>
      <!--M_*1 #button/6-->
      <button
        class="toggle-child"
      >
        Toggle Child
      </button>
      <!--M_*1 #button/7-->
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.b = [0, _.a = {
          "ConditionalRenderer:#text/2": "a",
          "ConditionalRenderer:#text/4": "a",
          "ConditionalRenderer:#text/5": "div",
          input_value: "\x3Ca href=#&gt;\x3C/a&gt;",
          Parent: "div",
          Child: "a"
        },
        {
          "ConditionalRenderer:#a/0": "__tests__/template.marko_2_content"
        }, 1,
        {
          "ConditionalRenderer:#a/0": "__tests__/template.marko_3_content"
        }, 1,
        {
          "ConditionalRenderer:#div/0": "__tests__/template.marko_1_content"
        }, _.d = {
          _: _.a
        }], (_.c = new Set).add(_.d), _.b),
        "__tests__/template.marko_0_Parent_Child",
        1,
        "__tests__/template.marko_0_Child",
        1,
        "__tests__/template.marko_0_Parent",
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
INSERT html/body/div
INSERT html/body/div/svg
INSERT html/body/div/svg/a0
INSERT html/body/div/svg/a1
INSERT html/body/div/svg/a1/#comment0
INSERT html/body/div/svg/a1/#text
INSERT html/body/div/svg/a1/#comment1
INSERT html/body/div/svg/#comment
INSERT html/body/div/math
INSERT html/body/div/math/a0
INSERT html/body/div/math/a1
INSERT html/body/div/math/a1/#comment0
INSERT html/body/div/math/a1/#text
INSERT html/body/div/math/a1/#comment1
INSERT html/body/div/math/#comment
INSERT html/body/div/div
INSERT html/body/div/div/#comment0
INSERT html/body/div/div/a
INSERT html/body/div/div/#comment1
INSERT html/body/div/#comment0
INSERT html/body/div/button0
INSERT html/body/div/button0/#text
INSERT html/body/div/#comment1
INSERT html/body/div/button1
INSERT html/body/div/button1/#text
INSERT html/body/div/#comment2
INSERT html/body/#comment
INSERT html/body/script
INSERT html/body/script/#text
```