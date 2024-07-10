function e(e) {
  return { p: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  return (t, n) => {
    t.i ??= new Map();
    let r = t.i.get(n);
    return r || ((r = e(t, n)), t.i.set(n, r)), r;
  };
}
var o = r((e, t) => t && { ...t, j: e }),
  l = r((e, t) =>
    t.length
      ? function (...n) {
          return t.call(this, e, ...n);
        }
      : function () {
          return t.call(this, e);
        },
  );
function i(e) {
  f(e), e._?.g?.delete(e);
  let t = e.q?.c;
  if (t) for (let n of t) n.h?.(e);
  return e;
}
function f(e) {
  let t = e.g;
  if (t) for (let e of t) f(e);
  let n = e.k;
  if (n) for (let e of n.values()) e.abort();
}
function u(e) {
  i(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function a(e, t, n) {
  let r = e.a,
    o = e.b.nextSibling;
  for (; r !== o; ) {
    let e = r.nextSibling;
    t.insertBefore(r, n), (r = e);
  }
}
var c = 2147483647;
function s(e, t) {
  return t ? e : "";
}
var d = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function g(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !d.test(e) ? t + "px" : t}`
    : "";
}
function h(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          o = "";
        if (Array.isArray(e))
          for (let l of e) {
            let e = h(l, t, n);
            "" !== e && ((r += o + e), (o = t));
          }
        else
          for (let l in e) {
            let i = n(l, e[l]);
            "" !== i && ((r += o + i), (o = t));
          }
        return r;
      }
  }
  return "";
}
function p(e, t) {
  let n = e.k;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function b(e, t) {
  let n = (e.k ??= new Map()),
    r = n.get(t);
  return (
    r ||
      ((function (e) {
        let t = e._;
        for (; t && !t.g?.has(e); ) (t.g ||= new Set()).add(e), (t = (e = t)._);
      })(e),
      n.set(t, (r = new AbortController()))),
    r.signal
  );
}
var v = new Map(),
  m = new WeakMap(),
  y = { capture: !0 };
function w(e, t, n) {
  let r = v.get(t);
  r || v.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = m.get(n);
        r || m.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, N, y));
      })(e, t),
    r.set(e, n || void 0);
}
function N(e) {
  let t = e.target;
  if (t) {
    let n = v.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var S = /^on[A-Z-]/;
function C(e, t, n) {
  x(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function x(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function $(e, t) {
  x(
    e,
    "class",
    (function (e) {
      return h(e, " ", s);
    })(t) || void 0,
  );
}
function k(e, t) {
  x(
    e,
    "style",
    (function (e) {
      return h(e, ";", g);
    })(t) || void 0,
  );
}
function M(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function A(e, t, n) {
  let r,
    o = e[t];
  for (let { name: e } of o.attributes) (n && e in n) || o.removeAttribute(e);
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        $(o, t);
        break;
      case "style":
        k(o, t);
        break;
      case "renderBody":
        break;
      default:
        S.test(e)
          ? ((r ??= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : C(o, e, t);
    }
  }
  e[t + "~"] = r;
}
function T(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) w(n, e, r[e]);
}
var E = document.createElement("template");
function B(e, t, n) {
  let r = e[n],
    o = e[n + "-"] || r,
    l = r.parentNode,
    i = o.nextSibling;
  E.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = E.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), l.insertBefore(f, r);
  let u = r;
  for (; u !== i; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function _(e, t, n) {
  let r = e[n],
    o = e[n + "-"],
    l = e[t];
  if (o) for (let e in o) e in r || (l[e] = void 0);
  for (let e in r) l[e] = r[e];
  e[n + "-"] = r;
}
function j(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (b(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var I = {},
  O = {},
  q = {};
function W(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== I && void 0 === e[n] && t(e, r);
  };
}
function L(e, t) {
  let n = e + "#";
  return (r, o) => {
    if (o !== I && o !== O && o !== q) {
      if (null != o && "function" != typeof o)
        throw new Error(`Invalid value ${o} for change handler '${e}'`);
      if (void 0 !== r[n]) {
        let t = r[e];
        if (t && !o)
          throw new Error(
            `Change handler '${e}' cannot change from a function to ${o}`,
          );
        if (!t && o)
          throw new Error(
            `Change handler '${e}' cannot change from a nullish to a function`,
          );
      }
    }
    t(r, o);
  };
}
function R(e, t, n) {
  let r = e + "#";
  return (o, l) => {
    if (l === I) 1 === (o[r] = (o[r] ?? 0) + 1) && n?.(o, I);
    else if (l !== q) {
      let i = void 0 !== o[r];
      1 === (o[r] ||= 1) &&
        (l === O || (i && o[e] === l)
          ? n?.(o, O)
          : ((o[e] = l), t?.(o, l), n?.(o, q))),
        o[r]--;
    }
  };
}
var D = 0;
function F(e, t, n) {
  let r = "?" + D++,
    o = r + "#";
  return (l, i) => {
    i === I
      ? 1 === (l[o] = (l[o] ?? 0) + 1) && n?.(l, I)
      : void 0 === l[o]
        ? ((l[o] = e - 1), (l[r] = !0))
        : 0 == --l[o]
          ? i === q || l[r]
            ? ((l[r] = !1), t(l, 0), n?.(l, q))
            : n?.(l, O)
          : (l[r] ||= i === q);
  };
}
var H = (e) => e._;
function z(e, t, n, r) {
  let o = "?" + D++,
    l = o + 1,
    i = n || H,
    f = "function" == typeof e ? e : () => e;
  return (e, n) => {
    if (n === I) 1 === (e[l] = (e[l] ?? 0) + 1) && r?.(e, I);
    else {
      let u, a;
      if (void 0 === e[l]) {
        (u = i(e)), (a = f(e));
        let t = u[a + "#"],
          r = void 0 === t ? !u.p : 0 === t;
        (e[l] = r ? 1 : 2), (n = q);
      }
      0 == --e[l]
        ? n === q || e[o]
          ? ((e[o] = !1), (u ??= i(e)), (a ??= f(e)), t?.(e, u[a]), r?.(e, q))
          : r?.(e, O)
        : (e[o] ||= n === q);
    }
  };
}
function J(e, t, n, r) {
  let o = n || H,
    i = "function" == typeof e ? e : () => e,
    f = z(i, t, o, r);
  return (
    (f.e = (e) => {
      let t = o(e),
        n = i(e) + "*";
      (t[n] ??= new Set()), t[n].add(l(e, f));
    }),
    (f.h = (e) => {
      let t = o(e),
        n = i(e) + "*";
      t[n]?.delete(l(e, f));
    }),
    f
  );
}
function U(e, t) {
  let n = (n, r) => {
    let o = n[t];
    for (let t of e) t(o, r);
  };
  return (
    (n.e = (n) => {
      let r = n[t];
      for (let t of e) t.e?.(r);
    }),
    (n.h = (n) => {
      let r = n[t];
      for (let t of e) t.h?.(r);
    }),
    n
  );
}
function V(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function Z(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var G = (e, t) => e["/"]?.(t),
  K = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  P = 0;
function Q() {
  return "c" + P++;
}
function X(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function Y(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var ee = document.createTreeWalker(document);
function te(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function ne(e, t, n) {
  (ee.currentNode = e),
    re(t, n, 0),
    (ee.currentNode = document.documentElement);
}
function re(t, n, r) {
  let o,
    l = 0,
    i = 0,
    f = 0;
  for (; (o = t.charCodeAt(r++)); )
    if (((i = l), (l = 0), o >= 117)) l = 10 * i + o - 117;
    else if (o >= 107) {
      for (o = 10 * i + o - 107; o--; ) ee.parentNode();
      ee.nextSibling();
    } else if (o >= 97)
      for (o = 10 * i + o - 97; o--; ) !ee.nextSibling() && ee.nextNode();
    else if (o >= 67) for (o = 20 * i + o - 67; o--; ) ee.nextNode();
    else if (47 === o) r = re(t, (n[f++] = e(n.$global)), r);
    else {
      if (38 === o) return r;
      if (32 === o) n[f++] = ee.currentNode;
      else {
        let e = (n[f++] = document.createTextNode("")),
          t = ee.currentNode,
          r = t.parentNode;
        33 === o
          ? r.insertBefore(e, t)
          : (35 === o ? r.insertBefore(e, t.nextSibling) : r.replaceChild(e, t),
            (ee.currentNode = e));
      }
    }
  return r;
}
function oe(t, n, r) {
  let o = e(n);
  if (((o._ = t.j || r), (o.q = t), le(t, o), t.c)) for (let e of t.c) e.e?.(o);
  return o;
}
function le(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.f();
  return (
    ne(11 === n.nodeType ? n.firstChild : n, e.l ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.m && e.m(t),
    n
  );
}
function ie(e, t, n) {
  return (r, l) => {
    let i = r[e + "("];
    if (!i || i === t || l === q) return;
    let f = r[e + "!"];
    if (l === I || l === O) return i.d?.(f, l);
    if ("string" == typeof i) A(f, 0, l()), he(f, 0, t && o(r, t));
    else if (i.d) {
      let e = l();
      i.d(f, n ? e : [t ? { ...e, renderBody: o(r, t) } : e]);
    }
  };
}
function fe(e, t, n, r, o = 0, l) {
  return {
    n: e,
    l: t && te(t),
    m: n,
    f: ue,
    c: new Set(r),
    r: o,
    o: void 0,
    d: l,
    j: void 0,
  };
}
function ue() {
  let e = this.o;
  if (!e) {
    let t = this.l,
      n = t && t.length < 4 && 32 !== t.charCodeAt(t.length - 1);
    this.o = e = (function (e, t) {
      let n;
      ce.innerHTML = e;
      let r = ce.content;
      return (
        t || (n = r.firstChild) !== r.lastChild || (n && 8 === n.nodeType)
          ? ((n = ae.createDocumentFragment()), n.appendChild(r))
          : n || (n = ae.createTextNode("")),
        n
      );
    })(this.n, n);
  }
  return e.cloneNode(!0);
}
var ae = document,
  ce = ae.createElement("template");
var se = function (e, t, r) {
  let o = e + "(",
    l = e + "!";
  return (i, f) => {
    if (f === q) return;
    let c = i[o],
      s = f;
    if (f !== I && f !== O) {
      let r = f ? f._ || f.renderBody || f : void 0;
      r !== c
        ? ((c = i[o] = r),
          (function (e, t, r) {
            let o,
              l = e[t + "!"];
            r
              ? ((o = e[t + "!"] = oe(r, e.$global, e)), (l = l || n(e[t])))
              : ((o = n(e[t])), (e[t + "!"] = void 0)),
              a(o, l.a.parentNode, l.a),
              u(l);
          })(i, e, r),
          t?.(i),
          (s = q))
        : (s = O);
    }
    r?.(i, s), K(c, i[l], s);
  };
};
function de(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t, o) => {
    let l = t[n];
    if (l) {
      let n = t[r];
      (!n?.c || n.c.has(e)) && e(l, o);
    }
  };
}
var ge = function (e, t, n) {
  let r = e + "(",
    o = e + "!";
  return (l, i) => {
    if (i === q) return;
    let f = l[r],
      u = i;
    if (i !== I && i !== O) {
      let n = i ? i._ || i.renderBody || i : void 0;
      n !== f ? ((f = l[r] = n), he(l, e, n), t?.(l), (u = q)) : (u = O);
    }
    n?.(l, u), K(f, l[o], u);
  };
};
function he(e, t, n) {
  let r = e[t + "!"],
    o = e[t];
  if (((o.textContent = ""), n)) {
    a((e[t + "!"] = oe(n, e.$global, e)), o, null);
  }
  r && i(r);
}
var pe = new Map([[Symbol(), n(void 0)]]),
  be = [n(void 0)],
  ve = new Map(),
  me = [];
function ye(e, t) {
  return Se(e, t, (e, t) => {
    let [n, r = xe] = e,
      o = 0;
    for (let e of n) t(r(e, o), [e, o, n]), o++;
  });
}
function we(e, t) {
  return Se(e, t, (e, t) => {
    let [n, r = $e] = e;
    for (let e in n) {
      let o = n[e];
      t(r(e, o), [e, o, n]);
    }
  });
}
function Ne(e, t) {
  return Se(e, t, (e, t) => {
    let [n, r = 0, o = 1, l = $e] = e,
      i = (n - r) / o;
    for (let e = 0; e <= i; e++) {
      let n = r + e * o;
      t(l(n), [n]);
    }
  });
}
function Se(e, t, r) {
  let o = e + "!",
    l = t.c,
    f = t.d;
  return (s, d) => {
    if (d === q) return;
    if (d === I || d === O) {
      for (let t of s[o] ?? s[e + "("].values()) {
        f?.(t, d);
        for (let e of l) e(t, d);
      }
      return;
    }
    let g,
      h,
      p,
      b,
      v = s[e],
      m = 8 === v.nodeType || 3 === v.nodeType,
      y = s[e + "("] || (m ? pe : ve),
      w = s[e + "!"] || Array.from(y.values()),
      N = !0;
    if (
      (r(d, (e, n) => {
        let r = y.get(e),
          o = O;
        if ((r || ((r = oe(t, s.$global, s)), (o = q)), f && f(r, n), l))
          for (let e of l) e(r, o);
        g ? (g.set(e, r), h.push(r)) : ((g = new Map([[e, r]])), (h = [r]));
      }),
      !g)
    )
      if (m) (g = pe), (h = be), n(v);
      else {
        if (t.r) for (let e = 0; e < w.length; e++) i(w[e]);
        (v.textContent = ""), (g = ve), (h = me), (N = !1);
      }
    if (N) {
      if (m) {
        y === pe && n(v);
        let e = w[w.length - 1];
        (p = e.b.nextSibling), (b = e.a.parentNode);
      } else (p = null), (b = v);
      !(function (e, t, n, r) {
        let o,
          l,
          i,
          f,
          s,
          d,
          g = 0,
          h = 0,
          p = t.length - 1,
          b = n.length - 1,
          v = t[g],
          m = n[h],
          y = t[p],
          w = n[b];
        e: {
          for (; v === m; ) {
            if ((++g, ++h, g > p || h > b)) break e;
            (v = t[g]), (m = n[h]);
          }
          for (; y === w; ) {
            if ((--p, --b, g > p || h > b)) break e;
            (y = t[p]), (w = n[b]);
          }
        }
        if (g > p) {
          if (h <= b) {
            (i = b + 1), (f = i < n.length ? n[i].a : r);
            do {
              a(n[h++], e, f);
            } while (h <= b);
          }
        } else if (h > b)
          do {
            u(t[g++]);
          } while (g <= p);
        else {
          let v = p - g + 1,
            m = b - h + 1,
            y = t,
            w = new Array(m);
          for (o = 0; o < m; ++o) w[o] = -1;
          let N = 0,
            S = 0,
            C = new Map();
          for (l = h; l <= b; ++l) C.set(n[l], l);
          for (o = g; o <= p && S < m; ++o)
            (s = t[o]),
              (l = C.get(s)),
              void 0 !== l &&
                ((N = N > l ? c : l),
                ++S,
                (d = n[l]),
                (w[l - h] = o),
                (y[o] = null));
          if (v === t.length && 0 === S) {
            for (; h < m; ++h) a(n[h], e, r);
            for (; g < v; ++g) u(t[g]);
          } else {
            for (o = v - S; o > 0; ) (s = y[g++]), null !== s && (u(s), o--);
            if (N === c) {
              let t = (function (e) {
                let t,
                  n,
                  r = e.slice(),
                  o = [];
                o.push(0);
                for (let l = 0, i = e.length; l < i; ++l) {
                  if (-1 === e[l]) continue;
                  let i = o[o.length - 1];
                  if (e[i] < e[l]) (r[l] = i), o.push(l);
                  else {
                    for (t = 0, n = o.length - 1; t < n; ) {
                      let r = ((t + n) / 2) | 0;
                      e[o[r]] < e[l] ? (t = r + 1) : (n = r);
                    }
                    e[l] < e[o[t]] && (t > 0 && (r[l] = o[t - 1]), (o[t] = l));
                  }
                }
                for (t = o.length, n = o[t - 1]; t-- > 0; )
                  (o[t] = n), (n = r[n]);
                return o;
              })(w);
              for (l = t.length - 1, i = n.length, o = m - 1; o >= 0; --o)
                -1 === w[o] || l < 0 || o !== t[l]
                  ? ((N = o + h),
                    (d = n[N++]),
                    (f = N < i ? n[N].a : r),
                    a(d, e, f))
                  : --l;
            } else if (S !== m)
              for (i = n.length, o = m - 1; o >= 0; --o)
                -1 === w[o] &&
                  ((N = o + h),
                  (d = n[N++]),
                  (f = N < i ? n[N].a : r),
                  a(d, e, f));
          }
        }
      })(b, w, h, p);
    }
    (s[e + "("] = g), (s[e + "!"] = h);
  };
}
function Ce(e, t) {
  let n = t + "!";
  return (r, o) => {
    let l = r[n] ?? r[t + "("]?.values() ?? [];
    for (let t of l) e(t, o);
  };
}
function xe(e, t) {
  return t;
}
function $e(e) {
  return e;
}
var ke = {},
  Me = document;
function Ae(e, t) {
  return (ke[e] = t), t;
}
function Te(e, t) {
  return (ke[e] = (e) => (n) => t(e, n)), t;
}
function Ee(e, t) {
  return (ke[e] = (e) => o(e, t)), t;
}
var Be = {};
function _e(e = "M") {
  let t,
    n,
    r = e.length,
    o = e + "$h",
    l = window[o],
    i = Me.createTreeWalker(Me, 128),
    f = (e) => Be[e] ?? (Be[e] = {}),
    u = [],
    a = { push: s },
    c = { _: ke };
  if (l) for (let e = 0; e < l.length; e += 2) s(l[e], l[e + 1]);
  else window[o] = a;
  function s(o, l) {
    "loading" !== Me.readyState && (i.currentNode = Me);
    let a = o(c);
    if (a) {
      Be.$global ||= a.$global || {};
      for (let e in a) {
        if ("$global" === e) continue;
        let t = parseInt(e),
          n = a[t],
          r = Be[t];
        (n.$global = a.$global), r !== n && (Be[t] = Object.assign(n, r));
      }
    }
    for (; (n = i.nextNode()); ) {
      let o = n.nodeValue;
      if (o.startsWith(e)) {
        let e = o[r],
          l = parseInt(o.slice(r + 1)),
          i = f(l),
          a = o.slice(o.indexOf(" ") + 1);
        if ("*" === e) i[a] = n.previousSibling;
        else if ("[" === e) u.push(t), (t = l), (i.a = n);
        else if ("]" === e) {
          if (((i[a] = n), l < t)) {
            let e = Be[t],
              r = n.parentNode,
              o = e.a;
            r !== o.parentNode && r.prepend(o),
              (e.b = n.previousSibling),
              (t = u.pop());
          }
        } else if ("|" === e) {
          i[parseInt(a)] = n;
          let e = JSON.parse("[" + a.slice(a.indexOf(" ") + 1) + "]");
          for (let t = e.length - 1; t >= 0; t--) {
            let r = f(e[t]);
            for (; 8 === (n = n.previousSibling).nodeType; );
            r.a = r.b = n;
          }
        }
      }
    }
    for (let e = 0; e < l.length; e += 2) ke[l[e + 1]](Be[l[e]]);
  }
}
function je(e, t) {
  return Ae(e, t.e), t;
}
var Ie,
  Oe = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (Ie = !1), ze();
      }),
      t
    );
  })();
function qe() {
  ze(), requestAnimationFrame(We);
}
function We() {
  Oe.postMessage(0);
}
var Le = [],
  Re = [];
function De(e, t, n, r) {
  return n ? (n(r), r) : Fe(e, t, r);
}
function Fe(e, t, n) {
  return Ie || ((Ie = !0), queueMicrotask(qe)), t(e, I), Le.push(e, t, n), n;
}
function He(e, t) {
  Re.push(e, t);
}
function ze() {
  try {
    Ve();
  } finally {
    Le = [];
  }
  try {
    Ue();
  } finally {
    Re = [];
  }
}
function Je(e) {
  let t = Le,
    n = Re,
    r = (Re = []);
  Le = [];
  try {
    e(), Ve();
  } finally {
    (Le = t), (Re = n);
  }
  return r;
}
function Ue(e = Re) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function Ve() {
  for (let e = 0; e < Le.length; e += 3) {
    let t = Le[e + 0];
    (0, Le[e + 1])(t, Le[e + 2]);
  }
}
var Ze = (e, t) => Ae(t, new Ge(e)),
  Ge = class {
    _;
    constructor(e) {
      this._ = e;
    }
    mount(t = {}, n, r) {
      let o,
        l,
        { $global: i = {}, ...f } = t,
        a = this._.d,
        c = Je(() => {
          (o = e(i)), (l = le(this._, o)), a && a(o, [f]);
        });
      switch (r) {
        case "afterbegin":
          n.insertBefore(l, n.firstChild);
          break;
        case "afterend":
          n.parentElement.insertBefore(l, n.nextSibling);
          break;
        case "beforebegin":
          n.parentElement.insertBefore(l, n);
          break;
        default:
          n.appendChild(l);
      }
      return (
        Ue(c),
        {
          update: (e) => {
            a &&
              (function (e) {
                let t = Le,
                  n = Re;
                (Le = []), (Re = []);
                try {
                  e(), Ve(), (Le = t), Ue();
                } finally {
                  (Le = t), (Re = n);
                }
              })(() => {
                a(o, I), a(o, [e]);
              });
          },
          destroy: () => {
            u(o);
          },
        }
      );
    }
  },
  Ke = {
    register: Ae,
    patchConditionals: function (e) {
      (se = e(se)), (ge = e(ge));
    },
    queueEffect: He,
    isOp: (e) => e === I || e === O || e === q,
    isRenderer: (e) => void 0 !== e.f,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      Ue(this.effects);
    },
    resolveRenderer(e) {
      if (e && "object" == typeof e) {
        if (Array.isArray(e)) {
          let [t, n] = e;
          return (function (e, t) {
            let n = ke[e];
            return t && n ? (n.n ? o(t, n) : n(t)) : n;
          })(t, Be[n]);
        }
        if (e.f) return e;
      }
    },
    createRenderer(e, t, n) {
      let r = fe("", void 0, e, void 0, 1, n);
      return (r.f = t), r;
    },
    render(e, t, n, r, o) {
      let l = r.d || Pe,
        i = !1,
        f = e ? (n.scope = Be[t.global.componentIdToScopeId[n.id]]) : n.scope;
      if (
        ((n.effects = Je(() => {
          if (f) l(f, I), (i = !0);
          else {
            f = n.scope = oe(r, t.global);
            let e = r.c;
            if (e) for (let t of e) t(n.scope, O);
          }
          l(f, o);
        })),
        !i)
      )
        return f.a === f.b ? f.a : f.a.parentNode;
    },
  };
function Pe() {}
export {
  C as attr,
  A as attrs,
  T as attrsEvents,
  l as bindFunction,
  o as bindRenderer,
  L as changeHandler,
  U as childClosures,
  $ as classAttr,
  z as closure,
  Ke as compat,
  se as conditional,
  ge as conditionalOnlyChild,
  fe as createRenderer,
  e as createScope,
  oe as createScopeWithRenderer,
  Ze as createTemplate,
  M as data,
  J as dynamicClosure,
  V as dynamicSubscribers,
  ie as dynamicTagAttrs,
  b as getAbortSignal,
  B as html,
  X as inChild,
  de as inConditionalScope,
  Ce as inLoopScope,
  _e as init,
  W as initValue,
  F as intersection,
  Y as intersections,
  j as lifecycle,
  we as loopIn,
  ye as loopOf,
  Ne as loopTo,
  Q as nextTagId,
  w as on,
  Je as prepare,
  _ as props,
  De as queueControllableSource,
  He as queueEffect,
  Fe as queueSource,
  Ae as register,
  Te as registerBoundSignal,
  Ee as registerRenderer,
  je as registerSubscriber,
  p as resetAbortSignal,
  ze as run,
  Ue as runEffects,
  Be as scopeLookup,
  Z as setTagVar,
  k as styleAttr,
  G as tagVarSignal,
  R as value,
};
