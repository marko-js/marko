// PATCH
`a2;D lD l%;<div> </div><div class=x> </div><!><!>`
{
  ba: [{
    qa: "\x3Cb>a\x3C/b>",
    qb: "\x3Cb>a\x3C/b>",
    bc: 0
  }, "a2"]
}
;CgI

// PATCH holding CgI
[`a1;D lD ;<div> </div><div class=y> </div>`, `a4;%;<!>`, `a3;b%b%;<!><!><!><!>`]
{
  ba: [{
    qa: "\x3Ci>b\x3C/i> c",
    qb: "\x3Ci>b\x3C/i> c",
    bc: [{
      ba: [{
        qa: "\x3Ci>b\x3C/i> c",
        qb: "\x3Ci>b\x3C/i> c"
      }, "a1"],
      bb: [{
        qa: "\x3Ci>b\x3C/i> c"
      }, "a4"]
    }, "a3"]
  }, "a2"]
}
;Cx4

// PATCH holding Cx4
{
  ba: [{
    qa: "\x3Cu>d\x3C/u>",
    qb: "\x3Cu>d\x3C/u>",
    bc: [{
      ba: [{
        qa: "\x3Cu>d\x3C/u>",
        qb: "\x3Cu>d\x3C/u>"
      }, "a1"],
      bb: [{
        qa: "\x3Cu>d\x3C/u>"
      }, "a4"]
    }, "a3"]
  }, "a2"]
}

// PATCH holding Cx4
{
  ba: 0
}
