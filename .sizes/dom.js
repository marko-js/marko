function e(e) {
  return { B: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  return (t, n) => {
    t.m ??= new Map();
    let r = t.m.get(n);
    return r || ((r = e(t, n)), t.m.set(n, r)), r;
  };
}
var i = r((e, t) => t && { ...t, n: e }),
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
  f(e), e._?.j?.delete(e);
  let t = e.C?.c;
  if (t) for (let n of t) n.k?.(e);
  return e;
}
function f(e) {
  let t = e.j;
  if (t) for (let e of t) f(e);
  let n = e.o;
  if (n) for (let e of n.values()) e.abort();
}
function u(e) {
  l(e);
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
var c = 2147483647;
function s(e, t) {
  return t ? e : "";
}
var d = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function h(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !d.test(e) ? t + "px" : t}`
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
function p(e, t) {
  let n = e.o;
  if (n) {
    let e = n.get(t);
    e && (e.abort(), n.delete(t));
  }
}
function b(e, t) {
  let n = (e.o ??= new Map()),
    r = n.get(t);
  return (
    r ||
      ((function (e) {
        let t = e._;
        for (; t && !t.j?.has(e); ) (t.j ||= new Set()).add(e), (t = (e = t)._);
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
          r.has(t) || (r.add(t), n.addEventListener(t, x, y));
      })(e, t),
    r.set(e, n || void 0);
}
function x(e) {
  let t = e.target;
  if (t) {
    let n = v.get(e.type);
    if ((n.get(t)?.(e, t), e.bubbles))
      for (; (t = t.parentElement) && !e.cancelBubble; ) n.get(t)?.(e, t);
  }
}
var C = /^on[A-Z-]/;
function S(e, t, n) {
  N(
    e,
    t,
    (function (e) {
      if (e || 0 === e) return !0 === e ? "" : e + "";
    })(n),
  );
}
function N(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function M(e, t) {
  N(
    e,
    "class",
    (function (e) {
      return g(e, " ", s);
    })(t) || void 0,
  );
}
function $(e, t) {
  N(
    e,
    "style",
    (function (e) {
      return g(e, ";", h);
    })(t) || void 0,
  );
}
function k(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
function A(e, t, n) {
  let r,
    i = e[t];
  for (let { name: e } of i.attributes) (n && e in n) || i.removeAttribute(e);
  for (let e in n) {
    let t = n[e];
    switch (e) {
      case "class":
        M(i, t);
        break;
      case "style":
        $(i, t);
        break;
      case "renderBody":
        break;
      default:
        C.test(e)
          ? ((r ??= {})["-" === e[2] ? e.slice(3) : e.slice(2).toLowerCase()] =
              t)
          : S(i, e, t);
    }
  }
  e[t + "~"] = r;
}
function _(e, t) {
  let n = e[t],
    r = e[t + "~"];
  for (let e in r) w(n, e, r[e]);
}
var B = document.createElement("template");
function E(e, t, n) {
  let r = e[n],
    i = e[n + "-"] || r,
    o = r.parentNode,
    l = i.nextSibling;
  B.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = B.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), o.insertBefore(f, r);
  let u = r;
  for (; u !== l; ) {
    let e = u.nextSibling;
    u.remove(), (u = e);
  }
}
function I(e, t, n) {
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
      (b(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var j = {},
  O = {},
  q = {};
function R(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== j && void 0 === e[n] && t(e, r);
  };
}
function z(e, t, n) {
  let r = e + "#";
  return (i, o) => {
    if (o === j) 1 === (i[r] = (i[r] ?? 0) + 1) && n?.(i, j);
    else if (o !== q) {
      let l = void 0 !== i[r];
      1 === (i[r] ||= 1) &&
        (o === O || (l && i[e] === o)
          ? n?.(i, O)
          : ((i[e] = o), t?.(i, o), n?.(i, q))),
        i[r]--;
    }
  };
}
var D = 0;
function F(e, t, n) {
  let r = "?" + D++,
    i = r + "#";
  return (o, l) => {
    l === j
      ? 1 === (o[i] = (o[i] ?? 0) + 1) && n?.(o, j)
      : void 0 === o[i]
        ? ((o[i] = e - 1), (o[r] = !0))
        : 0 == --o[i]
          ? l === q || o[r]
            ? ((o[r] = !1), t(o, 0), n?.(o, q))
            : n?.(o, O)
          : (o[r] ||= l === q);
  };
}
var L = (e) => e._;
function W(e, t, n, r) {
  let i = "?" + D++,
    o = i + 1,
    l = n || L,
    f = "function" == typeof e ? e : () => e;
  return (e, n) => {
    if (n === j) 1 === (e[o] = (e[o] ?? 0) + 1) && r?.(e, j);
    else {
      let u, a;
      if (void 0 === e[o]) {
        (u = l(e)), (a = f(e));
        let t = u[a + "#"],
          r = void 0 === t ? !u.B : 0 === t;
        (e[o] = r ? 1 : 2), (n = q);
      }
      0 == --e[o]
        ? n === q || e[i]
          ? ((e[i] = !1), (u ??= l(e)), (a ??= f(e)), t?.(e, u[a]), r?.(e, q))
          : r?.(e, O)
        : (e[i] ||= n === q);
    }
  };
}
function P(e, t, n, r) {
  let i = n || L,
    l = "function" == typeof e ? e : () => e,
    f = W(l, t, i, r);
  return (
    (f.g = (e) => {
      let t = i(e),
        n = l(e) + "*";
      (t[n] ??= new Set()), t[n].add(o(e, f));
    }),
    (f.k = (e) => {
      let t = i(e),
        n = l(e) + "*";
      t[n]?.delete(o(e, f));
    }),
    f
  );
}
function G(e, t) {
  let n = (n, r) => {
    let i = n[t];
    for (let t of e) t(i, r);
  };
  return (
    (n.g = (n) => {
      let r = n[t];
      for (let t of e) t.g?.(r);
    }),
    (n.k = (n) => {
      let r = n[t];
      for (let t of e) t.k?.(r);
    }),
    n
  );
}
function H(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function J(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var U = (e, t) => e["/"]?.(t),
  Z = (e, t, n) => {
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
  (Y.currentNode = e), ne(t, n, 0), (Y.currentNode = document.documentElement);
}
function ne(t, n, r) {
  let i,
    o = 0,
    l = 0,
    f = 0;
  for (; (i = t.charCodeAt(r++)); )
    if (((l = o), (o = 0), i >= 117)) o = 10 * l + i - 117;
    else if (i >= 107) {
      for (i = 10 * l + i - 107; i--; ) Y.parentNode();
      Y.nextSibling();
    } else if (i >= 97)
      for (i = 10 * l + i - 97; i--; ) !Y.nextSibling() && Y.nextNode();
    else if (i >= 67) for (i = 20 * l + i - 67; i--; ) Y.nextNode();
    else if (47 === i) r = ne(t, (n[f++] = e(n.$global)), r);
    else {
      if (38 === i) return r;
      if (32 === i) n[f++] = Y.currentNode;
      else {
        let e = (n[f++] = document.createTextNode("")),
          t = Y.currentNode,
          r = t.parentNode;
        33 === i
          ? r.insertBefore(e, t)
          : (35 === i ? r.insertBefore(e, t.nextSibling) : r.replaceChild(e, t),
            (Y.currentNode = e));
      }
    }
  return r;
}
function re(t, n, r) {
  let i = e(n);
  if (((i._ = t.n || r), (i.C = t), ie(t, i), t.c)) for (let e of t.c) e.g?.(i);
  return i;
}
function ie(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.l();
  return (
    te(11 === n.nodeType ? n.firstChild : n, e.p ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.q && e.q(t),
    n
  );
}
function oe(e, t, n) {
  return (r, o) => {
    let l = r[e + "("];
    if (!l || l === t || o === q) return;
    let f = r[e + "!"];
    if (o === j || o === O) return l.f?.(f, o);
    if ("string" == typeof l) A(f, 0, o()), he(f, 0, t && i(r, t));
    else if (l.f) {
      let e = o();
      l.f(f, n ? e : [t ? { ...e, renderBody: i(r, t) } : e]);
    }
  };
}
function le(e, t, n, r, i = 0, o) {
  return {
    r: e,
    p: t && ee(t),
    q: n,
    l: fe,
    c: new Set(r),
    D: i,
    t: void 0,
    f: o,
    n: void 0,
  };
}
function fe() {
  let e = this.t;
  if (!e) {
    let t = this.p,
      n = t && t.length < 4 && 32 !== t.charCodeAt(t.length - 1);
    this.t = e = (function (e, t) {
      let n;
      ae.innerHTML = e;
      let r = ae.content;
      return (
        t || (n = r.firstChild) !== r.lastChild || (n && 8 === n.nodeType)
          ? ((n = ue.createDocumentFragment()), n.appendChild(r))
          : n || (n = ue.createTextNode("")),
        n
      );
    })(this.r, n);
  }
  return e.cloneNode(!0);
}
var ue = document,
  ae = ue.createElement("template");
var ce = function (e, t, r) {
  let i = e + "(",
    o = e + "!";
  return (l, f) => {
    if (f === q) return;
    let c = l[i],
      s = f;
    if (f !== j && f !== O) {
      let r = f ? f._ || f.renderBody || f : void 0;
      r !== c
        ? ((c = l[i] = r),
          (function (e, t, r) {
            let i,
              o = e[t + "!"];
            r
              ? ((i = e[t + "!"] = re(r, e.$global, e)), (o = o || n(e[t])))
              : ((i = n(e[t])), (e[t + "!"] = void 0)),
              a(i, o.a.parentNode, o.a),
              u(o);
          })(l, e, r),
          t?.(l),
          (s = q))
        : (s = O);
    }
    r?.(l, s), Z(c, l[o], s);
  };
};
function se(e, t) {
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
var de = function (e, t, n) {
  let r = e + "(",
    i = e + "!";
  return (o, l) => {
    if (l === q) return;
    let f = o[r],
      u = l;
    if (l !== j && l !== O) {
      let n = l ? l._ || l.renderBody || l : void 0;
      n !== f ? ((f = o[r] = n), he(o, e, n), t?.(o), (u = q)) : (u = O);
    }
    n?.(o, u), Z(f, o[i], u);
  };
};
function he(e, t, n) {
  let r = e[t + "!"],
    i = e[t];
  if (((i.textContent = ""), n)) {
    a((e[t + "!"] = re(n, e.$global, e)), i, null);
  }
  r && l(r);
}
var ge = new Map([[Symbol(), n(void 0)]]),
  pe = [n(void 0)],
  be = new Map(),
  ve = [];
function me(e, t) {
  return xe(e, t, (e, t) => {
    let [n, r = Se] = e,
      i = 0;
    for (let e of n) t(r(e, i), [e, i, n]), i++;
  });
}
function ye(e, t) {
  return xe(e, t, (e, t) => {
    let [n, r = Ne] = e;
    for (let e in n) {
      let i = n[e];
      t(r(e, i), [e, i, n]);
    }
  });
}
function we(e, t) {
  return xe(e, t, (e, t) => {
    let [n, r = 0, i = 1, o = Ne] = e,
      l = (n - r) / i;
    for (let e = 0; e <= l; e++) {
      let n = r + e * i;
      t(o(n), [n]);
    }
  });
}
function xe(e, t, r) {
  let i = e + "!",
    o = t.c,
    f = t.f;
  return (s, d) => {
    if (d === q) return;
    if (d === j || d === O) {
      for (let t of s[i] ?? s[e + "("].values()) {
        f?.(t, d);
        for (let e of o) e(t, d);
      }
      return;
    }
    let h,
      g,
      p,
      b,
      v = s[e],
      m = 8 === v.nodeType || 3 === v.nodeType,
      y = s[e + "("] || (m ? ge : be),
      w = s[e + "!"] || Array.from(y.values()),
      x = !0;
    if (
      (r(d, (e, n) => {
        let r = y.get(e),
          i = O;
        if ((r || ((r = re(t, s.$global, s)), (i = q)), f && f(r, n), o))
          for (let e of o) e(r, i);
        h ? (h.set(e, r), g.push(r)) : ((h = new Map([[e, r]])), (g = [r]));
      }),
      !h)
    )
      if (m) (h = ge), (g = pe), n(v);
      else {
        if (t.D) for (let e = 0; e < w.length; e++) l(w[e]);
        (v.textContent = ""), (h = be), (g = ve), (x = !1);
      }
    if (x) {
      if (m) {
        y === ge && n(v);
        let e = w[w.length - 1];
        (p = e.b.nextSibling), (b = e.a.parentNode);
      } else (p = null), (b = v);
      !(function (e, t, n, r) {
        let i,
          o,
          l,
          f,
          s,
          d,
          h = 0,
          g = 0,
          p = t.length - 1,
          b = n.length - 1,
          v = t[h],
          m = n[g],
          y = t[p],
          w = n[b];
        e: {
          for (; v === m; ) {
            if ((++h, ++g, h > p || g > b)) break e;
            (v = t[h]), (m = n[g]);
          }
          for (; y === w; ) {
            if ((--p, --b, h > p || g > b)) break e;
            (y = t[p]), (w = n[b]);
          }
        }
        if (h > p) {
          if (g <= b) {
            (l = b + 1), (f = l < n.length ? n[l].a : r);
            do {
              a(n[g++], e, f);
            } while (g <= b);
          }
        } else if (g > b)
          do {
            u(t[h++]);
          } while (h <= p);
        else {
          let v = p - h + 1,
            m = b - g + 1,
            y = t,
            w = new Array(m);
          for (i = 0; i < m; ++i) w[i] = -1;
          let x = 0,
            C = 0,
            S = new Map();
          for (o = g; o <= b; ++o) S.set(n[o], o);
          for (i = h; i <= p && C < m; ++i)
            (s = t[i]),
              (o = S.get(s)),
              void 0 !== o &&
                ((x = x > o ? c : o),
                ++C,
                (d = n[o]),
                (w[o - g] = i),
                (y[i] = null));
          if (v === t.length && 0 === C) {
            for (; g < m; ++g) a(n[g], e, r);
            for (; h < v; ++h) u(t[h]);
          } else {
            for (i = v - C; i > 0; ) (s = y[h++]), null !== s && (u(s), i--);
            if (x === c) {
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
              })(w);
              for (o = t.length - 1, l = n.length, i = m - 1; i >= 0; --i)
                -1 === w[i] || o < 0 || i !== t[o]
                  ? ((x = i + g),
                    (d = n[x++]),
                    (f = x < l ? n[x].a : r),
                    a(d, e, f))
                  : --o;
            } else if (C !== m)
              for (l = n.length, i = m - 1; i >= 0; --i)
                -1 === w[i] &&
                  ((x = i + g),
                  (d = n[x++]),
                  (f = x < l ? n[x].a : r),
                  a(d, e, f));
          }
        }
      })(b, w, g, p);
    }
    (s[e + "("] = h), (s[e + "!"] = g);
  };
}
function Ce(e, t) {
  let n = t + "!";
  return (r, i) => {
    let o = r[n] ?? r[t + "("]?.values() ?? [];
    for (let t of o) e(t, i);
  };
}
function Se(e, t) {
  return t;
}
function Ne(e) {
  return e;
}
var Me = {},
  $e = class {
    u = [];
    x = {};
    E = { _: Me };
    constructor(e, t, n) {
      (this.F = e), (this.G = t), (this.y = n), (this.z = e[n]), this.A();
    }
    w() {
      this.z.w(), this.A();
    }
    A() {
      let e = this.z,
        t = this.E,
        n = this.x,
        r = e.v;
      if (r.length) {
        let t = e.i.length;
        e.v = [];
        for (let e of r) {
          let r = e.data,
            i = r[t],
            o = parseInt(r.slice(t + 1)),
            l = (n[o] ??= {}),
            f = r.slice(r.indexOf(" ") + 1);
          if ("*" === i) l[f] = e.previousSibling;
          else if ("[" === i) this.u.push(this.h), (this.h = o), (l.a = e);
          else if ("]" === i) {
            if (((l[f] = e), o < this.h)) {
              let t = n[this.h],
                r = e.parentNode,
                i = t.a;
              r !== i.parentNode && r.prepend(i),
                (t.b = e.previousSibling),
                (this.h = this.u.pop());
            }
          } else if ("|" === i) {
            l[parseInt(f)] = e;
            let t = JSON.parse("[" + f.slice(f.indexOf(" ") + 1) + "]"),
              r = e;
            for (let e = t.length - 1; e >= 0; e--) {
              let i = (n[t[e]] ??= {});
              for (; 8 === (r = r.previousSibling).nodeType; );
              i.a = i.b = r;
            }
          }
        }
      }
      let i = e.s;
      if (i) {
        e.s = [];
        for (let e of i) {
          let r = e(t),
            { $global: i } = n;
          i ||
            ((n.$global = i = r.$ || {}),
            (i.runtimeId = this.G),
            (i.renderId = this.y));
          for (let e in r)
            if ("$" !== e) {
              let t = r[e],
                o = n[e];
              (t.$global = i), o !== t && (n[e] = Object.assign(t, o));
            }
        }
      }
      let o = e.e;
      if (o) {
        e.e = [];
        for (let e = 0; e < o.length; e += 2) Me[o[e + 1]](n[o[e]]);
      }
      e.d && delete this.F[this.y];
    }
  };
function ke(e, t) {
  return (Me[e] = t), t;
}
function Ae(e, t) {
  return (Me[e] = (e) => (n) => t(e, n)), t;
}
function _e(e, t) {
  return (Me[e] = (e) => i(e, t)), t;
}
function Be(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new $e(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function Ee(e, t) {
  return ke(e, t.g), t;
}
var Ie,
  Te = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (Ie = !1), Fe();
      }),
      t
    );
  })();
function je() {
  Fe(), requestAnimationFrame(Oe);
}
function Oe() {
  Te.postMessage(0);
}
var qe = [],
  Re = [];
function ze(e, t, n) {
  return Ie || ((Ie = !0), queueMicrotask(je)), t(e, j), qe.push(e, t, n), n;
}
function De(e, t) {
  Re.push(e, t);
}
function Fe() {
  try {
    Pe();
  } finally {
    qe = [];
  }
  try {
    We();
  } finally {
    Re = [];
  }
}
function Le(e) {
  let t = qe,
    n = Re,
    r = (Re = []);
  qe = [];
  try {
    e(), Pe();
  } finally {
    (qe = t), (Re = n);
  }
  return r;
}
function We(e = Re) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function Pe() {
  for (let e = 0; e < qe.length; e += 3) {
    let t = qe[e + 0];
    (0, qe[e + 1])(t, qe[e + 2]);
  }
}
var Ge = (e, t) => ke(t, new He(e)),
  He = class {
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
      let f = this._.f,
        a = Le(() => {
          (i = e(l)), (o = ie(this._, i)), f && f(i, [t]);
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
        We(a),
        {
          update: (e) => {
            f &&
              (function (e) {
                let t = qe,
                  n = Re;
                (qe = []), (Re = []);
                try {
                  e(), Pe(), (qe = t), We();
                } finally {
                  (qe = t), (Re = n);
                }
              })(() => {
                f(i, j), f(i, [e]);
              });
          },
          destroy: () => {
            u(i);
          },
        }
      );
    }
  },
  Je = new Map(),
  Ue = {
    patchConditionals: function (e) {
      (ce = e(ce)), (de = e(de));
    },
    queueEffect: De,
    init() {
      ke("$C_s", (e) => {
        Je.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      ke("$C_r", e);
    },
    isOp: (e) => e === j || e === O || e === q,
    isRenderer: (e) => void 0 !== e.l,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      We(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = Me[e];
            return t && n ? (n.r ? i(t, n) : n(t)) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.x[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = le("", void 0, e, void 0, 1, n);
      return (r.l = t), r;
    },
    render(e, t, n, r) {
      let i = t.scope;
      i || ((i = Je.get(t.id)), i && ((t.scope = i), Je.delete(t.id)));
      let o = n.f || Ze,
        l = !1;
      if (
        ((t.effects = Le(() => {
          if (i) o(i, j), (l = !0);
          else {
            i = t.scope = re(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, O);
          }
          o(i, r);
        })),
        !l)
      )
        return i.a === i.b ? i.a : i.a.parentNode;
    },
  };
function Ze() {}
export {
  S as attr,
  A as attrs,
  _ as attrsEvents,
  o as bindFunction,
  i as bindRenderer,
  G as childClosures,
  M as classAttr,
  W as closure,
  Ue as compat,
  ce as conditional,
  de as conditionalOnlyChild,
  le as createRenderer,
  e as createScope,
  re as createScopeWithRenderer,
  Ge as createTemplate,
  k as data,
  P as dynamicClosure,
  H as dynamicSubscribers,
  oe as dynamicTagAttrs,
  b as getAbortSignal,
  E as html,
  V as inChild,
  se as inConditionalScope,
  Ce as inLoopScope,
  Be as init,
  R as initValue,
  F as intersection,
  X as intersections,
  T as lifecycle,
  ye as loopIn,
  me as loopOf,
  we as loopTo,
  Q as nextTagId,
  w as on,
  Le as prepare,
  I as props,
  De as queueEffect,
  ze as queueSource,
  ke as register,
  Ae as registerBoundSignal,
  _e as registerRenderer,
  Ee as registerSubscriber,
  p as resetAbortSignal,
  Fe as run,
  We as runEffects,
  J as setTagVar,
  $ as styleAttr,
  U as tagVarSignal,
  z as value,
};
