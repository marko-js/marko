# Render
```html
<html>
  <head />
  <body>
    <div
      class="item"
      style="color:red"
    >
      foo
    </div>
    <!--M_*3 #div/0-->
    <div
      class="item"
      style="color:blue"
    >
      bar
    </div>
    <!--M_*5 #div/0-->
    <div
      class="item"
      style="color:green"
    >
      bar
    </div>
    <!--M_*7 #div/0-->
    <div
      class="col"
      row="[object Object]"
      x="0"
    />
    <!--M_*9 #div/0-->
    <div
      class="row"
      row="a"
    >
      a
      <!--M_*12 #text/0-->
    </div>
    <!--M_*11 #div/0-->
    <div
      class="row"
      row="b"
    >
      b
      <!--M_*14 #text/0-->
    </div>
    <!--M_*13 #div/0-->
    <div
      class="col"
      row="[object Object]"
      x="1"
    />
    <!--M_*15 #div/0-->
    <div
      class="row"
      row="c"
    >
      c
      <!--M_*18 #text/0-->
    </div>
    <!--M_*17 #div/0-->
    <div
      class="row"
      row="d"
    >
      d
      <!--M_*20 #text/0-->
    </div>
    <!--M_*19 #div/0-->
    <div
      class="col"
      outside=""
      row="[object Object]"
    />
    <!--M_*21 #div/0-->
    <div
      class="row"
      row="-1"
    >
      Outside
    </div>
    <!--M_*23 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");
      M._.r = [_ =&gt; (_.r = [0, 2,
          {
            item: _.a = {
              style:
              {
                color: "red"
              },
              content: _.s = {},
              *[(_.b = [, _.c = {
                style:
                {
                  color: "blue"
                }
              }, _.d = {
                style:
                {
                  color: "green"
                }
              }], Symbol.iterator)]()
              {
                yield* _.b
              }
            }
          }, 1,
          {
            item: _.c
          }, 1,
          {
            item: _.d
          }, 1,
          {
            col: _.i = {
              x: 0,
              row: _.e = {
                row: "a",
                *[(_.f = [, _.g = {
                  row: "b"
                }], Symbol.iterator)]()
                {
                  yield* _.f
                }
              },
              *[(_.h = [, _.o = {
                x: 1,
                row: _.j = {
                  row: "c",
                  *[(_.k = [, _.l = {
                    row: "d"
                  }], Symbol.iterator)]()
                  {
                    yield* _.k
                  }
                }
              }, _.q = {
                outside: !0,
                row: _.m = {
                  row: -1,
                  *[Symbol.iterator]()
                  {
                    yield this
                  }
                }
              }], Symbol.iterator)]()
              {
                yield* _.h
              }
            }
          }, 1, _.n = {}, 1,
          {
            row: _.g
          }, 1,
          {
            col: _.o
          }, 1, _.p = {}, 1,
          {
            row: _.l
          }, 1,
          {
            col: _.q
          }, 1,
          {
            row: _.m
          }], _.b[0] = _.a, _.f[0] = _.n.row = _.e, _.h[0] = _.i, _.k[0] = _.p
          .row = _.j, _.a.content = _._[
            "__tests__/template.marko_1_content"
            ](_.s), _.c.content = _._[
            "__tests__/template.marko_2_content"
            ](_.s), _.d.content = _._[
            "__tests__/template.marko_2_content"
            ](_.s), _.e.content = _._[
            "__tests__/template.marko_3_content"
            ](_.s), _.g.content = _._[
            "__tests__/template.marko_3_content"
            ](_.s), _.j.content = _._[
            "__tests__/template.marko_3_content"
            ](_.s), _.l.content = _._[
            "__tests__/template.marko_3_content"
            ](_.s), _.m.content = _._[
            "__tests__/template.marko_4_content"
            ](_.s), _.r),
        "__tests__/tags/hello/index.marko_1_item 3 5 7 __tests__/tags/hello/index.marko_3_row 11 13 __tests__/tags/hello/index.marko_2_col 9 __tests__/tags/hello/index.marko_3_row 17 19 __tests__/tags/hello/index.marko_2_col 15 __tests__/tags/hello/index.marko_3_row 23 __tests__/tags/hello/index.marko_2_col 21"
      ];
      M._.w()
    </script>
  </body>
</html>
```
