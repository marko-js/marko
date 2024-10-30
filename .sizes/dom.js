function e(e) {
  return { z: 1, $global: e };
}
var t = e({});
function n(e) {
  return (t.a = t.b = e), t;
}
function r(e) {
  return (t, n) => {
    t.k ??= new Map();
    let r = t.k.get(n);
    return r || ((r = e(t, n)), t.k.set(n, r)), r;
  };
}
var l = r((e, t) => t && { ...t, l: e }),
  i = r((e, t) =>
    t.length
      ? function (...n) {
          return t.call(this, e, ...n);
        }
      : function () {
          return t.call(this, e);
        },
  );
function o(e) {
  f(e), e._?.g?.delete(e);
  let t = e.A?.c;
  if (t) for (let n of t) n.h?.(e);
  return e;
}
function f(e) {
  let t = e.g;
  if (t) for (let e of t) f(e);
  let n = e.m;
  if (n) for (let e of n.values()) e.abort();
}
function a(e) {
  o(e);
  let t = e.a,
    n = e.b.nextSibling;
  for (; t !== n; ) {
    let e = t.nextSibling;
    t.remove(), (t = e);
  }
}
function u(e, t, n) {
  let r = e.a,
    l = e.b.nextSibling;
  for (; r !== l; ) {
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
  let n = (e.m ??= new Map()),
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
var d = 2147483647;
function h(e, t) {
  return t ? e : "";
}
var g = /^(--|ta|or|li|z)|n-c|i(do|nk|m|t)|w$|we/;
function p(e, t) {
  return t || 0 === t
    ? `${e}:${"number" == typeof t && t && !g.test(e) ? t + "px" : t}`
    : "";
}
function v(e, t, n) {
  switch (typeof e) {
    case "string":
      return e;
    case "object":
      if (null !== e) {
        let r = "",
          l = "";
        if (Array.isArray(e))
          for (let i of e) {
            let e = v(i, t, n);
            "" !== e && ((r += l + e), (l = t));
          }
        else
          for (let i in e) {
            let o = n(i, e[i]);
            "" !== o && ((r += l + o), (l = t));
          }
        return r;
      }
  }
  return "";
}
var b = new Map(),
  m = new WeakMap(),
  k = { capture: !0 };
function w(e, t, n) {
  let r = b.get(t);
  r || b.set(t, (r = new WeakMap())),
    r.has(e) ||
      (function (e, t) {
        let n = e.getRootNode(),
          r = m.get(n);
        r || m.set(n, (r = new Set())),
          r.has(t) || (r.add(t), n.addEventListener(t, y, k));
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
var C,
  S = !1,
  N = (e, t, n) => {
    if (S || document.activeElement !== e) t();
    else {
      let r = e.value,
        l = e.selectionStart;
      (S = !0), t(), (S = !1);
      let i = e.value,
        o = x(i, r, l, n?.inputType);
      void 0 !== o && e.setSelectionRange(o, o);
    }
  },
  x = (e, t, n, r = "") => {
    if (/delete.*Backwards/.test(r) || n !== t.length) {
      let r = t.slice(0, n),
        l = t.slice(n);
      if (e.startsWith(r)) return n;
      if (e.endsWith(l)) return e.length - l.length;
      {
        let t = $(r),
          n = 0,
          l = 0;
        for (; l < t.length; ) $(e[n]) && l++, n++;
        return n;
      }
    }
  },
  $ = (e) => e.replace(/[^\p{L}\p{N}]/gu, ""),
  M = (() => {
    let { port1: e, port2: t } = new MessageChannel();
    return (
      (e.onmessage = () => {
        (C = !1), te();
      }),
      t
    );
  })();
function A() {
  te(), requestAnimationFrame(E);
}
function E() {
  M.postMessage(0);
}
var _ = {},
  T = {},
  I = {};
function B(e, t) {
  let n = e + "#";
  return (e, r) => {
    r !== _ && void 0 === e[n] && t(e, r);
  };
}
function V(e, t) {
  let n = e + "#";
  return (r, l) => {
    if (l !== _ && l !== T && l !== I) {
      if (null != l && "function" != typeof l)
        throw new Error(`Invalid value ${l} for change handler '${e}'`);
      if (void 0 !== r[n]) {
        let t = r[e];
        if (t && !l)
          throw new Error(
            `Change handler '${e}' cannot change from a function to ${l}`,
          );
        if (!t && l)
          throw new Error(
            `Change handler '${e}' cannot change from a nullish to a function`,
          );
      }
    }
    t(r, l);
  };
}
function j(e, t, n) {
  let r = e + "#";
  return (l, i) => {
    if (i === _) 1 === (l[r] = (l[r] ?? 0) + 1) && n?.(l, _);
    else if (i !== I) {
      let o = void 0 !== l[r];
      1 === (l[r] ||= 1) &&
        (i === T || (o && l[e] === i)
          ? n?.(l, T)
          : ((l[e] = i), t?.(l, i), n?.(l, I))),
        l[r]--;
    }
  };
}
var O = 0;
function L(e, t, n) {
  let r = "?" + O++,
    l = r + "#";
  return (i, o) => {
    o === _
      ? 1 === (i[l] = (i[l] ?? 0) + 1) && n?.(i, _)
      : void 0 === i[l]
        ? ((i[l] = e - 1), (i[r] = !0))
        : 0 == --i[l]
          ? o === I || i[r]
            ? ((i[r] = !1), t(i, 0), n?.(i, I))
            : n?.(i, T)
          : (i[r] ||= o === I);
  };
}
var W = (e) => e._;
function q(e, t, n, r) {
  let l = "?" + O++,
    i = l + 1,
    o = n || W,
    f = "function" == typeof e ? e : () => e;
  return (e, n) => {
    if (n === _) 1 === (e[i] = (e[i] ?? 0) + 1) && r?.(e, _);
    else {
      let a, u;
      if (void 0 === e[i]) {
        (a = o(e)), (u = f(e));
        let t = a[u + "#"],
          r = void 0 === t ? !a.z : 0 === t;
        (e[i] = r ? 1 : 2), (n = I);
      }
      0 == --e[i]
        ? n === I || e[l]
          ? ((e[l] = !1), (a ??= o(e)), (u ??= f(e)), t?.(e, a[u]), r?.(e, I))
          : r?.(e, T)
        : (e[l] ||= n === I);
    }
  };
}
function D(e, t, n, r) {
  let l = n || W,
    o = "function" == typeof e ? e : () => e,
    f = q(o, t, l, r);
  return (
    (f.e = (e) => {
      let t = l(e),
        n = o(e) + "*";
      (t[n] ??= new Set()), t[n].add(i(e, f));
    }),
    (f.h = (e) => {
      let t = l(e),
        n = o(e) + "*";
      t[n]?.delete(i(e, f));
    }),
    f
  );
}
function R(e, t) {
  let n = (n, r) => {
    let l = n[t];
    for (let t of e) t(l, r);
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
function P(e) {
  let t = e + "*";
  return (e, n) => {
    let r = e[t];
    if (r) for (let e of r) e(n);
  };
}
function z(e, t, n) {
  e[t]["/"] = (t) => n(e, t);
}
var U = (e, t) => e["/"]?.(t),
  F = (e, t, n) => {
    let r = e?.c;
    if (r) for (let e of r) e(t, n);
  },
  H = new WeakMap();
function G({ $global: e }) {
  let t = H.get(e) || 0;
  return H.set(e, t + 1), "c" + e.runtimeId + e.renderId + t.toString(36);
}
function J(e, t) {
  return (n, r) => {
    t(n[e], r);
  };
}
function Z(e) {
  return (t, n) => {
    for (let r of e) r(t, n);
  };
}
var K = [],
  Q = [];
function X(e, t, n, r) {
  return n ? (n(r), r) : Y(e, t, r);
}
function Y(e, t, n) {
  return C || ((C = !0), queueMicrotask(A)), t(e, _), K.push(e, t, n), n;
}
function ee(e, t) {
  Q.push(e, t);
}
function te() {
  try {
    ie();
  } finally {
    K = [];
  }
  try {
    le();
  } finally {
    Q = [];
  }
}
function ne(e) {
  let t = K,
    n = Q;
  (K = []), (Q = []);
  try {
    e(), ie(), (K = t), le();
  } finally {
    (K = t), (Q = n);
  }
}
function re(e) {
  let t = K,
    n = Q,
    r = (Q = []);
  K = [];
  try {
    e(), ie();
  } finally {
    (K = t), (Q = n);
  }
  return r;
}
function le(e = Q) {
  for (let t = 0; t < e.length; t += 2) {
    let n = e[t];
    (0, e[t + 1])(n);
  }
}
function ie() {
  for (let e = 0; e < K.length; e += 3) {
    let t = K[e + 0];
    (0, K[e + 1])(t, K[e + 2]);
  }
}
var oe = {},
  fe = class {
    n = [];
    o = {};
    B = { _: oe };
    constructor(e, t, n) {
      (this.C = e), (this.D = t), (this.p = n), (this.q = e[n]), this.s();
    }
    w() {
      this.q.w(), this.s();
    }
    s() {
      let e = this.q,
        t = this.B,
        n = this.o,
        r = e.v;
      if (r.length) {
        let t = e.i.length;
        e.v = [];
        for (let e of r) {
          let r = e.data,
            l = r[t],
            i = parseInt(r.slice(t + 1)),
            o = (n[i] ??= {}),
            f = r.slice(r.indexOf(" ") + 1);
          if ("*" === l) o[f] = e.previousSibling;
          else if ("[" === l) this.n.push(this.f), (this.f = i), (o.a = e);
          else if ("]" === l) {
            if (((o[f] = e), i < this.f)) {
              let t = n[this.f],
                r = e.parentNode,
                l = t.a;
              r !== l.parentNode && r.prepend(l),
                (t.b = e.previousSibling),
                (this.f = this.n.pop());
            }
          } else if ("|" === l) {
            o[parseInt(f)] = e;
            let t = JSON.parse("[" + f.slice(f.indexOf(" ") + 1) + "]"),
              r = e;
            for (let e = t.length - 1; e >= 0; e--) {
              let l = (n[t[e]] ??= {});
              for (; 8 === (r = r.previousSibling).nodeType; );
              l.a = l.b = r;
            }
          }
        }
      }
      let l = e.r;
      if (l) {
        e.r = [];
        let r = l.length,
          i = 0;
        try {
          for (ae = !0; i < r; ) {
            let e = l[i++];
            if ("function" == typeof e) {
              let r = e(t),
                { $global: l } = n;
              l ||
                ((n.$global = l = r.$ || {}),
                (l.runtimeId = this.D),
                (l.renderId = this.p));
              for (let e in r)
                if ("$" !== e) {
                  let t = r[e],
                    i = n[e];
                  (t.$global = l), i !== t && (n[e] = Object.assign(t, i));
                }
            } else
              i === r || "string" != typeof l[i]
                ? delete this.C[this.p]
                : oe[l[i++]](n[e]);
          }
        } finally {
          ae = !1;
        }
      }
    }
  },
  ae = !1;
function ue(e, t) {
  return (oe[e] = t), t;
}
function ce(e, t) {
  return (oe[e] = (e) => (n) => t(e, n)), t;
}
function se(e, t) {
  return (oe[e] = (e) => l(e, t)), t;
}
function de(e = "M") {
  let t,
    n = (r) => (n[r] = t[r] = new fe(t, e, r));
  function r(r) {
    t = r;
    for (let e in r) n(e);
    Object.defineProperty(window, e, { configurable: !0, value: n });
  }
  window[e]
    ? r(window[e])
    : Object.defineProperty(window, e, { configurable: !0, set: r });
}
function he(e, t) {
  return ue(e, t.e), t;
}
var ge = /^on[A-Z-]/;
function pe(e, t, n) {
  ve(e, t, $e(n));
}
function ve(e, t, n) {
  void 0 === n ? e.removeAttribute(t) : e.setAttribute(t, n);
}
function be(e, t) {
  ve(
    e,
    "class",
    (function (e) {
      return v(e, " ", h);
    })(t) || void 0,
  );
}
function me(e, t) {
  ve(
    e,
    "style",
    (function (e) {
      return v(e, ";", p);
    })(t) || void 0,
  );
}
function ke(e, t) {
  let n = (function (e) {
    return e || 0 === e ? e + "" : "‍";
  })(t);
  e.data !== n && (e.data = n);
}
var we = {
  selected: (e) => "selectedValue" in e || "selectedValues" in e,
  checked: (e) => "checkedValue" in e || "checkedValues" in e,
};
function ye(e, t, n) {
  let r,
    l = e[t];
  for (let { name: e } of l.attributes)
    (!n || !(e in n)) && !we[e]?.(n) && l.removeAttribute(e);
  for (let i in n) {
    let o = n[i];
    switch (i) {
      case "class":
        be(l, o);
        break;
      case "style":
        me(l, o);
        break;
      case "renderBody":
        break;
      case "value":
        "INPUT" === l.tagName
          ? je(e, t, o, n.valueChange)
          : "SELECT" === l.tagName
            ? ze(e, t, o, n.valueChange, !!n.multiple)
            : pe(l, i, o);
        break;
      case "checked":
        Le(e, t, o, n.checkedChange);
        break;
      case "checkedValue":
        qe(e, t, o, n.checkedValueChange, n.value);
        break;
      case "checkedValues":
        Re(e, t, o, n.checkedValuesChange, n.value);
        break;
      case "open":
        Fe(e, t, o, n.openChange);
        break;
      default: {
        let n = Ze[i];
        n
          ? ((e[t + ";"] = o), (e[t + "="] = n))
          : ge.test(i)
            ? ((r ??= e[t + "~"] = {})[
                "-" === i[2] ? i.slice(3) : i.slice(2).toLowerCase()
              ] = o)
            : pe(l, i, o);
      }
    }
  }
}
function Ce(e, t) {
  let n = e[t],
    r = e[t + "~"],
    l = e[t + "="];
  l && Je[l](e, t);
  for (let e in r) w(n, e, r[e]);
}
var Se = document.createElement("template");
function Ne(e, t, n) {
  let r = e[n],
    l = e[n + "-"] || r,
    i = r.parentNode,
    o = l.nextSibling;
  Se.innerHTML = t || 0 === t ? `${t}` : "<!>";
  let f = Se.content;
  (e[n] = f.firstChild), (e[n + "-"] = f.lastChild), i.insertBefore(f, r);
  let a = r;
  for (; a !== o; ) {
    let e = a.nextSibling;
    a.remove(), (a = e);
  }
}
function xe(e, t, n) {
  let r = e[n],
    l = e[n + "-"],
    i = e[t];
  if (l) for (let e in l) e in r || (i[e] = void 0);
  for (let e in r) i[e] = r[e];
  e[n + "-"] = r;
}
function $e(e) {
  if (e || 0 === e) return !0 === e ? "" : e + "";
}
function Me(e, t, n) {
  let r = e[t];
  r
    ? (Object.assign(r, n), r.onUpdate?.())
    : ((e[t] = n),
      n.onMount?.(),
      (s(e, "-" + t).onabort = () => n.onDestroy?.()));
}
var Ae = new WeakMap();
function Ee(e, t, n, r) {
  r ? ((e[t] = n), Ae.set(e, (Ae.get(e) ?? 0) + 1)) : ve(e, t, $e(n));
}
function _e(e, t, n, r) {
  r && ((e[t + ":"] = n), (e[t + ";"] = r));
}
function Te(e, t, n, r = (e) => e[t], l = (e, t) => t()) {
  return (i, o) => {
    let f = i[o],
      a = i[o + ";"],
      u = (e) => {
        l(
          f,
          () => {
            let e = Ae.get(f);
            if ((ne(() => a(r(f))), Ae.get(f) === e))
              return (f[t] = i[o + ":"]), !0;
          },
          e,
        );
      };
    w(f, e, u), ae && f[t] !== f[n] && u();
  };
}
var Ie = (function (e) {
    let t = new WeakMap(),
      n = t.get;
    return Object.assign(t, {
      get(r) {
        let l = n.call(t, r);
        return l || t.set(r, (l = e())), l;
      },
    });
  })(() => new Set()),
  Be = new WeakSet();
function Ve(e, t, n, r, l, i = (e) => e) {
  return (o, f) => {
    let a = o[f],
      u = o[f + ":"],
      c = o[f + ";"],
      s = () => {
        let e = r(a, u),
          n = Ae.get(e[0]);
        ne(() => c(l(a, e, u)));
        for (let r = 0; r < e.length; r++)
          Ae.get(e[r]) === n && (e[r][t] = i(a, e[r], u));
      };
    if ((w(a, e, s), ae)) {
      if (!u) return;
      if ((Ie.get(u).add(a), !Be.has(u))) {
        let e = !1,
          l = r(a, u);
        for (let r = 0; r < l.length; r++) l[r][n] !== l[r][t] && (e = !0);
        e && (queueMicrotask(s), Be.add(u));
      }
    }
  };
}
function je(e, t, n, r) {
  let l = e[t];
  N(l, () => {
    Ee(e[t], "value", n, r), _e(e, t, n, r);
  });
}
var Oe = Te("input", "value", "defaultValue", void 0, N);
function Le(e, t, n, r) {
  Ee(e[t], "checked", n, r), _e(e, t, n, r);
}
var We = Te("change", "checked", "defaultChecked");
function qe(e, t, n, r, l) {
  Ee(e[t], "checked", n === l, r), _e(e, t, n, r);
}
var De = Te("change", "checked", "defaultChecked", (e) => e.value);
function Re(e, t, n, r, l) {
  let i = e[t];
  Ie.get(n).add(i),
    (e[t + ":"] = n),
    Ee(i, "checked", n.includes(l), r),
    _e(e, t, n, r);
}
var Pe = Ve(
  "change",
  "checked",
  "defaultChecked",
  (e, t) => Array.from(Ie.get(t)),
  (e, t, n) => {
    let r = new Set(n);
    for (let e of t) e.checked ? r.add(e.value) : r.delete(e.value);
    return Array.from(r);
  },
);
function ze(e, t, n, r, l) {
  let i = e[t].options;
  for (let e = 0; e < i.length; e++)
    Ee(i[e], "selected", l ? n.includes(i[e].value) : n === i[e].value, r);
  _e(e, t, n, r);
}
var Ue = Ve(
  "change",
  "selected",
  "defaultSelected",
  (e) => e.options,
  (e, t, n) => {
    if (e.multiple) {
      let e = new Set(n);
      for (let n of t) n.selected ? e.add(n.value) : e.delete(n.value);
      return Array.from(e);
    }
    return e.value;
  },
  (e, t, n) => (e.multiple ? n.includes(t.value) : n === t.value),
);
function Fe(e, t, n, r) {
  Ee(e[t], "open", n, r), _e(e, t, n, r);
}
var He = Te("close", "open", "open"),
  Ge = Te("toggle", "open", "open"),
  Je = {
    value: (e, t) => {
      let n = e[t];
      "INPUT" === n.tagName ? Oe(e, t) : "SELECT" === n.tagName && Ue(e, t);
    },
    checked: We,
    checkedValue: De,
    checkedValues: Pe,
    open: (e, t) => {
      let n = e[t];
      "DIALOG" === n.tagName ? He(e, t) : "DETAILS" === n.tagName && Ge(e, t);
    },
  },
  Ze = {
    valueChange: "value",
    checkedChange: "checked",
    checkedValueChange: "checkedValue",
    checkedValuesChange: "checkedValues",
    openChange: "open",
  };
var Ke = document.createTreeWalker(document);
function Qe(e) {
  let t = e.length;
  for (; e.charCodeAt(--t) > 47; );
  return e.slice(0, t + 1);
}
function Xe(e, t, n) {
  (Ke.currentNode = e),
    Ye(t, n, 0),
    (Ke.currentNode = document.documentElement);
}
function Ye(t, n, r) {
  let l,
    i = 0,
    o = 0,
    f = 0;
  for (; (l = t.charCodeAt(r++)); )
    if (((o = i), (i = 0), l >= 117)) i = 10 * o + l - 117;
    else if (l >= 107) {
      for (l = 10 * o + l - 107; l--; ) Ke.parentNode();
      Ke.nextSibling();
    } else if (l >= 97) for (l = 10 * o + l - 97; l--; ) Ke.nextSibling();
    else if (l >= 67) for (l = 20 * o + l - 67; l--; ) Ke.nextNode();
    else if (47 === l) r = Ye(t, (n[f++] = e(n.$global)), r);
    else {
      if (38 === l) return r;
      if (32 === l) n[f++] = Ke.currentNode;
      else {
        let e = (n[f++] = document.createTextNode("")),
          t = Ke.currentNode,
          r = t.parentNode;
        33 === l
          ? r.insertBefore(e, t)
          : (35 === l ? r.insertBefore(e, t.nextSibling) : r.replaceChild(e, t),
            (Ke.currentNode = e));
      }
    }
  return r;
}
function et(t, n, r) {
  let l = e(n);
  if (((l._ = t.l || r), (l.A = t), tt(t, l), t.c)) for (let e of t.c) e.e?.(l);
  return l;
}
function tt(e, t) {
  let n = "string" == typeof e ? document.createElement(e) : e.j();
  return (
    Xe(11 === n.nodeType ? n.firstChild : n, e.u ?? " ", t),
    (t.a = 11 === n.nodeType ? n.firstChild : n),
    (t.b = 11 === n.nodeType ? n.lastChild : n),
    e.x && e.x(t),
    n
  );
}
function nt(e, t, n) {
  return (r, i) => {
    let o = r[e + "("];
    if (!o || o === t || i === I) return;
    let f = r[e + "!"];
    if (i === _ || i === T) return o.d?.(f, i);
    if ("string" == typeof o) ct(f, 0, t && l(r, t)), ye(f, 0, i());
    else if (((o = o.default ? o.default._ : o._ || o), o.d)) {
      let e = i();
      o.d(f, n ? e : [t ? { ...e, renderBody: l(r, t) } : e]);
    }
  };
}
function rt(e, t, n, r, l = 0, i) {
  return {
    t: e,
    u: t && Qe(t),
    x: n,
    j: lt,
    c: new Set(r),
    E: l,
    y: void 0,
    d: i,
    l: void 0,
  };
}
function lt() {
  let e = this.y;
  if (!e) {
    let t = this.u,
      n = t && t.length < 4 && 32 !== t.charCodeAt(t.length - 1);
    this.y = e = (function (e, t) {
      let n;
      ot.innerHTML = e;
      let r = ot.content;
      return (
        t || (n = r.firstChild) !== r.lastChild || (n && 8 === n.nodeType)
          ? ((n = it.createDocumentFragment()), n.appendChild(r))
          : n || (n = it.createTextNode("")),
        n
      );
    })(this.t, n);
  }
  return e.cloneNode(!0);
}
var it = document,
  ot = it.createElement("template");
var ft = function (e, t, r) {
  let l = e + "(",
    i = e + "!";
  return (o, f) => {
    if (f === I) return;
    let c = o[l],
      s = f;
    if (f !== _ && f !== T) {
      let r = f ? f._ || f.renderBody || f : void 0;
      r !== c
        ? ((c = o[l] = r),
          (function (e, t, r) {
            let l,
              i = e[t + "!"];
            r
              ? ((l = e[t + "!"] = et(r, e.$global, e)), (i = i || n(e[t])))
              : ((l = n(e[t])), (e[t + "!"] = void 0)),
              u(l, i.a.parentNode, i.a),
              a(i);
          })(o, e, r),
          t?.(o),
          (s = I))
        : (s = T);
    }
    r?.(o, s), F(c, o[i], s);
  };
};
function at(e, t) {
  let n = t + "!",
    r = t + "(";
  return (t, l) => {
    let i = t[n];
    if (i) {
      let n = t[r];
      (!n?.c || n.c.has(e)) && e(i, l);
    }
  };
}
var ut = function (e, t, n) {
  let r = e + "(",
    l = e + "!";
  return (i, o) => {
    if (o === I) return;
    let f = i[r],
      a = o;
    if (o !== _ && o !== T) {
      let n = o ? o._ || o.renderBody || o : void 0;
      n !== f ? ((f = i[r] = n), ct(i, e, n), t?.(i), (a = I)) : (a = T);
    }
    n?.(i, a), F(f, i[l], a);
  };
};
function ct(e, t, n) {
  let r = e[t + "!"],
    l = e[t];
  if (((l.textContent = ""), n)) {
    u((e[t + "!"] = et(n, e.$global, e)), l, null);
  }
  r && o(r);
}
var st = new Map([[Symbol(), n(void 0)]]),
  dt = [n(void 0)],
  ht = new Map(),
  gt = [];
function pt(e, t) {
  return mt(e, t, (e, t) => {
    let [n, r = wt] = e,
      l = 0;
    for (let e of n) t(r(e, l), [e, l, n]), l++;
  });
}
function vt(e, t) {
  return mt(e, t, (e, t) => {
    let [n, r = yt] = e;
    for (let e in n) {
      let l = n[e];
      t(r(e, l), [e, l, n]);
    }
  });
}
function bt(e, t) {
  return mt(e, t, (e, t) => {
    let [n, r = 0, l = 1, i = yt] = e,
      o = (n - r) / l;
    for (let e = 0; e <= o; e++) {
      let n = r + e * l;
      t(i(n), [n]);
    }
  });
}
function mt(e, t, r) {
  let l = e + "!",
    i = t.c,
    f = t.d;
  return (c, s) => {
    if (s === I) return;
    if (s === _ || s === T) {
      for (let t of c[l] ?? c[e + "("].values()) {
        f?.(t, s);
        for (let e of i) e(t, s);
      }
      return;
    }
    let h,
      g,
      p,
      v,
      b = c[e],
      m = 8 === b.nodeType || 3 === b.nodeType,
      k = c[e + "("] || (m ? st : ht),
      w = c[e + "!"] || Array.from(k.values()),
      y = !0;
    if (
      (r(s, (e, n) => {
        let r = k.get(e),
          l = T;
        if ((r || ((r = et(t, c.$global, c)), (l = I)), f && f(r, n), i))
          for (let e of i) e(r, l);
        h ? (h.set(e, r), g.push(r)) : ((h = new Map([[e, r]])), (g = [r]));
      }),
      !h)
    )
      if (m) (h = st), (g = dt), n(b);
      else {
        if (t.E) for (let e = 0; e < w.length; e++) o(w[e]);
        (b.textContent = ""), (h = ht), (g = gt), (y = !1);
      }
    if (y) {
      if (m) {
        k === st && n(b);
        let e = w[w.length - 1];
        (p = e.b.nextSibling), (v = e.a.parentNode);
      } else (p = null), (v = b);
      !(function (e, t, n, r) {
        let l,
          i,
          o,
          f,
          c,
          s,
          h = 0,
          g = 0,
          p = t.length - 1,
          v = n.length - 1,
          b = t[h],
          m = n[g],
          k = t[p],
          w = n[v];
        e: {
          for (; b === m; ) {
            if ((++h, ++g, h > p || g > v)) break e;
            (b = t[h]), (m = n[g]);
          }
          for (; k === w; ) {
            if ((--p, --v, h > p || g > v)) break e;
            (k = t[p]), (w = n[v]);
          }
        }
        if (h > p) {
          if (g <= v) {
            (o = v + 1), (f = o < n.length ? n[o].a : r);
            do {
              u(n[g++], e, f);
            } while (g <= v);
          }
        } else if (g > v)
          do {
            a(t[h++]);
          } while (h <= p);
        else {
          let b = p - h + 1,
            m = v - g + 1,
            k = t,
            w = new Array(m);
          for (l = 0; l < m; ++l) w[l] = -1;
          let y = 0,
            C = 0,
            S = new Map();
          for (i = g; i <= v; ++i) S.set(n[i], i);
          for (l = h; l <= p && C < m; ++l)
            (c = t[l]),
              (i = S.get(c)),
              void 0 !== i &&
                ((y = y > i ? d : i),
                ++C,
                (s = n[i]),
                (w[i - g] = l),
                (k[l] = null));
          if (b === t.length && 0 === C) {
            for (; g < m; ++g) u(n[g], e, r);
            for (; h < b; ++h) a(t[h]);
          } else {
            for (l = b - C; l > 0; ) (c = k[h++]), null !== c && (a(c), l--);
            if (y === d) {
              let t = (function (e) {
                let t,
                  n,
                  r = e.slice(),
                  l = [];
                l.push(0);
                for (let i = 0, o = e.length; i < o; ++i) {
                  if (-1 === e[i]) continue;
                  let o = l[l.length - 1];
                  if (e[o] < e[i]) (r[i] = o), l.push(i);
                  else {
                    for (t = 0, n = l.length - 1; t < n; ) {
                      let r = ((t + n) / 2) | 0;
                      e[l[r]] < e[i] ? (t = r + 1) : (n = r);
                    }
                    e[i] < e[l[t]] && (t > 0 && (r[i] = l[t - 1]), (l[t] = i));
                  }
                }
                for (t = l.length, n = l[t - 1]; t-- > 0; )
                  (l[t] = n), (n = r[n]);
                return l;
              })(w);
              for (i = t.length - 1, o = n.length, l = m - 1; l >= 0; --l)
                -1 === w[l] || i < 0 || l !== t[i]
                  ? ((y = l + g),
                    (s = n[y++]),
                    (f = y < o ? n[y].a : r),
                    u(s, e, f))
                  : --i;
            } else if (C !== m)
              for (o = n.length, l = m - 1; l >= 0; --l)
                -1 === w[l] &&
                  ((y = l + g),
                  (s = n[y++]),
                  (f = y < o ? n[y].a : r),
                  u(s, e, f));
          }
        }
      })(v, w, g, p);
    }
    (c[e + "("] = h), (c[e + "!"] = g);
  };
}
function kt(e, t) {
  let n = t + "!";
  return (r, l) => {
    let i = r[n] ?? r[t + "("]?.values() ?? [];
    for (let t of i) e(t, l);
  };
}
function wt(e, t) {
  return t;
}
function yt(e) {
  return e;
}
var Ct = new Map(),
  St = {
    patchConditionals: function (e) {
      (ft = e(ft)), (ut = e(ut));
    },
    queueEffect: ee,
    init() {
      ue("$C_s", (e) => {
        Ct.set(e.m5c, e);
      });
    },
    registerRenderer(e) {
      ue("$C_r", e);
    },
    isOp: (e) => e === _ || e === T || e === I,
    isRenderer: (e) => void 0 !== e.j,
    getStartNode: (e) => e.a,
    setScopeNodes(e, t, n) {
      (e.a = t), (e.b = n);
    },
    runComponentEffects() {
      le(this.effects);
    },
    resolveRegistered: (e, { runtimeId: t, componentIdPrefix: n }) =>
      Array.isArray(e) && "string" == typeof e[0]
        ? (function (e, t) {
            let n = oe[e];
            return t && n ? (n.t ? l(t, n) : n(t)) : n;
          })(e[0], 2 === e.length && window[t]?.["s" === n ? "_" : n]?.o[e[1]])
        : e,
    createRenderer(e, t, n) {
      let r = rt("", void 0, e, void 0, 1, n);
      return (r.j = t), r;
    },
    render(e, t, n, r) {
      let l = t.scope;
      l || ((l = Ct.get(t.id)), l && ((t.scope = l), Ct.delete(t.id)));
      let i = n.d || Nt,
        o = !1;
      if (
        ((t.effects = re(() => {
          if (l) i(l, _), (o = !0);
          else {
            l = t.scope = et(n, e.global);
            let r = n.c;
            if (r) for (let e of r) e(t.scope, T);
          }
          i(l, r);
        })),
        !o)
      )
        return l.a === l.b ? l.a : l.a.parentNode;
    },
  };
function Nt() {}
var xt = (e, t) => ue(t, new $t(e)),
  $t = class {
    _;
    constructor(e) {
      this._ = e;
    }
    mount(t = {}, n, r) {
      let l,
        i,
        { $global: o } = t;
      o
        ? (({ $global: o, ...t } = t),
          (o = { runtimeId: "M", renderId: "_", ...o }))
        : (o = { runtimeId: "M", renderId: "_" });
      let f = this._.d,
        u = re(() => {
          (l = e(o)), (i = tt(this._, l)), f && f(l, [t]);
        });
      switch (r) {
        case "afterbegin":
          n.insertBefore(i, n.firstChild);
          break;
        case "afterend":
          n.parentElement.insertBefore(i, n.nextSibling);
          break;
        case "beforebegin":
          n.parentElement.insertBefore(i, n);
          break;
        default:
          n.appendChild(i);
      }
      return (
        le(u),
        {
          update: (e) => {
            f &&
              ne(() => {
                f(l, _), f(l, [e]);
              });
          },
          destroy: () => {
            a(l);
          },
        }
      );
    }
  };
export {
  pe as attr,
  ye as attrs,
  Ce as attrsEvents,
  i as bindFunction,
  l as bindRenderer,
  V as changeHandler,
  Le as checkedAttr,
  We as checkedChangeEffect,
  qe as checkedValueAttr,
  De as checkedValueChangeEffect,
  Re as checkedValuesAttr,
  Pe as checkedValuesChangeEffect,
  R as childClosures,
  be as classAttr,
  q as closure,
  St as compat,
  ft as conditional,
  ut as conditionalOnlyChild,
  rt as createRenderer,
  e as createScope,
  et as createScopeWithRenderer,
  xt as createTemplate,
  ke as data,
  D as dynamicClosure,
  P as dynamicSubscribers,
  nt as dynamicTagAttrs,
  s as getAbortSignal,
  Ne as html,
  J as inChild,
  at as inConditionalScope,
  kt as inLoopScope,
  de as init,
  B as initValue,
  L as intersection,
  Z as intersections,
  Me as lifecycle,
  vt as loopIn,
  pt as loopOf,
  bt as loopTo,
  G as nextTagId,
  w as on,
  Fe as openAttr,
  Ge as openChangeEffect_details,
  He as openChangeEffect_dialog,
  re as prepare,
  xe as props,
  X as queueControllableSource,
  ee as queueEffect,
  Y as queueSource,
  ue as register,
  ce as registerBoundSignal,
  se as registerRenderer,
  he as registerSubscriber,
  c as resetAbortSignal,
  te as run,
  le as runEffects,
  z as setTagVar,
  me as styleAttr,
  U as tagVarSignal,
  j as value,
  je as valueAttr_input,
  ze as valueAttr_select,
  Oe as valueChangeEffect_input,
  Ue as valueChangeEffect_select,
};
