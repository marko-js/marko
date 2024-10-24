function e(e, t) {
  for (let n in e) t(n, e[n]);
}
function t(e, t) {
  if (e) {
    let n = 0;
    for (let r of e) t(r, n++);
  }
}
function n(e, t, n, r) {
  let i = t || 0,
    o = n || 1;
  for (let t = (e - i) / o, n = 0; n <= t; n++) r(i + n * o);
}
function r(e) {
  return { u: 1, $global: e };
}
var i = r({});
function o(e) {
  return (i.a = i.b = e), i;
}
function l(e) {
  f(e), e.d?.h?.delete(e);
  let t = e.x?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function f(e) {
  let t = e.h;
  if (t) for (let e of t) f(e);
  let n = e.l;
  if (n) for (let e of n.values()) e.abort();
}
function u(e) {
  let t = e.d;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).d);
}
function a(e) {
  l(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function c(e, t, n) {
  let r = e.a,
    i = e.b.nextSibling;
  for (; r !== i; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function s(e, t) {
  let n = e.l;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function d(e, t) {
  let n = (e.l ||= new Map()),
    r = n.get(t);
  return r || (u(e), n.set(t, (r = new AbortController()))), r.signal;
}
function g(e, t) {
  return t ? e : "";
}
var p = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function h(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !p.test(e) ? t + "px" : t}`
    : "";
}
function b(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let o of e) {
            let e = b(o, t, n);
            "" !== e && ((r += i + e), (i = t));
          }
        else
          for (let o in e) {
            let l = n(o, e[o]);
            "" !== l && ((r += i + l), (i = t));
          }
        return r;
      }
  }
  return "";
}
function v(e) {
  if (e) return e.renderBody || e.default || e;
}
var y = 2147483647;
var w = new Map(),
  m = new WeakMap(),
  C = { capture: !0 };
function x(e, t, n) {
  let r = w.get(t);
  r || w.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = m.get(n);
        r || m.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, N, C));
      })(e, t),
    r.set(e, n || void 0);
}
function N(e) {
  let t = e.target;
  if (t) {
    let n = w.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var S = document.createTextNode(""),
  k = new Range();
function M(e) {
  return k.createContextualFragment(e);
}
var $ = /^on[A-Z-]/;
function A(e, t, n) {
  I(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function I(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function B(e, t) {
  I(
    e,
    "class",
    (function (e) {
      return b(e, " ", g);
    })(t) || void 0,
  );
}
function E(e, t) {
  I(
    e,
    "style",
    (function (e) {
      return b(e, ";", h);
    })(t) || void 0,
  );
}
function _(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function j(e, t, n) {
  let r,
    i = e[t];
  for (let { name: e } of i.attributes) (n && e in n) || i.removeAttribute(e);
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        B(i, t);
        break;
      case "style":
        E(i, t);
        break;
      case "renderBody":
        break;
      default:
        $.test(e)
          ? ((r ||= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : A(i, e, t);
    }
  }
  e[t + "~"] = r;
}
function T(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) x(n, e, r[e]);
}
function O(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    o = r.parentNode,
    l = i.nextSibling,
    f = M(t || 0 === t ? t + "" : "<!>");
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), o.insertBefore(f, r);
  let u = r;
  for (; u !== l; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function q(e, t, n) {
  let r = e[n],
    i = e[n + "-"],
    o = e[t];
  if (i) for (let e in i) e in r || (o[e] = void 0);
  for (let e in r) o[e] = r[e];
  e[n + "-"] = r;
}
function R(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (d(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var D = {},
  P = {},
  W = {};
function z(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== D && void 0 === e[n] && t(e, r);
  };
}
function F(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function L(e, t, n) {
  let r = e + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === D) 1 === (n[r] = (n[r] ?? 0) + 1) && i?.(n, D);
    else if (o !== W) {
      let l = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (o === P || (l && n[e] === o)
          ? i?.(n, P)
          : ((n[e] = o), t?.(n, o), i?.(n, W))),
        n[r]--;
    }
  };
}
var J = 0;
function U(e, t, n) {
  let r = "?" + J++,
    i = r + "#",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    l === D
      ? 1 === (n[i] = (n[i] ?? 0) + 1) && o?.(n, D)
      : void 0 === n[i]
        ? ((n[i] = e - 1), (n[r] = !0))
        : 0 == --n[i]
          ? l === W || n[r]
            ? ((n[r] = !1), t(n, 0), o?.(n, W))
            : o?.(n, P)
          : (n[r] ||= l === W);
  };
}
var Z = (e) => e._;
function G(e, t, n = Z, r) {
  let i = "?" + J++,
    o = i + 1,
    l = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === D) 1 === (e[o] = (e[o] ?? 0) + 1) && f?.(e, D);
    else {
      let u, a;
      if (void 0 === e[o]) {
        (u = n(e)), (a = l(e));
        let t = u[a + "#"],
          i = void 0 === t ? !u.u : 0 === t;
        (e[o] = i ? 1 : 2), (r = W);
      }
      0 == --e[o]
        ? r === W || e[i]
          ? ((e[i] = !1), (u ||= n(e)), (a ||= l(e)), t?.(e, u[a]), f?.(e, W))
          : f?.(e, P)
        : (e[i] ||= r === W);
    }
  };
}
function H(e, t, n = Z, r) {
  let i = "function" == typeof e ? e : () => e,
    o = G(i, t, n, r),
    l = new WeakMap();
  return (
    (o.g = (e) => {
      let t = (t) => o(e, t),
        r = n(e),
        f = i(e) + "*";
      l.set(e, t), (r[f] ||= new Set()).add(t);
    }),
    (o.j = (e) => {
      let t = n(e),
        r = i(e) + "*";
      t[r]?.delete(l.get(e)), l.delete(e);
    }),
    o
  );
}
function K(e, t) {
  let n = (n, r) => {
    let i = n[t];
    for (let t of e) t(i, r);
  };
  return (
    (n.g = (n) => {
      let r = n[t];
      for (let t of e) t.g?.(r);
    }),
    (n.j = (n) => {
      let r = n[t];
      for (let t of e) t.j?.(r);
    }),
    n
  );
}
function Q(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function V(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var X = (e, t) => e["/"]?.(t),
  Y = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  ee = new WeakMap();
function te({ $global: e }) {
  let t = ee.get(e) || 0;
  return ee.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function ne(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function re(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var ie = document.createTreeWalker(document);
function oe(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function le(e, t, n) {
  (ie.currentNode = e),
    fe(t, n, n, 0),
    (ie.currentNode = document.documentElement);
}
function fe(e, t, n, i) {
  let o,
    l = 0,
    f = 0,
    u = 0;
  for (n !== t && (t.d = n); (o = e.charCodeAt(i++)); )
    if (((f = l), (l = 0), o >= 117)) l = 10 * f + o - 117;
    else if (o >= 107) {
      for (o = 10 * f + o - 107; o--; ) ie.parentNode();
      ie.nextSibling();
    } else if (o >= 97) for (o = 10 * f + o - 97; o--; ) ie.nextSibling();
    else if (o >= 67) for (o = 20 * f + o - 67; o--; ) ie.nextNode();
    else if (47 === o) i = fe(e, (t[u++] = r(t.$global)), n, i);
    else {
      if (38 === o) return i;
      if (32 === o) t[u++] = ie.currentNode;
      else {
        let e = (t[u++] = document.createTextNode("")),
          n = ie.currentNode;
        n.parentNode.replaceChild(e, n), (ie.currentNode = e);
      }
    }
  return i;
}
function ue(e, t, n) {
  let i = r(t);
  if (((i._ = i.d = e.y || n), (i.x = e), ce(e, i), e.c))
    for (let t of e.c) t.g?.(i);
  return i;
}
function ae(e, t, n) {
  if ("string" != typeof e) return ue(e, t, n);
  let i = r(t);
  return (i._ = i.d = n), (i[0] = i.a = i.b = document.createElement(e)), i;
}
function ce(e, t) {
  let n = e.k();
  return (
    le(11 === n.nodeType ? n.firstChild : n, e.z, t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.m && e.m(t),
    n
  );
}
function se(e, t, n) {
  return (r, i) => {
    let o = r[e + "("];
    if (!o || i === W) return;
    let l = r[e + "!"];
    if (i === D || i === P) return o.e?.(l, i);
    let f = t?.(r);
    if ("string" == typeof o) j(l, 0, i()), ye(l, 0, f);
    else if (o.e) {
      let e = i();
      o.e(l, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function de(e, t, n, r, i = 0, o) {
  let l,
    f,
    u = {},
    a = t ? oe(t) : " ";
  return (t) => ({
    n: u,
    A: e,
    z: a,
    m: n,
    k: pe,
    y: t,
    B: i,
    C: void 0,
    get e() {
      return (l ||= o?.());
    },
    get c() {
      return (f ||= new Set(r?.()));
    },
  });
}
function ge(e, t, n, r, i, o) {
  return de(e, t, n, r, i, o)();
}
function pe() {
  return (this.C ||= (function (e) {
    let t = M(e);
    return t.firstChild === t.lastChild ? t.firstChild || S : t;
  })(this.A)).cloneNode(!0);
}
var he = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    l = n && ((e, t) => (l = n())(e, t));
  return (n, f) => {
    if (f === W) return;
    let u = n[r],
      s = f;
    if (f !== D && f !== P) {
      let i = v(f);
      Be(i, u)
        ? ((u = n[r] = i),
          (function (e, t, n) {
            let r,
              i = e[t + "!"];
            n
              ? ((r = e[t + "!"] = ae(n, e.$global, e)), (i = i || o(e[t])))
              : ((r = o(e[t])), (e[t + "!"] = void 0)),
              c(r, i.a.parentNode, i.a),
              a(i);
          })(n, e, i),
          t?.(n),
          (s = W))
        : (s = P);
    }
    l?.(n, s), Y(u, n[i], s);
  };
};
function be(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t, i) => {
    let o = t[n];
    if (o) {
      let n = t[r];
      (!n?.c || n.c.has(e)) && e(o, i);
    }
  };
}
var ve = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    if (l === W) return;
    let f = n[r],
      u = l;
    if (l !== D && l !== P) {
      let i = v(l);
      Be(i, f) ? ((f = n[r] = i), ye(n, e, i), t?.(n), (u = W)) : (u = P);
    }
    o?.(n, u), Y(f, n[i], u);
  };
};
function ye(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    c((e[t + "!"] = ae(n, e.$global, e)), i, null);
  }
  r && l(r);
}
var we = new Map([[Symbol(), o(void 0)]]),
  me = [o(void 0)],
  Ce = new Map(),
  xe = [];
function Ne(e, n) {
  return Me(e, n, ([e, n = Ae], r) => {
    t(
      e,
      "string" == typeof n
        ? (e, t) => r(e[n], [e, t])
        : (e, t) => r(n(e, t), [e, t]),
    );
  });
}
function Se(t, n) {
  return Me(t, n, ([t, n = Ie], r) => e(t, (e, t) => r(n(e, t), [e, t])));
}
function ke(e, t) {
  return Me(e, t, ([e, t, r, i = Ie], o) => n(e, t, r, (e) => o(i(e), [e])));
}
function Me(e, t, n) {
  let r = e + "!",
    i = t.c,
    f = t.e;
  return (u, s) => {
    if (s === W) return;
    if (s === D || s === P) {
      let t = u[r] ?? u[e + "("]?.values() ?? [];
      if (t !== me)
        for (let e of t) {
          f?.(e, s);
          for (let t of i) t(e, s);
        }
      return;
    }
    let d,
      g,
      p,
      h,
      b = u[e],
      v = 8 === b.nodeType || 3 === b.nodeType,
      w = u[e + "("] || (v ? we : Ce),
      m = u[e + "!"] || Array.from(w.values()),
      C = !0;
    if (
      (n(s, (e, n) => {
        let r = w.get(e),
          o = P;
        if ((r || ((r = ue(t, u.$global, u)), (o = W)), f && f(r, n), i))
          for (let e of i) e(r, o);
        d ? (d.set(e, r), g.push(r)) : ((d = new Map([[e, r]])), (g = [r]));
      }),
      !d)
    )
      if (v) (d = we), (g = me), o(b);
      else {
        if (t.B) for (let e = 0; e < m.length; e++) l(m[e]);
        (b.textContent = ""), (d = Ce), (g = xe), (C = !1);
      }
    if (C) {
      if (v) {
        w === we && o(b);
        let e = m[m.length - 1];
        (p = e.b.nextSibling), (h = e.a.parentNode);
      } else (p = null), (h = b);
      !(function (e, t, n, r) {
        let i,
          o,
          l,
          f,
          u,
          s,
          d = 0,
          g = 0,
          p = t.length - 1,
          h = n.length - 1,
          b = t[d],
          v = n[g],
          w = t[p],
          m = n[h];
        e: {
          for (; b === v; ) {
            if ((++d, ++g, d > p || g > h)) break e;
            (b = t[d]), (v = n[g]);
          }
          for (; w === m; ) {
            if ((--p, --h, d > p || g > h)) break e;
            (w = t[p]), (m = n[h]);
          }
        }
        if (d > p) {
          if (g <= h) {
            (l = h + 1), (f = l < n.length ? n[l].a : r);
            do {
              c(n[g++], e, f);
            } while (g <= h);
          }
        } else if (g > h)
          do {
            a(t[d++]);
          } while (d <= p);
        else {
          let b = p - d + 1,
            v = h - g + 1,
            w = t,
            m = new Array(v);
          for (i = 0; i < v; ++i) m[i] = -1;
          let C = 0,
            x = 0,
            N = new Map();
          for (o = g; o <= h; ++o) N.set(n[o], o);
          for (i = d; i <= p && x < v; ++i)
            (u = t[i]),
              (o = N.get(u)),
              void 0 !== o &&
                ((C = C > o ? y : o),
                ++x,
                (s = n[o]),
                (m[o - g] = i),
                (w[i] = null));
          if (b === t.length && 0 === x) {
            for (; g < v; ++g) c(n[g], e, r);
            for (; d < b; ++d) a(t[d]);
          } else {
            for (i = b - x; i > 0; ) (u = w[d++]), null !== u && (a(u), i--);
            if (C === y) {
              let t = (function (e) {
                let t,
                  n,
                  r = e.slice(),
                  i = [];
                i.push(0);
                for (let o = 0, l = e.length; o < l; ++o) {
                  if (-1 === e[o]) continue;
                  let l = i[i.length - 1];
                  if (e[l] < e[o]) (r[o] = l), i.push(o);
                  else {
                    for (t = 0, n = i.length - 1; t < n; ) {
                      let r = ((t + n) / 2) | 0;
                      e[i[r]] < e[o] ? (t = r + 1) : (n = r);
                    }
                    e[o] < e[i[t]] && (t > 0 && (r[o] = i[t - 1]), (i[t] = o));
                  }
                }
                for (t = i.length, n = i[t - 1]; t-- > 0; )
                  (i[t] = n), (n = r[n]);
                return i;
              })(m);
              for (o = t.length - 1, l = n.length, i = v - 1; i >= 0; --i)
                -1 === m[i] || o < 0 || i !== t[o]
                  ? ((C = i + g),
                    (s = n[C++]),
                    (f = C < l ? n[C].a : r),
                    c(s, e, f))
                  : --o;
            } else if (x !== v)
              for (l = n.length, i = v - 1; i >= 0; --i)
                -1 === m[i] &&
                  ((C = i + g),
                  (s = n[C++]),
                  (f = C < l ? n[C].a : r),
                  c(s, e, f));
          }
        }
      })(h, m, g, p);
    }
    (u[e + "("] = d), (u[e + "!"] = g);
  };
}
function $e(e, t) {
  let n = t + "!";
  return (r, i) => {
    let o = r[n] ?? r[t + "("]?.values() ?? [];
    if (o !== me) for (let t of o) e(t, i);
  };
}
function Ae(e, t) {
  return t;
}
function Ie(e) {
  return e;
}
function Be(e, t) {
  return e !== t && (e?.n || 0) !== t?.n;
}
var Ee,
  _e = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (Ee = !1), We();
      }),
      t
    );
  })();
function je() {
  We(), requestAnimationFrame(Te);
}
function Te() {
  _e.postMessage(0);
}
var Oe = [],
  qe = [];
function Re(e, t, n, r) {
  return n ? (n(r), r) : De(e, t, r);
}
function De(e, t, n) {
  return Ee || ((Ee = !0), queueMicrotask(je)), t(e, D), Oe.push(e, t, n), n;
}
function Pe(e, t) {
  qe.push(e, t);
}
function We() {
  try {
    Le();
  } finally {
    Oe = [];
  }
  try {
    Fe();
  } finally {
    qe = [];
  }
}
function ze(e) {
  let t = Oe,
    n = qe,
    r = (qe = []);
  Oe = [];
  try {
    e(), Le();
  } finally {
    (Oe = t), (qe = n);
  }
  return r;
}
function Fe(e = qe) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function Le() {
  for (let e = 0; e < Oe.length; e += 3) {
    let t = Oe[e + 0];
    (0, Oe[e + 1])(t, Oe[e + 2]);
  }
}
var Je = {},
  Ue = class {
    o = [];
    p = {};
    D = { _: Je };
    constructor(e, t, n) {
      (this.E = e), (this.F = t), (this.q = n), (this.s = e[n]), this.t();
    }
    w() {
      this.s.w(), this.t();
    }
    t() {
      let e = this.s,
        t = this.D,
        n = this.p,
        r = e.v,
        i = new Map();
      if (r.length) {
        let t = e.i.length,
          o = new Map();
        e.v = [];
        let l = (e, t = this.f, r = e) => {
          let l = (n[t] ||= {}),
            f = r;
          for (; 8 === (f = f.previousSibling).nodeType; );
          l.b = f;
          let u = (l.a ||= f),
            a = o.size;
          for (let [e, n] of o) {
            if (!a--) break;
            e !== t &&
              4 & u.compareDocumentPosition(n) &&
              2 & r.compareDocumentPosition(n) &&
              (i.set("" + e, t), o.delete(e));
          }
          return o.set(t, e), l;
        };
        for (let e of r) {
          let r = e.data,
            i = r[t],
            f = parseInt(r.slice(t + 1)),
            u = (n[f] ||= {}),
            a = r.indexOf(" ") + 1,
            c = a ? r.slice(a) : "";
          if ("*" === i) u[c] = e.previousSibling;
          else if ("$" === i) o.set(f, e);
          else if ("[" === i)
            this.f && (c && l(e), this.o.push(this.f)), (this.f = f), (u.a = e);
          else if ("]" === i) {
            if (((u[c] = e), f < this.f)) {
              let t = e.parentNode,
                n = l(e).a;
              t && t !== n.parentNode && t.prepend(n), (this.f = this.o.pop());
            }
          } else if ("|" === i) {
            u[parseInt(c)] = e;
            let t = JSON.parse("[" + c.slice(c.indexOf(" ") + 1) + "]"),
              n = e;
            for (let r = t.length - 1; r >= 0; r--) n = l(e, t[r], n).b;
          }
        }
      }
      let o = e.r;
      if (o) {
        e.r = [];
        let r = o.length,
          l = 0;
        for (; l < r; ) {
          let e = o[l++];
          if ("function" == typeof e) {
            let r = e(t),
              { $global: o } = n;
            o ||
              ((n.$global = o = r.$ || {}),
              (o.runtimeId = this.F),
              (o.renderId = this.q));
            for (let e in r)
              if ("$" !== e) {
                let t = r[e],
                  l = n[e];
                (t.$global = o), l !== t && (n[e] = Object.assign(t, l));
                let f = i.get(e);
                f && ((t.d = r[f]), u(t));
              }
          } else
            l === r || "string" != typeof o[l]
              ? delete this.E[this.q]
              : Je[o[l++]](n[e]);
        }
      }
    }
  };
function Ze(e, t) {
  return (Je[e] = t), t;
}
function Ge(e, t) {
  return (Je[e] = (e) => (n) => t(e, n)), t;
}
function He(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new Ue(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function Ke(e, t) {
  return Ze(e, t.g), t;
}
function Qe(e, t) {
  return Ze(e, (e) => () => e[t]);
}
var Ve = new Map(),
  Xe = {
    patchConditionals: function (e) {
      (he = e(he)), (ve = e(ve));
    },
    queueEffect: Pe,
    init() {
      Ze("$C_s", (e) => {
        Ve.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      Ze("$C_r", e);
    },
    isOp: (e) => e === D || e === P || e === W,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      Fe(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = Je[e];
            return t ? n(t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.p[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = ge("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Ve.get(t.id)), i && ((t.scope = i), Ve.delete(t.id)));
      let o = n.e || Ye,
        l = !1;
      if (
        ((t.effects = ze(() => {
          if (i) o(i, D), (l = !0);
          else {
            i = t.scope = ue(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, P);
          }
          o(i, r);
        })),
        !l)
      )
        return i.a === i.b ? i.a : i.a.parentNode;
    },
  };
function Ye() {}
var et = (e, t) => ((e.mount = tt), (e._ = e), Ze(t, e));
function tt(e = {}, t, n) {
  let i,
    o,
    { $global: l } = e;
  l
    ? (({ $global: l, ...e } = e),
      (l = { runtimeId: "M", renderId: "_", ...l }))
    : (l = { runtimeId: "M", renderId: "_" });
  let f = this.e,
    u = ze(() => {
      (i = r(l)), (o = ce(this, i)), f && f(i, [e]);
    });
  switch (n) {
    case "afterbegin":
      t.insertBefore(o, t.firstChild);
      break;
    case "afterend":
      t.parentElement.insertBefore(o, t.nextSibling);
      break;
    case "beforebegin":
      t.parentElement.insertBefore(o, t);
      break;
    default:
      t.appendChild(o);
  }
  return (
    Fe(u),
    {
      update: (e) => {
        f &&
          (function (e) {
            let t = Oe,
              n = qe;
            (Oe = []), (qe = []);
            try {
              e(), Le(), (Oe = t), Fe();
            } finally {
              (Oe = t), (qe = n);
            }
          })(() => {
            f(i, D), f(i, [e]);
          });
      },
      destroy: () => {
        a(i);
      },
    }
  );
}
export {
  A as attr,
  j as attrs,
  T as attrsEvents,
  F as changeHandler,
  K as childClosures,
  B as classAttr,
  G as closure,
  Xe as compat,
  he as conditional,
  ve as conditionalOnlyChild,
  ge as createRenderer,
  de as createRendererWithOwner,
  r as createScope,
  et as createTemplate,
  _ as data,
  H as dynamicClosure,
  Q as dynamicSubscribers,
  se as dynamicTagAttrs,
  e as forIn,
  t as forOf,
  n as forTo,
  d as getAbortSignal,
  O as html,
  ne as inChild,
  be as inConditionalScope,
  $e as inLoopScope,
  He as init,
  z as initValue,
  U as intersection,
  re as intersections,
  R as lifecycle,
  Se as loopIn,
  Ne as loopOf,
  ke as loopTo,
  te as nextTagId,
  Qe as nodeRef,
  x as on,
  ze as prepare,
  q as props,
  Re as queueControllableSource,
  Pe as queueEffect,
  De as queueSource,
  Ze as register,
  Ge as registerBoundSignal,
  Ke as registerSubscriber,
  s as resetAbortSignal,
  We as run,
  Fe as runEffects,
  V as setTagVar,
  E as styleAttr,
  X as tagVarSignal,
  L as value,
};
