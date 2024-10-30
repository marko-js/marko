var e = [],
  t = Symbol();
function n(n) {
  return (n[Symbol.iterator] = i), (n[t] = e), n;
}
function r(r, i) {
  return r ? (r[t] === e ? (r[t] = [i]) : r[t].push(i), r) : n(i);
}
function* i() {
  yield this, yield* this[t];
}
function o(e, t) {
  for (let n in e) t(n, e[n]);
}
function l(e, t) {
  if (e) {
    let n = 0;
    for (let r of e) t(r, n++);
  }
}
function f(e, t, n, r) {
  let i = t || 0,
    o = n || 1;
  for (let t = (e - i) / o, n = 0; n <= t; n++) r(i + n * o);
}
function u(e) {
  return { u: 1, $global: e };
}
var a = u({});
function c(e) {
  return (a.a = a.b = e), a;
}
function s(e) {
  d(e), e.d?.h?.delete(e);
  let t = e.x?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function d(e) {
  let t = e.h;
  if (t) for (let e of t) d(e);
  let n = e.l;
  if (n) for (let e of n.values()) e.abort();
}
function g(e) {
  let t = e.d;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).d);
}
function h(e) {
  s(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function p(e, t, n) {
  let r = e.a,
    i = e.b.nextSibling;
  for (; r !== i; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function b(e, t) {
  let n = e.l;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function v(e, t) {
  let n = (e.l ||= new Map()),
    r = n.get(t);
  return r || (g(e), n.set(t, (r = new AbortController()))), r.signal;
}
function y(e, t) {
  return t ? e : "";
}
var m = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function w(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !m.test(e) ? t + "px" : t}`
    : "";
}
function C(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let o of e) {
            let e = C(o, t, n);
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
function x(e) {
  if (e) return e.renderBody || e.default || e;
}
var S = 2147483647;
var N = new Map(),
  k = new WeakMap(),
  M = { capture: !0 };
function $(e, t, n) {
  let r = N.get(t);
  r || N.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = k.get(n);
        r || k.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, A, M));
      })(e, t),
    r.set(e, n || void 0);
}
function A(e) {
  let t = e.target;
  if (t) {
    let n = N.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var I = document.createTextNode(""),
  B = new Range();
function E(e) {
  return B.createContextualFragment(e);
}
var _ = /^on[A-Z-]/;
function j(e, t, n) {
  T(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function T(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function O(e, t) {
  T(
    e,
    "class",
    (function (e) {
      return C(e, " ", y);
    })(t) || void 0,
  );
}
function q(e, t) {
  T(
    e,
    "style",
    (function (e) {
      return C(e, ";", w);
    })(t) || void 0,
  );
}
function R(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function D(e, t, n) {
  let r = e[t];
  for (let { name: e } of r.attributes) (n && e in n) || r.removeAttribute(e);
  W(e, t, n);
}
function P(e, t, n, r) {
  let i = e[t],
    o = {};
  for (let { name: e } of i.attributes)
    !r[e] && (!n || !(e in n)) && i.removeAttribute(e);
  for (let e in n) r[e] || (o[e] = n[e]);
  W(e, t, o);
}
function W(e, t, n) {
  let r,
    i = e[t];
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        O(i, t);
        break;
      case "style":
        q(i, t);
        break;
      case "renderBody":
        break;
      default:
        _.test(e)
          ? ((r ||= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : j(i, e, t);
    }
  }
  e[t + "~"] = r;
}
function z(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) $(n, e, r[e]);
}
function F(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    o = r.parentNode,
    l = i.nextSibling,
    f = E(t || 0 === t ? t + "" : "<!>");
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), o.insertBefore(f, r);
  let u = r;
  for (; u !== l; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function L(e, t, n) {
  let r = e[n],
    i = e[n + "-"],
    o = e[t];
  if (i) for (let e in i) e in r || (o[e] = void 0);
  for (let e in r) o[e] = r[e];
  e[n + "-"] = r;
}
function J(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (v(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var U = {},
  Z = {},
  G = {};
function H(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== U && void 0 === e[n] && t(e, r);
  };
}
function K(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function Q(e, t, n) {
  let r = e + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === U) 1 === (n[r] = (n[r] ?? 0) + 1) && i?.(n, U);
    else if (o !== G) {
      let l = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (o === Z || (l && n[e] === o)
          ? i?.(n, Z)
          : ((n[e] = o), t?.(n, o), i?.(n, G))),
        n[r]--;
    }
  };
}
var V = 0;
function X(e, t, n) {
  let r = "?" + V++,
    i = r + "#",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    l === U
      ? 1 === (n[i] = (n[i] ?? 0) + 1) && o?.(n, U)
      : void 0 === n[i]
        ? ((n[i] = e - 1), (n[r] = !0))
        : 0 == --n[i]
          ? l === G || n[r]
            ? ((n[r] = !1), t(n, 0), o?.(n, G))
            : o?.(n, Z)
          : (n[r] ||= l === G);
  };
}
var Y = (e) => e._;
function ee(e, t, n = Y, r) {
  let i = "?" + V++,
    o = i + 1,
    l = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === U) 1 === (e[o] = (e[o] ?? 0) + 1) && f?.(e, U);
    else {
      let u, a;
      if (void 0 === e[o]) {
        (u = n(e)), (a = l(e));
        let t = u[a + "#"],
          i = void 0 === t ? !u.u : 0 === t;
        (e[o] = i ? 1 : 2), (r = G);
      }
      0 == --e[o]
        ? r === G || e[i]
          ? ((e[i] = !1), (u ||= n(e)), (a ||= l(e)), t?.(e, u[a]), f?.(e, G))
          : f?.(e, Z)
        : (e[i] ||= r === G);
    }
  };
}
function te(e, t, n = Y, r) {
  let i = "function" == typeof e ? e : () => e,
    o = ee(i, t, n, r),
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
function ne(e, t) {
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
function re(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function ie(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var oe = (e, t) => e["/"]?.(t),
  le = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  fe = new WeakMap();
function ue({ $global: e }) {
  let t = fe.get(e) || 0;
  return fe.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function ae(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function ce(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var se = document.createTreeWalker(document);
function de(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function ge(e, t, n) {
  (se.currentNode = e),
    he(t, n, n, 0),
    (se.currentNode = document.documentElement);
}
function he(e, t, n, r) {
  let i,
    o = 0,
    l = 0,
    f = 0;
  for (n !== t && (t.d = n); (i = e.charCodeAt(r++)); )
    if (((l = o), (o = 0), i >= 117)) o = 10 * l + i - 117;
    else if (i >= 107) {
      for (i = 10 * l + i - 107; i--; ) se.parentNode();
      se.nextSibling();
    } else if (i >= 97) for (i = 10 * l + i - 97; i--; ) se.nextSibling();
    else if (i >= 67) for (i = 20 * l + i - 67; i--; ) se.nextNode();
    else if (47 === i) r = he(e, (t[f++] = u(t.$global)), n, r);
    else {
      if (38 === i) return r;
      if (32 === i) t[f++] = se.currentNode;
      else {
        let e = (t[f++] = document.createTextNode("")),
          n = se.currentNode;
        n.parentNode.replaceChild(e, n), (se.currentNode = e);
      }
    }
  return r;
}
function pe(e, t, n) {
  let r = u(t);
  if (((r._ = r.d = e.y || n), (r.x = e), ve(e, r), e.c))
    for (let t of e.c) t.g?.(r);
  return r;
}
function be(e, t, n) {
  if ("string" != typeof e) return pe(e, t, n);
  let r = u(t);
  return (r._ = r.d = n), (r[0] = r.a = r.b = document.createElement(e)), r;
}
function ve(e, t) {
  let n = e.k();
  return (
    ge(11 === n.nodeType ? n.firstChild : n, e.z, t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.m && e.m(t),
    n
  );
}
function ye(e, t, n) {
  return (r, i) => {
    let o = r[e + "("];
    if (!o || i === G) return;
    let l = r[e + "!"];
    if (i === U || i === Z) return o.e?.(l, i);
    let f = t?.(r);
    if ("string" == typeof o) D(l, 0, i()), ke(l, 0, f);
    else if (o.e) {
      let e = i();
      o.e(l, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function me(e, t, n, r, i = 0, o) {
  let l,
    f,
    u = {},
    a = t ? de(t) : " ";
  return (t) => ({
    n: u,
    A: e,
    z: a,
    m: n,
    k: Ce,
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
function we(e, t, n, r, i, o) {
  return me(e, t, n, r, i, o)();
}
function Ce() {
  return (this.C ||= (function (e) {
    let t = E(e);
    return t.firstChild === t.lastChild ? t.firstChild || I : t;
  })(this.A)).cloneNode(!0);
}
var xe = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    if (l === G) return;
    let f = n[r],
      u = l;
    if (l !== U && l !== Z) {
      let i = x(l);
      Re(i, f)
        ? ((f = n[r] = i),
          (function (e, t, n) {
            let r,
              i = e[t + "!"];
            n
              ? ((r = e[t + "!"] = be(n, e.$global, e)), (i = i || c(e[t])))
              : ((r = c(e[t])), (e[t + "!"] = void 0)),
              p(r, i.a.parentNode, i.a),
              h(i);
          })(n, e, i),
          t?.(n),
          (u = G))
        : (u = Z);
    }
    o?.(n, u), le(f, n[i], u);
  };
};
function Se(e, t) {
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
var Ne = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    if (l === G) return;
    let f = n[r],
      u = l;
    if (l !== U && l !== Z) {
      let i = x(l);
      Re(i, f) ? ((f = n[r] = i), ke(n, e, i), t?.(n), (u = G)) : (u = Z);
    }
    o?.(n, u), le(f, n[i], u);
  };
};
function ke(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    p((e[t + "!"] = be(n, e.$global, e)), i, null);
  }
  r && s(r);
}
var Me = new Map([[Symbol(), c(void 0)]]),
  $e = [c(void 0)],
  Ae = new Map(),
  Ie = [];
function Be(e, t) {
  return je(e, t, ([e, t = Oe], n) => {
    l(
      e,
      "string" == typeof t
        ? (e, r) => n(e[t], [e, r])
        : (e, r) => n(t(e, r), [e, r]),
    );
  });
}
function Ee(e, t) {
  return je(e, t, ([e, t = qe], n) => o(e, (e, r) => n(t(e, r), [e, r])));
}
function _e(e, t) {
  return je(e, t, ([e, t, n, r = qe], i) => f(e, t, n, (e) => i(r(e), [e])));
}
function je(e, t, n) {
  let r = e + "!",
    i = t.c,
    o = t.e;
  return (l, f) => {
    if (f === G) return;
    if (f === U || f === Z) {
      let t = l[r] ?? l[e + "("]?.values() ?? [];
      if (t !== $e)
        for (let e of t) {
          o?.(e, f);
          for (let t of i) t(e, f);
        }
      return;
    }
    let u,
      a,
      d,
      g,
      b = l[e],
      v = 8 === b.nodeType || 3 === b.nodeType,
      y = l[e + "("] || (v ? Me : Ae),
      m = l[e + "!"] || Array.from(y.values()),
      w = !0;
    if (
      (n(f, (e, n) => {
        let r = y.get(e),
          f = Z;
        if ((r || ((r = pe(t, l.$global, l)), (f = G)), o && o(r, n), i))
          for (let e of i) e(r, f);
        u ? (u.set(e, r), a.push(r)) : ((u = new Map([[e, r]])), (a = [r]));
      }),
      !u)
    )
      if (v) (u = Me), (a = $e), c(b);
      else {
        if (t.B) for (let e = 0; e < m.length; e++) s(m[e]);
        (b.textContent = ""), (u = Ae), (a = Ie), (w = !1);
      }
    if (w) {
      if (v) {
        y === Me && c(b);
        let e = m[m.length - 1];
        (d = e.b.nextSibling), (g = e.a.parentNode);
      } else (d = null), (g = b);
      !(function (e, t, n, r) {
        let i,
          o,
          l,
          f,
          u,
          a,
          c = 0,
          s = 0,
          d = t.length - 1,
          g = n.length - 1,
          b = t[c],
          v = n[s],
          y = t[d],
          m = n[g];
        e: {
          for (; b === v; ) {
            if ((++c, ++s, c > d || s > g)) break e;
            (b = t[c]), (v = n[s]);
          }
          for (; y === m; ) {
            if ((--d, --g, c > d || s > g)) break e;
            (y = t[d]), (m = n[g]);
          }
        }
        if (c > d) {
          if (s <= g) {
            (l = g + 1), (f = l < n.length ? n[l].a : r);
            do {
              p(n[s++], e, f);
            } while (s <= g);
          }
        } else if (s > g)
          do {
            h(t[c++]);
          } while (c <= d);
        else {
          let b = d - c + 1,
            v = g - s + 1,
            y = t,
            m = new Array(v);
          for (i = 0; i < v; ++i) m[i] = -1;
          let w = 0,
            C = 0,
            x = new Map();
          for (o = s; o <= g; ++o) x.set(n[o], o);
          for (i = c; i <= d && C < v; ++i)
            (u = t[i]),
              (o = x.get(u)),
              void 0 !== o &&
                ((w = w > o ? S : o),
                ++C,
                (a = n[o]),
                (m[o - s] = i),
                (y[i] = null));
          if (b === t.length && 0 === C) {
            for (; s < v; ++s) p(n[s], e, r);
            for (; c < b; ++c) h(t[c]);
          } else {
            for (i = b - C; i > 0; ) (u = y[c++]), null !== u && (h(u), i--);
            if (w === S) {
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
                  ? ((w = i + s),
                    (a = n[w++]),
                    (f = w < l ? n[w].a : r),
                    p(a, e, f))
                  : --o;
            } else if (C !== v)
              for (l = n.length, i = v - 1; i >= 0; --i)
                -1 === m[i] &&
                  ((w = i + s),
                  (a = n[w++]),
                  (f = w < l ? n[w].a : r),
                  p(a, e, f));
          }
        }
      })(g, m, a, d);
    }
    (l[e + "("] = u), (l[e + "!"] = a);
  };
}
function Te(e, t) {
  let n = t + "!";
  return (r, i) => {
    let o = r[n] ?? r[t + "("]?.values() ?? [];
    if (o !== $e) for (let t of o) e(t, i);
  };
}
function Oe(e, t) {
  return t;
}
function qe(e) {
  return e;
}
function Re(e, t) {
  return e !== t && (e?.n || 0) !== t?.n;
}
var De,
  Pe = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (De = !1), Ge();
      }),
      t
    );
  })();
function We() {
  Ge(), requestAnimationFrame(ze);
}
function ze() {
  Pe.postMessage(0);
}
var Fe = [],
  Le = [];
function Je(e, t, n, r) {
  return n ? (n(r), r) : Ue(e, t, r);
}
function Ue(e, t, n) {
  return De || ((De = !0), queueMicrotask(We)), t(e, U), Fe.push(e, t, n), n;
}
function Ze(e, t) {
  Le.push(e, t);
}
function Ge() {
  try {
    Qe();
  } finally {
    Fe = [];
  }
  try {
    Ke();
  } finally {
    Le = [];
  }
}
function He(e) {
  let t = Fe,
    n = Le,
    r = (Le = []);
  Fe = [];
  try {
    e(), Qe();
  } finally {
    (Fe = t), (Le = n);
  }
  return r;
}
function Ke(e = Le) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function Qe() {
  for (let e = 0; e < Fe.length; e += 3) {
    let t = Fe[e + 0];
    (0, Fe[e + 1])(t, Fe[e + 2]);
  }
}
var Ve = {},
  Xe = class {
    o = [];
    p = {};
    D = { _: Ve };
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
                f && ((t.d = r[f]), g(t));
              }
          } else
            l === r || "string" != typeof o[l]
              ? delete this.E[this.q]
              : Ve[o[l++]](n[e]);
        }
      }
    }
  };
function Ye(e, t) {
  return (Ve[e] = t), t;
}
function et(e, t) {
  return (Ve[e] = (e) => (n) => t(e, n)), t;
}
function tt(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new Xe(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function nt(e, t) {
  return Ye(e, t.g), t;
}
function rt(e, t) {
  return Ye(e, (e) => () => e[t]);
}
var it = new Map(),
  ot = {
    patchConditionals: function (e) {
      (xe = e(xe)), (Ne = e(Ne));
    },
    queueEffect: Ze,
    init() {
      Ye("$C_s", (e) => {
        it.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      Ye("$C_r", e);
    },
    isOp: (e) => e === U || e === Z || e === G,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      Ke(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = Ve[e];
            return t ? n(t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.p[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = we("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = it.get(t.id)), i && ((t.scope = i), it.delete(t.id)));
      let o = n.e || lt,
        l = !1;
      if (
        ((t.effects = He(() => {
          if (i) o(i, U), (l = !0);
          else {
            i = t.scope = pe(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, Z);
          }
          o(i, r);
        })),
        !l)
      )
        return i.a === i.b ? i.a : i.a.parentNode;
    },
  };
function lt() {}
var ft = (e, t) => ((e.mount = ut), (e._ = e), Ye(t, e));
function ut(e = {}, t, n) {
  let r,
    i,
    { $global: o } = e;
  o
    ? (({ $global: o, ...e } = e),
      (o = { runtimeId: "M", renderId: "_", ...o }))
    : (o = { runtimeId: "M", renderId: "_" });
  let l = this.e,
    f = He(() => {
      (r = u(o)), (i = ve(this, r)), l && l(r, [e]);
    });
  switch (n) {
    case "afterbegin":
      t.insertBefore(i, t.firstChild);
      break;
    case "afterend":
      t.parentElement.insertBefore(i, t.nextSibling);
      break;
    case "beforebegin":
      t.parentElement.insertBefore(i, t);
      break;
    default:
      t.appendChild(i);
  }
  return (
    Ke(f),
    {
      update: (e) => {
        l &&
          (function (e) {
            let t = Fe,
              n = Le;
            (Fe = []), (Le = []);
            try {
              e(), Qe(), (Fe = t), Ke();
            } finally {
              (Fe = t), (Le = n);
            }
          })(() => {
            l(r, U), l(r, [e]);
          });
      },
      destroy: () => {
        h(r);
      },
    }
  );
}
export {
  j as attr,
  n as attrTag,
  r as attrTags,
  D as attrs,
  z as attrsEvents,
  K as changeHandler,
  ne as childClosures,
  O as classAttr,
  ee as closure,
  ot as compat,
  xe as conditional,
  Ne as conditionalOnlyChild,
  we as createRenderer,
  me as createRendererWithOwner,
  u as createScope,
  ft as createTemplate,
  R as data,
  te as dynamicClosure,
  re as dynamicSubscribers,
  ye as dynamicTagAttrs,
  o as forIn,
  l as forOf,
  f as forTo,
  v as getAbortSignal,
  F as html,
  ae as inChild,
  Se as inConditionalScope,
  Te as inLoopScope,
  tt as init,
  H as initValue,
  X as intersection,
  ce as intersections,
  J as lifecycle,
  Ee as loopIn,
  Be as loopOf,
  _e as loopTo,
  ue as nextTagId,
  rt as nodeRef,
  $ as on,
  P as partialAttrs,
  He as prepare,
  L as props,
  Je as queueControllableSource,
  Ze as queueEffect,
  Ue as queueSource,
  Ye as register,
  et as registerBoundSignal,
  nt as registerSubscriber,
  b as resetAbortSignal,
  Ge as run,
  Ke as runEffects,
  ie as setTagVar,
  q as styleAttr,
  oe as tagVarSignal,
  Q as value,
};
