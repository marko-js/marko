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
function c(e, t, n) {
  let r = e.a,
    i = e.b.nextSibling;
  for (; r !== i; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
function s(e, t) {
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
function g(e, t) {
  return t ? e : "";
}
var h = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function p(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !h.test(e) ? t + "px" : t}`
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
var m = 2147483647;
var w = new Map(),
  y = new WeakMap(),
  C = { capture: !0 };
function x(e, t, n) {
  let r = w.get(t);
  r || w.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = y.get(n);
        r || y.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, M, C));
      })(e, t),
    r.set(e, n || void 0);
}
function M(e) {
  let t = e.target;
  if (t) {
    let n = w.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var N = /^on[A-Z-]/;
function S(e, t, n) {
  $(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function $(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function k(e, t) {
  $(
    e,
    "class",
    (function (e) {
      return b(e, " ", g);
    })(t) || void 0,
  );
}
function A(e, t) {
  $(
    e,
    "style",
    (function (e) {
      return b(e, ";", p);
    })(t) || void 0,
  );
}
function I(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function B(e, t, n) {
  let r,
    i = e[t];
  for (let { name: e } of i.attributes) (n && e in n) || i.removeAttribute(e);
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        k(i, t);
        break;
      case "style":
        A(i, t);
        break;
      case "renderBody":
        break;
      default:
        N.test(e)
          ? ((r ||= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : S(i, e, t);
    }
  }
  e[t + "~"] = r;
}
function E(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) x(n, e, r[e]);
}
var T = document.createElement("template");
function _(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    o = r.parentNode,
    l = i.nextSibling;
  T.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = T.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), o.insertBefore(f, r);
  let u = r;
  for (; u !== l; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function j(e, t, n) {
  let r = e[n],
    i = e[n + "-"],
    o = e[t];
  if (i) for (let e in i) e in r || (o[e] = void 0);
  for (let e in r) o[e] = r[e];
  e[n + "-"] = r;
}
function O(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (d(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var q = {},
  R = {},
  D = {};
function P(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== q && void 0 === e[n] && t(e, r);
  };
}
function z(e, t) {
  return (e, n) => {
    t(e, n);
  };
}
function F(e, t, n) {
  let r = e + "#",
    i = n && ((e, t) => (i = n())(e, t));
  return (n, o) => {
    if (o === q) 1 === (n[r] = (n[r] ?? 0) + 1) && i?.(n, q);
    else if (o !== D) {
      let l = void 0 !== n[r];
      1 === (n[r] ||= 1) &&
        (o === R || (l && n[e] === o)
          ? i?.(n, R)
          : ((n[e] = o), t?.(n, o), i?.(n, D))),
        n[r]--;
    }
  };
}
var W = 0;
function L(e, t, n) {
  let r = "?" + W++,
    i = r + "#",
    o = n && ((e, t) => (o = n())(e, t));
  return (n, l) => {
    l === q
      ? 1 === (n[i] = (n[i] ?? 0) + 1) && o?.(n, q)
      : void 0 === n[i]
        ? ((n[i] = e - 1), (n[r] = !0))
        : 0 == --n[i]
          ? l === D || n[r]
            ? ((n[r] = !1), t(n, 0), o?.(n, D))
            : o?.(n, R)
          : (n[r] ||= l === D);
  };
}
var H = (e) => e._;
function J(e, t, n = H, r) {
  let i = "?" + W++,
    o = i + 1,
    l = "function" == typeof e ? e : () => e,
    f = r && ((e, t) => (f = r())(e, t));
  return (e, r) => {
    if (r === q) 1 === (e[o] = (e[o] ?? 0) + 1) && f?.(e, q);
    else {
      let u, a;
      if (void 0 === e[o]) {
        (u = n(e)), (a = l(e));
        let t = u[a + "#"],
          i = void 0 === t ? !u.y : 0 === t;
        (e[o] = i ? 1 : 2), (r = D);
      }
      0 == --e[o]
        ? r === D || e[i]
          ? ((e[i] = !1), (u ||= n(e)), (a ||= l(e)), t?.(e, u[a]), f?.(e, D))
          : f?.(e, R)
        : (e[i] ||= r === D);
    }
  };
}
function U(e, t, n = H, r) {
  let i = "function" == typeof e ? e : () => e,
    l = J(i, t, n, r);
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
function Z(e, t) {
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
function G(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function K(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var Q = (e, t) => e["/"]?.(t),
  V = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  X = new WeakMap();
function Y({ $global: e }) {
  let t = X.get(e) || 0;
  return X.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function ee(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function te(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var ne = document.createTreeWalker(document);
function re(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function ie(e, t, n) {
  (ne.currentNode = e),
    oe(t, n, n, 0),
    (ne.currentNode = document.documentElement);
}
function oe(t, n, r, i) {
  let o,
    l = 0,
    f = 0,
    u = 0;
  for (r !== n && (n.e = r); (o = t.charCodeAt(i++)); )
    if (((f = l), (l = 0), o >= 117)) l = 10 * f + o - 117;
    else if (o >= 107) {
      for (o = 10 * f + o - 107; o--; ) ne.parentNode();
      ne.nextSibling();
    } else if (o >= 97) for (o = 10 * f + o - 97; o--; ) ne.nextSibling();
    else if (o >= 67) for (o = 20 * f + o - 67; o--; ) ne.nextNode();
    else if (47 === o) i = oe(t, (n[u++] = e(n.$global)), r, i);
    else {
      if (38 === o) return i;
      if (32 === o) n[u++] = ne.currentNode;
      else {
        let e = (n[u++] = document.createTextNode("")),
          t = ne.currentNode;
        t.parentNode.replaceChild(e, t), (ne.currentNode = e);
      }
    }
  return i;
}
function le(t, n, r) {
  let i = e(n);
  if (((i._ = i.e = t.m || r), (i.z = t), ue(t, i), t.c))
    for (let e of t.c) e.g?.(i);
  return i;
}
function fe(t, n, r) {
  if ("string" != typeof t) return le(t, n, r);
  let i = e(n);
  return (i._ = i.e = r), (i[0] = i.a = i.b = document.createElement(t)), i;
}
function ue(e, t) {
  let n = e.k();
  return (
    ie(11 === n.nodeType ? n.firstChild : n, e.A ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.o && e.o(t),
    n
  );
}
function ae(e, t, n) {
  return (r, o) => {
    let l = r[e + "("];
    if (!l || l === t || o === D) return;
    let f = r[e + "!"];
    if (o === q || o === R) return l.d?.(f, o);
    if ("string" == typeof l) B(f, 0, o()), ve(f, 0, t && i(r, t));
    else if (l.d) {
      let e = o();
      l.d(f, n ? e : [t ? { ...e, renderBody: i(r, t) } : e]);
    }
  };
}
function ce(e, t, n, r, i = 0, o) {
  let l,
    f = {
      p: e,
      A: t && re(t),
      o: n,
      k: se,
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
function se() {
  return (this.C ||= (function (e) {
    let t = ge.createContextualFragment(e);
    return t.firstChild === t.lastChild ? t.firstChild || de : t;
  })(this.p)).cloneNode(!0);
}
var de = document.createTextNode(""),
  ge = new Range();
var he = function (e, t, r) {
  let i = e + "(",
    o = e + "!",
    l = r && ((e, t) => (l = r())(e, t));
  return (r, f) => {
    if (f === D) return;
    let u = r[i],
      s = f;
    if (f !== q && f !== R) {
      let o = v(f);
      o !== u
        ? ((u = r[i] = o),
          (function (e, t, r) {
            let i,
              o = e[t + "!"];
            r
              ? ((i = e[t + "!"] = fe(r, e.$global, e)), (o = o || n(e[t])))
              : ((i = n(e[t])), (e[t + "!"] = void 0)),
              c(i, o.a.parentNode, o.a),
              a(o);
          })(r, e, o),
          t?.(r),
          (s = D))
        : (s = R);
    }
    l?.(r, s), V(u, r[o], s);
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
    if (l === D) return;
    let f = n[r],
      u = l;
    if (l !== q && l !== R) {
      let i = v(l);
      i !== f ? ((f = n[r] = i), ve(n, e, i), t?.(n), (u = D)) : (u = R);
    }
    o?.(n, u), V(f, n[i], u);
  };
};
function ve(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    c((e[t + "!"] = fe(n, e.$global, e)), i, null);
  }
  r && l(r);
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
    o = t.c,
    f = t.d;
  return (u, s) => {
    if (s === D) return;
    if (s === q || s === R) {
      let t = u[i] ?? u[e + "("]?.values() ?? [];
      if (t !== we)
        for (let e of t) {
          f?.(e, s);
          for (let t of o) t(e, s);
        }
      return;
    }
    let d,
      g,
      h,
      p,
      b = u[e],
      v = 8 === b.nodeType || 3 === b.nodeType,
      w = u[e + "("] || (v ? me : ye),
      y = u[e + "!"] || Array.from(w.values()),
      C = !0;
    if (
      (r(s, (e, n) => {
        let r = w.get(e),
          i = R;
        if ((r || ((r = le(t, u.$global, u)), (i = D)), f && f(r, n), o))
          for (let e of o) e(r, i);
        d ? (d.set(e, r), g.push(r)) : ((d = new Map([[e, r]])), (g = [r]));
      }),
      !d)
    )
      if (v) (d = me), (g = we), n(b);
      else {
        if (t.B) for (let e = 0; e < y.length; e++) l(y[e]);
        (b.textContent = ""), (d = ye), (g = Ce), (C = !1);
      }
    if (C) {
      if (v) {
        w === me && n(b);
        let e = y[y.length - 1];
        (h = e.b.nextSibling), (p = e.a.parentNode);
      } else (h = null), (p = b);
      !(function (e, t, n, r) {
        let i,
          o,
          l,
          f,
          u,
          s,
          d = 0,
          g = 0,
          h = t.length - 1,
          p = n.length - 1,
          b = t[d],
          v = n[g],
          w = t[h],
          y = n[p];
        e: {
          for (; b === v; ) {
            if ((++d, ++g, d > h || g > p)) break e;
            (b = t[d]), (v = n[g]);
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
              c(n[g++], e, f);
            } while (g <= p);
          }
        } else if (g > p)
          do {
            a(t[d++]);
          } while (d <= h);
        else {
          let b = h - d + 1,
            v = p - g + 1,
            w = t,
            y = new Array(v);
          for (i = 0; i < v; ++i) y[i] = -1;
          let C = 0,
            x = 0,
            M = new Map();
          for (o = g; o <= p; ++o) M.set(n[o], o);
          for (i = d; i <= h && x < v; ++i)
            (u = t[i]),
              (o = M.get(u)),
              void 0 !== o &&
                ((C = C > o ? m : o),
                ++x,
                (s = n[o]),
                (y[o - g] = i),
                (w[i] = null));
          if (b === t.length && 0 === x) {
            for (; g < v; ++g) c(n[g], e, r);
            for (; d < b; ++d) a(t[d]);
          } else {
            for (i = b - x; i > 0; ) (u = w[d++]), null !== u && (a(u), i--);
            if (C === m) {
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
              for (o = t.length - 1, l = n.length, i = v - 1; i >= 0; --i)
                -1 === y[i] || o < 0 || i !== t[o]
                  ? ((C = i + g),
                    (s = n[C++]),
                    (f = C < l ? n[C].a : r),
                    c(s, e, f))
                  : --o;
            } else if (x !== v)
              for (l = n.length, i = v - 1; i >= 0; --i)
                -1 === y[i] &&
                  ((C = i + g),
                  (s = n[C++]),
                  (f = C < l ? n[C].a : r),
                  c(s, e, f));
          }
        }
      })(p, y, g, h);
    }
    (u[e + "("] = d), (u[e + "!"] = g);
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
var Ie,
  Be = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (Ie = !1), De();
      }),
      t
    );
  })();
function Ee() {
  De(), requestAnimationFrame(Te);
}
function Te() {
  Be.postMessage(0);
}
var _e = [],
  je = [];
function Oe(e, t, n, r) {
  return n ? (n(r), r) : qe(e, t, r);
}
function qe(e, t, n) {
  return Ie || ((Ie = !0), queueMicrotask(Ee)), t(e, q), _e.push(e, t, n), n;
}
function Re(e, t) {
  je.push(e, t);
}
function De() {
  try {
    Fe();
  } finally {
    _e = [];
  }
  try {
    ze();
  } finally {
    je = [];
  }
}
function Pe(e) {
  let t = _e,
    n = je,
    r = (je = []);
  _e = [];
  try {
    e(), Fe();
  } finally {
    (_e = t), (je = n);
  }
  return r;
}
function ze(e = je) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function Fe() {
  for (let e = 0; e < _e.length; e += 3) {
    let t = _e[e + 0];
    (0, _e[e + 1])(t, _e[e + 2]);
  }
}
var We = {},
  Le = class {
    q = [];
    s = {};
    D = { _: We };
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
            c = a ? r.slice(a) : "";
          if ("*" === i) u[c] = e.previousSibling;
          else if ("$" === i) o.set(f, e);
          else if ("[" === i)
            this.f && (c && l(e), this.q.push(this.f)), (this.f = f), (u.a = e);
          else if ("]" === i) {
            if (((u[c] = e), f < this.f)) {
              let t = e.parentNode,
                n = l(e).a;
              t && t !== n.parentNode && t.prepend(n), (this.f = this.q.pop());
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
              : We[o[l++]](n[e]);
        }
      }
    }
  };
function He(e, t) {
  return (We[e] = t), t;
}
function Je(e, t) {
  return (We[e] = (e) => (n) => t(e, n)), t;
}
function Ue(e, t) {
  return (We[e] = (e) => i(e, t)), t;
}
function Ze(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new Le(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function Ge(e, t) {
  return He(e, t.g), t;
}
var Ke = new Map(),
  Qe = {
    patchConditionals: function (e) {
      (he = e(he)), (be = e(be));
    },
    queueEffect: Re,
    init() {
      He("$C_s", (e) => {
        Ke.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      He("$C_r", e);
    },
    isOp: (e) => e === q || e === R || e === D,
    isRenderer: (e) => void 0 !== e.k,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      ze(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = We[e];
            return t && n ? (n.p ? i(t, n) : n(t)) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.s[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = ce("", void 0, e, void 0, 1, n && (() => n));
      return (r.k = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Ke.get(t.id)), i && ((t.scope = i), Ke.delete(t.id)));
      let o = n.d || Ve,
        l = !1;
      if (
        ((t.effects = Pe(() => {
          if (i) o(i, q), (l = !0);
          else {
            i = t.scope = le(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, R);
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
  let f = this.d,
    u = Pe(() => {
      (i = e(l)), (o = ue(this, i)), f && f(i, [t]);
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
    ze(u),
    {
      update: (e) => {
        f &&
          (function (e) {
            let t = _e,
              n = je;
            (_e = []), (je = []);
            try {
              e(), Fe(), (_e = t), ze();
            } finally {
              (_e = t), (je = n);
            }
          })(() => {
            f(i, q), f(i, [e]);
          });
      },
      destroy: () => {
        a(i);
      },
    }
  );
}
export {
  S as attr,
  B as attrs,
  E as attrsEvents,
  o as bindFunction,
  i as bindRenderer,
  z as changeHandler,
  Z as childClosures,
  k as classAttr,
  J as closure,
  Qe as compat,
  he as conditional,
  be as conditionalOnlyChild,
  ce as createRenderer,
  e as createScope,
  Xe as createTemplate,
  I as data,
  U as dynamicClosure,
  G as dynamicSubscribers,
  ae as dynamicTagAttrs,
  d as getAbortSignal,
  _ as html,
  ee as inChild,
  pe as inConditionalScope,
  $e as inLoopScope,
  Ze as init,
  P as initValue,
  L as intersection,
  te as intersections,
  O as lifecycle,
  Me as loopIn,
  xe as loopOf,
  Ne as loopTo,
  Y as nextTagId,
  x as on,
  Pe as prepare,
  j as props,
  Oe as queueControllableSource,
  Re as queueEffect,
  qe as queueSource,
  He as register,
  Je as registerBoundSignal,
  Ue as registerRenderer,
  Ge as registerSubscriber,
  s as resetAbortSignal,
  De as run,
  ze as runEffects,
  K as setTagVar,
  A as styleAttr,
  Q as tagVarSignal,
  F as value,
};
