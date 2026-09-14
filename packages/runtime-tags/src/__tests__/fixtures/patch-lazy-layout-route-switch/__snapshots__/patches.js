// PATCH
[`a1;b%;<!><!><!>`, `d0;b%;<!><!><!>`, `d3;b%b/b&b;<!><!><h1>A</h1><!>`, `d1;b/D%lD%l&b;<!><nav><!></nav><main><!></main><!>`, {
  z_a: {
    cAa: {
      ca: {
        pa: "a1",
        fb: "^d0",
        cAb: {
          ba: "d3"
        }
      }
    }
  },
  ba: [1, {}, "d1"]
}]
[`a2;D ;<a> </a>`, {
  z_a: {
    cAa: {
      ca: {
        cAa: {
          la: [{
            ta: "x"
          }, {
            ta: "y"
          }, "a2"]
        }
      }
    }
  }
}]

// PATCH
[`a1;b%;<!><!><!>`, `d0;b%;<!><!><!>`, `d4;b%b/b&b;<!><!><h1>B</h1><!>`, `d1;b/D%lD%l&b;<!><nav><!></nav><main><!></main><!>`, `a2;D ;<a> </a>`, {
  z_a: {
    cAa: {
      ca: {
        pa: "a1",
        fb: "^d0",
        cAb: {
          ba: [1, {}, "d4"]
        },
        cAa: {
          la: [{
            ta: "x"
          }, "a2"]
        }
      }
    }
  },
  ba: [1, {}, "d1"]
}]

// PATCH
[`d2,<p>home</p>`, {
  ba: "d2"
}]
