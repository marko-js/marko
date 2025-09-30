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
      M._.r = [_ =&gt; (_.q = [0, 2,
        {
          item: _.c = {
            style:
            {
              color: "red"
            },
            content: _._[
              "__tests__/template.marko_1_content"
              ](_.a = {}),
            *[(_.b = [, _.d = {
              style:
              {
                color: "blue"
              },
              content: _._[
                "__tests__/template.marko_2_content"
                ](_.a)
            }, _.e = {
              style:
              {
                color: "green"
              },
              content: _._[
                "__tests__/template.marko_2_content"
                ](_.a)
            }], Symbol.iterator)]()
            {
              yield* _.b
            }
          }
        }, 1,
        {
          item: _.d
        }, 1,
        {
          item: _.e
        }, 1,
        {
          col: _.i = {
            x: 0,
            row: _.g = {
              row: "a",
              content: _._[
                "__tests__/template.marko_3_content"
                ](_.a),
              *[(_.f = [, _.l = {
                row: "b",
                content: _._[
                  "__tests__/template.marko_3_content"
                  ](_.a)
              }], Symbol.iterator)]()
              {
                yield* _.f
              }
            },
            *[(_.h = [, _.m = {
              x: 1,
              row: _.k = {
                row: "c",
                content: _._[
                  "__tests__/template.marko_3_content"
                  ](_.a),
                *[(_.j = [, _.n = {
                  row: "d",
                  content: _._[
                    "__tests__/template.marko_3_content"
                    ](_.a)
                }], Symbol.iterator)]()
                {
                  yield* _.j
                }
              }
            }, _.o = {
              outside: !0,
              row: _.p = {
                row: -1,
                content: _._[
                  "__tests__/template.marko_4_content"
                  ](_.a),
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
        }, 1,
        {
          row: _.g
        },
        {},
        {
          row: _.l
        },
        {},
        {
          col: _.m
        }, 1,
        {
          row: _.k
        },
        {},
        {
          row: _.n
        },
        {},
        {
          col: _.o
        }, 1,
        {
          row: _.p
        }], _.b[0] = _.c, _.f[0] = _.g, _.h[0] = _.i, _.j[0] = _.k, _.q),
        "__tests__/tags/hello/index.marko_1_item",
        3, 5, 7,
        "__tests__/tags/hello/index.marko_3_row",
        11, 13,
        "__tests__/tags/hello/index.marko_2_col",
        9,
        "__tests__/tags/hello/index.marko_3_row",
        17, 19,
        "__tests__/tags/hello/index.marko_2_col",
        15,
        "__tests__/tags/hello/index.marko_3_row",
        23,
        "__tests__/tags/hello/index.marko_2_col",
        21
      ];
      M._.w()
    </script>
  </body>
</html>
```
