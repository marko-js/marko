// PATCH
[`a0;D lD l%;<div> </div><div class=x> </div><!><!>`, {
  ba: [{
    qa: "\x3Cb>a\x3C/b>",
    qb: "\x3Cb>a\x3C/b>",
    bc: 0
  }, "a0"]
}]

// PATCH
[`a2;D lD ;<div> </div><div class=y> </div>`, `a3; ; `, `a1;b%b%;<!><!><!><!>`, `a0;D lD l%;<div> </div><div class=x> </div><!><!>`, {
  ba: [{
    qa: "\x3Ci>b\x3C/i> c",
    qb: "\x3Ci>b\x3C/i> c",
    bc: [{
      ba: [{
        qa: "\x3Ci>b\x3C/i> c",
        qb: "\x3Ci>b\x3C/i> c"
      }, "a2"],
      bb: [{
        qa: "\x3Ci>b\x3C/i> c"
      }, "a3"]
    }, "a1"]
  }, "a0"]
}]

// PATCH
[`a2;D lD ;<div> </div><div class=y> </div>`, `a3; ; `, `a1;b%b%;<!><!><!><!>`, `a0;D lD l%;<div> </div><div class=x> </div><!><!>`, {
  ba: [{
    qa: "\x3Cu>d\x3C/u>",
    qb: "\x3Cu>d\x3C/u>",
    bc: [{
      ba: [{
        qa: "\x3Cu>d\x3C/u>",
        qb: "\x3Cu>d\x3C/u>"
      }, "a2"],
      bb: [{
        qa: "\x3Cu>d\x3C/u>"
      }, "a3"]
    }, "a1"]
  }, "a0"]
}]

// PATCH
{
  ba: 0
}
