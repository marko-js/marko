function e(e) {
  return { y: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  return (t, n) => {
    t.l ||= new Map();
    let r = t.l.get(n);
    return r || ((r = e(t, n)), t.l.set(n, r)), r;
  };
}
var i = r((e, t) => t && { ...t, m: e }),
  o = r((e, t) =>
    t.length
      ? function (...n) {
          return t.call(this, e, ...n);
        }
      : function () {
          return t.call(this, e);
        },
  );
function l(e) {
  f(e), e.e?.h?.delete(e);
  let t = e.z?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function f(e) {
  let t = e.h;
  if (t) for (let e of t) f(e);
  let n = e.n;
  if (n) for (let e of n.values()) e.abort();
}
function u(e) {
  let t = e.e;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).e);
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
function s(e, t, n) {
  let r = e.a,
    i = e.b.nextSibling;
  for (; r !== i; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function c(e, t) {
  let n = e.n;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function d(e, t) {
  let n = (e.n ||= new Map()),
    r = n.get(t);
  return r || (u(e), n.set(t, (r = new AbortController()))), r.signal;
}
var g = 2147483647;
function h(e, t) {
  return t ? e : "";
}
var p = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function b(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !p.test(e) ? t + "px" : t}`
    : "";
}
function v(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let o of e) {
            let e = v(o, t, n);
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
var m = new Map(),
  w = new WeakMap(),
  y = { capture: !0 };
function C(e, t, n) {
  let r = m.get(t);
  r || m.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = w.get(n);
        r || w.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, x, y));
      })(e, t),
    r.set(e, n || void 0);
}
function x(e) {
  let t = e.target;
  if (t) {
    let n = m.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var M = /^on[A-Z-]/;
function N(e, t, n) {
  S(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function S(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function $(e, t) {
  S(
    e,
    "class",
    (function (e) {
      return v(e, " ", h);
    })(t) || void 0,
  );
}
function k(e, t) {
  S(
    e,
    "style",
    (function (e) {
      return v(e, ";", b);
    })(t) || void 0,
  );
}
function A(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function _(e, t, n) {
  let r,
    i = e[t];
  for (let { name: e } of i.attributes) (n && e in n) || i.removeAttribute(e);
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        $(i, t);
        break;
      case "style":
        k(i, t);
        break;
      case "renderBody":
        break;
      default:
        M.test(e)
          ? ((r ||= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : N(i, e, t);
    }
  }
  e[t + "~"] = r;
}
function B(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) C(n, e, r[e]);
}
var I = document.createElement("template");
function E(e, t, n) {
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
function T(e, t, n) {
  let r = e[n],
    i = e[n + "-"],
    o = e[t];
  if (i) for (let e in i) e in r || (o[e] = void 0);
  for (let e in r) o[e] = r[e];
  e[n + "-"] = r;
}
function j(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (d(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var O = {},
  q = {},
  R = {};
function D(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== O && void 0 === e[n] && t(e, r);
  };
}
function P(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function z(e, t, n) {
  let r = e + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === O) 1 === (n[r] = (n[r] ?? 0) + 1) && i?.(n, O);
    else if (o !== R) {
      let l = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (o === q || (l && n[e] === o)
          ? i?.(n, q)
          : ((n[e] = o), t?.(n, o), i?.(n, R))),
        n[r]--;
    }
  };
}
var F = 0;
function W(e, t, n) {
  let r = "?" + F++,
    i = r + "#",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    l === O
      ? 1 === (n[i] = (n[i] ?? 0) + 1) && o?.(n, O)
      : void 0 === n[i]
        ? ((n[i] = e - 1), (n[r] = !0))
        : 0 == --n[i]
          ? l === R || n[r]
            ? ((n[r] = !1), t(n, 0), o?.(n, R))
            : o?.(n, q)
          : (n[r] ||= l === R);
  };
}
var L = (e) => e._;
function H(e, t, n = L, r) {
  let i = "?" + F++,
    o = i + 1,
    l = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === O) 1 === (e[o] = (e[o] ?? 0) + 1) && f?.(e, O);
    else {
      let u, a;
      if (void 0 === e[o]) {
        (u = n(e)), (a = l(e));
        let t = u[a + "#"],
          i = void 0 === t ? !u.y : 0 === t;
        (e[o] = i ? 1 : 2), (r = R);
      }
      0 == --e[o]
        ? r === R || e[i]
          ? ((e[i] = !1), (u ||= n(e)), (a ||= l(e)), t?.(e, u[a]), f?.(e, R))
          : f?.(e, q)
        : (e[i] ||= r === R);
    }
  };
}
function J(e, t, n = L, r) {
  let i = "function" == typeof e ? e : () => e,
    l = H(i, t, n, r);
  return (
    (l.g = (e) => {
      let t = n(e),
        r = i(e) + "*";
      (t[r] ||= new Set()), t[r].add(o(e, l));
    }),
    (l.j = (e) => {
      let t = n(e),
        r = i(e) + "*";
      t[r]?.delete(o(e, l));
    }),
    l
  );
}
function U(e, t) {
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
function Z(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function G(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var K = (e, t) => e["/"]?.(t),
  Q = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  V = new WeakMap();
function X({ $global: e }) {
  let t = V.get(e) || 0;
  return V.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function Y(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function ee(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var te = document.createTreeWalker(document);
function ne(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function re(e, t, n) {
  (te.currentNode = e),
    ie(t, n, n, 0),
    (te.currentNode = document.documentElement);
}
function ie(t, n, r, i) {
  let o,
    l = 0,
    f = 0,
    u = 0;
  for (r !== n && (n.e = r); (o = t.charCodeAt(i++)); )
    if (((f = l), (l = 0), o >= 117)) l = 10 * f + o - 117;
    else if (o >= 107) {
      for (o = 10 * f + o - 107; o--; ) te.parentNode();
      te.nextSibling();
    } else if (o >= 97) for (o = 10 * f + o - 97; o--; ) te.nextSibling();
    else if (o >= 67) for (o = 20 * f + o - 67; o--; ) te.nextNode();
    else if (47 === o) i = ie(t, (n[u++] = e(n.$global)), r, i);
    else {
      if (38 === o) return i;
      if (32 === o) n[u++] = te.currentNode;
      else {
        let e = (n[u++] = document.createTextNode("")),
          t = te.currentNode;
        t.parentNode.replaceChild(e, t), (te.currentNode = e);
      }
    }
  return i;
}
function oe(t, n, r) {
  let i = e(n);
  if (((i._ = i.e = t.m || r), (i.z = t), le(t, i), t.c))
    for (let e of t.c) e.g?.(i);
  return i;
}
function le(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.k();
  return (
    re(11 === n.nodeType ? n.firstChild : n, e.A ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.o && e.o(t),
    n
  );
}
function fe(e, t, n) {
  return (r, o) => {
    let l = r[e + "("];
    if (!l || l === t || o === R) return;
    let f = r[e + "!"];
    if (o === O || o === q) return l.d?.(f, o);
    if ("string" == typeof l) _(f, 0, o()), pe(f, 0, t && i(r, t));
    else if (((l = l.default ? l.default._ : l._ || l), l.d)) {
      let e = o();
      l.d(f, n ? e : [t ? { ...e, renderBody: i(r, t) } : e]);
    }
  };
}
function ue(e, t, n, r, i = 0, o) {
  let l,
    f = {
      p: e,
      A: t && ne(t),
      o: n,
      k: ae,
      B: i,
      C: void 0,
      m: void 0,
      d: o && ((e, t) => (f.d = o())(e, t)),
      get c() {
        return (l ||= new Set(r?.()));
      },
    };
  return f;
}
function ae() {
  return (this.C ||= (function (e) {
    let t = ce.createContextualFragment(e);
    return t.firstChild === t.lastChild ? t.firstChild || se : t;
  })(this.p)).cloneNode(!0);
}
var se = document.createTextNode(""),
  ce = new Range();
var de = function (e, t, r) {
  let i = e + "(",
    o = e + "!",
    l = r && ((e, t) => (l = r())(e, t));
  return (r, f) => {
    if (f === R) return;
    let u = r[i],
      c = f;
    if (f !== O && f !== q) {
      let o = f ? f._ || f.renderBody || f : void 0;
      o !== u
        ? ((u = r[i] = o),
          (function (e, t, r) {
            let i,
              o = e[t + "!"];
            r
              ? ((i = e[t + "!"] = oe(r, e.$global, e)), (o = o || n(e[t])))
              : ((i = n(e[t])), (e[t + "!"] = void 0)),
              s(i, o.a.parentNode, o.a),
              a(o);
          })(r, e, o),
          t?.(r),
          (c = R))
        : (c = q);
    }
    l?.(r, c), Q(u, r[o], c);
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
var he = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    if (l === R) return;
    let f = n[r],
      u = l;
    if (l !== O && l !== q) {
      let i = l ? l._ || l.renderBody || l : void 0;
      i !== f ? ((f = n[r] = i), pe(n, e, i), t?.(n), (u = R)) : (u = q);
    }
    o?.(n, u), Q(f, n[i], u);
  };
};
function pe(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    s((e[t + "!"] = oe(n, e.$global, e)), i, null);
  }
  r && l(r);
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
    let [n, r = $e] = e;
    for (let e in n) {
      let i = n[e];
      t(r(e, i), [e, i, n]);
    }
  });
}
function xe(e, t) {
  return Me(e, t, (e, t) => {
    let [n, r = 0, i = 1, o = $e] = e,
      l = (n - r) / i;
    for (let e = 0; e <= l; e++) {
      let n = r + e * i;
      t(o(n), [n]);
    }
  });
}
function Me(e, t, r) {
  let i = e + "!",
    o = t.c,
    f = t.d;
  return (u, c) => {
    if (c === R) return;
    if (c === O || c === q) {
      let t = u[i] ?? u[e + "("]?.values() ?? [];
      if (t !== ve)
        for (let e of t) {
          f?.(e, c);
          for (let t of o) t(e, c);
        }
      return;
    }
    let d,
      h,
      p,
      b,
      v = u[e],
      m = 8 === v.nodeType || 3 === v.nodeType,
      w = u[e + "("] || (m ? be : me),
      y = u[e + "!"] || Array.from(w.values()),
      C = !0;
    if (
      (r(c, (e, n) => {
        let r = w.get(e),
          i = q;
        if ((r || ((r = oe(t, u.$global, u)), (i = R)), f && f(r, n), o))
          for (let e of o) e(r, i);
        d ? (d.set(e, r), h.push(r)) : ((d = new Map([[e, r]])), (h = [r]));
      }),
      !d)
    )
      if (m) (d = be), (h = ve), n(v);
      else {
        if (t.B) for (let e = 0; e < y.length; e++) l(y[e]);
        (v.textContent = ""), (d = me), (h = we), (C = !1);
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
          l,
          f,
          u,
          c,
          d = 0,
          h = 0,
          p = t.length - 1,
          b = n.length - 1,
          v = t[d],
          m = n[h],
          w = t[p],
          y = n[b];
        e: {
          for (; v === m; ) {
            if ((++d, ++h, d > p || h > b)) break e;
            (v = t[d]), (m = n[h]);
          }
          for (; w === y; ) {
            if ((--p, --b, d > p || h > b)) break e;
            (w = t[p]), (y = n[b]);
          }
        }
        if (d > p) {
          if (h <= b) {
            (l = b + 1), (f = l < n.length ? n[l].a : r);
            do {
              s(n[h++], e, f);
            } while (h <= b);
          }
        } else if (h > b)
          do {
            a(t[d++]);
          } while (d <= p);
        else {
          let v = p - d + 1,
            m = b - h + 1,
            w = t,
            y = new Array(m);
          for (i = 0; i < m; ++i) y[i] = -1;
          let C = 0,
            x = 0,
            M = new Map();
          for (o = h; o <= b; ++o) M.set(n[o], o);
          for (i = d; i <= p && x < m; ++i)
            (u = t[i]),
              (o = M.get(u)),
              void 0 !== o &&
                ((C = C > o ? g : o),
                ++x,
                (c = n[o]),
                (y[o - h] = i),
                (w[i] = null));
          if (v === t.length && 0 === x) {
            for (; h < m; ++h) s(n[h], e, r);
            for (; d < v; ++d) a(t[d]);
          } else {
            for (i = v - x; i > 0; ) (u = w[d++]), null !== u && (a(u), i--);
            if (C === g) {
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
              for (o = t.length - 1, l = n.length, i = m - 1; i >= 0; --i)
                -1 === y[i] || o < 0 || i !== t[o]
                  ? ((C = i + h),
                    (c = n[C++]),
                    (f = C < l ? n[C].a : r),
                    s(c, e, f))
                  : --o;
            } else if (x !== m)
              for (l = n.length, i = m - 1; i >= 0; --i)
                -1 === y[i] &&
                  ((C = i + h),
                  (c = n[C++]),
                  (f = C < l ? n[C].a : r),
                  s(c, e, f));
          }
        }
      })(b, y, h, p);
    }
    (u[e + "("] = d), (u[e + "!"] = h);
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
function $e(e) {
  return e;
}
var ke,
  Ae = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (ke = !1), qe();
      }),
      t
    );
  })();
function _e() {
  qe(), requestAnimationFrame(Be);
}
function Be() {
  Ae.postMessage(0);
}
var Ie = [],
  Ee = [];
function Te(e, t, n, r) {
  return n ? (n(r), r) : je(e, t, r);
}
function je(e, t, n) {
  return ke || ((ke = !0), queueMicrotask(_e)), t(e, O), Ie.push(e, t, n), n;
}
function Oe(e, t) {
  Ee.push(e, t);
}
function qe() {
  try {
    Pe();
  } finally {
    Ie = [];
  }
  try {
    De();
  } finally {
    Ee = [];
  }
}
function Re(e) {
  let t = Ie,
    n = Ee,
    r = (Ee = []);
  Ie = [];
  try {
    e(), Pe();
  } finally {
    (Ie = t), (Ee = n);
  }
  return r;
}
function De(e = Ee) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function Pe() {
  for (let e = 0; e < Ie.length; e += 3) {
    let t = Ie[e + 0];
    (0, Ie[e + 1])(t, Ie[e + 2]);
  }
}
var ze = {},
  Fe = class {
    q = [];
    s = {};
    D = { _: ze };
    constructor(e, t, n) {
      (this.E = e), (this.F = t), (this.t = n), (this.u = e[n]), this.x();
    }
    w() {
      this.u.w(), this.x();
    }
    x() {
      let e = this.u,
        t = this.D,
        n = this.s,
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
            s = a ? r.slice(a) : "";
          if ("*" === i) u[s] = e.previousSibling;
          else if ("$" === i) o.set(f, e);
          else if ("[" === i)
            this.f && (s && l(e), this.q.push(this.f)), (this.f = f), (u.a = e);
          else if ("]" === i) {
            if (((u[s] = e), f < this.f)) {
              let t = e.parentNode,
                n = l(e).a;
              t && t !== n.parentNode && t.prepend(n), (this.f = this.q.pop());
            }
          } else if ("|" === i) {
            u[parseInt(s)] = e;
            let t = JSON.parse("[" + s.slice(s.indexOf(" ") + 1) + "]"),
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
              (o.renderId = this.t));
            for (let e in r)
              if ("$" !== e) {
                let t = r[e],
                  l = n[e];
                (t.$global = o), l !== t && (n[e] = Object.assign(t, l));
                let f = i.get(e);
                f && ((t.e = r[f]), u(t));
              }
          } else
            l === r || "string" != typeof o[l]
              ? delete this.E[this.t]
              : ze[o[l++]](n[e]);
        }
      }
    }
  };
function We(e, t) {
  return (ze[e] = t), t;
}
function Le(e, t) {
  return (ze[e] = (e) => (n) => t(e, n)), t;
}
function He(e, t) {
  return (ze[e] = (e) => i(e, t)), t;
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
  return We(e, t.g), t;
}
var Ze = new Map(),
  Ge = {
    patchConditionals: function (e) {
      (de = e(de)), (he = e(he));
    },
    queueEffect: Oe,
    init() {
      We("$C_s", (e) => {
        Ze.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      We("$C_r", e);
    },
    isOp: (e) => e === O || e === q || e === R,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      De(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = ze[e];
            return t && n ? (n.p ? i(t, n) : n(t)) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.s[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = ue("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Ze.get(t.id)), i && ((t.scope = i), Ze.delete(t.id)));
      let o = n.d || Ke,
        l = !1;
      if (
        ((t.effects = Re(() => {
          if (i) o(i, O), (l = !0);
          else {
            i = t.scope = oe(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, q);
          }
          o(i, r);
        })),
        !l)
      )
        return i.a === i.b ? i.a : i.a.parentNode;
    },
  };
function Ke() {}
var Qe = (e, t) => We(t, new Ve(e)),
  Ve = class {
    _;
    constructor(e) {
      this._ = e;
    }
    mount(t = {}, n, r) {
      let i,
        o,
        { $global: l } = t;
      l
        ? (({ $global: l, ...t } = t),
          (l = { runtimeId: "M", renderId: "_", ...l }))
        : (l = { runtimeId: "M", renderId: "_" });
      let f = this._.d,
        u = Re(() => {
          (i = e(l)), (o = le(this._, i)), f && f(i, [t]);
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
        De(u),
        {
          update: (e) => {
            f &&
              (function (e) {
                let t = Ie,
                  n = Ee;
                (Ie = []), (Ee = []);
                try {
                  e(), Pe(), (Ie = t), De();
                } finally {
                  (Ie = t), (Ee = n);
                }
              })(() => {
                f(i, O), f(i, [e]);
              });
          },
          destroy: () => {
            a(i);
          },
        }
      );
    }
  };
export {
  N as attr,
  _ as attrs,
  B as attrsEvents,
  o as bindFunction,
  i as bindRenderer,
  P as changeHandler,
  U as childClosures,
  $ as classAttr,
  H as closure,
  Ge as compat,
  de as conditional,
  he as conditionalOnlyChild,
  ue as createRenderer,
  e as createScope,
  oe as createScopeWithRenderer,
  Qe as createTemplate,
  A as data,
  J as dynamicClosure,
  Z as dynamicSubscribers,
  fe as dynamicTagAttrs,
  d as getAbortSignal,
  E as html,
  Y as inChild,
  ge as inConditionalScope,
  Ne as inLoopScope,
  Je as init,
  D as initValue,
  W as intersection,
  ee as intersections,
  j as lifecycle,
  Ce as loopIn,
  ye as loopOf,
  xe as loopTo,
  X as nextTagId,
  C as on,
  Re as prepare,
  T as props,
  Te as queueControllableSource,
  Oe as queueEffect,
  je as queueSource,
  We as register,
  Le as registerBoundSignal,
  He as registerRenderer,
  Ue as registerSubscriber,
  c as resetAbortSignal,
  qe as run,
  De as runEffects,
  G as setTagVar,
  k as styleAttr,
  K as tagVarSignal,
  z as value,
};
