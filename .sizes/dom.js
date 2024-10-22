function e(e) {
  return { u: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  i(e), e.d?.h?.delete(e);
  let t = e.x?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function i(e) {
  let t = e.h;
  if (t) for (let e of t) i(e);
  let n = e.l;
  if (n) for (let e of n.values()) e.abort();
}
function o(e) {
  let t = e.d;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).d);
}
function l(e) {
  r(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function f(e, t, n) {
  let r = e.a,
    i = e.b.nextSibling;
  for (; r !== i; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function u(e, t) {
  let n = e.l;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function a(e, t) {
  let n = (e.l ||= new Map()),
    r = n.get(t);
  return r || (o(e), n.set(t, (r = new AbortController()))), r.signal;
}
function c(e, t) {
  return t ? e : "";
}
var s = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function d(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !s.test(e) ? t + "px" : t}`
    : "";
}
function g(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let o of e) {
            let e = g(o, t, n);
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
function p(e) {
  if (e) return e.renderBody || e.default || e;
}
var h = 2147483647;
var b = new Map(),
  v = new WeakMap(),
  m = { capture: !0 };
function w(e, t, n) {
  let r = b.get(t);
  r || b.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = v.get(n);
        r || v.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, y, m));
      })(e, t),
    r.set(e, n || void 0);
}
function y(e) {
  let t = e.target;
  if (t) {
    let n = b.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var C = /^on[A-Z-]/;
function x(e, t, n) {
  M(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function M(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function N(e, t) {
  M(
    e,
    "class",
    (function (e) {
      return g(e, " ", c);
    })(t) || void 0,
  );
}
function S(e, t) {
  M(
    e,
    "style",
    (function (e) {
      return g(e, ";", d);
    })(t) || void 0,
  );
}
function k(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function $(e, t, n) {
  let r,
    i = e[t];
  for (let { name: e } of i.attributes) (n && e in n) || i.removeAttribute(e);
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        N(i, t);
        break;
      case "style":
        S(i, t);
        break;
      case "renderBody":
        break;
      default:
        C.test(e)
          ? ((r ||= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : x(i, e, t);
    }
  }
  e[t + "~"] = r;
}
function A(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) w(n, e, r[e]);
}
var I = document.createElement("template");
function B(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    o = r.parentNode,
    l = i.nextSibling;
  I.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = I.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), o.insertBefore(f, r);
  let u = r;
  for (; u !== l; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function E(e, t, n) {
  let r = e[n],
    i = e[n + "-"],
    o = e[t];
  if (i) for (let e in i) e in r || (o[e] = void 0);
  for (let e in r) o[e] = r[e];
  e[n + "-"] = r;
}
function T(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (a(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var _ = {},
  j = {},
  O = {};
function q(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== _ && void 0 === e[n] && t(e, r);
  };
}
function R(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function D(e, t, n) {
  let r = e + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === _) 1 === (n[r] = (n[r] ?? 0) + 1) && i?.(n, _);
    else if (o !== O) {
      let l = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (o === j || (l && n[e] === o)
          ? i?.(n, j)
          : ((n[e] = o), t?.(n, o), i?.(n, O))),
        n[r]--;
    }
  };
}
var P = 0;
function W(e, t, n) {
  let r = "?" + P++,
    i = r + "#",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    l === _
      ? 1 === (n[i] = (n[i] ?? 0) + 1) && o?.(n, _)
      : void 0 === n[i]
        ? ((n[i] = e - 1), (n[r] = !0))
        : 0 == --n[i]
          ? l === O || n[r]
            ? ((n[r] = !1), t(n, 0), o?.(n, O))
            : o?.(n, j)
          : (n[r] ||= l === O);
  };
}
var z = (e) => e._;
function F(e, t, n = z, r) {
  let i = "?" + P++,
    o = i + 1,
    l = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === _) 1 === (e[o] = (e[o] ?? 0) + 1) && f?.(e, _);
    else {
      let u, a;
      if (void 0 === e[o]) {
        (u = n(e)), (a = l(e));
        let t = u[a + "#"],
          i = void 0 === t ? !u.u : 0 === t;
        (e[o] = i ? 1 : 2), (r = O);
      }
      0 == --e[o]
        ? r === O || e[i]
          ? ((e[i] = !1), (u ||= n(e)), (a ||= l(e)), t?.(e, u[a]), f?.(e, O))
          : f?.(e, j)
        : (e[i] ||= r === O);
    }
  };
}
function L(e, t, n = z, r) {
  let i = "function" == typeof e ? e : () => e,
    o = F(i, t, n, r),
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
function H(e, t) {
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
function J(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function U(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var Z = (e, t) => e["/"]?.(t),
  G = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  K = new WeakMap();
function Q({ $global: e }) {
  let t = K.get(e) || 0;
  return K.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function V(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function X(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var Y = document.createTreeWalker(document);
function ee(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function te(e, t, n) {
  (Y.currentNode = e),
    ne(t, n, n, 0),
    (Y.currentNode = document.documentElement);
}
function ne(t, n, r, i) {
  let o,
    l = 0,
    f = 0,
    u = 0;
  for (r !== n && (n.d = r); (o = t.charCodeAt(i++)); )
    if (((f = l), (l = 0), o >= 117)) l = 10 * f + o - 117;
    else if (o >= 107) {
      for (o = 10 * f + o - 107; o--; ) Y.parentNode();
      Y.nextSibling();
    } else if (o >= 97) for (o = 10 * f + o - 97; o--; ) Y.nextSibling();
    else if (o >= 67) for (o = 20 * f + o - 67; o--; ) Y.nextNode();
    else if (47 === o) i = ne(t, (n[u++] = e(n.$global)), r, i);
    else {
      if (38 === o) return i;
      if (32 === o) n[u++] = Y.currentNode;
      else {
        let e = (n[u++] = document.createTextNode("")),
          t = Y.currentNode;
        t.parentNode.replaceChild(e, t), (Y.currentNode = e);
      }
    }
  return i;
}
function re(t, n, r) {
  let i = e(n);
  if (((i._ = i.d = t.y || r), (i.x = t), oe(t, i), t.c))
    for (let e of t.c) e.g?.(i);
  return i;
}
function ie(t, n, r) {
  if ("string" != typeof t) return re(t, n, r);
  let i = e(n);
  return (i._ = i.d = r), (i[0] = i.a = i.b = document.createElement(t)), i;
}
function oe(e, t) {
  let n = e.k();
  return (
    te(11 === n.nodeType ? n.firstChild : n, e.z, t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.m && e.m(t),
    n
  );
}
function le(e, t, n) {
  return (r, i) => {
    let o = r[e + "("];
    if (!o || i === O) return;
    let l = r[e + "!"];
    if (i === _ || i === j) return o.e?.(l, i);
    let f = t?.(r);
    if ("string" == typeof o) $(l, 0, i()), he(l, 0, f);
    else if (o.e) {
      let e = i();
      o.e(l, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function fe(e, t, n, r, i = 0, o) {
  let l,
    f,
    u = {},
    a = t ? ee(t) : " ";
  return (t) => ({
    n: u,
    A: e,
    z: a,
    m: n,
    k: ae,
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
function ue(e, t, n, r, i, o) {
  return fe(e, t, n, r, i, o)();
}
function ae() {
  return (this.C ||= (function (e) {
    let t = se.createContextualFragment(e);
    return t.firstChild === t.lastChild ? t.firstChild || ce : t;
  })(this.A)).cloneNode(!0);
}
var ce = document.createTextNode(""),
  se = new Range();
var de = function (e, t, r) {
  let i = e + "(",
    o = e + "!",
    u = r && ((e, t) => (u = r())(e, t));
  return (r, a) => {
    if (a === O) return;
    let c = r[i],
      s = a;
    if (a !== _ && a !== j) {
      let o = p(a);
      $e(o, c)
        ? ((c = r[i] = o),
          (function (e, t, r) {
            let i,
              o = e[t + "!"];
            r
              ? ((i = e[t + "!"] = ie(r, e.$global, e)), (o = o || n(e[t])))
              : ((i = n(e[t])), (e[t + "!"] = void 0)),
              f(i, o.a.parentNode, o.a),
              l(o);
          })(r, e, o),
          t?.(r),
          (s = O))
        : (s = j);
    }
    u?.(r, s), G(c, r[o], s);
  };
};
function ge(e, t) {
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
var pe = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    if (l === O) return;
    let f = n[r],
      u = l;
    if (l !== _ && l !== j) {
      let i = p(l);
      $e(i, f) ? ((f = n[r] = i), he(n, e, i), t?.(n), (u = O)) : (u = j);
    }
    o?.(n, u), G(f, n[i], u);
  };
};
function he(e, t, n) {
  let i = e[t + "!"],
    o = e[t];
  if (((o.textContent = ""), n)) {
    f((e[t + "!"] = ie(n, e.$global, e)), o, null);
  }
  i && r(i);
}
var be = new Map([[Symbol(), n(void 0)]]),
  ve = [n(void 0)],
  me = new Map(),
  we = [];
function ye(e, t) {
  return Me(e, t, (e, t) => {
    let [n, r = Se] = e,
      i = 0;
    for (let e of n) t(r(e, i), [e, i, n]), i++;
  });
}
function Ce(e, t) {
  return Me(e, t, (e, t) => {
    let [n, r = ke] = e;
    for (let e in n) {
      let i = n[e];
      t(r(e, i), [e, i, n]);
    }
  });
}
function xe(e, t) {
  return Me(e, t, (e, t) => {
    let [n, r = 0, i = 1, o = ke] = e,
      l = (n - r) / i;
    for (let e = 0; e <= l; e++) {
      let n = r + e * i;
      t(o(n), [n]);
    }
  });
}
function Me(e, t, i) {
  let o = e + "!",
    u = t.c,
    a = t.e;
  return (c, s) => {
    if (s === O) return;
    if (s === _ || s === j) {
      let t = c[o] ?? c[e + "("]?.values() ?? [];
      if (t !== ve)
        for (let e of t) {
          a?.(e, s);
          for (let t of u) t(e, s);
        }
      return;
    }
    let d,
      g,
      p,
      b,
      v = c[e],
      m = 8 === v.nodeType || 3 === v.nodeType,
      w = c[e + "("] || (m ? be : me),
      y = c[e + "!"] || Array.from(w.values()),
      C = !0;
    if (
      (i(s, (e, n) => {
        let r = w.get(e),
          i = j;
        if ((r || ((r = re(t, c.$global, c)), (i = O)), a && a(r, n), u))
          for (let e of u) e(r, i);
        d ? (d.set(e, r), g.push(r)) : ((d = new Map([[e, r]])), (g = [r]));
      }),
      !d)
    )
      if (m) (d = be), (g = ve), n(v);
      else {
        if (t.B) for (let e = 0; e < y.length; e++) r(y[e]);
        (v.textContent = ""), (d = me), (g = we), (C = !1);
      }
    if (C) {
      if (m) {
        w === be && n(v);
        let e = y[y.length - 1];
        (p = e.b.nextSibling), (b = e.a.parentNode);
      } else (p = null), (b = v);
      !(function (e, t, n, r) {
        let i,
          o,
          u,
          a,
          c,
          s,
          d = 0,
          g = 0,
          p = t.length - 1,
          b = n.length - 1,
          v = t[d],
          m = n[g],
          w = t[p],
          y = n[b];
        e: {
          for (; v === m; ) {
            if ((++d, ++g, d > p || g > b)) break e;
            (v = t[d]), (m = n[g]);
          }
          for (; w === y; ) {
            if ((--p, --b, d > p || g > b)) break e;
            (w = t[p]), (y = n[b]);
          }
        }
        if (d > p) {
          if (g <= b) {
            (u = b + 1), (a = u < n.length ? n[u].a : r);
            do {
              f(n[g++], e, a);
            } while (g <= b);
          }
        } else if (g > b)
          do {
            l(t[d++]);
          } while (d <= p);
        else {
          let v = p - d + 1,
            m = b - g + 1,
            w = t,
            y = new Array(m);
          for (i = 0; i < m; ++i) y[i] = -1;
          let C = 0,
            x = 0,
            M = new Map();
          for (o = g; o <= b; ++o) M.set(n[o], o);
          for (i = d; i <= p && x < m; ++i)
            (c = t[i]),
              (o = M.get(c)),
              void 0 !== o &&
                ((C = C > o ? h : o),
                ++x,
                (s = n[o]),
                (y[o - g] = i),
                (w[i] = null));
          if (v === t.length && 0 === x) {
            for (; g < m; ++g) f(n[g], e, r);
            for (; d < v; ++d) l(t[d]);
          } else {
            for (i = v - x; i > 0; ) (c = w[d++]), null !== c && (l(c), i--);
            if (C === h) {
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
              })(y);
              for (o = t.length - 1, u = n.length, i = m - 1; i >= 0; --i)
                -1 === y[i] || o < 0 || i !== t[o]
                  ? ((C = i + g),
                    (s = n[C++]),
                    (a = C < u ? n[C].a : r),
                    f(s, e, a))
                  : --o;
            } else if (x !== m)
              for (u = n.length, i = m - 1; i >= 0; --i)
                -1 === y[i] &&
                  ((C = i + g),
                  (s = n[C++]),
                  (a = C < u ? n[C].a : r),
                  f(s, e, a));
          }
        }
      })(b, y, g, p);
    }
    (c[e + "("] = d), (c[e + "!"] = g);
  };
}
function Ne(e, t) {
  let n = t + "!";
  return (r, i) => {
    let o = r[n] ?? r[t + "("]?.values() ?? [];
    if (o !== ve) for (let t of o) e(t, i);
  };
}
function Se(e, t) {
  return t;
}
function ke(e) {
  return e;
}
function $e(e, t) {
  return e !== t && (e?.n || 0) !== t?.n;
}
var Ae,
  Ie = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (Ae = !1), Re();
      }),
      t
    );
  })();
function Be() {
  Re(), requestAnimationFrame(Ee);
}
function Ee() {
  Ie.postMessage(0);
}
var Te = [],
  _e = [];
function je(e, t, n, r) {
  return n ? (n(r), r) : Oe(e, t, r);
}
function Oe(e, t, n) {
  return Ae || ((Ae = !0), queueMicrotask(Be)), t(e, _), Te.push(e, t, n), n;
}
function qe(e, t) {
  _e.push(e, t);
}
function Re() {
  try {
    We();
  } finally {
    Te = [];
  }
  try {
    Pe();
  } finally {
    _e = [];
  }
}
function De(e) {
  let t = Te,
    n = _e,
    r = (_e = []);
  Te = [];
  try {
    e(), We();
  } finally {
    (Te = t), (_e = n);
  }
  return r;
}
function Pe(e = _e) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function We() {
  for (let e = 0; e < Te.length; e += 3) {
    let t = Te[e + 0];
    (0, Te[e + 1])(t, Te[e + 2]);
  }
}
var ze = {},
  Fe = class {
    o = [];
    p = {};
    D = { _: ze };
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
      let l = e.r;
      if (l) {
        e.r = [];
        let r = l.length,
          f = 0;
        for (; f < r; ) {
          let e = l[f++];
          if ("function" == typeof e) {
            let r = e(t),
              { $global: l } = n;
            l ||
              ((n.$global = l = r.$ || {}),
              (l.runtimeId = this.F),
              (l.renderId = this.q));
            for (let e in r)
              if ("$" !== e) {
                let t = r[e],
                  f = n[e];
                (t.$global = l), f !== t && (n[e] = Object.assign(t, f));
                let u = i.get(e);
                u && ((t.d = r[u]), o(t));
              }
          } else
            f === r || "string" != typeof l[f]
              ? delete this.E[this.q]
              : ze[l[f++]](n[e]);
        }
      }
    }
  };
function Le(e, t) {
  return (ze[e] = t), t;
}
function He(e, t) {
  return (ze[e] = (e) => (n) => t(e, n)), t;
}
function Je(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new Fe(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function Ue(e, t) {
  return Le(e, t.g), t;
}
function Ze(e, t) {
  return Le(e, (e) => () => e[t]);
}
var Ge = new Map(),
  Ke = {
    patchConditionals: function (e) {
      (de = e(de)), (pe = e(pe));
    },
    queueEffect: qe,
    init() {
      Le("$C_s", (e) => {
        Ge.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      Le("$C_r", e);
    },
    isOp: (e) => e === _ || e === j || e === O,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      Pe(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = ze[e];
            return t ? n(t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.p[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = ue("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Ge.get(t.id)), i && ((t.scope = i), Ge.delete(t.id)));
      let o = n.e || Qe,
        l = !1;
      if (
        ((t.effects = De(() => {
          if (i) o(i, _), (l = !0);
          else {
            i = t.scope = re(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, j);
          }
          o(i, r);
        })),
        !l)
      )
        return i.a === i.b ? i.a : i.a.parentNode;
    },
  };
function Qe() {}
var Ve = (e, t) => ((e.mount = Xe), (e._ = e), Le(t, e));
function Xe(t = {}, n, r) {
  let i,
    o,
    { $global: f } = t;
  f
    ? (({ $global: f, ...t } = t),
      (f = { runtimeId: "M", renderId: "_", ...f }))
    : (f = { runtimeId: "M", renderId: "_" });
  let u = this.e,
    a = De(() => {
      (i = e(f)), (o = oe(this, i)), u && u(i, [t]);
    });
  switch (r) {
    case "afterbegin":
      n.insertBefore(o, n.firstChild);
      break;
    case "afterend":
      n.parentElement.insertBefore(o, n.nextSibling);
      break;
    case "beforebegin":
      n.parentElement.insertBefore(o, n);
      break;
    default:
      n.appendChild(o);
  }
  return (
    Pe(a),
    {
      update: (e) => {
        u &&
          (function (e) {
            let t = Te,
              n = _e;
            (Te = []), (_e = []);
            try {
              e(), We(), (Te = t), Pe();
            } finally {
              (Te = t), (_e = n);
            }
          })(() => {
            u(i, _), u(i, [e]);
          });
      },
      destroy: () => {
        l(i);
      },
    }
  );
}
export {
  x as attr,
  $ as attrs,
  A as attrsEvents,
  R as changeHandler,
  H as childClosures,
  N as classAttr,
  F as closure,
  Ke as compat,
  de as conditional,
  pe as conditionalOnlyChild,
  ue as createRenderer,
  fe as createRendererWithOwner,
  e as createScope,
  Ve as createTemplate,
  k as data,
  L as dynamicClosure,
  J as dynamicSubscribers,
  le as dynamicTagAttrs,
  a as getAbortSignal,
  B as html,
  V as inChild,
  ge as inConditionalScope,
  Ne as inLoopScope,
  Je as init,
  q as initValue,
  W as intersection,
  X as intersections,
  T as lifecycle,
  Ce as loopIn,
  ye as loopOf,
  xe as loopTo,
  Q as nextTagId,
  Ze as nodeRef,
  w as on,
  De as prepare,
  E as props,
  je as queueControllableSource,
  qe as queueEffect,
  Oe as queueSource,
  Le as register,
  He as registerBoundSignal,
  Ue as registerSubscriber,
  u as resetAbortSignal,
  Re as run,
  Pe as runEffects,
  U as setTagVar,
  S as styleAttr,
  Z as tagVarSignal,
  D as value,
};
