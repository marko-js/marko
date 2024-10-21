function e(e) {
  return { x: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
var r,
  i =
    ((r = (e, t) =>
      t.length
        ? function (...n) {
            return t.call(this, e, ...n);
          }
        : function () {
            return t.call(this, e);
          }),
    (e, t) => {
      e.l ||= new Map();
      let n = e.l.get(t);
      return n || ((n = r(e, t)), e.l.set(t, n)), n;
    });
function o(e) {
  l(e), e.d?.h?.delete(e);
  let t = e.y?.c;
  if (t) for (let n of t) n.j?.(e);
  return e;
}
function l(e) {
  let t = e.h;
  if (t) for (let e of t) l(e);
  let n = e.m;
  if (n) for (let e of n.values()) e.abort();
}
function f(e) {
  let t = e.d;
  for (; t && !t.h?.has(e); ) (t.h ||= new Set()).add(e), (t = (e = t).d);
}
function u(e) {
  o(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function a(e, t, n) {
  let r = e.a,
    i = e.b.nextSibling;
  for (; r !== i; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function c(e, t) {
  let n = e.m;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function s(e, t) {
  let n = (e.m ||= new Map()),
    r = n.get(t);
  return r || (f(e), n.set(t, (r = new AbortController()))), r.signal;
}
function d(e, t) {
  return t ? e : "";
}
var g = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function h(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !g.test(e) ? t + "px" : t}`
    : "";
}
function p(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          i = "";
        if (Array.isArray(e))
          for (let o of e) {
            let e = p(o, t, n);
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
function b(e) {
  if (e) return e.renderBody || e.default || e;
}
var v = 2147483647;
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
      return p(e, " ", d);
    })(t) || void 0,
  );
}
function k(e, t) {
  S(
    e,
    "style",
    (function (e) {
      return p(e, ";", h);
    })(t) || void 0,
  );
}
function A(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function I(e, t, n) {
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
var E = document.createElement("template");
function T(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    o = r.parentNode,
    l = i.nextSibling;
  E.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = E.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), o.insertBefore(f, r);
  let u = r;
  for (; u !== l; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function _(e, t, n) {
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
      (s(e, "-" + t).onabort = () => n.onDestroy?.()));
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
function G(e, t, n = L, r) {
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
          i = void 0 === t ? !u.x : 0 === t;
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
function H(e, t, n = L, r) {
  let o = "function" == typeof e ? e : () => e,
    l = G(o, t, n, r);
  return (
    (l.g = (e) => {
      let t = n(e),
        r = o(e) + "*";
      (t[r] ||= new Set()), t[r].add(i(e, l));
    }),
    (l.j = (e) => {
      let t = n(e),
        r = o(e) + "*";
      t[r]?.delete(i(e, l));
    }),
    l
  );
}
function J(e, t) {
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
function U(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function Z(e, t, n) {
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
  for (r !== n && (n.d = r); (o = t.charCodeAt(i++)); )
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
  if (((i._ = i.d = t.z || r), (i.y = t), fe(t, i), t.c))
    for (let e of t.c) e.g?.(i);
  return i;
}
function le(t, n, r) {
  if ("string" != typeof t) return oe(t, n, r);
  let i = e(n);
  return (i._ = i.d = r), (i[0] = i.a = i.b = document.createElement(t)), i;
}
function fe(e, t) {
  let n = e.k();
  return (
    re(11 === n.nodeType ? n.firstChild : n, e.A, t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.n && e.n(t),
    n
  );
}
function ue(e, t, n) {
  return (r, i) => {
    let o = r[e + "("];
    if (!o || i === R) return;
    let l = r[e + "!"];
    if (i === O || i === q) return o.e?.(l, i);
    let f = t?.(r);
    if ("string" == typeof o) I(l, 0, i()), ve(l, 0, f);
    else if (o.e) {
      let e = i();
      o.e(l, n ? e : [f ? { ...e, renderBody: f } : e]);
    }
  };
}
function ae(e, t, n, r, i = 0, o) {
  let l,
    f,
    u = {},
    a = t ? ne(t) : " ";
  return (t) => ({
    o: u,
    B: e,
    A: a,
    n: n,
    k: se,
    z: t,
    C: i,
    D: void 0,
    get e() {
      return (l ||= o?.());
    },
    get c() {
      return (f ||= new Set(r?.()));
    },
  });
}
function ce(e, t, n, r, i, o) {
  return ae(e, t, n, r, i, o)();
}
function se() {
  return (this.D ||= (function (e) {
    let t = ge.createContextualFragment(e);
    return t.firstChild === t.lastChild ? t.firstChild || de : t;
  })(this.B)).cloneNode(!0);
}
var de = document.createTextNode(""),
  ge = new Range();
var he = function (e, t, r) {
  let i = e + "(",
    o = e + "!",
    l = r && ((e, t) => (l = r())(e, t));
  return (r, f) => {
    if (f === R) return;
    let c = r[i],
      s = f;
    if (f !== O && f !== q) {
      let o = b(f);
      Ie(o, c)
        ? ((c = r[i] = o),
          (function (e, t, r) {
            let i,
              o = e[t + "!"];
            r
              ? ((i = e[t + "!"] = le(r, e.$global, e)), (o = o || n(e[t])))
              : ((i = n(e[t])), (e[t + "!"] = void 0)),
              a(i, o.a.parentNode, o.a),
              u(o);
          })(r, e, o),
          t?.(r),
          (s = R))
        : (s = q);
    }
    l?.(r, s), Q(c, r[o], s);
  };
};
function pe(e, t) {
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
var be = function (e, t, n) {
  let r = e + "(",
    i = e + "!",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    if (l === R) return;
    let f = n[r],
      u = l;
    if (l !== O && l !== q) {
      let i = b(l);
      Ie(i, f) ? ((f = n[r] = i), ve(n, e, i), t?.(n), (u = R)) : (u = q);
    }
    o?.(n, u), Q(f, n[i], u);
  };
};
function ve(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    a((e[t + "!"] = le(n, e.$global, e)), i, null);
  }
  r && o(r);
}
var me = new Map([[Symbol(), n(void 0)]]),
  we = [n(void 0)],
  ye = new Map(),
  Ce = [];
function xe(e, t) {
  return Se(e, t, (e, t) => {
    let [n, r = ke] = e,
      i = 0;
    for (let e of n) t(r(e, i), [e, i, n]), i++;
  });
}
function Me(e, t) {
  return Se(e, t, (e, t) => {
    let [n, r = Ae] = e;
    for (let e in n) {
      let i = n[e];
      t(r(e, i), [e, i, n]);
    }
  });
}
function Ne(e, t) {
  return Se(e, t, (e, t) => {
    let [n, r = 0, i = 1, o = Ae] = e,
      l = (n - r) / i;
    for (let e = 0; e <= l; e++) {
      let n = r + e * i;
      t(o(n), [n]);
    }
  });
}
function Se(e, t, r) {
  let i = e + "!",
    l = t.c,
    f = t.e;
  return (c, s) => {
    if (s === R) return;
    if (s === O || s === q) {
      let t = c[i] ?? c[e + "("]?.values() ?? [];
      if (t !== we)
        for (let e of t) {
          f?.(e, s);
          for (let t of l) t(e, s);
        }
      return;
    }
    let d,
      g,
      h,
      p,
      b = c[e],
      m = 8 === b.nodeType || 3 === b.nodeType,
      w = c[e + "("] || (m ? me : ye),
      y = c[e + "!"] || Array.from(w.values()),
      C = !0;
    if (
      (r(s, (e, n) => {
        let r = w.get(e),
          i = q;
        if ((r || ((r = oe(t, c.$global, c)), (i = R)), f && f(r, n), l))
          for (let e of l) e(r, i);
        d ? (d.set(e, r), g.push(r)) : ((d = new Map([[e, r]])), (g = [r]));
      }),
      !d)
    )
      if (m) (d = me), (g = we), n(b);
      else {
        if (t.C) for (let e = 0; e < y.length; e++) o(y[e]);
        (b.textContent = ""), (d = ye), (g = Ce), (C = !1);
      }
    if (C) {
      if (m) {
        w === me && n(b);
        let e = y[y.length - 1];
        (h = e.b.nextSibling), (p = e.a.parentNode);
      } else (h = null), (p = b);
      !(function (e, t, n, r) {
        let i,
          o,
          l,
          f,
          c,
          s,
          d = 0,
          g = 0,
          h = t.length - 1,
          p = n.length - 1,
          b = t[d],
          m = n[g],
          w = t[h],
          y = n[p];
        e: {
          for (; b === m; ) {
            if ((++d, ++g, d > h || g > p)) break e;
            (b = t[d]), (m = n[g]);
          }
          for (; w === y; ) {
            if ((--h, --p, d > h || g > p)) break e;
            (w = t[h]), (y = n[p]);
          }
        }
        if (d > h) {
          if (g <= p) {
            (l = p + 1), (f = l < n.length ? n[l].a : r);
            do {
              a(n[g++], e, f);
            } while (g <= p);
          }
        } else if (g > p)
          do {
            u(t[d++]);
          } while (d <= h);
        else {
          let b = h - d + 1,
            m = p - g + 1,
            w = t,
            y = new Array(m);
          for (i = 0; i < m; ++i) y[i] = -1;
          let C = 0,
            x = 0,
            M = new Map();
          for (o = g; o <= p; ++o) M.set(n[o], o);
          for (i = d; i <= h && x < m; ++i)
            (c = t[i]),
              (o = M.get(c)),
              void 0 !== o &&
                ((C = C > o ? v : o),
                ++x,
                (s = n[o]),
                (y[o - g] = i),
                (w[i] = null));
          if (b === t.length && 0 === x) {
            for (; g < m; ++g) a(n[g], e, r);
            for (; d < b; ++d) u(t[d]);
          } else {
            for (i = b - x; i > 0; ) (c = w[d++]), null !== c && (u(c), i--);
            if (C === v) {
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
                  ? ((C = i + g),
                    (s = n[C++]),
                    (f = C < l ? n[C].a : r),
                    a(s, e, f))
                  : --o;
            } else if (x !== m)
              for (l = n.length, i = m - 1; i >= 0; --i)
                -1 === y[i] &&
                  ((C = i + g),
                  (s = n[C++]),
                  (f = C < l ? n[C].a : r),
                  a(s, e, f));
          }
        }
      })(p, y, g, h);
    }
    (c[e + "("] = d), (c[e + "!"] = g);
  };
}
function $e(e, t) {
  let n = t + "!";
  return (r, i) => {
    let o = r[n] ?? r[t + "("]?.values() ?? [];
    if (o !== we) for (let t of o) e(t, i);
  };
}
function ke(e, t) {
  return t;
}
function Ae(e) {
  return e;
}
function Ie(e, t) {
  return e !== t && (e?.o || 0) !== t?.o;
}
var Be,
  Ee = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (Be = !1), Pe();
      }),
      t
    );
  })();
function Te() {
  Pe(), requestAnimationFrame(_e);
}
function _e() {
  Ee.postMessage(0);
}
var je = [],
  Oe = [];
function qe(e, t, n, r) {
  return n ? (n(r), r) : Re(e, t, r);
}
function Re(e, t, n) {
  return Be || ((Be = !0), queueMicrotask(Te)), t(e, O), je.push(e, t, n), n;
}
function De(e, t) {
  Oe.push(e, t);
}
function Pe() {
  try {
    We();
  } finally {
    je = [];
  }
  try {
    Fe();
  } finally {
    Oe = [];
  }
}
function ze(e) {
  let t = je,
    n = Oe,
    r = (Oe = []);
  je = [];
  try {
    e(), We();
  } finally {
    (je = t), (Oe = n);
  }
  return r;
}
function Fe(e = Oe) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function We() {
  for (let e = 0; e < je.length; e += 3) {
    let t = je[e + 0];
    (0, je[e + 1])(t, je[e + 2]);
  }
}
var Le = {},
  Ge = class {
    p = [];
    q = {};
    E = { _: Le };
    constructor(e, t, n) {
      (this.F = e), (this.G = t), (this.s = n), (this.t = e[n]), this.u();
    }
    w() {
      this.t.w(), this.u();
    }
    u() {
      let e = this.t,
        t = this.E,
        n = this.q,
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
            this.f && (c && l(e), this.p.push(this.f)), (this.f = f), (u.a = e);
          else if ("]" === i) {
            if (((u[c] = e), f < this.f)) {
              let t = e.parentNode,
                n = l(e).a;
              t && t !== n.parentNode && t.prepend(n), (this.f = this.p.pop());
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
              (o.runtimeId = this.G),
              (o.renderId = this.s));
            for (let e in r)
              if ("$" !== e) {
                let t = r[e],
                  l = n[e];
                (t.$global = o), l !== t && (n[e] = Object.assign(t, l));
                let u = i.get(e);
                u && ((t.d = r[u]), f(t));
              }
          } else
            l === r || "string" != typeof o[l]
              ? delete this.F[this.s]
              : Le[o[l++]](n[e]);
        }
      }
    }
  };
function He(e, t) {
  return (Le[e] = t), t;
}
function Je(e, t) {
  return (Le[e] = (e) => (n) => t(e, n)), t;
}
function Ue(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new Ge(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function Ze(e, t) {
  return He(e, t.g), t;
}
var Ke = new Map(),
  Qe = {
    patchConditionals: function (e) {
      (he = e(he)), (be = e(be));
    },
    queueEffect: De,
    init() {
      He("$C_s", (e) => {
        Ke.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      He("$C_r", e);
    },
    isOp: (e) => e === O || e === q || e === R,
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
            let n = Le[e];
            return t ? n(t) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.q[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = ce("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Ke.get(t.id)), i && ((t.scope = i), Ke.delete(t.id)));
      let o = n.e || Ve,
        l = !1;
      if (
        ((t.effects = ze(() => {
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
function Ve() {}
var Xe = (e, t) => ((e.mount = Ye), (e._ = e), He(t, e));
function Ye(t = {}, n, r) {
  let i,
    o,
    { $global: l } = t;
  l
    ? (({ $global: l, ...t } = t),
      (l = { runtimeId: "M", renderId: "_", ...l }))
    : (l = { runtimeId: "M", renderId: "_" });
  let f = this.e,
    a = ze(() => {
      (i = e(l)), (o = fe(this, i)), f && f(i, [t]);
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
    Fe(a),
    {
      update: (e) => {
        f &&
          (function (e) {
            let t = je,
              n = Oe;
            (je = []), (Oe = []);
            try {
              e(), We(), (je = t), Fe();
            } finally {
              (je = t), (Oe = n);
            }
          })(() => {
            f(i, O), f(i, [e]);
          });
      },
      destroy: () => {
        u(i);
      },
    }
  );
}
export {
  N as attr,
  I as attrs,
  B as attrsEvents,
  i as bindFunction,
  P as changeHandler,
  J as childClosures,
  $ as classAttr,
  G as closure,
  Qe as compat,
  he as conditional,
  be as conditionalOnlyChild,
  ce as createRenderer,
  ae as createRendererWithOwner,
  e as createScope,
  Xe as createTemplate,
  A as data,
  H as dynamicClosure,
  U as dynamicSubscribers,
  ue as dynamicTagAttrs,
  s as getAbortSignal,
  T as html,
  Y as inChild,
  pe as inConditionalScope,
  $e as inLoopScope,
  Ue as init,
  D as initValue,
  W as intersection,
  ee as intersections,
  j as lifecycle,
  Me as loopIn,
  xe as loopOf,
  Ne as loopTo,
  X as nextTagId,
  C as on,
  ze as prepare,
  _ as props,
  qe as queueControllableSource,
  De as queueEffect,
  Re as queueSource,
  He as register,
  Je as registerBoundSignal,
  Ze as registerSubscriber,
  c as resetAbortSignal,
  Pe as run,
  Fe as runEffects,
  Z as setTagVar,
  k as styleAttr,
  K as tagVarSignal,
  z as value,
};
