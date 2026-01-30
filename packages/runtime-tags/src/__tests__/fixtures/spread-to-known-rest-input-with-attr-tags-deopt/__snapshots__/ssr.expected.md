# Write
```html
   <span data-one=2 data-foo=1 data-rest=1 class=success><span value=1>One</span><!--M_*6 #span/0--><span value=1>Two</span><!--M_*8 #span/0--></span><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.i=[0,1,_.e={input_foo:_.c={value:1,desc:_.a={content:_.j={},*[Symbol.iterator](){yield this}},*[(_.b=[,_.h={value:1,desc:_.d={*[Symbol.iterator](){yield this}}}],Symbol.iterator)](){yield*_.b}}},1,_.l={_:_.e},1,{item:_.g={value:1,*[(_.f=[,_.h],Symbol.iterator)](){yield*_.f}}},1,{item:{value:1}}],_.b[0]=_.c,_.f[0]=_.g,_.a.content=_._["__tests__/template.marko_1_content"](_.j),_.d.content=_._["__tests__/template.marko_2_content"](_.j),(_.k=new Set).add(_.l),_.i),"__tests__/tags/child.marko_1_item 6 8"];M._.w()</script>
```

# Render End
```html
<html>
  <head />
  <body>
    <span
      class="success"
      data-foo="1"
      data-one="2"
      data-rest="1"
    >
      <span
        value="1"
      >
        One
      </span>
      <!--M_*6 #span/0-->
      <span
        value="1"
      >
        Two
      </span>
      <!--M_*8 #span/0-->
    </span>
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.i = [0, 1, _.e = {
          input_foo: _.c = {
            value: 1,
            desc: _.a = {
              content: _.j = {},
              *[Symbol.iterator]()
              {
                yield this
              }
            },
            *[(_.b = [, _.h = {
              value: 1,
              desc: _.d = {
                *[Symbol.iterator]()
                {
                  yield this
                }
              }
            }], Symbol.iterator)]()
            {
              yield* _.b
            }
          }
        }, 1, _.l = {
          _: _.e
        }, 1,
        {
          item: _.g = {
            value: 1,
            *[(_.f = [, _.h], Symbol.iterator)]()
            {
              yield* _.f
            }
          }
        }, 1,
        {
          item:
          {
            value: 1
          }
        }], _.b[0] = _.c, _.f[0] = _.g, _.a.content = _._[
          "__tests__/template.marko_1_content"
          ](_.j), _.d.content = _._[
          "__tests__/template.marko_2_content"
          ](_.j), (_.k = new Set).add(_.l), _.i),
        "__tests__/tags/child.marko_1_item 6 8"
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
INSERT html/body/span
INSERT html/body/span/span0
INSERT html/body/span/span0/#text
INSERT html/body/span/#comment0
INSERT html/body/span/span1
INSERT html/body/span/span1/#text
INSERT html/body/span/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```