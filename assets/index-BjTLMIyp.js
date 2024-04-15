function lc(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get ? o : { enumerable: !0, get: () => r[l] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function oc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var ic = { exports: {} },
  xo = {},
  ac = { exports: {} },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var al = Symbol.for("react.element"),
  ep = Symbol.for("react.portal"),
  tp = Symbol.for("react.fragment"),
  np = Symbol.for("react.strict_mode"),
  rp = Symbol.for("react.profiler"),
  lp = Symbol.for("react.provider"),
  op = Symbol.for("react.context"),
  ip = Symbol.for("react.forward_ref"),
  ap = Symbol.for("react.suspense"),
  up = Symbol.for("react.memo"),
  sp = Symbol.for("react.lazy"),
  ju = Symbol.iterator;
function cp(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (ju && e[ju]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var uc = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  sc = Object.assign,
  cc = {};
function ur(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cc),
    (this.updater = n || uc);
}
ur.prototype.isReactComponent = {};
ur.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ur.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fc() {}
fc.prototype = ur.prototype;
function xa(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = cc),
    (this.updater = n || uc);
}
var Sa = (xa.prototype = new fc());
Sa.constructor = xa;
sc(Sa, ur.prototype);
Sa.isPureReactComponent = !0;
var Du = Array.isArray,
  dc = Object.prototype.hasOwnProperty,
  Ea = { current: null },
  pc = { key: !0, ref: !0, __self: !0, __source: !0 };
function hc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      dc.call(t, r) && !pc.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: al,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Ea.current,
  };
}
function fp(e, t) {
  return {
    $$typeof: al,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function ka(e) {
  return typeof e == "object" && e !== null && e.$$typeof === al;
}
function dp(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var zu = /\/+/g;
function Wo(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dp("" + e.key)
    : t.toString(36);
}
function Fl(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case al:
          case ep:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + Wo(i, 0) : r),
      Du(l)
        ? ((n = ""),
          e != null && (n = e.replace(zu, "$&/") + "/"),
          Fl(l, t, n, "", function (s) {
            return s;
          }))
        : l != null &&
          (ka(l) &&
            (l = fp(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(zu, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Du(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Wo(o, a);
      i += Fl(o, t, n, u, l);
    }
  else if (((u = cp(e)), typeof u == "function"))
    for (e = u.call(e), a = 0; !(o = e.next()).done; )
      (o = o.value), (u = r + Wo(o, a++)), (i += Fl(o, t, n, u, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function wl(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    Fl(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function pp(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Oe = { current: null },
  Il = { transition: null },
  hp = {
    ReactCurrentDispatcher: Oe,
    ReactCurrentBatchConfig: Il,
    ReactCurrentOwner: Ea,
  };
Q.Children = {
  map: wl,
  forEach: function (e, t, n) {
    wl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      wl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      wl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!ka(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Q.Component = ur;
Q.Fragment = tp;
Q.Profiler = rp;
Q.PureComponent = xa;
Q.StrictMode = np;
Q.Suspense = ap;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hp;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = sc({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Ea.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t)
      dc.call(t, u) &&
        !pc.hasOwnProperty(u) &&
        (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return { $$typeof: al, type: e.type, key: l, ref: o, props: r, _owner: i };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: op,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: lp, _context: e }),
    (e.Consumer = e)
  );
};
Q.createElement = hc;
Q.createFactory = function (e) {
  var t = hc.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return { current: null };
};
Q.forwardRef = function (e) {
  return { $$typeof: ip, render: e };
};
Q.isValidElement = ka;
Q.lazy = function (e) {
  return { $$typeof: sp, _payload: { _status: -1, _result: e }, _init: pp };
};
Q.memo = function (e, t) {
  return { $$typeof: up, type: e, compare: t === void 0 ? null : t };
};
Q.startTransition = function (e) {
  var t = Il.transition;
  Il.transition = {};
  try {
    e();
  } finally {
    Il.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
Q.useCallback = function (e, t) {
  return Oe.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Oe.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Oe.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Oe.current.useEffect(e, t);
};
Q.useId = function () {
  return Oe.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Oe.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Oe.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Oe.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Oe.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Oe.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Oe.current.useRef(e);
};
Q.useState = function (e) {
  return Oe.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Oe.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Oe.current.useTransition();
};
Q.version = "18.2.0";
ac.exports = Q;
var P = ac.exports;
const mc = oc(P),
  mp = lc({ __proto__: null, default: mc }, [P]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var vp = P,
  yp = Symbol.for("react.element"),
  gp = Symbol.for("react.fragment"),
  wp = Object.prototype.hasOwnProperty,
  xp = vp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Sp = { key: !0, ref: !0, __self: !0, __source: !0 };
function vc(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) wp.call(t, r) && !Sp.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: yp,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: xp.current,
  };
}
xo.Fragment = gp;
xo.jsx = vc;
xo.jsxs = vc;
ic.exports = xo;
var R = ic.exports,
  wi = {},
  yc = { exports: {} },
  Ge = {},
  gc = { exports: {} },
  wc = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(D, A) {
    var $ = D.length;
    D.push(A);
    e: for (; 0 < $; ) {
      var G = ($ - 1) >>> 1,
        te = D[G];
      if (0 < l(te, A)) (D[G] = A), (D[$] = te), ($ = G);
      else break e;
    }
  }
  function n(D) {
    return D.length === 0 ? null : D[0];
  }
  function r(D) {
    if (D.length === 0) return null;
    var A = D[0],
      $ = D.pop();
    if ($ !== A) {
      D[0] = $;
      e: for (var G = 0, te = D.length, ht = te >>> 1; G < ht; ) {
        var ke = 2 * (G + 1) - 1,
          ot = D[ke],
          De = ke + 1,
          Mt = D[De];
        if (0 > l(ot, $))
          De < te && 0 > l(Mt, ot)
            ? ((D[G] = Mt), (D[De] = $), (G = De))
            : ((D[G] = ot), (D[ke] = $), (G = ke));
        else if (De < te && 0 > l(Mt, $)) (D[G] = Mt), (D[De] = $), (G = De);
        else break e;
      }
    }
    return A;
  }
  function l(D, A) {
    var $ = D.sortIndex - A.sortIndex;
    return $ !== 0 ? $ : D.id - A.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    f = 1,
    p = null,
    m = 3,
    E = !1,
    x = !1,
    w = !1,
    C = typeof setTimeout == "function" ? setTimeout : null,
    d = typeof clearTimeout == "function" ? clearTimeout : null,
    c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(D) {
    for (var A = n(s); A !== null; ) {
      if (A.callback === null) r(s);
      else if (A.startTime <= D)
        r(s), (A.sortIndex = A.expirationTime), t(u, A);
      else break;
      A = n(s);
    }
  }
  function S(D) {
    if (((w = !1), h(D), !x))
      if (n(u) !== null) (x = !0), zt(L);
      else {
        var A = n(s);
        A !== null && le(S, A.startTime - D);
      }
  }
  function L(D, A) {
    (x = !1), w && ((w = !1), d(T), (T = -1)), (E = !0);
    var $ = m;
    try {
      for (
        h(A), p = n(u);
        p !== null && (!(p.expirationTime > A) || (D && !Y()));

      ) {
        var G = p.callback;
        if (typeof G == "function") {
          (p.callback = null), (m = p.priorityLevel);
          var te = G(p.expirationTime <= A);
          (A = e.unstable_now()),
            typeof te == "function" ? (p.callback = te) : p === n(u) && r(u),
            h(A);
        } else r(u);
        p = n(u);
      }
      if (p !== null) var ht = !0;
      else {
        var ke = n(s);
        ke !== null && le(S, ke.startTime - A), (ht = !1);
      }
      return ht;
    } finally {
      (p = null), (m = $), (E = !1);
    }
  }
  var v = !1,
    _ = null,
    T = -1,
    O = 5,
    F = -1;
  function Y() {
    return !(e.unstable_now() - F < O);
  }
  function ve() {
    if (_ !== null) {
      var D = e.unstable_now();
      F = D;
      var A = !0;
      try {
        A = _(!0, D);
      } finally {
        A ? he() : ((v = !1), (_ = null));
      }
    } else v = !1;
  }
  var he;
  if (typeof c == "function")
    he = function () {
      c(ve);
    };
  else if (typeof MessageChannel < "u") {
    var Ze = new MessageChannel(),
      Rn = Ze.port2;
    (Ze.port1.onmessage = ve),
      (he = function () {
        Rn.postMessage(null);
      });
  } else
    he = function () {
      C(ve, 0);
    };
  function zt(D) {
    (_ = D), v || ((v = !0), he());
  }
  function le(D, A) {
    T = C(function () {
      D(e.unstable_now());
    }, A);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (D) {
      D.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || E || ((x = !0), zt(L));
    }),
    (e.unstable_forceFrameRate = function (D) {
      0 > D || 125 < D
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < D ? Math.floor(1e3 / D) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return m;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (D) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var A = 3;
          break;
        default:
          A = m;
      }
      var $ = m;
      m = A;
      try {
        return D();
      } finally {
        m = $;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (D, A) {
      switch (D) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          D = 3;
      }
      var $ = m;
      m = D;
      try {
        return A();
      } finally {
        m = $;
      }
    }),
    (e.unstable_scheduleCallback = function (D, A, $) {
      var G = e.unstable_now();
      switch (
        (typeof $ == "object" && $ !== null
          ? (($ = $.delay), ($ = typeof $ == "number" && 0 < $ ? G + $ : G))
          : ($ = G),
        D)
      ) {
        case 1:
          var te = -1;
          break;
        case 2:
          te = 250;
          break;
        case 5:
          te = 1073741823;
          break;
        case 4:
          te = 1e4;
          break;
        default:
          te = 5e3;
      }
      return (
        (te = $ + te),
        (D = {
          id: f++,
          callback: A,
          priorityLevel: D,
          startTime: $,
          expirationTime: te,
          sortIndex: -1,
        }),
        $ > G
          ? ((D.sortIndex = $),
            t(s, D),
            n(u) === null &&
              D === n(s) &&
              (w ? (d(T), (T = -1)) : (w = !0), le(S, $ - G)))
          : ((D.sortIndex = te), t(u, D), x || E || ((x = !0), zt(L))),
        D
      );
    }),
    (e.unstable_shouldYield = Y),
    (e.unstable_wrapCallback = function (D) {
      var A = m;
      return function () {
        var $ = m;
        m = A;
        try {
          return D.apply(this, arguments);
        } finally {
          m = $;
        }
      };
    });
})(wc);
gc.exports = wc;
var Ep = gc.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var xc = P,
  Xe = Ep;
function N(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Sc = new Set(),
  Vr = {};
function Cn(e, t) {
  bn(e, t), bn(e + "Capture", t);
}
function bn(e, t) {
  for (Vr[e] = t, e = 0; e < t.length; e++) Sc.add(t[e]);
}
var _t = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  xi = Object.prototype.hasOwnProperty,
  kp =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Mu = {},
  Ou = {};
function Cp(e) {
  return xi.call(Ou, e)
    ? !0
    : xi.call(Mu, e)
    ? !1
    : kp.test(e)
    ? (Ou[e] = !0)
    : ((Mu[e] = !0), !1);
}
function Pp(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function _p(e, t, n, r) {
  if (t === null || typeof t > "u" || Pp(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Fe(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Fe(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Re[t] = new Fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Re[e] = new Fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Re[e] = new Fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Re[e] = new Fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Re[e] = new Fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Re[e] = new Fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Re[e] = new Fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Re[e] = new Fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Ca = /[\-:]([a-z])/g;
function Pa(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Pa);
    Re[t] = new Fe(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Ca, Pa);
    Re[t] = new Fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Ca, Pa);
  Re[t] = new Fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Re[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Re.xlinkHref = new Fe(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Re[e] = new Fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function _a(e, t, n, r) {
  var l = Re.hasOwnProperty(t) ? Re[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (_p(t, n, l, r) && (n = null),
    r || l === null
      ? Cp(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var jt = xc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  xl = Symbol.for("react.element"),
  zn = Symbol.for("react.portal"),
  Mn = Symbol.for("react.fragment"),
  Ra = Symbol.for("react.strict_mode"),
  Si = Symbol.for("react.profiler"),
  Ec = Symbol.for("react.provider"),
  kc = Symbol.for("react.context"),
  Na = Symbol.for("react.forward_ref"),
  Ei = Symbol.for("react.suspense"),
  ki = Symbol.for("react.suspense_list"),
  La = Symbol.for("react.memo"),
  Bt = Symbol.for("react.lazy"),
  Cc = Symbol.for("react.offscreen"),
  Fu = Symbol.iterator;
function mr(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Fu && e[Fu]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ue = Object.assign,
  Qo;
function Nr(e) {
  if (Qo === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Qo = (t && t[1]) || "";
    }
  return (
    `
` +
    Qo +
    e
  );
}
var Ko = !1;
function Yo(e, t) {
  if (!e || Ko) return "";
  Ko = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == "string") {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    u.includes("<anonymous>") &&
                    (u = u.replace("<anonymous>", e.displayName)),
                  u
                );
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Ko = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Nr(e) : "";
}
function Rp(e) {
  switch (e.tag) {
    case 5:
      return Nr(e.type);
    case 16:
      return Nr("Lazy");
    case 13:
      return Nr("Suspense");
    case 19:
      return Nr("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Yo(e.type, !1)), e;
    case 11:
      return (e = Yo(e.type.render, !1)), e;
    case 1:
      return (e = Yo(e.type, !0)), e;
    default:
      return "";
  }
}
function Ci(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Mn:
      return "Fragment";
    case zn:
      return "Portal";
    case Si:
      return "Profiler";
    case Ra:
      return "StrictMode";
    case Ei:
      return "Suspense";
    case ki:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case kc:
        return (e.displayName || "Context") + ".Consumer";
      case Ec:
        return (e._context.displayName || "Context") + ".Provider";
      case Na:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case La:
        return (
          (t = e.displayName || null), t !== null ? t : Ci(e.type) || "Memo"
        );
      case Bt:
        (t = e._payload), (e = e._init);
        try {
          return Ci(e(t));
        } catch {}
    }
  return null;
}
function Np(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Ci(t);
    case 8:
      return t === Ra ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function en(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Pc(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function Lp(e) {
  var t = Pc(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Sl(e) {
  e._valueTracker || (e._valueTracker = Lp(e));
}
function _c(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Pc(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Xl(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Pi(e, t) {
  var n = t.checked;
  return ue({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Iu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = en(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Rc(e, t) {
  (t = t.checked), t != null && _a(e, "checked", t, !1);
}
function _i(e, t) {
  Rc(e, t);
  var n = en(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Ri(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Ri(e, t.type, en(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Ri(e, t, n) {
  (t !== "number" || Xl(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Lr = Array.isArray;
function Yn(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + en(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ni(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return ue({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Au(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Lr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: en(n) };
}
function Nc(e, t) {
  var n = en(t.value),
    r = en(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Bu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Lc(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Li(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Lc(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var El,
  Tc = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        El = El || document.createElement("div"),
          El.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = El.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Hr(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Dr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tp = ["Webkit", "ms", "Moz", "O"];
Object.keys(Dr).forEach(function (e) {
  Tp.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Dr[t] = Dr[e]);
  });
});
function jc(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Dr.hasOwnProperty(e) && Dr[e])
    ? ("" + t).trim()
    : t + "px";
}
function Dc(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = jc(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var jp = ue(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ti(e, t) {
  if (t) {
    if (jp[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(N(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(N(62));
  }
}
function ji(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Di = null;
function Ta(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var zi = null,
  Xn = null,
  Gn = null;
function $u(e) {
  if ((e = cl(e))) {
    if (typeof zi != "function") throw Error(N(280));
    var t = e.stateNode;
    t && ((t = Po(t)), zi(e.stateNode, e.type, t));
  }
}
function zc(e) {
  Xn ? (Gn ? Gn.push(e) : (Gn = [e])) : (Xn = e);
}
function Mc() {
  if (Xn) {
    var e = Xn,
      t = Gn;
    if (((Gn = Xn = null), $u(e), t)) for (e = 0; e < t.length; e++) $u(t[e]);
  }
}
function Oc(e, t) {
  return e(t);
}
function Fc() {}
var Xo = !1;
function Ic(e, t, n) {
  if (Xo) return e(t, n);
  Xo = !0;
  try {
    return Oc(e, t, n);
  } finally {
    (Xo = !1), (Xn !== null || Gn !== null) && (Fc(), Mc());
  }
}
function Wr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Po(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(N(231, t, typeof n));
  return n;
}
var Mi = !1;
if (_t)
  try {
    var vr = {};
    Object.defineProperty(vr, "passive", {
      get: function () {
        Mi = !0;
      },
    }),
      window.addEventListener("test", vr, vr),
      window.removeEventListener("test", vr, vr);
  } catch {
    Mi = !1;
  }
function Dp(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (f) {
    this.onError(f);
  }
}
var zr = !1,
  Gl = null,
  Jl = !1,
  Oi = null,
  zp = {
    onError: function (e) {
      (zr = !0), (Gl = e);
    },
  };
function Mp(e, t, n, r, l, o, i, a, u) {
  (zr = !1), (Gl = null), Dp.apply(zp, arguments);
}
function Op(e, t, n, r, l, o, i, a, u) {
  if ((Mp.apply(this, arguments), zr)) {
    if (zr) {
      var s = Gl;
      (zr = !1), (Gl = null);
    } else throw Error(N(198));
    Jl || ((Jl = !0), (Oi = s));
  }
}
function Pn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Uc(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Vu(e) {
  if (Pn(e) !== e) throw Error(N(188));
}
function Fp(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Pn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Vu(l), e;
        if (o === r) return Vu(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function Ac(e) {
  return (e = Fp(e)), e !== null ? Bc(e) : null;
}
function Bc(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Bc(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $c = Xe.unstable_scheduleCallback,
  Hu = Xe.unstable_cancelCallback,
  Ip = Xe.unstable_shouldYield,
  Up = Xe.unstable_requestPaint,
  pe = Xe.unstable_now,
  Ap = Xe.unstable_getCurrentPriorityLevel,
  ja = Xe.unstable_ImmediatePriority,
  Vc = Xe.unstable_UserBlockingPriority,
  Zl = Xe.unstable_NormalPriority,
  Bp = Xe.unstable_LowPriority,
  Hc = Xe.unstable_IdlePriority,
  So = null,
  gt = null;
function $p(e) {
  if (gt && typeof gt.onCommitFiberRoot == "function")
    try {
      gt.onCommitFiberRoot(So, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var ft = Math.clz32 ? Math.clz32 : Wp,
  Vp = Math.log,
  Hp = Math.LN2;
function Wp(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Vp(e) / Hp) | 0)) | 0;
}
var kl = 64,
  Cl = 4194304;
function Tr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function ql(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Tr(a)) : ((o &= i), o !== 0 && (r = Tr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Tr(i)) : o !== 0 && (r = Tr(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - ft(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Qp(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Kp(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - ft(o),
      a = 1 << i,
      u = l[i];
    u === -1
      ? (!(a & n) || a & r) && (l[i] = Qp(a, t))
      : u <= t && (e.expiredLanes |= a),
      (o &= ~a);
  }
}
function Fi(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Wc() {
  var e = kl;
  return (kl <<= 1), !(kl & 4194240) && (kl = 64), e;
}
function Go(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ul(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - ft(t)),
    (e[t] = n);
}
function Yp(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - ft(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function Da(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - ft(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var Z = 0;
function Qc(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Kc,
  za,
  Yc,
  Xc,
  Gc,
  Ii = !1,
  Pl = [],
  Kt = null,
  Yt = null,
  Xt = null,
  Qr = new Map(),
  Kr = new Map(),
  Vt = [],
  Xp =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Wu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Kt = null;
      break;
    case "dragenter":
    case "dragleave":
      Yt = null;
      break;
    case "mouseover":
    case "mouseout":
      Xt = null;
      break;
    case "pointerover":
    case "pointerout":
      Qr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kr.delete(t.pointerId);
  }
}
function yr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = cl(t)), t !== null && za(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Gp(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (Kt = yr(Kt, e, t, n, r, l)), !0;
    case "dragenter":
      return (Yt = yr(Yt, e, t, n, r, l)), !0;
    case "mouseover":
      return (Xt = yr(Xt, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return Qr.set(o, yr(Qr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Kr.set(o, yr(Kr.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Jc(e) {
  var t = fn(e.target);
  if (t !== null) {
    var n = Pn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Uc(n)), t !== null)) {
          (e.blockedOn = t),
            Gc(e.priority, function () {
              Yc(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Ul(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ui(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Di = r), n.target.dispatchEvent(r), (Di = null);
    } else return (t = cl(n)), t !== null && za(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Qu(e, t, n) {
  Ul(e) && n.delete(t);
}
function Jp() {
  (Ii = !1),
    Kt !== null && Ul(Kt) && (Kt = null),
    Yt !== null && Ul(Yt) && (Yt = null),
    Xt !== null && Ul(Xt) && (Xt = null),
    Qr.forEach(Qu),
    Kr.forEach(Qu);
}
function gr(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Ii ||
      ((Ii = !0),
      Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, Jp)));
}
function Yr(e) {
  function t(l) {
    return gr(l, e);
  }
  if (0 < Pl.length) {
    gr(Pl[0], e);
    for (var n = 1; n < Pl.length; n++) {
      var r = Pl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Kt !== null && gr(Kt, e),
      Yt !== null && gr(Yt, e),
      Xt !== null && gr(Xt, e),
      Qr.forEach(t),
      Kr.forEach(t),
      n = 0;
    n < Vt.length;
    n++
  )
    (r = Vt[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Vt.length && ((n = Vt[0]), n.blockedOn === null); )
    Jc(n), n.blockedOn === null && Vt.shift();
}
var Jn = jt.ReactCurrentBatchConfig,
  bl = !0;
function Zp(e, t, n, r) {
  var l = Z,
    o = Jn.transition;
  Jn.transition = null;
  try {
    (Z = 1), Ma(e, t, n, r);
  } finally {
    (Z = l), (Jn.transition = o);
  }
}
function qp(e, t, n, r) {
  var l = Z,
    o = Jn.transition;
  Jn.transition = null;
  try {
    (Z = 4), Ma(e, t, n, r);
  } finally {
    (Z = l), (Jn.transition = o);
  }
}
function Ma(e, t, n, r) {
  if (bl) {
    var l = Ui(e, t, n, r);
    if (l === null) oi(e, t, r, eo, n), Wu(e, r);
    else if (Gp(l, e, t, n, r)) r.stopPropagation();
    else if ((Wu(e, r), t & 4 && -1 < Xp.indexOf(e))) {
      for (; l !== null; ) {
        var o = cl(l);
        if (
          (o !== null && Kc(o),
          (o = Ui(e, t, n, r)),
          o === null && oi(e, t, r, eo, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else oi(e, t, r, null, n);
  }
}
var eo = null;
function Ui(e, t, n, r) {
  if (((eo = null), (e = Ta(r)), (e = fn(e)), e !== null))
    if (((t = Pn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Uc(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (eo = e), null;
}
function Zc(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Ap()) {
        case ja:
          return 1;
        case Vc:
          return 4;
        case Zl:
        case Bp:
          return 16;
        case Hc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var Wt = null,
  Oa = null,
  Al = null;
function qc() {
  if (Al) return Al;
  var e,
    t = Oa,
    n = t.length,
    r,
    l = "value" in Wt ? Wt.value : Wt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (Al = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Bl(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function _l() {
  return !0;
}
function Ku() {
  return !1;
}
function Je(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? _l
        : Ku),
      (this.isPropagationStopped = Ku),
      this
    );
  }
  return (
    ue(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = _l));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = _l));
      },
      persist: function () {},
      isPersistent: _l,
    }),
    t
  );
}
var sr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Fa = Je(sr),
  sl = ue({}, sr, { view: 0, detail: 0 }),
  bp = Je(sl),
  Jo,
  Zo,
  wr,
  Eo = ue({}, sl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Ia,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== wr &&
            (wr && e.type === "mousemove"
              ? ((Jo = e.screenX - wr.screenX), (Zo = e.screenY - wr.screenY))
              : (Zo = Jo = 0),
            (wr = e)),
          Jo);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Zo;
    },
  }),
  Yu = Je(Eo),
  eh = ue({}, Eo, { dataTransfer: 0 }),
  th = Je(eh),
  nh = ue({}, sl, { relatedTarget: 0 }),
  qo = Je(nh),
  rh = ue({}, sr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  lh = Je(rh),
  oh = ue({}, sr, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ih = Je(oh),
  ah = ue({}, sr, { data: 0 }),
  Xu = Je(ah),
  uh = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  sh = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  ch = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fh(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ch[e]) ? !!t[e] : !1;
}
function Ia() {
  return fh;
}
var dh = ue({}, sl, {
    key: function (e) {
      if (e.key) {
        var t = uh[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Bl(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? sh[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Ia,
    charCode: function (e) {
      return e.type === "keypress" ? Bl(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Bl(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  ph = Je(dh),
  hh = ue({}, Eo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Gu = Je(hh),
  mh = ue({}, sl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Ia,
  }),
  vh = Je(mh),
  yh = ue({}, sr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  gh = Je(yh),
  wh = ue({}, Eo, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  xh = Je(wh),
  Sh = [9, 13, 27, 32],
  Ua = _t && "CompositionEvent" in window,
  Mr = null;
_t && "documentMode" in document && (Mr = document.documentMode);
var Eh = _t && "TextEvent" in window && !Mr,
  bc = _t && (!Ua || (Mr && 8 < Mr && 11 >= Mr)),
  Ju = " ",
  Zu = !1;
function ef(e, t) {
  switch (e) {
    case "keyup":
      return Sh.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function tf(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var On = !1;
function kh(e, t) {
  switch (e) {
    case "compositionend":
      return tf(t);
    case "keypress":
      return t.which !== 32 ? null : ((Zu = !0), Ju);
    case "textInput":
      return (e = t.data), e === Ju && Zu ? null : e;
    default:
      return null;
  }
}
function Ch(e, t) {
  if (On)
    return e === "compositionend" || (!Ua && ef(e, t))
      ? ((e = qc()), (Al = Oa = Wt = null), (On = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return bc && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ph = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function qu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ph[e.type] : t === "textarea";
}
function nf(e, t, n, r) {
  zc(r),
    (t = to(t, "onChange")),
    0 < t.length &&
      ((n = new Fa("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Or = null,
  Xr = null;
function _h(e) {
  hf(e, 0);
}
function ko(e) {
  var t = Un(e);
  if (_c(t)) return e;
}
function Rh(e, t) {
  if (e === "change") return t;
}
var rf = !1;
if (_t) {
  var bo;
  if (_t) {
    var ei = "oninput" in document;
    if (!ei) {
      var bu = document.createElement("div");
      bu.setAttribute("oninput", "return;"),
        (ei = typeof bu.oninput == "function");
    }
    bo = ei;
  } else bo = !1;
  rf = bo && (!document.documentMode || 9 < document.documentMode);
}
function es() {
  Or && (Or.detachEvent("onpropertychange", lf), (Xr = Or = null));
}
function lf(e) {
  if (e.propertyName === "value" && ko(Xr)) {
    var t = [];
    nf(t, Xr, e, Ta(e)), Ic(_h, t);
  }
}
function Nh(e, t, n) {
  e === "focusin"
    ? (es(), (Or = t), (Xr = n), Or.attachEvent("onpropertychange", lf))
    : e === "focusout" && es();
}
function Lh(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ko(Xr);
}
function Th(e, t) {
  if (e === "click") return ko(t);
}
function jh(e, t) {
  if (e === "input" || e === "change") return ko(t);
}
function Dh(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var pt = typeof Object.is == "function" ? Object.is : Dh;
function Gr(e, t) {
  if (pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!xi.call(t, l) || !pt(e[l], t[l])) return !1;
  }
  return !0;
}
function ts(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function ns(e, t) {
  var n = ts(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ts(n);
  }
}
function of(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? of(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function af() {
  for (var e = window, t = Xl(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Xl(e.document);
  }
  return t;
}
function Aa(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function zh(e) {
  var t = af(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    of(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && Aa(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = ns(n, o));
        var i = ns(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Mh = _t && "documentMode" in document && 11 >= document.documentMode,
  Fn = null,
  Ai = null,
  Fr = null,
  Bi = !1;
function rs(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Bi ||
    Fn == null ||
    Fn !== Xl(r) ||
    ((r = Fn),
    "selectionStart" in r && Aa(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Fr && Gr(Fr, r)) ||
      ((Fr = r),
      (r = to(Ai, "onSelect")),
      0 < r.length &&
        ((t = new Fa("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fn))));
}
function Rl(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var In = {
    animationend: Rl("Animation", "AnimationEnd"),
    animationiteration: Rl("Animation", "AnimationIteration"),
    animationstart: Rl("Animation", "AnimationStart"),
    transitionend: Rl("Transition", "TransitionEnd"),
  },
  ti = {},
  uf = {};
_t &&
  ((uf = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete In.animationend.animation,
    delete In.animationiteration.animation,
    delete In.animationstart.animation),
  "TransitionEvent" in window || delete In.transitionend.transition);
function Co(e) {
  if (ti[e]) return ti[e];
  if (!In[e]) return e;
  var t = In[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in uf) return (ti[e] = t[n]);
  return e;
}
var sf = Co("animationend"),
  cf = Co("animationiteration"),
  ff = Co("animationstart"),
  df = Co("transitionend"),
  pf = new Map(),
  ls =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function nn(e, t) {
  pf.set(e, t), Cn(t, [e]);
}
for (var ni = 0; ni < ls.length; ni++) {
  var ri = ls[ni],
    Oh = ri.toLowerCase(),
    Fh = ri[0].toUpperCase() + ri.slice(1);
  nn(Oh, "on" + Fh);
}
nn(sf, "onAnimationEnd");
nn(cf, "onAnimationIteration");
nn(ff, "onAnimationStart");
nn("dblclick", "onDoubleClick");
nn("focusin", "onFocus");
nn("focusout", "onBlur");
nn(df, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Cn(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Cn(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Cn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Cn(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Cn(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Cn(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var jr =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ih = new Set("cancel close invalid load scroll toggle".split(" ").concat(jr));
function os(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Op(r, t, void 0, e), (e.currentTarget = null);
}
function hf(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          os(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]),
            (u = a.instance),
            (s = a.currentTarget),
            (a = a.listener),
            u !== o && l.isPropagationStopped())
          )
            break e;
          os(l, a, s), (o = u);
        }
    }
  }
  if (Jl) throw ((e = Oi), (Jl = !1), (Oi = null), e);
}
function ne(e, t) {
  var n = t[Qi];
  n === void 0 && (n = t[Qi] = new Set());
  var r = e + "__bubble";
  n.has(r) || (mf(t, e, 2, !1), n.add(r));
}
function li(e, t, n) {
  var r = 0;
  t && (r |= 4), mf(n, e, r, t);
}
var Nl = "_reactListening" + Math.random().toString(36).slice(2);
function Jr(e) {
  if (!e[Nl]) {
    (e[Nl] = !0),
      Sc.forEach(function (n) {
        n !== "selectionchange" && (Ih.has(n) || li(n, !1, e), li(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Nl] || ((t[Nl] = !0), li("selectionchange", !1, t));
  }
}
function mf(e, t, n, r) {
  switch (Zc(t)) {
    case 1:
      var l = Zp;
      break;
    case 4:
      l = qp;
      break;
    default:
      l = Ma;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Mi ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function oi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo),
              u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = fn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  Ic(function () {
    var s = o,
      f = Ta(n),
      p = [];
    e: {
      var m = pf.get(e);
      if (m !== void 0) {
        var E = Fa,
          x = e;
        switch (e) {
          case "keypress":
            if (Bl(n) === 0) break e;
          case "keydown":
          case "keyup":
            E = ph;
            break;
          case "focusin":
            (x = "focus"), (E = qo);
            break;
          case "focusout":
            (x = "blur"), (E = qo);
            break;
          case "beforeblur":
          case "afterblur":
            E = qo;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            E = Yu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            E = th;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            E = vh;
            break;
          case sf:
          case cf:
          case ff:
            E = lh;
            break;
          case df:
            E = gh;
            break;
          case "scroll":
            E = bp;
            break;
          case "wheel":
            E = xh;
            break;
          case "copy":
          case "cut":
          case "paste":
            E = ih;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            E = Gu;
        }
        var w = (t & 4) !== 0,
          C = !w && e === "scroll",
          d = w ? (m !== null ? m + "Capture" : null) : m;
        w = [];
        for (var c = s, h; c !== null; ) {
          h = c;
          var S = h.stateNode;
          if (
            (h.tag === 5 &&
              S !== null &&
              ((h = S),
              d !== null && ((S = Wr(c, d)), S != null && w.push(Zr(c, S, h)))),
            C)
          )
            break;
          c = c.return;
        }
        0 < w.length &&
          ((m = new E(m, x, null, n, f)), p.push({ event: m, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((m = e === "mouseover" || e === "pointerover"),
          (E = e === "mouseout" || e === "pointerout"),
          m &&
            n !== Di &&
            (x = n.relatedTarget || n.fromElement) &&
            (fn(x) || x[Rt]))
        )
          break e;
        if (
          (E || m) &&
          ((m =
            f.window === f
              ? f
              : (m = f.ownerDocument)
              ? m.defaultView || m.parentWindow
              : window),
          E
            ? ((x = n.relatedTarget || n.toElement),
              (E = s),
              (x = x ? fn(x) : null),
              x !== null &&
                ((C = Pn(x)), x !== C || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((E = null), (x = s)),
          E !== x)
        ) {
          if (
            ((w = Yu),
            (S = "onMouseLeave"),
            (d = "onMouseEnter"),
            (c = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Gu),
              (S = "onPointerLeave"),
              (d = "onPointerEnter"),
              (c = "pointer")),
            (C = E == null ? m : Un(E)),
            (h = x == null ? m : Un(x)),
            (m = new w(S, c + "leave", E, n, f)),
            (m.target = C),
            (m.relatedTarget = h),
            (S = null),
            fn(f) === s &&
              ((w = new w(d, c + "enter", x, n, f)),
              (w.target = h),
              (w.relatedTarget = C),
              (S = w)),
            (C = S),
            E && x)
          )
            t: {
              for (w = E, d = x, c = 0, h = w; h; h = jn(h)) c++;
              for (h = 0, S = d; S; S = jn(S)) h++;
              for (; 0 < c - h; ) (w = jn(w)), c--;
              for (; 0 < h - c; ) (d = jn(d)), h--;
              for (; c--; ) {
                if (w === d || (d !== null && w === d.alternate)) break t;
                (w = jn(w)), (d = jn(d));
              }
              w = null;
            }
          else w = null;
          E !== null && is(p, m, E, w, !1),
            x !== null && C !== null && is(p, C, x, w, !0);
        }
      }
      e: {
        if (
          ((m = s ? Un(s) : window),
          (E = m.nodeName && m.nodeName.toLowerCase()),
          E === "select" || (E === "input" && m.type === "file"))
        )
          var L = Rh;
        else if (qu(m))
          if (rf) L = jh;
          else {
            L = Lh;
            var v = Nh;
          }
        else
          (E = m.nodeName) &&
            E.toLowerCase() === "input" &&
            (m.type === "checkbox" || m.type === "radio") &&
            (L = Th);
        if (L && (L = L(e, s))) {
          nf(p, L, n, f);
          break e;
        }
        v && v(e, m, s),
          e === "focusout" &&
            (v = m._wrapperState) &&
            v.controlled &&
            m.type === "number" &&
            Ri(m, "number", m.value);
      }
      switch (((v = s ? Un(s) : window), e)) {
        case "focusin":
          (qu(v) || v.contentEditable === "true") &&
            ((Fn = v), (Ai = s), (Fr = null));
          break;
        case "focusout":
          Fr = Ai = Fn = null;
          break;
        case "mousedown":
          Bi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Bi = !1), rs(p, n, f);
          break;
        case "selectionchange":
          if (Mh) break;
        case "keydown":
        case "keyup":
          rs(p, n, f);
      }
      var _;
      if (Ua)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        On
          ? ef(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (bc &&
          n.locale !== "ko" &&
          (On || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && On && (_ = qc())
            : ((Wt = f),
              (Oa = "value" in Wt ? Wt.value : Wt.textContent),
              (On = !0))),
        (v = to(s, T)),
        0 < v.length &&
          ((T = new Xu(T, e, null, n, f)),
          p.push({ event: T, listeners: v }),
          _ ? (T.data = _) : ((_ = tf(n)), _ !== null && (T.data = _)))),
        (_ = Eh ? kh(e, n) : Ch(e, n)) &&
          ((s = to(s, "onBeforeInput")),
          0 < s.length &&
            ((f = new Xu("onBeforeInput", "beforeinput", null, n, f)),
            p.push({ event: f, listeners: s }),
            (f.data = _)));
    }
    hf(p, t);
  });
}
function Zr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function to(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Wr(e, n)),
      o != null && r.unshift(Zr(e, o, l)),
      (o = Wr(e, t)),
      o != null && r.push(Zr(e, o, l))),
      (e = e.return);
  }
  return r;
}
function jn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function is(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = Wr(n, o)), u != null && i.unshift(Zr(n, u, a)))
        : l || ((u = Wr(n, o)), u != null && i.push(Zr(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Uh = /\r\n?/g,
  Ah = /\u0000|\uFFFD/g;
function as(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Uh,
      `
`
    )
    .replace(Ah, "");
}
function Ll(e, t, n) {
  if (((t = as(t)), as(e) !== t && n)) throw Error(N(425));
}
function no() {}
var $i = null,
  Vi = null;
function Hi(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Wi = typeof setTimeout == "function" ? setTimeout : void 0,
  Bh = typeof clearTimeout == "function" ? clearTimeout : void 0,
  us = typeof Promise == "function" ? Promise : void 0,
  $h =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof us < "u"
      ? function (e) {
          return us.resolve(null).then(e).catch(Vh);
        }
      : Wi;
function Vh(e) {
  setTimeout(function () {
    throw e;
  });
}
function ii(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), Yr(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  Yr(t);
}
function Gt(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function ss(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var cr = Math.random().toString(36).slice(2),
  yt = "__reactFiber$" + cr,
  qr = "__reactProps$" + cr,
  Rt = "__reactContainer$" + cr,
  Qi = "__reactEvents$" + cr,
  Hh = "__reactListeners$" + cr,
  Wh = "__reactHandles$" + cr;
function fn(e) {
  var t = e[yt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Rt] || n[yt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = ss(e); e !== null; ) {
          if ((n = e[yt])) return n;
          e = ss(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function cl(e) {
  return (
    (e = e[yt] || e[Rt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function Po(e) {
  return e[qr] || null;
}
var Ki = [],
  An = -1;
function rn(e) {
  return { current: e };
}
function re(e) {
  0 > An || ((e.current = Ki[An]), (Ki[An] = null), An--);
}
function ee(e, t) {
  An++, (Ki[An] = e.current), (e.current = t);
}
var tn = {},
  je = rn(tn),
  Be = rn(!1),
  gn = tn;
function er(e, t) {
  var n = e.type.contextTypes;
  if (!n) return tn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function $e(e) {
  return (e = e.childContextTypes), e != null;
}
function ro() {
  re(Be), re(je);
}
function cs(e, t, n) {
  if (je.current !== tn) throw Error(N(168));
  ee(je, t), ee(Be, n);
}
function vf(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Np(e) || "Unknown", l));
  return ue({}, n, r);
}
function lo(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || tn),
    (gn = je.current),
    ee(je, e),
    ee(Be, Be.current),
    !0
  );
}
function fs(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n
    ? ((e = vf(e, t, gn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      re(Be),
      re(je),
      ee(je, e))
    : re(Be),
    ee(Be, n);
}
var St = null,
  _o = !1,
  ai = !1;
function yf(e) {
  St === null ? (St = [e]) : St.push(e);
}
function Qh(e) {
  (_o = !0), yf(e);
}
function ln() {
  if (!ai && St !== null) {
    ai = !0;
    var e = 0,
      t = Z;
    try {
      var n = St;
      for (Z = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (St = null), (_o = !1);
    } catch (l) {
      throw (St !== null && (St = St.slice(e + 1)), $c(ja, ln), l);
    } finally {
      (Z = t), (ai = !1);
    }
  }
  return null;
}
var Bn = [],
  $n = 0,
  oo = null,
  io = 0,
  be = [],
  et = 0,
  wn = null,
  Et = 1,
  kt = "";
function sn(e, t) {
  (Bn[$n++] = io), (Bn[$n++] = oo), (oo = e), (io = t);
}
function gf(e, t, n) {
  (be[et++] = Et), (be[et++] = kt), (be[et++] = wn), (wn = e);
  var r = Et;
  e = kt;
  var l = 32 - ft(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - ft(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Et = (1 << (32 - ft(t) + l)) | (n << l) | r),
      (kt = o + e);
  } else (Et = (1 << o) | (n << l) | r), (kt = e);
}
function Ba(e) {
  e.return !== null && (sn(e, 1), gf(e, 1, 0));
}
function $a(e) {
  for (; e === oo; )
    (oo = Bn[--$n]), (Bn[$n] = null), (io = Bn[--$n]), (Bn[$n] = null);
  for (; e === wn; )
    (wn = be[--et]),
      (be[et] = null),
      (kt = be[--et]),
      (be[et] = null),
      (Et = be[--et]),
      (be[et] = null);
}
var Ye = null,
  Ke = null,
  oe = !1,
  ct = null;
function wf(e, t) {
  var n = tt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function ds(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ye = e), (Ke = Gt(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ye = e), (Ke = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = wn !== null ? { id: Et, overflow: kt } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = tt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ye = e),
            (Ke = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Yi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Xi(e) {
  if (oe) {
    var t = Ke;
    if (t) {
      var n = t;
      if (!ds(e, t)) {
        if (Yi(e)) throw Error(N(418));
        t = Gt(n.nextSibling);
        var r = Ye;
        t && ds(e, t)
          ? wf(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (oe = !1), (Ye = e));
      }
    } else {
      if (Yi(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (oe = !1), (Ye = e);
    }
  }
}
function ps(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ye = e;
}
function Tl(e) {
  if (e !== Ye) return !1;
  if (!oe) return ps(e), (oe = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Hi(e.type, e.memoizedProps))),
    t && (t = Ke))
  ) {
    if (Yi(e)) throw (xf(), Error(N(418)));
    for (; t; ) wf(e, t), (t = Gt(t.nextSibling));
  }
  if ((ps(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ke = Gt(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Ke = null;
    }
  } else Ke = Ye ? Gt(e.stateNode.nextSibling) : null;
  return !0;
}
function xf() {
  for (var e = Ke; e; ) e = Gt(e.nextSibling);
}
function tr() {
  (Ke = Ye = null), (oe = !1);
}
function Va(e) {
  ct === null ? (ct = [e]) : ct.push(e);
}
var Kh = jt.ReactCurrentBatchConfig;
function at(e, t) {
  if (e && e.defaultProps) {
    (t = ue({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var ao = rn(null),
  uo = null,
  Vn = null,
  Ha = null;
function Wa() {
  Ha = Vn = uo = null;
}
function Qa(e) {
  var t = ao.current;
  re(ao), (e._currentValue = t);
}
function Gi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zn(e, t) {
  (uo = e),
    (Ha = Vn = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Ae = !0), (e.firstContext = null));
}
function rt(e) {
  var t = e._currentValue;
  if (Ha !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Vn === null)) {
      if (uo === null) throw Error(N(308));
      (Vn = e), (uo.dependencies = { lanes: 0, firstContext: e });
    } else Vn = Vn.next = e;
  return t;
}
var dn = null;
function Ka(e) {
  dn === null ? (dn = [e]) : dn.push(e);
}
function Sf(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Ka(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Nt(e, r)
  );
}
function Nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var $t = !1;
function Ya(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ef(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ct(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Jt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), X & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Nt(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Ka(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Nt(e, n)
  );
}
function $l(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Da(e, n);
  }
}
function hs(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function so(e, t, n, r) {
  var l = e.updateQueue;
  $t = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var f = e.alternate;
    f !== null &&
      ((f = f.updateQueue),
      (a = f.lastBaseUpdate),
      a !== i &&
        (a === null ? (f.firstBaseUpdate = s) : (a.next = s),
        (f.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var p = l.baseState;
    (i = 0), (f = s = u = null), (a = o);
    do {
      var m = a.lane,
        E = a.eventTime;
      if ((r & m) === m) {
        f !== null &&
          (f = f.next =
            {
              eventTime: E,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var x = e,
            w = a;
          switch (((m = t), (E = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                p = x.call(E, p, m);
                break e;
              }
              p = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (m = typeof x == "function" ? x.call(E, p, m) : x),
                m == null)
              )
                break e;
              p = ue({}, p, m);
              break e;
            case 2:
              $t = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (m = l.effects),
          m === null ? (l.effects = [a]) : m.push(a));
      } else
        (E = {
          eventTime: E,
          lane: m,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          f === null ? ((s = f = E), (u = p)) : (f = f.next = E),
          (i |= m);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (m = a),
          (a = m.next),
          (m.next = null),
          (l.lastBaseUpdate = m),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (f === null && (u = p),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = f),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Sn |= i), (e.lanes = i), (e.memoizedState = p);
  }
}
function ms(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(N(191, l));
        l.call(r);
      }
    }
}
var kf = new xc.Component().refs;
function Ji(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ue({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ro = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Pn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = qt(e),
      o = Ct(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = Jt(e, o, l)),
      t !== null && (dt(t, e, l, r), $l(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Me(),
      l = qt(e),
      o = Ct(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = Jt(e, o, l)),
      t !== null && (dt(t, e, l, r), $l(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Me(),
      r = qt(e),
      l = Ct(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Jt(e, l, r)),
      t !== null && (dt(t, e, r, n), $l(t, e, r));
  },
};
function vs(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Gr(n, r) || !Gr(l, o)
      : !0
  );
}
function Cf(e, t, n) {
  var r = !1,
    l = tn,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = rt(o))
      : ((l = $e(t) ? gn : je.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? er(e, l) : tn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Ro),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function ys(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Ro.enqueueReplaceState(t, t.state, null);
}
function Zi(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = kf), Ya(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = rt(o))
    : ((o = $e(t) ? gn : je.current), (l.context = er(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (Ji(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && Ro.enqueueReplaceState(l, l.state, null),
      so(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xr(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === kf && (a = l.refs = {}),
              i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function jl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      N(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function gs(e) {
  var t = e._init;
  return t(e._payload);
}
function Pf(e) {
  function t(d, c) {
    if (e) {
      var h = d.deletions;
      h === null ? ((d.deletions = [c]), (d.flags |= 16)) : h.push(c);
    }
  }
  function n(d, c) {
    if (!e) return null;
    for (; c !== null; ) t(d, c), (c = c.sibling);
    return null;
  }
  function r(d, c) {
    for (d = new Map(); c !== null; )
      c.key !== null ? d.set(c.key, c) : d.set(c.index, c), (c = c.sibling);
    return d;
  }
  function l(d, c) {
    return (d = bt(d, c)), (d.index = 0), (d.sibling = null), d;
  }
  function o(d, c, h) {
    return (
      (d.index = h),
      e
        ? ((h = d.alternate),
          h !== null
            ? ((h = h.index), h < c ? ((d.flags |= 2), c) : h)
            : ((d.flags |= 2), c))
        : ((d.flags |= 1048576), c)
    );
  }
  function i(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function a(d, c, h, S) {
    return c === null || c.tag !== 6
      ? ((c = hi(h, d.mode, S)), (c.return = d), c)
      : ((c = l(c, h)), (c.return = d), c);
  }
  function u(d, c, h, S) {
    var L = h.type;
    return L === Mn
      ? f(d, c, h.props.children, S, h.key)
      : c !== null &&
        (c.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === Bt &&
            gs(L) === c.type))
      ? ((S = l(c, h.props)), (S.ref = xr(d, c, h)), (S.return = d), S)
      : ((S = Yl(h.type, h.key, h.props, null, d.mode, S)),
        (S.ref = xr(d, c, h)),
        (S.return = d),
        S);
  }
  function s(d, c, h, S) {
    return c === null ||
      c.tag !== 4 ||
      c.stateNode.containerInfo !== h.containerInfo ||
      c.stateNode.implementation !== h.implementation
      ? ((c = mi(h, d.mode, S)), (c.return = d), c)
      : ((c = l(c, h.children || [])), (c.return = d), c);
  }
  function f(d, c, h, S, L) {
    return c === null || c.tag !== 7
      ? ((c = yn(h, d.mode, S, L)), (c.return = d), c)
      : ((c = l(c, h)), (c.return = d), c);
  }
  function p(d, c, h) {
    if ((typeof c == "string" && c !== "") || typeof c == "number")
      return (c = hi("" + c, d.mode, h)), (c.return = d), c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case xl:
          return (
            (h = Yl(c.type, c.key, c.props, null, d.mode, h)),
            (h.ref = xr(d, null, c)),
            (h.return = d),
            h
          );
        case zn:
          return (c = mi(c, d.mode, h)), (c.return = d), c;
        case Bt:
          var S = c._init;
          return p(d, S(c._payload), h);
      }
      if (Lr(c) || mr(c))
        return (c = yn(c, d.mode, h, null)), (c.return = d), c;
      jl(d, c);
    }
    return null;
  }
  function m(d, c, h, S) {
    var L = c !== null ? c.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return L !== null ? null : a(d, c, "" + h, S);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case xl:
          return h.key === L ? u(d, c, h, S) : null;
        case zn:
          return h.key === L ? s(d, c, h, S) : null;
        case Bt:
          return (L = h._init), m(d, c, L(h._payload), S);
      }
      if (Lr(h) || mr(h)) return L !== null ? null : f(d, c, h, S, null);
      jl(d, h);
    }
    return null;
  }
  function E(d, c, h, S, L) {
    if ((typeof S == "string" && S !== "") || typeof S == "number")
      return (d = d.get(h) || null), a(c, d, "" + S, L);
    if (typeof S == "object" && S !== null) {
      switch (S.$$typeof) {
        case xl:
          return (d = d.get(S.key === null ? h : S.key) || null), u(c, d, S, L);
        case zn:
          return (d = d.get(S.key === null ? h : S.key) || null), s(c, d, S, L);
        case Bt:
          var v = S._init;
          return E(d, c, h, v(S._payload), L);
      }
      if (Lr(S) || mr(S)) return (d = d.get(h) || null), f(c, d, S, L, null);
      jl(c, S);
    }
    return null;
  }
  function x(d, c, h, S) {
    for (
      var L = null, v = null, _ = c, T = (c = 0), O = null;
      _ !== null && T < h.length;
      T++
    ) {
      _.index > T ? ((O = _), (_ = null)) : (O = _.sibling);
      var F = m(d, _, h[T], S);
      if (F === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && F.alternate === null && t(d, _),
        (c = o(F, c, T)),
        v === null ? (L = F) : (v.sibling = F),
        (v = F),
        (_ = O);
    }
    if (T === h.length) return n(d, _), oe && sn(d, T), L;
    if (_ === null) {
      for (; T < h.length; T++)
        (_ = p(d, h[T], S)),
          _ !== null &&
            ((c = o(_, c, T)), v === null ? (L = _) : (v.sibling = _), (v = _));
      return oe && sn(d, T), L;
    }
    for (_ = r(d, _); T < h.length; T++)
      (O = E(_, d, T, h[T], S)),
        O !== null &&
          (e && O.alternate !== null && _.delete(O.key === null ? T : O.key),
          (c = o(O, c, T)),
          v === null ? (L = O) : (v.sibling = O),
          (v = O));
    return (
      e &&
        _.forEach(function (Y) {
          return t(d, Y);
        }),
      oe && sn(d, T),
      L
    );
  }
  function w(d, c, h, S) {
    var L = mr(h);
    if (typeof L != "function") throw Error(N(150));
    if (((h = L.call(h)), h == null)) throw Error(N(151));
    for (
      var v = (L = null), _ = c, T = (c = 0), O = null, F = h.next();
      _ !== null && !F.done;
      T++, F = h.next()
    ) {
      _.index > T ? ((O = _), (_ = null)) : (O = _.sibling);
      var Y = m(d, _, F.value, S);
      if (Y === null) {
        _ === null && (_ = O);
        break;
      }
      e && _ && Y.alternate === null && t(d, _),
        (c = o(Y, c, T)),
        v === null ? (L = Y) : (v.sibling = Y),
        (v = Y),
        (_ = O);
    }
    if (F.done) return n(d, _), oe && sn(d, T), L;
    if (_ === null) {
      for (; !F.done; T++, F = h.next())
        (F = p(d, F.value, S)),
          F !== null &&
            ((c = o(F, c, T)), v === null ? (L = F) : (v.sibling = F), (v = F));
      return oe && sn(d, T), L;
    }
    for (_ = r(d, _); !F.done; T++, F = h.next())
      (F = E(_, d, T, F.value, S)),
        F !== null &&
          (e && F.alternate !== null && _.delete(F.key === null ? T : F.key),
          (c = o(F, c, T)),
          v === null ? (L = F) : (v.sibling = F),
          (v = F));
    return (
      e &&
        _.forEach(function (ve) {
          return t(d, ve);
        }),
      oe && sn(d, T),
      L
    );
  }
  function C(d, c, h, S) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Mn &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case xl:
          e: {
            for (var L = h.key, v = c; v !== null; ) {
              if (v.key === L) {
                if (((L = h.type), L === Mn)) {
                  if (v.tag === 7) {
                    n(d, v.sibling),
                      (c = l(v, h.props.children)),
                      (c.return = d),
                      (d = c);
                    break e;
                  }
                } else if (
                  v.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === Bt &&
                    gs(L) === v.type)
                ) {
                  n(d, v.sibling),
                    (c = l(v, h.props)),
                    (c.ref = xr(d, v, h)),
                    (c.return = d),
                    (d = c);
                  break e;
                }
                n(d, v);
                break;
              } else t(d, v);
              v = v.sibling;
            }
            h.type === Mn
              ? ((c = yn(h.props.children, d.mode, S, h.key)),
                (c.return = d),
                (d = c))
              : ((S = Yl(h.type, h.key, h.props, null, d.mode, S)),
                (S.ref = xr(d, c, h)),
                (S.return = d),
                (d = S));
          }
          return i(d);
        case zn:
          e: {
            for (v = h.key; c !== null; ) {
              if (c.key === v)
                if (
                  c.tag === 4 &&
                  c.stateNode.containerInfo === h.containerInfo &&
                  c.stateNode.implementation === h.implementation
                ) {
                  n(d, c.sibling),
                    (c = l(c, h.children || [])),
                    (c.return = d),
                    (d = c);
                  break e;
                } else {
                  n(d, c);
                  break;
                }
              else t(d, c);
              c = c.sibling;
            }
            (c = mi(h, d.mode, S)), (c.return = d), (d = c);
          }
          return i(d);
        case Bt:
          return (v = h._init), C(d, c, v(h._payload), S);
      }
      if (Lr(h)) return x(d, c, h, S);
      if (mr(h)) return w(d, c, h, S);
      jl(d, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        c !== null && c.tag === 6
          ? (n(d, c.sibling), (c = l(c, h)), (c.return = d), (d = c))
          : (n(d, c), (c = hi(h, d.mode, S)), (c.return = d), (d = c)),
        i(d))
      : n(d, c);
  }
  return C;
}
var nr = Pf(!0),
  _f = Pf(!1),
  fl = {},
  wt = rn(fl),
  br = rn(fl),
  el = rn(fl);
function pn(e) {
  if (e === fl) throw Error(N(174));
  return e;
}
function Xa(e, t) {
  switch ((ee(el, t), ee(br, e), ee(wt, fl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Li(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Li(t, e));
  }
  re(wt), ee(wt, t);
}
function rr() {
  re(wt), re(br), re(el);
}
function Rf(e) {
  pn(el.current);
  var t = pn(wt.current),
    n = Li(t, e.type);
  t !== n && (ee(br, e), ee(wt, n));
}
function Ga(e) {
  br.current === e && (re(wt), re(br));
}
var ie = rn(0);
function co(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var ui = [];
function Ja() {
  for (var e = 0; e < ui.length; e++)
    ui[e]._workInProgressVersionPrimary = null;
  ui.length = 0;
}
var Vl = jt.ReactCurrentDispatcher,
  si = jt.ReactCurrentBatchConfig,
  xn = 0,
  ae = null,
  ye = null,
  Se = null,
  fo = !1,
  Ir = !1,
  tl = 0,
  Yh = 0;
function Ne() {
  throw Error(N(321));
}
function Za(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!pt(e[n], t[n])) return !1;
  return !0;
}
function qa(e, t, n, r, l, o) {
  if (
    ((xn = o),
    (ae = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vl.current = e === null || e.memoizedState === null ? Zh : qh),
    (e = n(r, l)),
    Ir)
  ) {
    o = 0;
    do {
      if (((Ir = !1), (tl = 0), 25 <= o)) throw Error(N(301));
      (o += 1),
        (Se = ye = null),
        (t.updateQueue = null),
        (Vl.current = bh),
        (e = n(r, l));
    } while (Ir);
  }
  if (
    ((Vl.current = po),
    (t = ye !== null && ye.next !== null),
    (xn = 0),
    (Se = ye = ae = null),
    (fo = !1),
    t)
  )
    throw Error(N(300));
  return e;
}
function ba() {
  var e = tl !== 0;
  return (tl = 0), e;
}
function vt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Se === null ? (ae.memoizedState = Se = e) : (Se = Se.next = e), Se;
}
function lt() {
  if (ye === null) {
    var e = ae.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ye.next;
  var t = Se === null ? ae.memoizedState : Se.next;
  if (t !== null) (Se = t), (ye = e);
  else {
    if (e === null) throw Error(N(310));
    (ye = e),
      (e = {
        memoizedState: ye.memoizedState,
        baseState: ye.baseState,
        baseQueue: ye.baseQueue,
        queue: ye.queue,
        next: null,
      }),
      Se === null ? (ae.memoizedState = Se = e) : (Se = Se.next = e);
  }
  return Se;
}
function nl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ci(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ye,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var f = s.lane;
      if ((xn & f) === f)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var p = {
          lane: f,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = p), (i = r)) : (u = u.next = p),
          (ae.lanes |= f),
          (Sn |= f);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      pt(r, t.memoizedState) || (Ae = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ae.lanes |= o), (Sn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fi(e) {
  var t = lt(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    pt(o, t.memoizedState) || (Ae = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Nf() {}
function Lf(e, t) {
  var n = ae,
    r = lt(),
    l = t(),
    o = !pt(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ae = !0)),
    (r = r.queue),
    eu(Df.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Se !== null && Se.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      rl(9, jf.bind(null, n, r, l, t), void 0, null),
      Ee === null)
    )
      throw Error(N(349));
    xn & 30 || Tf(n, t, l);
  }
  return l;
}
function Tf(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function jf(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), zf(t) && Mf(e);
}
function Df(e, t, n) {
  return n(function () {
    zf(t) && Mf(e);
  });
}
function zf(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !pt(e, n);
  } catch {
    return !0;
  }
}
function Mf(e) {
  var t = Nt(e, 1);
  t !== null && dt(t, e, 1, -1);
}
function ws(e) {
  var t = vt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: nl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jh.bind(null, ae, e)),
    [t.memoizedState, e]
  );
}
function rl(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ae.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ae.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Of() {
  return lt().memoizedState;
}
function Hl(e, t, n, r) {
  var l = vt();
  (ae.flags |= e),
    (l.memoizedState = rl(1 | t, n, void 0, r === void 0 ? null : r));
}
function No(e, t, n, r) {
  var l = lt();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ye !== null) {
    var i = ye.memoizedState;
    if (((o = i.destroy), r !== null && Za(r, i.deps))) {
      l.memoizedState = rl(t, n, o, r);
      return;
    }
  }
  (ae.flags |= e), (l.memoizedState = rl(1 | t, n, o, r));
}
function xs(e, t) {
  return Hl(8390656, 8, e, t);
}
function eu(e, t) {
  return No(2048, 8, e, t);
}
function Ff(e, t) {
  return No(4, 2, e, t);
}
function If(e, t) {
  return No(4, 4, e, t);
}
function Uf(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Af(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), No(4, 4, Uf.bind(null, t, e), n)
  );
}
function tu() {}
function Bf(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Za(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function $f(e, t) {
  var n = lt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Za(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Vf(e, t, n) {
  return xn & 21
    ? (pt(n, t) || ((n = Wc()), (ae.lanes |= n), (Sn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Ae = !0)), (e.memoizedState = n));
}
function Xh(e, t) {
  var n = Z;
  (Z = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = si.transition;
  si.transition = {};
  try {
    e(!1), t();
  } finally {
    (Z = n), (si.transition = r);
  }
}
function Hf() {
  return lt().memoizedState;
}
function Gh(e, t, n) {
  var r = qt(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Wf(e))
  )
    Qf(t, n);
  else if (((n = Sf(e, t, n, r)), n !== null)) {
    var l = Me();
    dt(n, e, r, l), Kf(n, t, r);
  }
}
function Jh(e, t, n) {
  var r = qt(e),
    l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wf(e)) Qf(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), pt(a, i))) {
          var u = t.interleaved;
          u === null
            ? ((l.next = l), Ka(t))
            : ((l.next = u.next), (u.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Sf(e, t, l, r)),
      n !== null && ((l = Me()), dt(n, e, r, l), Kf(n, t, r));
  }
}
function Wf(e) {
  var t = e.alternate;
  return e === ae || (t !== null && t === ae);
}
function Qf(e, t) {
  Ir = fo = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Kf(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), Da(e, n);
  }
}
var po = {
    readContext: rt,
    useCallback: Ne,
    useContext: Ne,
    useEffect: Ne,
    useImperativeHandle: Ne,
    useInsertionEffect: Ne,
    useLayoutEffect: Ne,
    useMemo: Ne,
    useReducer: Ne,
    useRef: Ne,
    useState: Ne,
    useDebugValue: Ne,
    useDeferredValue: Ne,
    useTransition: Ne,
    useMutableSource: Ne,
    useSyncExternalStore: Ne,
    useId: Ne,
    unstable_isNewReconciler: !1,
  },
  Zh = {
    readContext: rt,
    useCallback: function (e, t) {
      return (vt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: rt,
    useEffect: xs,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Hl(4194308, 4, Uf.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Hl(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Hl(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = vt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = vt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Gh.bind(null, ae, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = vt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: ws,
    useDebugValue: tu,
    useDeferredValue: function (e) {
      return (vt().memoizedState = e);
    },
    useTransition: function () {
      var e = ws(!1),
        t = e[0];
      return (e = Xh.bind(null, e[1])), (vt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ae,
        l = vt();
      if (oe) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(N(349));
        xn & 30 || Tf(r, t, n);
      }
      l.memoizedState = n;
      var o = { value: n, getSnapshot: t };
      return (
        (l.queue = o),
        xs(Df.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        rl(9, jf.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = vt(),
        t = Ee.identifierPrefix;
      if (oe) {
        var n = kt,
          r = Et;
        (n = (r & ~(1 << (32 - ft(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = tl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Yh++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  qh = {
    readContext: rt,
    useCallback: Bf,
    useContext: rt,
    useEffect: eu,
    useImperativeHandle: Af,
    useInsertionEffect: Ff,
    useLayoutEffect: If,
    useMemo: $f,
    useReducer: ci,
    useRef: Of,
    useState: function () {
      return ci(nl);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = lt();
      return Vf(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = ci(nl)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nf,
    useSyncExternalStore: Lf,
    useId: Hf,
    unstable_isNewReconciler: !1,
  },
  bh = {
    readContext: rt,
    useCallback: Bf,
    useContext: rt,
    useEffect: eu,
    useImperativeHandle: Af,
    useInsertionEffect: Ff,
    useLayoutEffect: If,
    useMemo: $f,
    useReducer: fi,
    useRef: Of,
    useState: function () {
      return fi(nl);
    },
    useDebugValue: tu,
    useDeferredValue: function (e) {
      var t = lt();
      return ye === null ? (t.memoizedState = e) : Vf(t, ye.memoizedState, e);
    },
    useTransition: function () {
      var e = fi(nl)[0],
        t = lt().memoizedState;
      return [e, t];
    },
    useMutableSource: Nf,
    useSyncExternalStore: Lf,
    useId: Hf,
    unstable_isNewReconciler: !1,
  };
function lr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Rp(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function di(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var em = typeof WeakMap == "function" ? WeakMap : Map;
function Yf(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      mo || ((mo = !0), (ua = r)), qi(e, t);
    }),
    n
  );
}
function Xf(e, t, n) {
  (n = Ct(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        qi(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        qi(e, t),
          typeof r != "function" &&
            (Zt === null ? (Zt = new Set([this])) : Zt.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Ss(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new em();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = hm.bind(null, e, t, n)), t.then(e, e));
}
function Es(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function ks(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ct(-1, 1)), (t.tag = 2), Jt(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var tm = jt.ReactCurrentOwner,
  Ae = !1;
function ze(e, t, n, r) {
  t.child = e === null ? _f(t, null, n, r) : nr(t, e.child, n, r);
}
function Cs(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Zn(t, l),
    (r = qa(e, t, n, r, o, l)),
    (n = ba()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (oe && n && Ba(t), (t.flags |= 1), ze(e, t, r, l), t.child)
  );
}
function Ps(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !su(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Gf(e, t, o, r, l))
      : ((e = Yl(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Gr), n(i, r) && e.ref === t.ref)
    )
      return Lt(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = bt(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Gf(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Gr(o, r) && e.ref === t.ref)
      if (((Ae = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (Ae = !0);
      else return (t.lanes = e.lanes), Lt(e, t, l);
  }
  return bi(e, t, n, r, l);
}
function Jf(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ee(Wn, Qe),
        (Qe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ee(Wn, Qe),
          (Qe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        ee(Wn, Qe),
        (Qe |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ee(Wn, Qe),
      (Qe |= r);
  return ze(e, t, l, n), t.child;
}
function Zf(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function bi(e, t, n, r, l) {
  var o = $e(n) ? gn : je.current;
  return (
    (o = er(t, o)),
    Zn(t, l),
    (n = qa(e, t, n, r, o, l)),
    (r = ba()),
    e !== null && !Ae
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Lt(e, t, l))
      : (oe && r && Ba(t), (t.flags |= 1), ze(e, t, n, l), t.child)
  );
}
function _s(e, t, n, r, l) {
  if ($e(n)) {
    var o = !0;
    lo(t);
  } else o = !1;
  if ((Zn(t, l), t.stateNode === null))
    Wl(e, t), Cf(t, n, r), Zi(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == "object" && s !== null
      ? (s = rt(s))
      : ((s = $e(n) ? gn : je.current), (s = er(t, s)));
    var f = n.getDerivedStateFromProps,
      p =
        typeof f == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== r || u !== s) && ys(t, i, r, s)),
      ($t = !1);
    var m = t.memoizedState;
    (i.state = m),
      so(t, r, i, l),
      (u = t.memoizedState),
      a !== r || m !== u || Be.current || $t
        ? (typeof f == "function" && (Ji(t, n, f, r), (u = t.memoizedState)),
          (a = $t || vs(t, n, a, r, m, u, s))
            ? (p ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      Ef(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : at(t.type, a)),
      (i.props = s),
      (p = t.pendingProps),
      (m = i.context),
      (u = n.contextType),
      typeof u == "object" && u !== null
        ? (u = rt(u))
        : ((u = $e(n) ? gn : je.current), (u = er(t, u)));
    var E = n.getDerivedStateFromProps;
    (f =
      typeof E == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((a !== p || m !== u) && ys(t, i, r, u)),
      ($t = !1),
      (m = t.memoizedState),
      (i.state = m),
      so(t, r, i, l);
    var x = t.memoizedState;
    a !== p || m !== x || Be.current || $t
      ? (typeof E == "function" && (Ji(t, n, E, r), (x = t.memoizedState)),
        (s = $t || vs(t, n, s, r, m, x, u) || !1)
          ? (f ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, x, u),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, x, u)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && m === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (i.props = r),
        (i.state = x),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && m === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return ea(e, t, n, r, o, l);
}
function ea(e, t, n, r, l, o) {
  Zf(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && fs(t, n, !1), Lt(e, t, o);
  (r = t.stateNode), (tm.current = t);
  var a =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = nr(t, e.child, null, o)), (t.child = nr(t, null, a, o)))
      : ze(e, t, a, o),
    (t.memoizedState = r.state),
    l && fs(t, n, !0),
    t.child
  );
}
function qf(e) {
  var t = e.stateNode;
  t.pendingContext
    ? cs(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && cs(e, t.context, !1),
    Xa(e, t.containerInfo);
}
function Rs(e, t, n, r, l) {
  return tr(), Va(l), (t.flags |= 256), ze(e, t, n, r), t.child;
}
var ta = { dehydrated: null, treeContext: null, retryLane: 0 };
function na(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bf(e, t, n) {
  var r = t.pendingProps,
    l = ie.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) ||
      (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    ee(ie, l & 1),
    e === null)
  )
    return (
      Xi(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = { mode: "hidden", children: i }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = jo(i, r, 0, null)),
              (e = yn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = na(n)),
              (t.memoizedState = ta),
              e)
            : nu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null)))
    return nm(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = { mode: "hidden", children: r.children };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = u),
          (t.deletions = null))
        : ((r = bt(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = bt(a, o)) : ((o = yn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? na(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = ta),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = bt(o, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function nu(e, t) {
  return (
    (t = jo({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function Dl(e, t, n, r) {
  return (
    r !== null && Va(r),
    nr(t, e.child, null, n),
    (e = nu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function nm(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = di(Error(N(422)))), Dl(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = jo({ mode: "visible", children: r.children }, l, 0, null)),
        (o = yn(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && nr(t, e.child, null, i),
        (t.child.memoizedState = na(i)),
        (t.memoizedState = ta),
        o);
  if (!(t.mode & 1)) return Dl(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = di(o, r, void 0)), Dl(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ae || a)) {
    if (((r = Ee), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Nt(e, l), dt(r, e, l, -1));
    }
    return uu(), (r = di(Error(N(421)))), Dl(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = mm.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (Ke = Gt(l.nextSibling)),
      (Ye = t),
      (oe = !0),
      (ct = null),
      e !== null &&
        ((be[et++] = Et),
        (be[et++] = kt),
        (be[et++] = wn),
        (Et = e.id),
        (kt = e.overflow),
        (wn = t)),
      (t = nu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Ns(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Gi(e.return, t, n);
}
function pi(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function ed(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ze(e, t, r.children, n), (r = ie.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Ns(e, n, t);
        else if (e.tag === 19) Ns(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ee(ie, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && co(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          pi(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && co(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        pi(t, !0, n, null, o);
        break;
      case "together":
        pi(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Wl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Lt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Sn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (
      e = t.child, n = bt(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = bt(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function rm(e, t, n) {
  switch (t.tag) {
    case 3:
      qf(t), tr();
      break;
    case 5:
      Rf(t);
      break;
    case 1:
      $e(t.type) && lo(t);
      break;
    case 4:
      Xa(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      ee(ao, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ee(ie, ie.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bf(e, t, n)
          : (ee(ie, ie.current & 1),
            (e = Lt(e, t, n)),
            e !== null ? e.sibling : null);
      ee(ie, ie.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return ed(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        ee(ie, ie.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Jf(e, t, n);
  }
  return Lt(e, t, n);
}
var td, ra, nd, rd;
td = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
ra = function () {};
nd = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), pn(wt.current);
    var o = null;
    switch (n) {
      case "input":
        (l = Pi(e, l)), (r = Pi(e, r)), (o = []);
        break;
      case "select":
        (l = ue({}, l, { value: void 0 })),
          (r = ue({}, r, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (l = Ni(e, l)), (r = Ni(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = no);
    }
    Ti(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === "style") {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          s !== "dangerouslySetInnerHTML" &&
            s !== "children" &&
            s !== "suppressContentEditableWarning" &&
            s !== "suppressHydrationWarning" &&
            s !== "autoFocus" &&
            (Vr.hasOwnProperty(s)
              ? o || (o = [])
              : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (
        ((a = l != null ? l[s] : void 0),
        r.hasOwnProperty(s) && u !== a && (u != null || a != null))
      )
        if (s === "style")
          if (a) {
            for (i in a)
              !a.hasOwnProperty(i) ||
                (u && u.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in u)
              u.hasOwnProperty(i) &&
                a[i] !== u[i] &&
                (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === "dangerouslySetInnerHTML"
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === "children"
            ? (typeof u != "string" && typeof u != "number") ||
              (o = o || []).push(s, "" + u)
            : s !== "suppressContentEditableWarning" &&
              s !== "suppressHydrationWarning" &&
              (Vr.hasOwnProperty(s)
                ? (u != null && s === "onScroll" && ne("scroll", e),
                  o || a === u || (o = []))
                : (o = o || []).push(s, u));
    }
    n && (o = o || []).push("style", n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
rd = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Sr(e, t) {
  if (!oe)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function lm(e, t, n) {
  var r = t.pendingProps;
  switch (($a(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Le(t), null;
    case 1:
      return $e(t.type) && ro(), Le(t), null;
    case 3:
      return (
        (r = t.stateNode),
        rr(),
        re(Be),
        re(je),
        Ja(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (Tl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), ct !== null && (fa(ct), (ct = null)))),
        ra(e, t),
        Le(t),
        null
      );
    case 5:
      Ga(t);
      var l = pn(el.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        nd(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Le(t), null;
        }
        if (((e = pn(wt.current)), Tl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[yt] = t), (r[qr] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ne("cancel", r), ne("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ne("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < jr.length; l++) ne(jr[l], r);
              break;
            case "source":
              ne("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ne("error", r), ne("load", r);
              break;
            case "details":
              ne("toggle", r);
              break;
            case "input":
              Iu(r, o), ne("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!o.multiple }),
                ne("invalid", r);
              break;
            case "textarea":
              Au(r, o), ne("invalid", r);
          }
          Ti(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ll(r.textContent, a, e),
                    (l = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (o.suppressHydrationWarning !== !0 &&
                      Ll(r.textContent, a, e),
                    (l = ["children", "" + a]))
                : Vr.hasOwnProperty(i) &&
                  a != null &&
                  i === "onScroll" &&
                  ne("scroll", r);
            }
          switch (n) {
            case "input":
              Sl(r), Uu(r, o, !0);
              break;
            case "textarea":
              Sl(r), Bu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = no);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Lc(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, { is: r.is }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[yt] = t),
            (e[qr] = r),
            td(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ji(n, r)), n)) {
              case "dialog":
                ne("cancel", e), ne("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ne("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < jr.length; l++) ne(jr[l], e);
                l = r;
                break;
              case "source":
                ne("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                ne("error", e), ne("load", e), (l = r);
                break;
              case "details":
                ne("toggle", e), (l = r);
                break;
              case "input":
                Iu(e, r), (l = Pi(e, r)), ne("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (l = ue({}, r, { value: void 0 })),
                  ne("invalid", e);
                break;
              case "textarea":
                Au(e, r), (l = Ni(e, r)), ne("invalid", e);
                break;
              default:
                l = r;
            }
            Ti(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === "style"
                  ? Dc(e, u)
                  : o === "dangerouslySetInnerHTML"
                  ? ((u = u ? u.__html : void 0), u != null && Tc(e, u))
                  : o === "children"
                  ? typeof u == "string"
                    ? (n !== "textarea" || u !== "") && Hr(e, u)
                    : typeof u == "number" && Hr(e, "" + u)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Vr.hasOwnProperty(o)
                      ? u != null && o === "onScroll" && ne("scroll", e)
                      : u != null && _a(e, o, u, i));
              }
            switch (n) {
              case "input":
                Sl(e), Uu(e, r, !1);
                break;
              case "textarea":
                Sl(e), Bu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + en(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Yn(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Yn(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = no);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Le(t), null;
    case 6:
      if (e && t.stateNode != null) rd(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(N(166));
        if (((n = pn(el.current)), pn(wt.current), Tl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[yt] = t),
            (o = r.nodeValue !== n) && ((e = Ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                Ll(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  Ll(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[yt] = t),
            (t.stateNode = r);
      }
      return Le(t), null;
    case 13:
      if (
        (re(ie),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (oe && Ke !== null && t.mode & 1 && !(t.flags & 128))
          xf(), tr(), (t.flags |= 98560), (o = !1);
        else if (((o = Tl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(N(317));
            o[yt] = t;
          } else
            tr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Le(t), (o = !1);
        } else ct !== null && (fa(ct), (ct = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ie.current & 1 ? ge === 0 && (ge = 3) : uu())),
          t.updateQueue !== null && (t.flags |= 4),
          Le(t),
          null);
    case 4:
      return (
        rr(), ra(e, t), e === null && Jr(t.stateNode.containerInfo), Le(t), null
      );
    case 10:
      return Qa(t.type._context), Le(t), null;
    case 17:
      return $e(t.type) && ro(), Le(t), null;
    case 19:
      if ((re(ie), (o = t.memoizedState), o === null)) return Le(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) Sr(o, !1);
        else {
          if (ge !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = co(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    Sr(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ee(ie, (ie.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            pe() > or &&
            ((t.flags |= 128), (r = !0), Sr(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = co(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Sr(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !oe)
            )
              return Le(t), null;
          } else
            2 * pe() - o.renderingStartTime > or &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Sr(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pe()),
          (t.sibling = null),
          (n = ie.current),
          ee(ie, r ? (n & 1) | 2 : n & 1),
          t)
        : (Le(t), null);
    case 22:
    case 23:
      return (
        au(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Qe & 1073741824 && (Le(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Le(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function om(e, t) {
  switch (($a(t), t.tag)) {
    case 1:
      return (
        $e(t.type) && ro(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rr(),
        re(Be),
        re(je),
        Ja(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ga(t), null;
    case 13:
      if (
        (re(ie), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(N(340));
        tr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return re(ie), null;
    case 4:
      return rr(), null;
    case 10:
      return Qa(t.type._context), null;
    case 22:
    case 23:
      return au(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var zl = !1,
  Te = !1,
  im = typeof WeakSet == "function" ? WeakSet : Set,
  z = null;
function Hn(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ce(e, t, r);
      }
    else n.current = null;
}
function la(e, t, n) {
  try {
    n();
  } catch (r) {
    ce(e, t, r);
  }
}
var Ls = !1;
function am(e, t) {
  if ((($i = bl), (e = af()), Aa(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            f = 0,
            p = e,
            m = null;
          t: for (;;) {
            for (
              var E;
              p !== n || (l !== 0 && p.nodeType !== 3) || (a = i + l),
                p !== o || (r !== 0 && p.nodeType !== 3) || (u = i + r),
                p.nodeType === 3 && (i += p.nodeValue.length),
                (E = p.firstChild) !== null;

            )
              (m = p), (p = E);
            for (;;) {
              if (p === e) break t;
              if (
                (m === n && ++s === l && (a = i),
                m === o && ++f === r && (u = i),
                (E = p.nextSibling) !== null)
              )
                break;
              (p = m), (m = p.parentNode);
            }
            p = E;
          }
          n = a === -1 || u === -1 ? null : { start: a, end: u };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Vi = { focusedElem: e, selectionRange: n }, bl = !1, z = t; z !== null; )
    if (((t = z), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (z = e);
    else
      for (; z !== null; ) {
        t = z;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    C = x.memoizedState,
                    d = t.stateNode,
                    c = d.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : at(t.type, w),
                      C
                    );
                  d.__reactInternalSnapshotBeforeUpdate = c;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          ce(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (z = e);
          break;
        }
        z = t.return;
      }
  return (x = Ls), (Ls = !1), x;
}
function Ur(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && la(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Lo(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function oa(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function ld(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), ld(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[yt], delete t[qr], delete t[Qi], delete t[Hh], delete t[Wh])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function od(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Ts(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || od(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ia(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = no));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ia(e, t, n), e = e.sibling; e !== null; ) ia(e, t, n), (e = e.sibling);
}
function aa(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (aa(e, t, n), e = e.sibling; e !== null; ) aa(e, t, n), (e = e.sibling);
}
var Pe = null,
  ut = !1;
function Ut(e, t, n) {
  for (n = n.child; n !== null; ) id(e, t, n), (n = n.sibling);
}
function id(e, t, n) {
  if (gt && typeof gt.onCommitFiberUnmount == "function")
    try {
      gt.onCommitFiberUnmount(So, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Te || Hn(n, t);
    case 6:
      var r = Pe,
        l = ut;
      (Pe = null),
        Ut(e, t, n),
        (Pe = r),
        (ut = l),
        Pe !== null &&
          (ut
            ? ((e = Pe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pe.removeChild(n.stateNode));
      break;
    case 18:
      Pe !== null &&
        (ut
          ? ((e = Pe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ii(e.parentNode, n)
              : e.nodeType === 1 && ii(e, n),
            Yr(e))
          : ii(Pe, n.stateNode));
      break;
    case 4:
      (r = Pe),
        (l = ut),
        (Pe = n.stateNode.containerInfo),
        (ut = !0),
        Ut(e, t, n),
        (Pe = r),
        (ut = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Te &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && la(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Ut(e, t, n);
      break;
    case 1:
      if (
        !Te &&
        (Hn(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ce(n, t, a);
        }
      Ut(e, t, n);
      break;
    case 21:
      Ut(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Te = (r = Te) || n.memoizedState !== null), Ut(e, t, n), (Te = r))
        : Ut(e, t, n);
      break;
    default:
      Ut(e, t, n);
  }
}
function js(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new im()),
      t.forEach(function (r) {
        var l = vm.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function it(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Pe = a.stateNode), (ut = !1);
              break e;
            case 3:
              (Pe = a.stateNode.containerInfo), (ut = !0);
              break e;
            case 4:
              (Pe = a.stateNode.containerInfo), (ut = !0);
              break e;
          }
          a = a.return;
        }
        if (Pe === null) throw Error(N(160));
        id(o, i, l), (Pe = null), (ut = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ce(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) ad(t, e), (t = t.sibling);
}
function ad(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((it(t, e), mt(e), r & 4)) {
        try {
          Ur(3, e, e.return), Lo(3, e);
        } catch (w) {
          ce(e, e.return, w);
        }
        try {
          Ur(5, e, e.return);
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 1:
      it(t, e), mt(e), r & 512 && n !== null && Hn(n, n.return);
      break;
    case 5:
      if (
        (it(t, e),
        mt(e),
        r & 512 && n !== null && Hn(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Hr(l, "");
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === "input" && o.type === "radio" && o.name != null && Rc(l, o),
              ji(a, i);
            var s = ji(a, o);
            for (i = 0; i < u.length; i += 2) {
              var f = u[i],
                p = u[i + 1];
              f === "style"
                ? Dc(l, p)
                : f === "dangerouslySetInnerHTML"
                ? Tc(l, p)
                : f === "children"
                ? Hr(l, p)
                : _a(l, f, p, s);
            }
            switch (a) {
              case "input":
                _i(l, o);
                break;
              case "textarea":
                Nc(l, o);
                break;
              case "select":
                var m = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var E = o.value;
                E != null
                  ? Yn(l, !!o.multiple, E, !1)
                  : m !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Yn(l, !!o.multiple, o.defaultValue, !0)
                      : Yn(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[qr] = o;
          } catch (w) {
            ce(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((it(t, e), mt(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (w) {
          ce(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (it(t, e), mt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          Yr(t.containerInfo);
        } catch (w) {
          ce(e, e.return, w);
        }
      break;
    case 4:
      it(t, e), mt(e);
      break;
    case 13:
      it(t, e),
        mt(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (ou = pe())),
        r & 4 && js(e);
      break;
    case 22:
      if (
        ((f = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Te = (s = Te) || f), it(t, e), (Te = s)) : it(t, e),
        mt(e),
        r & 8192)
      ) {
        if (
          ((s = e.memoizedState !== null),
          (e.stateNode.isHidden = s) && !f && e.mode & 1)
        )
          for (z = e, f = e.child; f !== null; ) {
            for (p = z = f; z !== null; ) {
              switch (((m = z), (E = m.child), m.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ur(4, m, m.return);
                  break;
                case 1:
                  Hn(m, m.return);
                  var x = m.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = m), (n = m.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      ce(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Hn(m, m.return);
                  break;
                case 22:
                  if (m.memoizedState !== null) {
                    zs(p);
                    continue;
                  }
              }
              E !== null ? ((E.return = m), (z = E)) : zs(p);
            }
            f = f.sibling;
          }
        e: for (f = null, p = e; ; ) {
          if (p.tag === 5) {
            if (f === null) {
              f = p;
              try {
                (l = p.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((a = p.stateNode),
                      (u = p.memoizedProps.style),
                      (i =
                        u != null && u.hasOwnProperty("display")
                          ? u.display
                          : null),
                      (a.style.display = jc("display", i)));
              } catch (w) {
                ce(e, e.return, w);
              }
            }
          } else if (p.tag === 6) {
            if (f === null)
              try {
                p.stateNode.nodeValue = s ? "" : p.memoizedProps;
              } catch (w) {
                ce(e, e.return, w);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            f === p && (f = null), (p = p.return);
          }
          f === p && (f = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      it(t, e), mt(e), r & 4 && js(e);
      break;
    case 21:
      break;
    default:
      it(t, e), mt(e);
  }
}
function mt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (od(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Hr(l, ""), (r.flags &= -33));
          var o = Ts(e);
          aa(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = Ts(e);
          ia(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ce(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function um(e, t, n) {
  (z = e), ud(e);
}
function ud(e, t, n) {
  for (var r = (e.mode & 1) !== 0; z !== null; ) {
    var l = z,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || zl;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || Te;
        a = zl;
        var s = Te;
        if (((zl = i), (Te = u) && !s))
          for (z = l; z !== null; )
            (i = z),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Ms(l)
                : u !== null
                ? ((u.return = i), (z = u))
                : Ms(l);
        for (; o !== null; ) (z = o), ud(o), (o = o.sibling);
        (z = l), (zl = a), (Te = s);
      }
      Ds(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (z = o)) : Ds(e);
  }
}
function Ds(e) {
  for (; z !== null; ) {
    var t = z;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Te || Lo(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !Te)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : at(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ms(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ms(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    u.autoFocus && n.focus();
                    break;
                  case "img":
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var f = s.memoizedState;
                  if (f !== null) {
                    var p = f.dehydrated;
                    p !== null && Yr(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        Te || (t.flags & 512 && oa(t));
      } catch (m) {
        ce(t, t.return, m);
      }
    }
    if (t === e) {
      z = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function zs(e) {
  for (; z !== null; ) {
    var t = z;
    if (t === e) {
      z = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (z = n);
      break;
    }
    z = t.return;
  }
}
function Ms(e) {
  for (; z !== null; ) {
    var t = z;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Lo(4, t);
          } catch (u) {
            ce(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ce(t, l, u);
            }
          }
          var o = t.return;
          try {
            oa(t);
          } catch (u) {
            ce(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            oa(t);
          } catch (u) {
            ce(t, i, u);
          }
      }
    } catch (u) {
      ce(t, t.return, u);
    }
    if (t === e) {
      z = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (z = a);
      break;
    }
    z = t.return;
  }
}
var sm = Math.ceil,
  ho = jt.ReactCurrentDispatcher,
  ru = jt.ReactCurrentOwner,
  nt = jt.ReactCurrentBatchConfig,
  X = 0,
  Ee = null,
  me = null,
  _e = 0,
  Qe = 0,
  Wn = rn(0),
  ge = 0,
  ll = null,
  Sn = 0,
  To = 0,
  lu = 0,
  Ar = null,
  Ue = null,
  ou = 0,
  or = 1 / 0,
  xt = null,
  mo = !1,
  ua = null,
  Zt = null,
  Ml = !1,
  Qt = null,
  vo = 0,
  Br = 0,
  sa = null,
  Ql = -1,
  Kl = 0;
function Me() {
  return X & 6 ? pe() : Ql !== -1 ? Ql : (Ql = pe());
}
function qt(e) {
  return e.mode & 1
    ? X & 2 && _e !== 0
      ? _e & -_e
      : Kh.transition !== null
      ? (Kl === 0 && (Kl = Wc()), Kl)
      : ((e = Z),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Zc(e.type))),
        e)
    : 1;
}
function dt(e, t, n, r) {
  if (50 < Br) throw ((Br = 0), (sa = null), Error(N(185)));
  ul(e, n, r),
    (!(X & 2) || e !== Ee) &&
      (e === Ee && (!(X & 2) && (To |= n), ge === 4 && Ht(e, _e)),
      Ve(e, r),
      n === 1 && X === 0 && !(t.mode & 1) && ((or = pe() + 500), _o && ln()));
}
function Ve(e, t) {
  var n = e.callbackNode;
  Kp(e, t);
  var r = ql(e, e === Ee ? _e : 0);
  if (r === 0)
    n !== null && Hu(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Hu(n), t === 1))
      e.tag === 0 ? Qh(Os.bind(null, e)) : yf(Os.bind(null, e)),
        $h(function () {
          !(X & 6) && ln();
        }),
        (n = null);
    else {
      switch (Qc(r)) {
        case 1:
          n = ja;
          break;
        case 4:
          n = Vc;
          break;
        case 16:
          n = Zl;
          break;
        case 536870912:
          n = Hc;
          break;
        default:
          n = Zl;
      }
      n = vd(n, sd.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function sd(e, t) {
  if (((Ql = -1), (Kl = 0), X & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (qn() && e.callbackNode !== n) return null;
  var r = ql(e, e === Ee ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yo(e, r);
  else {
    t = r;
    var l = X;
    X |= 2;
    var o = fd();
    (Ee !== e || _e !== t) && ((xt = null), (or = pe() + 500), vn(e, t));
    do
      try {
        dm();
        break;
      } catch (a) {
        cd(e, a);
      }
    while (!0);
    Wa(),
      (ho.current = o),
      (X = l),
      me !== null ? (t = 0) : ((Ee = null), (_e = 0), (t = ge));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Fi(e)), l !== 0 && ((r = l), (t = ca(e, l)))), t === 1)
    )
      throw ((n = ll), vn(e, 0), Ht(e, r), Ve(e, pe()), n);
    if (t === 6) Ht(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !cm(l) &&
          ((t = yo(e, r)),
          t === 2 && ((o = Fi(e)), o !== 0 && ((r = o), (t = ca(e, o)))),
          t === 1))
      )
        throw ((n = ll), vn(e, 0), Ht(e, r), Ve(e, pe()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          cn(e, Ue, xt);
          break;
        case 3:
          if (
            (Ht(e, r), (r & 130023424) === r && ((t = ou + 500 - pe()), 10 < t))
          ) {
            if (ql(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Me(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Wi(cn.bind(null, e, Ue, xt), t);
            break;
          }
          cn(e, Ue, xt);
          break;
        case 4:
          if ((Ht(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - ft(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = pe() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * sm(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Wi(cn.bind(null, e, Ue, xt), r);
            break;
          }
          cn(e, Ue, xt);
          break;
        case 5:
          cn(e, Ue, xt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Ve(e, pe()), e.callbackNode === n ? sd.bind(null, e) : null;
}
function ca(e, t) {
  var n = Ar;
  return (
    e.current.memoizedState.isDehydrated && (vn(e, t).flags |= 256),
    (e = yo(e, t)),
    e !== 2 && ((t = Ue), (Ue = n), t !== null && fa(t)),
    e
  );
}
function fa(e) {
  Ue === null ? (Ue = e) : Ue.push.apply(Ue, e);
}
function cm(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!pt(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Ht(e, t) {
  for (
    t &= ~lu,
      t &= ~To,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - ft(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Os(e) {
  if (X & 6) throw Error(N(327));
  qn();
  var t = ql(e, 0);
  if (!(t & 1)) return Ve(e, pe()), null;
  var n = yo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Fi(e);
    r !== 0 && ((t = r), (n = ca(e, r)));
  }
  if (n === 1) throw ((n = ll), vn(e, 0), Ht(e, t), Ve(e, pe()), n);
  if (n === 6) throw Error(N(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    cn(e, Ue, xt),
    Ve(e, pe()),
    null
  );
}
function iu(e, t) {
  var n = X;
  X |= 1;
  try {
    return e(t);
  } finally {
    (X = n), X === 0 && ((or = pe() + 500), _o && ln());
  }
}
function En(e) {
  Qt !== null && Qt.tag === 0 && !(X & 6) && qn();
  var t = X;
  X |= 1;
  var n = nt.transition,
    r = Z;
  try {
    if (((nt.transition = null), (Z = 1), e)) return e();
  } finally {
    (Z = r), (nt.transition = n), (X = t), !(X & 6) && ln();
  }
}
function au() {
  (Qe = Wn.current), re(Wn);
}
function vn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Bh(n)), me !== null))
    for (n = me.return; n !== null; ) {
      var r = n;
      switch (($a(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && ro();
          break;
        case 3:
          rr(), re(Be), re(je), Ja();
          break;
        case 5:
          Ga(r);
          break;
        case 4:
          rr();
          break;
        case 13:
          re(ie);
          break;
        case 19:
          re(ie);
          break;
        case 10:
          Qa(r.type._context);
          break;
        case 22:
        case 23:
          au();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (me = e = bt(e.current, null)),
    (_e = Qe = t),
    (ge = 0),
    (ll = null),
    (lu = To = Sn = 0),
    (Ue = Ar = null),
    dn !== null)
  ) {
    for (t = 0; t < dn.length; t++)
      if (((n = dn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    dn = null;
  }
  return e;
}
function cd(e, t) {
  do {
    var n = me;
    try {
      if ((Wa(), (Vl.current = po), fo)) {
        for (var r = ae.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        fo = !1;
      }
      if (
        ((xn = 0),
        (Se = ye = ae = null),
        (Ir = !1),
        (tl = 0),
        (ru.current = null),
        n === null || n.return === null)
      ) {
        (ge = 1), (ll = t), (me = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (
          ((t = _e),
          (a.flags |= 32768),
          u !== null && typeof u == "object" && typeof u.then == "function")
        ) {
          var s = u,
            f = a,
            p = f.tag;
          if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var m = f.alternate;
            m
              ? ((f.updateQueue = m.updateQueue),
                (f.memoizedState = m.memoizedState),
                (f.lanes = m.lanes))
              : ((f.updateQueue = null), (f.memoizedState = null));
          }
          var E = Es(i);
          if (E !== null) {
            (E.flags &= -257),
              ks(E, i, a, o, t),
              E.mode & 1 && Ss(o, s, t),
              (t = E),
              (u = s);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(u), (t.updateQueue = w);
            } else x.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Ss(o, s, t), uu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (oe && a.mode & 1) {
          var C = Es(i);
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              ks(C, i, a, o, t),
              Va(lr(u, a));
            break e;
          }
        }
        (o = u = lr(u, a)),
          ge !== 4 && (ge = 2),
          Ar === null ? (Ar = [o]) : Ar.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var d = Yf(o, u, t);
              hs(o, d);
              break e;
            case 1:
              a = u;
              var c = o.type,
                h = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof c.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (Zt === null || !Zt.has(h))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = Xf(o, a, t);
                hs(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      pd(n);
    } catch (L) {
      (t = L), me === n && n !== null && (me = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function fd() {
  var e = ho.current;
  return (ho.current = po), e === null ? po : e;
}
function uu() {
  (ge === 0 || ge === 3 || ge === 2) && (ge = 4),
    Ee === null || (!(Sn & 268435455) && !(To & 268435455)) || Ht(Ee, _e);
}
function yo(e, t) {
  var n = X;
  X |= 2;
  var r = fd();
  (Ee !== e || _e !== t) && ((xt = null), vn(e, t));
  do
    try {
      fm();
      break;
    } catch (l) {
      cd(e, l);
    }
  while (!0);
  if ((Wa(), (X = n), (ho.current = r), me !== null)) throw Error(N(261));
  return (Ee = null), (_e = 0), ge;
}
function fm() {
  for (; me !== null; ) dd(me);
}
function dm() {
  for (; me !== null && !Ip(); ) dd(me);
}
function dd(e) {
  var t = md(e.alternate, e, Qe);
  (e.memoizedProps = e.pendingProps),
    t === null ? pd(e) : (me = t),
    (ru.current = null);
}
function pd(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = om(n, t)), n !== null)) {
        (n.flags &= 32767), (me = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (ge = 6), (me = null);
        return;
      }
    } else if (((n = lm(n, t, Qe)), n !== null)) {
      me = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      me = t;
      return;
    }
    me = t = e;
  } while (t !== null);
  ge === 0 && (ge = 5);
}
function cn(e, t, n) {
  var r = Z,
    l = nt.transition;
  try {
    (nt.transition = null), (Z = 1), pm(e, t, n, r);
  } finally {
    (nt.transition = l), (Z = r);
  }
  return null;
}
function pm(e, t, n, r) {
  do qn();
  while (Qt !== null);
  if (X & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Yp(e, o),
    e === Ee && ((me = Ee = null), (_e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      Ml ||
      ((Ml = !0),
      vd(Zl, function () {
        return qn(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = nt.transition), (nt.transition = null);
    var i = Z;
    Z = 1;
    var a = X;
    (X |= 4),
      (ru.current = null),
      am(e, n),
      ad(n, e),
      zh(Vi),
      (bl = !!$i),
      (Vi = $i = null),
      (e.current = n),
      um(n),
      Up(),
      (X = a),
      (Z = i),
      (nt.transition = o);
  } else e.current = n;
  if (
    (Ml && ((Ml = !1), (Qt = e), (vo = l)),
    (o = e.pendingLanes),
    o === 0 && (Zt = null),
    $p(n.stateNode),
    Ve(e, pe()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), r(l.value, { componentStack: l.stack, digest: l.digest });
  if (mo) throw ((mo = !1), (e = ua), (ua = null), e);
  return (
    vo & 1 && e.tag !== 0 && qn(),
    (o = e.pendingLanes),
    o & 1 ? (e === sa ? Br++ : ((Br = 0), (sa = e))) : (Br = 0),
    ln(),
    null
  );
}
function qn() {
  if (Qt !== null) {
    var e = Qc(vo),
      t = nt.transition,
      n = Z;
    try {
      if (((nt.transition = null), (Z = 16 > e ? 16 : e), Qt === null))
        var r = !1;
      else {
        if (((e = Qt), (Qt = null), (vo = 0), X & 6)) throw Error(N(331));
        var l = X;
        for (X |= 4, z = e.current; z !== null; ) {
          var o = z,
            i = o.child;
          if (z.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (z = s; z !== null; ) {
                  var f = z;
                  switch (f.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ur(8, f, o);
                  }
                  var p = f.child;
                  if (p !== null) (p.return = f), (z = p);
                  else
                    for (; z !== null; ) {
                      f = z;
                      var m = f.sibling,
                        E = f.return;
                      if ((ld(f), f === s)) {
                        z = null;
                        break;
                      }
                      if (m !== null) {
                        (m.return = E), (z = m);
                        break;
                      }
                      z = E;
                    }
                }
              }
              var x = o.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var C = w.sibling;
                    (w.sibling = null), (w = C);
                  } while (w !== null);
                }
              }
              z = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (z = i);
          else
            e: for (; z !== null; ) {
              if (((o = z), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ur(9, o, o.return);
                }
              var d = o.sibling;
              if (d !== null) {
                (d.return = o.return), (z = d);
                break e;
              }
              z = o.return;
            }
        }
        var c = e.current;
        for (z = c; z !== null; ) {
          i = z;
          var h = i.child;
          if (i.subtreeFlags & 2064 && h !== null) (h.return = i), (z = h);
          else
            e: for (i = c; z !== null; ) {
              if (((a = z), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Lo(9, a);
                  }
                } catch (L) {
                  ce(a, a.return, L);
                }
              if (a === i) {
                z = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (z = S);
                break e;
              }
              z = a.return;
            }
        }
        if (
          ((X = l), ln(), gt && typeof gt.onPostCommitFiberRoot == "function")
        )
          try {
            gt.onPostCommitFiberRoot(So, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (Z = n), (nt.transition = t);
    }
  }
  return !1;
}
function Fs(e, t, n) {
  (t = lr(n, t)),
    (t = Yf(e, t, 1)),
    (e = Jt(e, t, 1)),
    (t = Me()),
    e !== null && (ul(e, 1, t), Ve(e, t));
}
function ce(e, t, n) {
  if (e.tag === 3) Fs(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Fs(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (Zt === null || !Zt.has(r)))
        ) {
          (e = lr(n, e)),
            (e = Xf(t, e, 1)),
            (t = Jt(t, e, 1)),
            (e = Me()),
            t !== null && (ul(t, 1, e), Ve(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function hm(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Me()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      (_e & n) === n &&
      (ge === 4 || (ge === 3 && (_e & 130023424) === _e && 500 > pe() - ou)
        ? vn(e, 0)
        : (lu |= n)),
    Ve(e, t);
}
function hd(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Cl), (Cl <<= 1), !(Cl & 130023424) && (Cl = 4194304))
      : (t = 1));
  var n = Me();
  (e = Nt(e, t)), e !== null && (ul(e, t, n), Ve(e, n));
}
function mm(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), hd(e, n);
}
function vm(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), hd(e, n);
}
var md;
md = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) Ae = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ae = !1), rm(e, t, n);
      Ae = !!(e.flags & 131072);
    }
  else (Ae = !1), oe && t.flags & 1048576 && gf(t, io, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Wl(e, t), (e = t.pendingProps);
      var l = er(t, je.current);
      Zn(t, n), (l = qa(null, t, r, e, l, n));
      var o = ba();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            $e(r) ? ((o = !0), lo(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Ya(t),
            (l.updater = Ro),
            (t.stateNode = l),
            (l._reactInternals = t),
            Zi(t, r, e, n),
            (t = ea(null, t, r, !0, o, n)))
          : ((t.tag = 0), oe && o && Ba(t), ze(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Wl(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = gm(r)),
          (e = at(r, e)),
          l)
        ) {
          case 0:
            t = bi(null, t, r, e, n);
            break e;
          case 1:
            t = _s(null, t, r, e, n);
            break e;
          case 11:
            t = Cs(null, t, r, e, n);
            break e;
          case 14:
            t = Ps(null, t, r, at(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        bi(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        _s(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((qf(t), e === null)) throw Error(N(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          Ef(e, t),
          so(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = lr(Error(N(423)), t)), (t = Rs(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = lr(Error(N(424)), t)), (t = Rs(e, t, r, n, l));
            break e;
          } else
            for (
              Ke = Gt(t.stateNode.containerInfo.firstChild),
                Ye = t,
                oe = !0,
                ct = null,
                n = _f(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((tr(), r === l)) {
            t = Lt(e, t, n);
            break e;
          }
          ze(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rf(t),
        e === null && Xi(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Hi(r, l) ? (i = null) : o !== null && Hi(r, o) && (t.flags |= 32),
        Zf(e, t),
        ze(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Xi(t), null;
    case 13:
      return bf(e, t, n);
    case 4:
      return (
        Xa(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = nr(t, null, r, n)) : ze(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Cs(e, t, r, l, n)
      );
    case 7:
      return ze(e, t, t.pendingProps, n), t.child;
    case 8:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ze(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          ee(ao, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (pt(o.value, i)) {
            if (o.children === l.children && !Be.current) {
              t = Lt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Ct(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var f = s.pending;
                        f === null
                          ? (u.next = u)
                          : ((u.next = f.next), (f.next = u)),
                          (s.pending = u);
                      }
                    }
                    (o.lanes |= n),
                      (u = o.alternate),
                      u !== null && (u.lanes |= n),
                      Gi(o.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n),
                  (a = i.alternate),
                  a !== null && (a.lanes |= n),
                  Gi(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ze(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Zn(t, n),
        (l = rt(l)),
        (r = r(l)),
        (t.flags |= 1),
        ze(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = at(r, t.pendingProps)),
        (l = at(r.type, l)),
        Ps(e, t, r, l, n)
      );
    case 15:
      return Gf(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : at(r, l)),
        Wl(e, t),
        (t.tag = 1),
        $e(r) ? ((e = !0), lo(t)) : (e = !1),
        Zn(t, n),
        Cf(t, r, l),
        Zi(t, r, l, n),
        ea(null, t, r, !0, e, n)
      );
    case 19:
      return ed(e, t, n);
    case 22:
      return Jf(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function vd(e, t) {
  return $c(e, t);
}
function ym(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function tt(e, t, n, r) {
  return new ym(e, t, n, r);
}
function su(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function gm(e) {
  if (typeof e == "function") return su(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Na)) return 11;
    if (e === La) return 14;
  }
  return 2;
}
function bt(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = tt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Yl(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) su(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Mn:
        return yn(n.children, l, o, t);
      case Ra:
        (i = 8), (l |= 8);
        break;
      case Si:
        return (
          (e = tt(12, n, t, l | 2)), (e.elementType = Si), (e.lanes = o), e
        );
      case Ei:
        return (e = tt(13, n, t, l)), (e.elementType = Ei), (e.lanes = o), e;
      case ki:
        return (e = tt(19, n, t, l)), (e.elementType = ki), (e.lanes = o), e;
      case Cc:
        return jo(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ec:
              i = 10;
              break e;
            case kc:
              i = 9;
              break e;
            case Na:
              i = 11;
              break e;
            case La:
              i = 14;
              break e;
            case Bt:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = tt(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function yn(e, t, n, r) {
  return (e = tt(7, e, r, t)), (e.lanes = n), e;
}
function jo(e, t, n, r) {
  return (
    (e = tt(22, e, r, t)),
    (e.elementType = Cc),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function hi(e, t, n) {
  return (e = tt(6, e, null, t)), (e.lanes = n), e;
}
function mi(e, t, n) {
  return (
    (t = tt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function wm(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Go(0)),
    (this.expirationTimes = Go(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Go(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function cu(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new wm(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = tt(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Ya(o),
    e
  );
}
function xm(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: zn,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function yd(e) {
  if (!e) return tn;
  e = e._reactInternals;
  e: {
    if (Pn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if ($e(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if ($e(n)) return vf(e, n, t);
  }
  return t;
}
function gd(e, t, n, r, l, o, i, a, u) {
  return (
    (e = cu(n, r, !0, e, l, o, i, a, u)),
    (e.context = yd(null)),
    (n = e.current),
    (r = Me()),
    (l = qt(n)),
    (o = Ct(r, l)),
    (o.callback = t ?? null),
    Jt(n, o, l),
    (e.current.lanes = l),
    ul(e, l, r),
    Ve(e, r),
    e
  );
}
function Do(e, t, n, r) {
  var l = t.current,
    o = Me(),
    i = qt(l);
  return (
    (n = yd(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ct(o, i)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Jt(l, t, i)),
    e !== null && (dt(e, l, i, o), $l(e, l, i)),
    i
  );
}
function go(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Is(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function fu(e, t) {
  Is(e, t), (e = e.alternate) && Is(e, t);
}
function Sm() {
  return null;
}
var wd =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function du(e) {
  this._internalRoot = e;
}
zo.prototype.render = du.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  Do(e, t, null, null);
};
zo.prototype.unmount = du.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    En(function () {
      Do(null, e, null, null);
    }),
      (t[Rt] = null);
  }
};
function zo(e) {
  this._internalRoot = e;
}
zo.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Xc();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Vt.length && t !== 0 && t < Vt[n].priority; n++);
    Vt.splice(n, 0, e), n === 0 && Jc(e);
  }
};
function pu(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Mo(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Us() {}
function Em(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var s = go(i);
        o.call(s);
      };
    }
    var i = gd(t, r, e, 0, null, !1, !1, "", Us);
    return (
      (e._reactRootContainer = i),
      (e[Rt] = i.current),
      Jr(e.nodeType === 8 ? e.parentNode : e),
      En(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var s = go(u);
      a.call(s);
    };
  }
  var u = cu(e, 0, !1, null, null, !1, !1, "", Us);
  return (
    (e._reactRootContainer = u),
    (e[Rt] = u.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    En(function () {
      Do(t, u, n, r);
    }),
    u
  );
}
function Oo(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var a = l;
      l = function () {
        var u = go(i);
        a.call(u);
      };
    }
    Do(t, i, e, l);
  } else i = Em(n, t, e, l, r);
  return go(i);
}
Kc = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Tr(t.pendingLanes);
        n !== 0 &&
          (Da(t, n | 1), Ve(t, pe()), !(X & 6) && ((or = pe() + 500), ln()));
      }
      break;
    case 13:
      En(function () {
        var r = Nt(e, 1);
        if (r !== null) {
          var l = Me();
          dt(r, e, 1, l);
        }
      }),
        fu(e, 1);
  }
};
za = function (e) {
  if (e.tag === 13) {
    var t = Nt(e, 134217728);
    if (t !== null) {
      var n = Me();
      dt(t, e, 134217728, n);
    }
    fu(e, 134217728);
  }
};
Yc = function (e) {
  if (e.tag === 13) {
    var t = qt(e),
      n = Nt(e, t);
    if (n !== null) {
      var r = Me();
      dt(n, e, t, r);
    }
    fu(e, t);
  }
};
Xc = function () {
  return Z;
};
Gc = function (e, t) {
  var n = Z;
  try {
    return (Z = e), t();
  } finally {
    Z = n;
  }
};
zi = function (e, t, n) {
  switch (t) {
    case "input":
      if ((_i(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Po(r);
            if (!l) throw Error(N(90));
            _c(r), _i(r, l);
          }
        }
      }
      break;
    case "textarea":
      Nc(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yn(e, !!n.multiple, t, !1);
  }
};
Oc = iu;
Fc = En;
var km = { usingClientEntryPoint: !1, Events: [cl, Un, Po, zc, Mc, iu] },
  Er = {
    findFiberByHostInstance: fn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  Cm = {
    bundleType: Er.bundleType,
    version: Er.version,
    rendererPackageName: Er.rendererPackageName,
    rendererConfig: Er.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ac(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Er.findFiberByHostInstance || Sm,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ol = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ol.isDisabled && Ol.supportsFiber)
    try {
      (So = Ol.inject(Cm)), (gt = Ol);
    } catch {}
}
Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = km;
Ge.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!pu(t)) throw Error(N(200));
  return xm(e, t, null, n);
};
Ge.createRoot = function (e, t) {
  if (!pu(e)) throw Error(N(299));
  var n = !1,
    r = "",
    l = wd;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = cu(e, 1, !1, null, null, n, !1, r, l)),
    (e[Rt] = t.current),
    Jr(e.nodeType === 8 ? e.parentNode : e),
    new du(t)
  );
};
Ge.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(N(188))
      : ((e = Object.keys(e).join(",")), Error(N(268, e)));
  return (e = Ac(t)), (e = e === null ? null : e.stateNode), e;
};
Ge.flushSync = function (e) {
  return En(e);
};
Ge.hydrate = function (e, t, n) {
  if (!Mo(t)) throw Error(N(200));
  return Oo(null, e, t, !0, n);
};
Ge.hydrateRoot = function (e, t, n) {
  if (!pu(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = wd;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = gd(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Rt] = t.current),
    Jr(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new zo(t);
};
Ge.render = function (e, t, n) {
  if (!Mo(t)) throw Error(N(200));
  return Oo(null, e, t, !1, n);
};
Ge.unmountComponentAtNode = function (e) {
  if (!Mo(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (En(function () {
        Oo(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Rt] = null);
        });
      }),
      !0)
    : !1;
};
Ge.unstable_batchedUpdates = iu;
Ge.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Mo(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return Oo(e, t, n, !1, r);
};
Ge.version = "18.2.0-next-9e3b772b8-20220608";
function xd() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xd);
    } catch (e) {
      console.error(e);
    }
}
xd(), (yc.exports = Ge);
var hu = yc.exports;
const Pm = oc(hu),
  _m = lc({ __proto__: null, default: Pm }, [hu]);
var As = hu;
(wi.createRoot = As.createRoot), (wi.hydrateRoot = As.hydrateRoot);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Rm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Nm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Fo = (e, t) => {
  const n = P.forwardRef(
    (
      {
        color: r = "currentColor",
        size: l = 24,
        strokeWidth: o = 2,
        absoluteStrokeWidth: i,
        className: a = "",
        children: u,
        ...s
      },
      f
    ) =>
      P.createElement(
        "svg",
        {
          ref: f,
          ...Rm,
          width: l,
          height: l,
          stroke: r,
          strokeWidth: i ? (Number(o) * 24) / Number(l) : o,
          className: ["lucide", `lucide-${Nm(e)}`, a].join(" "),
          ...s,
        },
        [
          ...t.map(([p, m]) => P.createElement(p, m)),
          ...(Array.isArray(u) ? u : [u]),
        ]
      )
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sd = Fo("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Lm = Fo("Import", [
  ["path", { d: "M12 3v12", key: "1x0j5s" }],
  ["path", { d: "m8 11 4 4 4-4", key: "1dohi6" }],
  [
    "path",
    {
      d: "M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",
      key: "1ywtjm",
    },
  ],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Tm = Fo("LogIn", [
  ["path", { d: "M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4", key: "u53s6r" }],
  ["polyline", { points: "10 17 15 12 10 7", key: "1ail0h" }],
  ["line", { x1: "15", x2: "3", y1: "12", y2: "12", key: "v6grx8" }],
]);
/**
 * @license lucide-react v0.368.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jm = Fo("LogOut", [
    ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
    ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
    ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
  ]),
  Ed = P.createContext({
    users: [
      { name: "Nullvoid", email: "nullvoid76@gmail.com", password: "12345" },
    ],
    LogIn: (e, t) => {},
    Logout: () => {},
    signUp: ({ name: e, email: t, password: n }) => {},
  }),
  mu = () => P.useContext(Ed),
  Dm = Ed.Provider;
/**
 * @remix-run/router v1.15.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fe() {
  return (
    (fe = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    fe.apply(this, arguments)
  );
}
var de;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(de || (de = {}));
const Bs = "popstate";
function zm(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return ol(
      "",
      { pathname: o, search: i, hash: a },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || "default"
    );
  }
  function n(r, l) {
    return typeof l == "string" ? l : kn(l);
  }
  return Om(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function ir(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Mm() {
  return Math.random().toString(36).substr(2, 8);
}
function $s(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ol(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    fe(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Dt(t) : t,
      { state: n, key: (t && t.key) || r || Mm() }
    )
  );
}
function kn(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Dt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Om(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = de.Pop,
    u = null,
    s = f();
  s == null && ((s = 0), i.replaceState(fe({}, i.state, { idx: s }), ""));
  function f() {
    return (i.state || { idx: null }).idx;
  }
  function p() {
    a = de.Pop;
    let C = f(),
      d = C == null ? null : C - s;
    (s = C), u && u({ action: a, location: w.location, delta: d });
  }
  function m(C, d) {
    a = de.Push;
    let c = ol(w.location, C, d);
    n && n(c, C), (s = f() + 1);
    let h = $s(c, s),
      S = w.createHref(c);
    try {
      i.pushState(h, "", S);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      l.location.assign(S);
    }
    o && u && u({ action: a, location: w.location, delta: 1 });
  }
  function E(C, d) {
    a = de.Replace;
    let c = ol(w.location, C, d);
    n && n(c, C), (s = f());
    let h = $s(c, s),
      S = w.createHref(c);
    i.replaceState(h, "", S),
      o && u && u({ action: a, location: w.location, delta: 0 });
  }
  function x(C) {
    let d = l.location.origin !== "null" ? l.location.origin : l.location.href,
      c = typeof C == "string" ? C : kn(C);
    return (
      (c = c.replace(/ $/, "%20")),
      V(
        d,
        "No window.location.(origin|href) available to create URL for href: " +
          c
      ),
      new URL(c, d)
    );
  }
  let w = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(C) {
      if (u) throw new Error("A history only accepts one active listener");
      return (
        l.addEventListener(Bs, p),
        (u = C),
        () => {
          l.removeEventListener(Bs, p), (u = null);
        }
      );
    },
    createHref(C) {
      return t(l, C);
    },
    createURL: x,
    encodeLocation(C) {
      let d = x(C);
      return { pathname: d.pathname, search: d.search, hash: d.hash };
    },
    push: m,
    replace: E,
    go(C) {
      return i.go(C);
    },
  };
  return w;
}
var se;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(se || (se = {}));
const Fm = new Set([
  "lazy",
  "caseSensitive",
  "path",
  "id",
  "index",
  "children",
]);
function Im(e) {
  return e.index === !0;
}
function da(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, o],
        a = typeof l.id == "string" ? l.id : i.join("-");
      if (
        (V(
          l.index !== !0 || !l.children,
          "Cannot specify children on an index route"
        ),
        V(
          !r[a],
          'Found a route id collision on id "' +
            a +
            `".  Route id's must be globally unique within Data Router usages`
        ),
        Im(l))
      ) {
        let u = fe({}, l, t(l), { id: a });
        return (r[a] = u), u;
      } else {
        let u = fe({}, l, t(l), { id: a, children: void 0 });
        return (
          (r[a] = u), l.children && (u.children = da(l.children, t, i, r)), u
        );
      }
    })
  );
}
function Qn(e, t, n) {
  n === void 0 && (n = "/");
  let r = typeof t == "string" ? Dt(t) : t,
    l = Tt(r.pathname || "/", n);
  if (l == null) return null;
  let o = kd(e);
  Am(o);
  let i = null;
  for (let a = 0; i == null && a < o.length; ++a) {
    let u = Jm(l);
    i = Xm(o[a], u);
  }
  return i;
}
function Um(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return { id: n.id, pathname: r, params: l, data: t[n.id], handle: n.handle };
}
function kd(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || "" : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith("/") &&
      (V(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Pt([r, u.relativePath]),
      f = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (V(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + s + '".')
      ),
      kd(o.children, t, f, s)),
      !(o.path == null && !o.index) &&
        t.push({ path: s, score: Km(s, o.index), routesMeta: f });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === "" || !((a = o.path) != null && a.includes("?"))) l(o, i);
      else for (let u of Cd(o.path)) l(o, i, u);
    }),
    t
  );
}
function Cd(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith("?"),
    o = n.replace(/\?$/, "");
  if (r.length === 0) return l ? [o, ""] : [o];
  let i = Cd(r.join("/")),
    a = [];
  return (
    a.push(...i.map((u) => (u === "" ? o : [o, u].join("/")))),
    l && a.push(...i),
    a.map((u) => (e.startsWith("/") && u === "" ? "/" : u))
  );
}
function Am(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Ym(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Bm = /^:[\w-]+$/,
  $m = 3,
  Vm = 2,
  Hm = 1,
  Wm = 10,
  Qm = -2,
  Vs = (e) => e === "*";
function Km(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(Vs) && (r += Qm),
    t && (r += Vm),
    n
      .filter((l) => !Vs(l))
      .reduce((l, o) => l + (Bm.test(o) ? $m : o === "" ? Hm : Wm), r)
  );
}
function Ym(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function Xm(e, t) {
  let { routesMeta: n } = e,
    r = {},
    l = "/",
    o = [];
  for (let i = 0; i < n.length; ++i) {
    let a = n[i],
      u = i === n.length - 1,
      s = l === "/" ? t : t.slice(l.length) || "/",
      f = pa(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        s
      );
    if (!f) return null;
    Object.assign(r, f.params);
    let p = a.route;
    o.push({
      params: r,
      pathname: Pt([l, f.pathname]),
      pathnameBase: bm(Pt([l, f.pathnameBase])),
      route: p,
    }),
      f.pathnameBase !== "/" && (l = Pt([l, f.pathnameBase]));
  }
  return o;
}
function pa(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Gm(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, "$1"),
    a = l.slice(1);
  return {
    params: r.reduce((s, f, p) => {
      let { paramName: m, isOptional: E } = f;
      if (m === "*") {
        let w = a[p] || "";
        i = o.slice(0, o.length - w.length).replace(/(.)\/+$/, "$1");
      }
      const x = a[p];
      return (
        E && !x ? (s[m] = void 0) : (s[m] = (x || "").replace(/%2F/g, "/")), s
      );
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function Gm(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    ir(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    l =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({ paramName: a, isOptional: u != null }),
            u ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (l += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (l += "\\/*$")
      : e !== "" && e !== "/" && (l += "(?:(?=\\/|$))"),
    [new RegExp(l, t ? void 0 : "i"), r]
  );
}
function Jm(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      ir(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function Tt(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Zm(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: l = "",
  } = typeof e == "string" ? Dt(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : qm(n, t)) : t,
    search: ev(r),
    hash: tv(l),
  };
}
function qm(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((l) => {
      l === ".." ? n.length > 1 && n.pop() : l !== "." && n.push(l);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function vi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Pd(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function vu(e, t) {
  let n = Pd(e);
  return t
    ? n.map((r, l) => (l === e.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function yu(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == "string"
    ? (l = Dt(e))
    : ((l = fe({}, e)),
      V(
        !l.pathname || !l.pathname.includes("?"),
        vi("?", "pathname", "search", l)
      ),
      V(
        !l.pathname || !l.pathname.includes("#"),
        vi("#", "pathname", "hash", l)
      ),
      V(!l.search || !l.search.includes("#"), vi("#", "search", "hash", l)));
  let o = e === "" || l.pathname === "",
    i = o ? "/" : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let p = t.length - 1;
    if (!r && i.startsWith("..")) {
      let m = i.split("/");
      for (; m[0] === ".."; ) m.shift(), (p -= 1);
      l.pathname = m.join("/");
    }
    a = p >= 0 ? t[p] : "/";
  }
  let u = Zm(l, a),
    s = i && i !== "/" && i.endsWith("/"),
    f = (o || i === ".") && n.endsWith("/");
  return !u.pathname.endsWith("/") && (s || f) && (u.pathname += "/"), u;
}
const Pt = (e) => e.join("/").replace(/\/\/+/g, "/"),
  bm = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  ev = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  tv = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
class gu {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ""),
      (this.internal = l),
      r instanceof Error
        ? ((this.data = r.toString()), (this.error = r))
        : (this.data = r);
  }
}
function _d(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Rd = ["post", "put", "patch", "delete"],
  nv = new Set(Rd),
  rv = ["get", ...Rd],
  lv = new Set(rv),
  ov = new Set([301, 302, 303, 307, 308]),
  iv = new Set([307, 308]),
  yi = {
    state: "idle",
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  av = {
    state: "idle",
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  kr = { state: "unblocked", proceed: void 0, reset: void 0, location: void 0 },
  Nd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  uv = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Ld = "remix-router-transitions";
function sv(e) {
  const t = e.window ? e.window : typeof window < "u" ? window : void 0,
    n =
      typeof t < "u" &&
      typeof t.document < "u" &&
      typeof t.document.createElement < "u",
    r = !n;
  V(
    e.routes.length > 0,
    "You must provide a non-empty routes array to createRouter"
  );
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let y = e.detectErrorBoundary;
    l = (g) => ({ hasErrorBoundary: y(g) });
  } else l = uv;
  let o = {},
    i = da(e.routes, l, void 0, o),
    a,
    u = e.basename || "/",
    s = fe(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
      },
      e.future
    ),
    f = null,
    p = new Set(),
    m = null,
    E = null,
    x = null,
    w = e.hydrationData != null,
    C = Qn(i, e.history.location, u),
    d = null;
  if (C == null) {
    let y = qe(404, { pathname: e.history.location.pathname }),
      { matches: g, route: k } = Js(i);
    (C = g), (d = { [k.id]: y });
  }
  let c,
    h = C.some((y) => y.route.lazy),
    S = C.some((y) => y.route.loader);
  if (h) c = !1;
  else if (!S) c = !0;
  else if (s.v7_partialHydration) {
    let y = e.hydrationData ? e.hydrationData.loaderData : null,
      g = e.hydrationData ? e.hydrationData.errors : null,
      k = (j) =>
        j.route.loader
          ? j.route.loader.hydrate === !0
            ? !1
            : (y && y[j.route.id] !== void 0) || (g && g[j.route.id] !== void 0)
          : !0;
    if (g) {
      let j = C.findIndex((M) => g[M.route.id] !== void 0);
      c = C.slice(0, j + 1).every(k);
    } else c = C.every(k);
  } else c = e.hydrationData != null;
  let L,
    v = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: C,
      initialized: c,
      navigation: yi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: "idle",
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || d,
      fetchers: new Map(),
      blockers: new Map(),
    },
    _ = de.Pop,
    T = !1,
    O,
    F = !1,
    Y = new Map(),
    ve = null,
    he = !1,
    Ze = !1,
    Rn = [],
    zt = [],
    le = new Map(),
    D = 0,
    A = -1,
    $ = new Map(),
    G = new Set(),
    te = new Map(),
    ht = new Map(),
    ke = new Set(),
    ot = new Map(),
    De = new Map(),
    Mt = !1;
  function Ad() {
    if (
      ((f = e.history.listen((y) => {
        let { action: g, location: k, delta: j } = y;
        if (Mt) {
          Mt = !1;
          return;
        }
        ir(
          De.size === 0 || j != null,
          "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
        );
        let M = Nu({
          currentLocation: v.location,
          nextLocation: k,
          historyAction: g,
        });
        if (M && j != null) {
          (Mt = !0),
            e.history.go(j * -1),
            vl(M, {
              state: "blocked",
              location: k,
              proceed() {
                vl(M, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: k,
                }),
                  e.history.go(j);
              },
              reset() {
                let W = new Map(v.blockers);
                W.set(M, kr), He({ blockers: W });
              },
            });
          return;
        }
        return an(g, k);
      })),
      n)
    ) {
      xv(t, Y);
      let y = () => Sv(t, Y);
      t.addEventListener("pagehide", y),
        (ve = () => t.removeEventListener("pagehide", y));
    }
    return v.initialized || an(de.Pop, v.location, { initialHydration: !0 }), L;
  }
  function Bd() {
    f && f(),
      ve && ve(),
      p.clear(),
      O && O.abort(),
      v.fetchers.forEach((y, g) => ml(g)),
      v.blockers.forEach((y, g) => Ru(g));
  }
  function $d(y) {
    return p.add(y), () => p.delete(y);
  }
  function He(y, g) {
    g === void 0 && (g = {}), (v = fe({}, v, y));
    let k = [],
      j = [];
    s.v7_fetcherPersist &&
      v.fetchers.forEach((M, W) => {
        M.state === "idle" && (ke.has(W) ? j.push(W) : k.push(W));
      }),
      [...p].forEach((M) =>
        M(v, {
          deletedFetchers: j,
          unstable_viewTransitionOpts: g.viewTransitionOpts,
          unstable_flushSync: g.flushSync === !0,
        })
      ),
      s.v7_fetcherPersist &&
        (k.forEach((M) => v.fetchers.delete(M)), j.forEach((M) => ml(M)));
  }
  function fr(y, g, k) {
    var j, M;
    let { flushSync: W } = k === void 0 ? {} : k,
      B =
        v.actionData != null &&
        v.navigation.formMethod != null &&
        st(v.navigation.formMethod) &&
        v.navigation.state === "loading" &&
        ((j = y.state) == null ? void 0 : j._isRedirect) !== !0,
      U;
    g.actionData
      ? Object.keys(g.actionData).length > 0
        ? (U = g.actionData)
        : (U = null)
      : B
      ? (U = v.actionData)
      : (U = null);
    let I = g.loaderData
        ? Gs(v.loaderData, g.loaderData, g.matches || [], g.errors)
        : v.loaderData,
      K = v.blockers;
    K.size > 0 && ((K = new Map(K)), K.forEach((b, Ce) => K.set(Ce, kr)));
    let we =
      T === !0 ||
      (v.navigation.formMethod != null &&
        st(v.navigation.formMethod) &&
        ((M = y.state) == null ? void 0 : M._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      he ||
        _ === de.Pop ||
        (_ === de.Push
          ? e.history.push(y, y.state)
          : _ === de.Replace && e.history.replace(y, y.state));
    let H;
    if (_ === de.Pop) {
      let b = Y.get(v.location.pathname);
      b && b.has(y.pathname)
        ? (H = { currentLocation: v.location, nextLocation: y })
        : Y.has(y.pathname) &&
          (H = { currentLocation: y, nextLocation: v.location });
    } else if (F) {
      let b = Y.get(v.location.pathname);
      b
        ? b.add(y.pathname)
        : ((b = new Set([y.pathname])), Y.set(v.location.pathname, b)),
        (H = { currentLocation: v.location, nextLocation: y });
    }
    He(
      fe({}, g, {
        actionData: U,
        loaderData: I,
        historyAction: _,
        location: y,
        initialized: !0,
        navigation: yi,
        revalidation: "idle",
        restoreScrollPosition: Tu(y, g.matches || v.matches),
        preventScrollReset: we,
        blockers: K,
      }),
      { viewTransitionOpts: H, flushSync: W === !0 }
    ),
      (_ = de.Pop),
      (T = !1),
      (F = !1),
      (he = !1),
      (Ze = !1),
      (Rn = []),
      (zt = []);
  }
  async function Su(y, g) {
    if (typeof y == "number") {
      e.history.go(y);
      return;
    }
    let k = ha(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        y,
        s.v7_relativeSplatPath,
        g == null ? void 0 : g.fromRouteId,
        g == null ? void 0 : g.relative
      ),
      {
        path: j,
        submission: M,
        error: W,
      } = Hs(s.v7_normalizeFormMethod, !1, k, g),
      B = v.location,
      U = ol(v.location, j, g && g.state);
    U = fe({}, U, e.history.encodeLocation(U));
    let I = g && g.replace != null ? g.replace : void 0,
      K = de.Push;
    I === !0
      ? (K = de.Replace)
      : I === !1 ||
        (M != null &&
          st(M.formMethod) &&
          M.formAction === v.location.pathname + v.location.search &&
          (K = de.Replace));
    let we =
        g && "preventScrollReset" in g ? g.preventScrollReset === !0 : void 0,
      H = (g && g.unstable_flushSync) === !0,
      b = Nu({ currentLocation: B, nextLocation: U, historyAction: K });
    if (b) {
      vl(b, {
        state: "blocked",
        location: U,
        proceed() {
          vl(b, {
            state: "proceeding",
            proceed: void 0,
            reset: void 0,
            location: U,
          }),
            Su(y, g);
        },
        reset() {
          let Ce = new Map(v.blockers);
          Ce.set(b, kr), He({ blockers: Ce });
        },
      });
      return;
    }
    return await an(K, U, {
      submission: M,
      pendingError: W,
      preventScrollReset: we,
      replace: g && g.replace,
      enableViewTransition: g && g.unstable_viewTransition,
      flushSync: H,
    });
  }
  function Vd() {
    if (
      (Ao(),
      He({ revalidation: "loading" }),
      v.navigation.state !== "submitting")
    ) {
      if (v.navigation.state === "idle") {
        an(v.historyAction, v.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      an(_ || v.historyAction, v.navigation.location, {
        overrideNavigation: v.navigation,
      });
    }
  }
  async function an(y, g, k) {
    O && O.abort(),
      (O = null),
      (_ = y),
      (he = (k && k.startUninterruptedRevalidation) === !0),
      Zd(v.location, v.matches),
      (T = (k && k.preventScrollReset) === !0),
      (F = (k && k.enableViewTransition) === !0);
    let j = a || i,
      M = k && k.overrideNavigation,
      W = Qn(j, g, u),
      B = (k && k.flushSync) === !0;
    if (!W) {
      let Ce = qe(404, { pathname: g.pathname }),
        { matches: We, route: xe } = Js(j);
      Bo(),
        fr(
          g,
          { matches: We, loaderData: {}, errors: { [xe.id]: Ce } },
          { flushSync: B }
        );
      return;
    }
    if (
      v.initialized &&
      !Ze &&
      hv(v.location, g) &&
      !(k && k.submission && st(k.submission.formMethod))
    ) {
      fr(g, { matches: W }, { flushSync: B });
      return;
    }
    O = new AbortController();
    let U = Pr(e.history, g, O.signal, k && k.submission),
      I,
      K;
    if (k && k.pendingError) K = { [$r(W).route.id]: k.pendingError };
    else if (k && k.submission && st(k.submission.formMethod)) {
      let Ce = await Hd(U, g, k.submission, W, {
        replace: k.replace,
        flushSync: B,
      });
      if (Ce.shortCircuited) return;
      (I = Ce.pendingActionData),
        (K = Ce.pendingActionError),
        (M = gi(g, k.submission)),
        (B = !1),
        (U = new Request(U.url, { signal: U.signal }));
    }
    let {
      shortCircuited: we,
      loaderData: H,
      errors: b,
    } = await Wd(
      U,
      g,
      W,
      M,
      k && k.submission,
      k && k.fetcherSubmission,
      k && k.replace,
      k && k.initialHydration === !0,
      B,
      I,
      K
    );
    we ||
      ((O = null),
      fr(
        g,
        fe({ matches: W }, I ? { actionData: I } : {}, {
          loaderData: H,
          errors: b,
        })
      ));
  }
  async function Hd(y, g, k, j, M) {
    M === void 0 && (M = {}), Ao();
    let W = gv(g, k);
    He({ navigation: W }, { flushSync: M.flushSync === !0 });
    let B,
      U = va(j, g);
    if (!U.route.action && !U.route.lazy)
      B = {
        type: se.error,
        error: qe(405, {
          method: y.method,
          pathname: g.pathname,
          routeId: U.route.id,
        }),
      };
    else if (
      ((B = await Cr("action", y, U, j, o, l, u, s.v7_relativeSplatPath)),
      y.signal.aborted)
    )
      return { shortCircuited: !0 };
    if (mn(B)) {
      let I;
      return (
        M && M.replace != null
          ? (I = M.replace)
          : (I = B.location === v.location.pathname + v.location.search),
        await dr(v, B, { submission: k, replace: I }),
        { shortCircuited: !0 }
      );
    }
    if (Kn(B)) {
      let I = $r(j, U.route.id);
      return (
        (M && M.replace) !== !0 && (_ = de.Push),
        { pendingActionData: {}, pendingActionError: { [I.route.id]: B.error } }
      );
    }
    if (hn(B)) throw qe(400, { type: "defer-action" });
    return { pendingActionData: { [U.route.id]: B.data } };
  }
  async function Wd(y, g, k, j, M, W, B, U, I, K, we) {
    let H = j || gi(g, M),
      b = M || W || bs(H),
      Ce = a || i,
      [We, xe] = Ws(
        e.history,
        v,
        k,
        b,
        g,
        s.v7_partialHydration && U === !0,
        Ze,
        Rn,
        zt,
        ke,
        te,
        G,
        Ce,
        u,
        K,
        we
      );
    if (
      (Bo(
        (J) =>
          !(k && k.some((q) => q.route.id === J)) ||
          (We && We.some((q) => q.route.id === J))
      ),
      (A = ++D),
      We.length === 0 && xe.length === 0)
    ) {
      let J = Pu();
      return (
        fr(
          g,
          fe(
            { matches: k, loaderData: {}, errors: we || null },
            K ? { actionData: K } : {},
            J ? { fetchers: new Map(v.fetchers) } : {}
          ),
          { flushSync: I }
        ),
        { shortCircuited: !0 }
      );
    }
    if (!he && (!s.v7_partialHydration || !U)) {
      xe.forEach((q) => {
        let Ie = v.fetchers.get(q.key),
          gl = _r(void 0, Ie ? Ie.data : void 0);
        v.fetchers.set(q.key, gl);
      });
      let J = K || v.actionData;
      He(
        fe(
          { navigation: H },
          J
            ? Object.keys(J).length === 0
              ? { actionData: null }
              : { actionData: J }
            : {},
          xe.length > 0 ? { fetchers: new Map(v.fetchers) } : {}
        ),
        { flushSync: I }
      );
    }
    xe.forEach((J) => {
      le.has(J.key) && Ft(J.key), J.controller && le.set(J.key, J.controller);
    });
    let Nn = () => xe.forEach((J) => Ft(J.key));
    O && O.signal.addEventListener("abort", Nn);
    let {
      results: $o,
      loaderResults: Ln,
      fetcherResults: It,
    } = await Eu(v.matches, k, We, xe, y);
    if (y.signal.aborted) return { shortCircuited: !0 };
    O && O.signal.removeEventListener("abort", Nn),
      xe.forEach((J) => le.delete(J.key));
    let un = Zs($o);
    if (un) {
      if (un.idx >= We.length) {
        let J = xe[un.idx - We.length].key;
        G.add(J);
      }
      return await dr(v, un.result, { replace: B }), { shortCircuited: !0 };
    }
    let { loaderData: Vo, errors: hr } = Xs(v, k, We, Ln, we, xe, It, ot);
    ot.forEach((J, q) => {
      J.subscribe((Ie) => {
        (Ie || J.done) && ot.delete(q);
      });
    }),
      s.v7_partialHydration &&
        U &&
        v.errors &&
        Object.entries(v.errors)
          .filter((J) => {
            let [q] = J;
            return !We.some((Ie) => Ie.route.id === q);
          })
          .forEach((J) => {
            let [q, Ie] = J;
            hr = Object.assign(hr || {}, { [q]: Ie });
          });
    let Ho = Pu(),
      Tn = _u(A),
      yl = Ho || Tn || xe.length > 0;
    return fe(
      { loaderData: Vo, errors: hr },
      yl ? { fetchers: new Map(v.fetchers) } : {}
    );
  }
  function Qd(y, g, k, j) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    le.has(y) && Ft(y);
    let M = (j && j.unstable_flushSync) === !0,
      W = a || i,
      B = ha(
        v.location,
        v.matches,
        u,
        s.v7_prependBasename,
        k,
        s.v7_relativeSplatPath,
        g,
        j == null ? void 0 : j.relative
      ),
      U = Qn(W, B, u);
    if (!U) {
      pr(y, g, qe(404, { pathname: B }), { flushSync: M });
      return;
    }
    let {
      path: I,
      submission: K,
      error: we,
    } = Hs(s.v7_normalizeFormMethod, !0, B, j);
    if (we) {
      pr(y, g, we, { flushSync: M });
      return;
    }
    let H = va(U, I);
    if (((T = (j && j.preventScrollReset) === !0), K && st(K.formMethod))) {
      Kd(y, g, I, H, U, M, K);
      return;
    }
    te.set(y, { routeId: g, path: I }), Yd(y, g, I, H, U, M, K);
  }
  async function Kd(y, g, k, j, M, W, B) {
    if ((Ao(), te.delete(y), !j.route.action && !j.route.lazy)) {
      let q = qe(405, { method: B.formMethod, pathname: k, routeId: g });
      pr(y, g, q, { flushSync: W });
      return;
    }
    let U = v.fetchers.get(y);
    Ot(y, wv(B, U), { flushSync: W });
    let I = new AbortController(),
      K = Pr(e.history, k, I.signal, B);
    le.set(y, I);
    let we = D,
      H = await Cr("action", K, j, M, o, l, u, s.v7_relativeSplatPath);
    if (K.signal.aborted) {
      le.get(y) === I && le.delete(y);
      return;
    }
    if (s.v7_fetcherPersist && ke.has(y)) {
      if (mn(H) || Kn(H)) {
        Ot(y, At(void 0));
        return;
      }
    } else {
      if (mn(H))
        if ((le.delete(y), A > we)) {
          Ot(y, At(void 0));
          return;
        } else
          return G.add(y), Ot(y, _r(B)), dr(v, H, { fetcherSubmission: B });
      if (Kn(H)) {
        pr(y, g, H.error);
        return;
      }
    }
    if (hn(H)) throw qe(400, { type: "defer-action" });
    let b = v.navigation.location || v.location,
      Ce = Pr(e.history, b, I.signal),
      We = a || i,
      xe =
        v.navigation.state !== "idle"
          ? Qn(We, v.navigation.location, u)
          : v.matches;
    V(xe, "Didn't find any matches after fetcher action");
    let Nn = ++D;
    $.set(y, Nn);
    let $o = _r(B, H.data);
    v.fetchers.set(y, $o);
    let [Ln, It] = Ws(
      e.history,
      v,
      xe,
      B,
      b,
      !1,
      Ze,
      Rn,
      zt,
      ke,
      te,
      G,
      We,
      u,
      { [j.route.id]: H.data },
      void 0
    );
    It.filter((q) => q.key !== y).forEach((q) => {
      let Ie = q.key,
        gl = v.fetchers.get(Ie),
        bd = _r(void 0, gl ? gl.data : void 0);
      v.fetchers.set(Ie, bd),
        le.has(Ie) && Ft(Ie),
        q.controller && le.set(Ie, q.controller);
    }),
      He({ fetchers: new Map(v.fetchers) });
    let un = () => It.forEach((q) => Ft(q.key));
    I.signal.addEventListener("abort", un);
    let {
      results: Vo,
      loaderResults: hr,
      fetcherResults: Ho,
    } = await Eu(v.matches, xe, Ln, It, Ce);
    if (I.signal.aborted) return;
    I.signal.removeEventListener("abort", un),
      $.delete(y),
      le.delete(y),
      It.forEach((q) => le.delete(q.key));
    let Tn = Zs(Vo);
    if (Tn) {
      if (Tn.idx >= Ln.length) {
        let q = It[Tn.idx - Ln.length].key;
        G.add(q);
      }
      return dr(v, Tn.result);
    }
    let { loaderData: yl, errors: J } = Xs(
      v,
      v.matches,
      Ln,
      hr,
      void 0,
      It,
      Ho,
      ot
    );
    if (v.fetchers.has(y)) {
      let q = At(H.data);
      v.fetchers.set(y, q);
    }
    _u(Nn),
      v.navigation.state === "loading" && Nn > A
        ? (V(_, "Expected pending action"),
          O && O.abort(),
          fr(v.navigation.location, {
            matches: xe,
            loaderData: yl,
            errors: J,
            fetchers: new Map(v.fetchers),
          }))
        : (He({
            errors: J,
            loaderData: Gs(v.loaderData, yl, xe, J),
            fetchers: new Map(v.fetchers),
          }),
          (Ze = !1));
  }
  async function Yd(y, g, k, j, M, W, B) {
    let U = v.fetchers.get(y);
    Ot(y, _r(B, U ? U.data : void 0), { flushSync: W });
    let I = new AbortController(),
      K = Pr(e.history, k, I.signal);
    le.set(y, I);
    let we = D,
      H = await Cr("loader", K, j, M, o, l, u, s.v7_relativeSplatPath);
    if (
      (hn(H) && (H = (await Dd(H, K.signal, !0)) || H),
      le.get(y) === I && le.delete(y),
      !K.signal.aborted)
    ) {
      if (ke.has(y)) {
        Ot(y, At(void 0));
        return;
      }
      if (mn(H))
        if (A > we) {
          Ot(y, At(void 0));
          return;
        } else {
          G.add(y), await dr(v, H);
          return;
        }
      if (Kn(H)) {
        pr(y, g, H.error);
        return;
      }
      V(!hn(H), "Unhandled fetcher deferred data"), Ot(y, At(H.data));
    }
  }
  async function dr(y, g, k) {
    let {
      submission: j,
      fetcherSubmission: M,
      replace: W,
    } = k === void 0 ? {} : k;
    g.revalidate && (Ze = !0);
    let B = ol(y.location, g.location, { _isRedirect: !0 });
    if ((V(B, "Expected a location on the redirect navigation"), n)) {
      let b = !1;
      if (g.reloadDocument) b = !0;
      else if (Nd.test(g.location)) {
        const Ce = e.history.createURL(g.location);
        b = Ce.origin !== t.location.origin || Tt(Ce.pathname, u) == null;
      }
      if (b) {
        W ? t.location.replace(g.location) : t.location.assign(g.location);
        return;
      }
    }
    O = null;
    let U = W === !0 ? de.Replace : de.Push,
      { formMethod: I, formAction: K, formEncType: we } = y.navigation;
    !j && !M && I && K && we && (j = bs(y.navigation));
    let H = j || M;
    if (iv.has(g.status) && H && st(H.formMethod))
      await an(U, B, {
        submission: fe({}, H, { formAction: g.location }),
        preventScrollReset: T,
      });
    else {
      let b = gi(B, j);
      await an(U, B, {
        overrideNavigation: b,
        fetcherSubmission: M,
        preventScrollReset: T,
      });
    }
  }
  async function Eu(y, g, k, j, M) {
    let W = await Promise.all([
        ...k.map((I) => Cr("loader", M, I, g, o, l, u, s.v7_relativeSplatPath)),
        ...j.map((I) =>
          I.matches && I.match && I.controller
            ? Cr(
                "loader",
                Pr(e.history, I.path, I.controller.signal),
                I.match,
                I.matches,
                o,
                l,
                u,
                s.v7_relativeSplatPath
              )
            : { type: se.error, error: qe(404, { pathname: I.path }) }
        ),
      ]),
      B = W.slice(0, k.length),
      U = W.slice(k.length);
    return (
      await Promise.all([
        qs(
          y,
          k,
          B,
          B.map(() => M.signal),
          !1,
          v.loaderData
        ),
        qs(
          y,
          j.map((I) => I.match),
          U,
          j.map((I) => (I.controller ? I.controller.signal : null)),
          !0
        ),
      ]),
      { results: W, loaderResults: B, fetcherResults: U }
    );
  }
  function Ao() {
    (Ze = !0),
      Rn.push(...Bo()),
      te.forEach((y, g) => {
        le.has(g) && (zt.push(g), Ft(g));
      });
  }
  function Ot(y, g, k) {
    k === void 0 && (k = {}),
      v.fetchers.set(y, g),
      He(
        { fetchers: new Map(v.fetchers) },
        { flushSync: (k && k.flushSync) === !0 }
      );
  }
  function pr(y, g, k, j) {
    j === void 0 && (j = {});
    let M = $r(v.matches, g);
    ml(y),
      He(
        { errors: { [M.route.id]: k }, fetchers: new Map(v.fetchers) },
        { flushSync: (j && j.flushSync) === !0 }
      );
  }
  function ku(y) {
    return (
      s.v7_fetcherPersist &&
        (ht.set(y, (ht.get(y) || 0) + 1), ke.has(y) && ke.delete(y)),
      v.fetchers.get(y) || av
    );
  }
  function ml(y) {
    let g = v.fetchers.get(y);
    le.has(y) && !(g && g.state === "loading" && $.has(y)) && Ft(y),
      te.delete(y),
      $.delete(y),
      G.delete(y),
      ke.delete(y),
      v.fetchers.delete(y);
  }
  function Xd(y) {
    if (s.v7_fetcherPersist) {
      let g = (ht.get(y) || 0) - 1;
      g <= 0 ? (ht.delete(y), ke.add(y)) : ht.set(y, g);
    } else ml(y);
    He({ fetchers: new Map(v.fetchers) });
  }
  function Ft(y) {
    let g = le.get(y);
    V(g, "Expected fetch controller: " + y), g.abort(), le.delete(y);
  }
  function Cu(y) {
    for (let g of y) {
      let k = ku(g),
        j = At(k.data);
      v.fetchers.set(g, j);
    }
  }
  function Pu() {
    let y = [],
      g = !1;
    for (let k of G) {
      let j = v.fetchers.get(k);
      V(j, "Expected fetcher: " + k),
        j.state === "loading" && (G.delete(k), y.push(k), (g = !0));
    }
    return Cu(y), g;
  }
  function _u(y) {
    let g = [];
    for (let [k, j] of $)
      if (j < y) {
        let M = v.fetchers.get(k);
        V(M, "Expected fetcher: " + k),
          M.state === "loading" && (Ft(k), $.delete(k), g.push(k));
      }
    return Cu(g), g.length > 0;
  }
  function Gd(y, g) {
    let k = v.blockers.get(y) || kr;
    return De.get(y) !== g && De.set(y, g), k;
  }
  function Ru(y) {
    v.blockers.delete(y), De.delete(y);
  }
  function vl(y, g) {
    let k = v.blockers.get(y) || kr;
    V(
      (k.state === "unblocked" && g.state === "blocked") ||
        (k.state === "blocked" && g.state === "blocked") ||
        (k.state === "blocked" && g.state === "proceeding") ||
        (k.state === "blocked" && g.state === "unblocked") ||
        (k.state === "proceeding" && g.state === "unblocked"),
      "Invalid blocker state transition: " + k.state + " -> " + g.state
    );
    let j = new Map(v.blockers);
    j.set(y, g), He({ blockers: j });
  }
  function Nu(y) {
    let { currentLocation: g, nextLocation: k, historyAction: j } = y;
    if (De.size === 0) return;
    De.size > 1 && ir(!1, "A router only supports one blocker at a time");
    let M = Array.from(De.entries()),
      [W, B] = M[M.length - 1],
      U = v.blockers.get(W);
    if (
      !(U && U.state === "proceeding") &&
      B({ currentLocation: g, nextLocation: k, historyAction: j })
    )
      return W;
  }
  function Bo(y) {
    let g = [];
    return (
      ot.forEach((k, j) => {
        (!y || y(j)) && (k.cancel(), g.push(j), ot.delete(j));
      }),
      g
    );
  }
  function Jd(y, g, k) {
    if (((m = y), (x = g), (E = k || null), !w && v.navigation === yi)) {
      w = !0;
      let j = Tu(v.location, v.matches);
      j != null && He({ restoreScrollPosition: j });
    }
    return () => {
      (m = null), (x = null), (E = null);
    };
  }
  function Lu(y, g) {
    return (
      (E &&
        E(
          y,
          g.map((j) => Um(j, v.loaderData))
        )) ||
      y.key
    );
  }
  function Zd(y, g) {
    if (m && x) {
      let k = Lu(y, g);
      m[k] = x();
    }
  }
  function Tu(y, g) {
    if (m) {
      let k = Lu(y, g),
        j = m[k];
      if (typeof j == "number") return j;
    }
    return null;
  }
  function qd(y) {
    (o = {}), (a = da(y, l, void 0, o));
  }
  return (
    (L = {
      get basename() {
        return u;
      },
      get future() {
        return s;
      },
      get state() {
        return v;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Ad,
      subscribe: $d,
      enableScrollRestoration: Jd,
      navigate: Su,
      fetch: Qd,
      revalidate: Vd,
      createHref: (y) => e.history.createHref(y),
      encodeLocation: (y) => e.history.encodeLocation(y),
      getFetcher: ku,
      deleteFetcher: Xd,
      dispose: Bd,
      getBlocker: Gd,
      deleteBlocker: Ru,
      _internalFetchControllers: le,
      _internalActiveDeferreds: ot,
      _internalSetRoutes: qd,
    }),
    L
  );
}
function cv(e) {
  return (
    e != null &&
    (("formData" in e && e.formData != null) ||
      ("body" in e && e.body !== void 0))
  );
}
function ha(e, t, n, r, l, o, i, a) {
  let u, s;
  if (i) {
    u = [];
    for (let p of t)
      if ((u.push(p), p.route.id === i)) {
        s = p;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let f = yu(l || ".", vu(u, o), Tt(e.pathname, n) || e.pathname, a === "path");
  return (
    l == null && ((f.search = e.search), (f.hash = e.hash)),
    (l == null || l === "" || l === ".") &&
      s &&
      s.route.index &&
      !wu(f.search) &&
      (f.search = f.search ? f.search.replace(/^\?/, "?index&") : "?index"),
    r &&
      n !== "/" &&
      (f.pathname = f.pathname === "/" ? n : Pt([n, f.pathname])),
    kn(f)
  );
}
function Hs(e, t, n, r) {
  if (!r || !cv(r)) return { path: n };
  if (r.formMethod && !yv(r.formMethod))
    return { path: n, error: qe(405, { method: r.formMethod }) };
  let l = () => ({ path: n, error: qe(400, { type: "invalid-body" }) }),
    o = r.formMethod || "get",
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = jd(n);
  if (r.body !== void 0) {
    if (r.formEncType === "text/plain") {
      if (!st(i)) return l();
      let m =
        typeof r.body == "string"
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
          ? Array.from(r.body.entries()).reduce((E, x) => {
              let [w, C] = x;
              return (
                "" +
                E +
                w +
                "=" +
                C +
                `
`
              );
            }, "")
          : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: m,
        },
      };
    } else if (r.formEncType === "application/json") {
      if (!st(i)) return l();
      try {
        let m = typeof r.body == "string" ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: m,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  V(
    typeof FormData == "function",
    "FormData is not available in this environment"
  );
  let u, s;
  if (r.formData) (u = ma(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = ma(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = Ys(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = Ys(u));
    } catch {
      return l();
    }
  let f = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || "application/x-www-form-urlencoded",
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (st(f.formMethod)) return { path: n, submission: f };
  let p = Dt(n);
  return (
    t && p.search && wu(p.search) && u.append("index", ""),
    (p.search = "?" + u),
    { path: kn(p), submission: f }
  );
}
function fv(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex((l) => l.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ws(e, t, n, r, l, o, i, a, u, s, f, p, m, E, x, w) {
  let C = w ? Object.values(w)[0] : x ? Object.values(x)[0] : void 0,
    d = e.createURL(t.location),
    c = e.createURL(l),
    h = w ? Object.keys(w)[0] : void 0,
    L = fv(n, h).filter((_, T) => {
      let { route: O } = _;
      if (O.lazy) return !0;
      if (O.loader == null) return !1;
      if (o)
        return O.loader.hydrate
          ? !0
          : t.loaderData[O.id] === void 0 &&
              (!t.errors || t.errors[O.id] === void 0);
      if (
        dv(t.loaderData, t.matches[T], _) ||
        a.some((ve) => ve === _.route.id)
      )
        return !0;
      let F = t.matches[T],
        Y = _;
      return Qs(
        _,
        fe(
          {
            currentUrl: d,
            currentParams: F.params,
            nextUrl: c,
            nextParams: Y.params,
          },
          r,
          {
            actionResult: C,
            defaultShouldRevalidate:
              i ||
              d.pathname + d.search === c.pathname + c.search ||
              d.search !== c.search ||
              Td(F, Y),
          }
        )
      );
    }),
    v = [];
  return (
    f.forEach((_, T) => {
      if (o || !n.some((he) => he.route.id === _.routeId) || s.has(T)) return;
      let O = Qn(m, _.path, E);
      if (!O) {
        v.push({
          key: T,
          routeId: _.routeId,
          path: _.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let F = t.fetchers.get(T),
        Y = va(O, _.path),
        ve = !1;
      p.has(T)
        ? (ve = !1)
        : u.includes(T)
        ? (ve = !0)
        : F && F.state !== "idle" && F.data === void 0
        ? (ve = i)
        : (ve = Qs(
            Y,
            fe(
              {
                currentUrl: d,
                currentParams: t.matches[t.matches.length - 1].params,
                nextUrl: c,
                nextParams: n[n.length - 1].params,
              },
              r,
              { actionResult: C, defaultShouldRevalidate: i }
            )
          )),
        ve &&
          v.push({
            key: T,
            routeId: _.routeId,
            path: _.path,
            matches: O,
            match: Y,
            controller: new AbortController(),
          });
    }),
    [L, v]
  );
}
function dv(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Td(e, t) {
  let n = e.route.path;
  return (
    e.pathname !== t.pathname ||
    (n != null && n.endsWith("*") && e.params["*"] !== t.params["*"])
  );
}
function Qs(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == "boolean") return n;
  }
  return t.defaultShouldRevalidate;
}
async function Ks(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, "No route found in manifest");
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== "hasErrorBoundary";
    ir(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Fm.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o), Object.assign(l, fe({}, t(l), { lazy: void 0 }));
}
async function Cr(e, t, n, r, l, o, i, a, u) {
  u === void 0 && (u = {});
  let s,
    f,
    p,
    m = (w) => {
      let C,
        d = new Promise((c, h) => (C = h));
      return (
        (p = () => C()),
        t.signal.addEventListener("abort", p),
        Promise.race([
          w({ request: t, params: n.params, context: u.requestContext }),
          d,
        ])
      );
    };
  try {
    let w = n.route[e];
    if (n.route.lazy)
      if (w) {
        let C,
          d = await Promise.all([
            m(w).catch((c) => {
              C = c;
            }),
            Ks(n.route, o, l),
          ]);
        if (C) throw C;
        f = d[0];
      } else if ((await Ks(n.route, o, l), (w = n.route[e]), w)) f = await m(w);
      else if (e === "action") {
        let C = new URL(t.url),
          d = C.pathname + C.search;
        throw qe(405, { method: t.method, pathname: d, routeId: n.route.id });
      } else return { type: se.data, data: void 0 };
    else if (w) f = await m(w);
    else {
      let C = new URL(t.url),
        d = C.pathname + C.search;
      throw qe(404, { pathname: d });
    }
    V(
      f !== void 0,
      "You defined " +
        (e === "action" ? "an action" : "a loader") +
        " for route " +
        ('"' +
          n.route.id +
          "\" but didn't return anything from your `" +
          e +
          "` ") +
        "function. Please return a value or `null`."
    );
  } catch (w) {
    (s = se.error), (f = w);
  } finally {
    p && t.signal.removeEventListener("abort", p);
  }
  if (vv(f)) {
    let w = f.status;
    if (ov.has(w)) {
      let d = f.headers.get("Location");
      if (
        (V(
          d,
          "Redirects returned/thrown from loaders/actions must have a Location header"
        ),
        !Nd.test(d))
      )
        d = ha(new URL(t.url), r.slice(0, r.indexOf(n) + 1), i, !0, d, a);
      else if (!u.isStaticRequest) {
        let c = new URL(t.url),
          h = d.startsWith("//") ? new URL(c.protocol + d) : new URL(d),
          S = Tt(h.pathname, i) != null;
        h.origin === c.origin && S && (d = h.pathname + h.search + h.hash);
      }
      if (u.isStaticRequest) throw (f.headers.set("Location", d), f);
      return {
        type: se.redirect,
        status: w,
        location: d,
        revalidate: f.headers.get("X-Remix-Revalidate") !== null,
        reloadDocument: f.headers.get("X-Remix-Reload-Document") !== null,
      };
    }
    if (u.isRouteRequest)
      throw { type: s === se.error ? se.error : se.data, response: f };
    let C;
    try {
      let d = f.headers.get("Content-Type");
      d && /\bapplication\/json\b/.test(d)
        ? f.body == null
          ? (C = null)
          : (C = await f.json())
        : (C = await f.text());
    } catch (d) {
      return { type: se.error, error: d };
    }
    return s === se.error
      ? { type: s, error: new gu(w, f.statusText, C), headers: f.headers }
      : { type: se.data, data: C, statusCode: f.status, headers: f.headers };
  }
  if (s === se.error) return { type: s, error: f };
  if (mv(f)) {
    var E, x;
    return {
      type: se.deferred,
      deferredData: f,
      statusCode: (E = f.init) == null ? void 0 : E.status,
      headers:
        ((x = f.init) == null ? void 0 : x.headers) &&
        new Headers(f.init.headers),
    };
  }
  return { type: se.data, data: f };
}
function Pr(e, t, n, r) {
  let l = e.createURL(jd(t)).toString(),
    o = { signal: n };
  if (r && st(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === "application/json"
        ? ((o.headers = new Headers({ "Content-Type": a })),
          (o.body = JSON.stringify(r.json)))
        : a === "text/plain"
        ? (o.body = r.text)
        : a === "application/x-www-form-urlencoded" && r.formData
        ? (o.body = ma(r.formData))
        : (o.body = r.formData);
  }
  return new Request(l, o);
}
function ma(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries())
    t.append(n, typeof r == "string" ? r : r.name);
  return t;
}
function Ys(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function pv(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {};
  return (
    n.forEach((f, p) => {
      let m = t[p].route.id;
      if (
        (V(!mn(f), "Cannot handle redirect results in processLoaderData"),
        Kn(f))
      ) {
        let E = $r(e, m),
          x = f.error;
        r && ((x = Object.values(r)[0]), (r = void 0)),
          (i = i || {}),
          i[E.route.id] == null && (i[E.route.id] = x),
          (o[m] = void 0),
          u || ((u = !0), (a = _d(f.error) ? f.error.status : 500)),
          f.headers && (s[m] = f.headers);
      } else
        hn(f)
          ? (l.set(m, f.deferredData), (o[m] = f.deferredData.data))
          : (o[m] = f.data),
          f.statusCode != null &&
            f.statusCode !== 200 &&
            !u &&
            (a = f.statusCode),
          f.headers && (s[m] = f.headers);
    }),
    r && ((i = r), (o[Object.keys(r)[0]] = void 0)),
    { loaderData: o, errors: i, statusCode: a || 200, loaderHeaders: s }
  );
}
function Xs(e, t, n, r, l, o, i, a) {
  let { loaderData: u, errors: s } = pv(t, n, r, l, a);
  for (let f = 0; f < o.length; f++) {
    let { key: p, match: m, controller: E } = o[f];
    V(
      i !== void 0 && i[f] !== void 0,
      "Did not find corresponding fetcher result"
    );
    let x = i[f];
    if (!(E && E.signal.aborted))
      if (Kn(x)) {
        let w = $r(e.matches, m == null ? void 0 : m.route.id);
        (s && s[w.route.id]) || (s = fe({}, s, { [w.route.id]: x.error })),
          e.fetchers.delete(p);
      } else if (mn(x)) V(!1, "Unhandled fetcher revalidation redirect");
      else if (hn(x)) V(!1, "Unhandled fetcher deferred data");
      else {
        let w = At(x.data);
        e.fetchers.set(p, w);
      }
  }
  return { loaderData: u, errors: s };
}
function Gs(e, t, n, r) {
  let l = fe({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i)
        ? t[i] !== void 0 && (l[i] = t[i])
        : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function $r(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function Js(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === "/") || {
          id: "__shim-error-route__",
        };
  return {
    matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
    route: t,
  };
}
function qe(e, t) {
  let { pathname: n, routeId: r, method: l, type: o } = t === void 0 ? {} : t,
    i = "Unknown Server Error",
    a = "Unknown @remix-run/router error";
  return (
    e === 400
      ? ((i = "Bad Request"),
        l && n && r
          ? (a =
              "You made a " +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : o === "defer-action"
          ? (a = "defer() is not supported in actions")
          : o === "invalid-body" && (a = "Unable to encode submission body"))
      : e === 403
      ? ((i = "Forbidden"),
        (a = 'Route "' + r + '" does not match URL "' + n + '"'))
      : e === 404
      ? ((i = "Not Found"), (a = 'No route matches URL "' + n + '"'))
      : e === 405 &&
        ((i = "Method Not Allowed"),
        l && n && r
          ? (a =
              "You made a " +
              l.toUpperCase() +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide an `action` for route "' + r + '", ') +
              "so there is no way to handle the request.")
          : l && (a = 'Invalid request method "' + l.toUpperCase() + '"')),
    new gu(e || 500, i, new Error(a), !0)
  );
}
function Zs(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (mn(n)) return { result: n, idx: t };
  }
}
function jd(e) {
  let t = typeof e == "string" ? Dt(e) : e;
  return kn(fe({}, t, { hash: "" }));
}
function hv(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ""
    ? t.hash !== ""
    : e.hash === t.hash
    ? !0
    : t.hash !== "";
}
function hn(e) {
  return e.type === se.deferred;
}
function Kn(e) {
  return e.type === se.error;
}
function mn(e) {
  return (e && e.type) === se.redirect;
}
function mv(e) {
  let t = e;
  return (
    t &&
    typeof t == "object" &&
    typeof t.data == "object" &&
    typeof t.subscribe == "function" &&
    typeof t.cancel == "function" &&
    typeof t.resolveData == "function"
  );
}
function vv(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.headers == "object" &&
    typeof e.body < "u"
  );
}
function yv(e) {
  return lv.has(e.toLowerCase());
}
function st(e) {
  return nv.has(e.toLowerCase());
}
async function qs(e, t, n, r, l, o) {
  for (let i = 0; i < n.length; i++) {
    let a = n[i],
      u = t[i];
    if (!u) continue;
    let s = e.find((p) => p.route.id === u.route.id),
      f = s != null && !Td(s, u) && (o && o[u.route.id]) !== void 0;
    if (hn(a) && (l || f)) {
      let p = r[i];
      V(p, "Expected an AbortSignal for revalidating fetcher deferred result"),
        await Dd(a, p, l).then((m) => {
          m && (n[i] = m || n[i]);
        });
    }
  }
}
async function Dd(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: se.data, data: e.deferredData.unwrappedData };
      } catch (l) {
        return { type: se.error, error: l };
      }
    return { type: se.data, data: e.deferredData.data };
  }
}
function wu(e) {
  return new URLSearchParams(e).getAll("index").some((t) => t === "");
}
function va(e, t) {
  let n = typeof t == "string" ? Dt(t).search : t.search;
  if (e[e.length - 1].route.index && wu(n || "")) return e[e.length - 1];
  let r = Pd(e);
  return r[r.length - 1];
}
function bs(e) {
  let {
    formMethod: t,
    formAction: n,
    formEncType: r,
    text: l,
    formData: o,
    json: i,
  } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function gi(e, t) {
  return t
    ? {
        state: "loading",
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: "loading",
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function gv(e, t) {
  return {
    state: "submitting",
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function _r(e, t) {
  return e
    ? {
        state: "loading",
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: "loading",
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function wv(e, t) {
  return {
    state: "submitting",
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function At(e) {
  return {
    state: "idle",
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function xv(e, t) {
  try {
    let n = e.sessionStorage.getItem(Ld);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {}))
        o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function Sv(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Ld, JSON.stringify(n));
    } catch (r) {
      ir(
        !1,
        "Failed to save applied view transitions in sessionStorage (" + r + ")."
      );
    }
  }
}
/**
 * React Router v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function il() {
  return (
    (il = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    il.apply(this, arguments)
  );
}
const dl = P.createContext(null),
  xu = P.createContext(null),
  on = P.createContext(null),
  Io = P.createContext(null),
  _n = P.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  zd = P.createContext(null);
function Ev(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  pl() || V(!1);
  let { basename: r, navigator: l } = P.useContext(on),
    { hash: o, pathname: i, search: a } = Uo(e, { relative: n }),
    u = i;
  return (
    r !== "/" && (u = i === "/" ? r : Pt([r, i])),
    l.createHref({ pathname: u, search: a, hash: o })
  );
}
function pl() {
  return P.useContext(Io) != null;
}
function hl() {
  return pl() || V(!1), P.useContext(Io).location;
}
function Md(e) {
  P.useContext(on).static || P.useLayoutEffect(e);
}
function kv() {
  let { isDataRoute: e } = P.useContext(_n);
  return e ? Ov() : Cv();
}
function Cv() {
  pl() || V(!1);
  let e = P.useContext(dl),
    { basename: t, future: n, navigator: r } = P.useContext(on),
    { matches: l } = P.useContext(_n),
    { pathname: o } = hl(),
    i = JSON.stringify(vu(l, n.v7_relativeSplatPath)),
    a = P.useRef(!1);
  return (
    Md(() => {
      a.current = !0;
    }),
    P.useCallback(
      function (s, f) {
        if ((f === void 0 && (f = {}), !a.current)) return;
        if (typeof s == "number") {
          r.go(s);
          return;
        }
        let p = yu(s, JSON.parse(i), o, f.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : Pt([t, p.pathname])),
          (f.replace ? r.replace : r.push)(p, f.state, f);
      },
      [t, r, i, o, e]
    )
  );
}
function Uo(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = P.useContext(on),
    { matches: l } = P.useContext(_n),
    { pathname: o } = hl(),
    i = JSON.stringify(vu(l, r.v7_relativeSplatPath));
  return P.useMemo(() => yu(e, JSON.parse(i), o, n === "path"), [e, i, o, n]);
}
function Pv(e, t, n, r) {
  pl() || V(!1);
  let { navigator: l } = P.useContext(on),
    { matches: o } = P.useContext(_n),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : "/";
  i && i.route;
  let s = hl(),
    f;
  if (t) {
    var p;
    let C = typeof t == "string" ? Dt(t) : t;
    u === "/" || ((p = C.pathname) != null && p.startsWith(u)) || V(!1),
      (f = C);
  } else f = s;
  let m = f.pathname || "/",
    E = m;
  if (u !== "/") {
    let C = u.replace(/^\//, "").split("/");
    E = "/" + m.replace(/^\//, "").split("/").slice(C.length).join("/");
  }
  let x = Qn(e, { pathname: E }),
    w = Tv(
      x &&
        x.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, a, C.params),
            pathname: Pt([
              u,
              l.encodeLocation
                ? l.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === "/"
                ? u
                : Pt([
                    u,
                    l.encodeLocation
                      ? l.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          })
        ),
      o,
      n,
      r
    );
  return t && w
    ? P.createElement(
        Io.Provider,
        {
          value: {
            location: il(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              f
            ),
            navigationType: de.Pop,
          },
        },
        w
      )
    : w;
}
function _v() {
  let e = Mv(),
    t = _d(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return P.createElement(
    P.Fragment,
    null,
    P.createElement("h2", null, "Unexpected Application Error!"),
    P.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? P.createElement("pre", { style: l }, n) : null,
    null
  );
}
const Rv = P.createElement(_v, null);
class Nv extends P.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? P.createElement(
          _n.Provider,
          { value: this.props.routeContext },
          P.createElement(zd.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Lv(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = P.useContext(dl);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    P.createElement(_n.Provider, { value: t }, r)
  );
}
function Tv(e, t, n, r) {
  var l;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o;
    if ((o = n) != null && o.errors) e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let f = i.findIndex(
      (p) => p.route.id && (a == null ? void 0 : a[p.route.id])
    );
    f >= 0 || V(!1), (i = i.slice(0, Math.min(i.length, f + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let f = 0; f < i.length; f++) {
      let p = i[f];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (s = f),
        p.route.id)
      ) {
        let { loaderData: m, errors: E } = n,
          x =
            p.route.loader &&
            m[p.route.id] === void 0 &&
            (!E || E[p.route.id] === void 0);
        if (p.route.lazy || x) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((f, p, m) => {
    let E,
      x = !1,
      w = null,
      C = null;
    n &&
      ((E = a && p.route.id ? a[p.route.id] : void 0),
      (w = p.route.errorElement || Rv),
      u &&
        (s < 0 && m === 0
          ? (Fv("route-fallback", !1), (x = !0), (C = null))
          : s === m &&
            ((x = !0), (C = p.route.hydrateFallbackElement || null))));
    let d = t.concat(i.slice(0, m + 1)),
      c = () => {
        let h;
        return (
          E
            ? (h = w)
            : x
            ? (h = C)
            : p.route.Component
            ? (h = P.createElement(p.route.Component, null))
            : p.route.element
            ? (h = p.route.element)
            : (h = f),
          P.createElement(Lv, {
            match: p,
            routeContext: { outlet: f, matches: d, isDataRoute: n != null },
            children: h,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || m === 0)
      ? P.createElement(Nv, {
          location: n.location,
          revalidation: n.revalidation,
          component: w,
          error: E,
          children: c(),
          routeContext: { outlet: null, matches: d, isDataRoute: !0 },
        })
      : c();
  }, null);
}
var Od = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Od || {}),
  wo = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(wo || {});
function jv(e) {
  let t = P.useContext(dl);
  return t || V(!1), t;
}
function Dv(e) {
  let t = P.useContext(xu);
  return t || V(!1), t;
}
function zv(e) {
  let t = P.useContext(_n);
  return t || V(!1), t;
}
function Fd(e) {
  let t = zv(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function Mv() {
  var e;
  let t = P.useContext(zd),
    n = Dv(wo.UseRouteError),
    r = Fd(wo.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ov() {
  let { router: e } = jv(Od.UseNavigateStable),
    t = Fd(wo.UseNavigateStable),
    n = P.useRef(!1);
  return (
    Md(() => {
      n.current = !0;
    }),
    P.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == "number"
              ? e.navigate(l)
              : e.navigate(l, il({ fromRouteId: t }, o)));
      },
      [e, t]
    )
  );
}
const ec = {};
function Fv(e, t, n) {
  !t && !ec[e] && (ec[e] = !0);
}
function Dn(e) {
  V(!1);
}
function Iv(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: l = de.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  pl() && V(!1);
  let u = t.replace(/^\/*/, "/"),
    s = P.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: il({ v7_relativeSplatPath: !1 }, a),
      }),
      [u, a, o, i]
    );
  typeof r == "string" && (r = Dt(r));
  let {
      pathname: f = "/",
      search: p = "",
      hash: m = "",
      state: E = null,
      key: x = "default",
    } = r,
    w = P.useMemo(() => {
      let C = Tt(f, u);
      return C == null
        ? null
        : {
            location: { pathname: C, search: p, hash: m, state: E, key: x },
            navigationType: l,
          };
    }, [u, f, p, m, E, x, l]);
  return w == null
    ? null
    : P.createElement(
        on.Provider,
        { value: s },
        P.createElement(Io.Provider, { children: n, value: w })
      );
}
new Promise(() => {});
function ya(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    P.Children.forEach(e, (r, l) => {
      if (!P.isValidElement(r)) return;
      let o = [...t, l];
      if (r.type === P.Fragment) {
        n.push.apply(n, ya(r.props.children, o));
        return;
      }
      r.type !== Dn && V(!1), !r.props.index || !r.props.children || V(!1);
      let i = {
        id: r.props.id || o.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (i.children = ya(r.props.children, o)), n.push(i);
    }),
    n
  );
}
function Uv(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: P.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: P.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: P.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.22.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ar() {
  return (
    (ar = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ar.apply(this, arguments)
  );
}
function Id(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++)
    (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
function Av(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function Bv(e, t) {
  return e.button === 0 && (!t || t === "_self") && !Av(e);
}
const $v = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  Vv = [
    "aria-current",
    "caseSensitive",
    "className",
    "end",
    "style",
    "to",
    "unstable_viewTransition",
    "children",
  ],
  Hv = "6";
try {
  window.__reactRouterVersion = Hv;
} catch {}
function Wv(e, t) {
  return sv({
    basename: t == null ? void 0 : t.basename,
    future: ar({}, t == null ? void 0 : t.future, { v7_prependBasename: !0 }),
    history: zm({ window: t == null ? void 0 : t.window }),
    hydrationData: (t == null ? void 0 : t.hydrationData) || Qv(),
    routes: e,
    mapRouteProperties: Uv,
    window: t == null ? void 0 : t.window,
  }).initialize();
}
function Qv() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = ar({}, t, { errors: Kv(t.errors) })), t;
}
function Kv(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, l] of t)
    if (l && l.__type === "RouteErrorResponse")
      n[r] = new gu(l.status, l.statusText, l.data, l.internal === !0);
    else if (l && l.__type === "Error") {
      if (l.__subType) {
        let o = window[l.__subType];
        if (typeof o == "function")
          try {
            let i = new o(l.message);
            (i.stack = ""), (n[r] = i);
          } catch {}
      }
      if (n[r] == null) {
        let o = new Error(l.message);
        (o.stack = ""), (n[r] = o);
      }
    } else n[r] = l;
  return n;
}
const Ud = P.createContext({ isTransitioning: !1 }),
  Yv = P.createContext(new Map()),
  Xv = "startTransition",
  tc = mp[Xv],
  Gv = "flushSync",
  nc = _m[Gv];
function Jv(e) {
  tc ? tc(e) : e();
}
function Rr(e) {
  nc ? nc(e) : e();
}
class Zv {
  constructor() {
    (this.status = "pending"),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === "pending" && ((this.status = "resolved"), t(r));
        }),
          (this.reject = (r) => {
            this.status === "pending" && ((this.status = "rejected"), n(r));
          });
      }));
  }
}
function qv(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = P.useState(n.state),
    [i, a] = P.useState(),
    [u, s] = P.useState({ isTransitioning: !1 }),
    [f, p] = P.useState(),
    [m, E] = P.useState(),
    [x, w] = P.useState(),
    C = P.useRef(new Map()),
    { v7_startTransition: d } = r || {},
    c = P.useCallback(
      (_) => {
        d ? Jv(_) : _();
      },
      [d]
    ),
    h = P.useCallback(
      (_, T) => {
        let {
          deletedFetchers: O,
          unstable_flushSync: F,
          unstable_viewTransitionOpts: Y,
        } = T;
        O.forEach((he) => C.current.delete(he)),
          _.fetchers.forEach((he, Ze) => {
            he.data !== void 0 && C.current.set(Ze, he.data);
          });
        let ve =
          n.window == null ||
          typeof n.window.document.startViewTransition != "function";
        if (!Y || ve) {
          F ? Rr(() => o(_)) : c(() => o(_));
          return;
        }
        if (F) {
          Rr(() => {
            m && (f && f.resolve(), m.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: Y.currentLocation,
                nextLocation: Y.nextLocation,
              });
          });
          let he = n.window.document.startViewTransition(() => {
            Rr(() => o(_));
          });
          he.finished.finally(() => {
            Rr(() => {
              p(void 0), E(void 0), a(void 0), s({ isTransitioning: !1 });
            });
          }),
            Rr(() => E(he));
          return;
        }
        m
          ? (f && f.resolve(),
            m.skipTransition(),
            w({
              state: _,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }))
          : (a(_),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: Y.currentLocation,
              nextLocation: Y.nextLocation,
            }));
      },
      [n.window, m, f, C, c]
    );
  P.useLayoutEffect(() => n.subscribe(h), [n, h]),
    P.useEffect(() => {
      u.isTransitioning && !u.flushSync && p(new Zv());
    }, [u]),
    P.useEffect(() => {
      if (f && i && n.window) {
        let _ = i,
          T = f.promise,
          O = n.window.document.startViewTransition(async () => {
            c(() => o(_)), await T;
          });
        O.finished.finally(() => {
          p(void 0), E(void 0), a(void 0), s({ isTransitioning: !1 });
        }),
          E(O);
      }
    }, [c, i, f, n.window]),
    P.useEffect(() => {
      f && i && l.location.key === i.location.key && f.resolve();
    }, [f, m, l.location, i]),
    P.useEffect(() => {
      !u.isTransitioning &&
        x &&
        (a(x.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: x.currentLocation,
          nextLocation: x.nextLocation,
        }),
        w(void 0));
    }, [u.isTransitioning, x]),
    P.useEffect(() => {}, []);
  let S = P.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (_) => n.navigate(_),
        push: (_, T, O) =>
          n.navigate(_, {
            state: T,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (_, T, O) =>
          n.navigate(_, {
            replace: !0,
            state: T,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n]
    ),
    L = n.basename || "/",
    v = P.useMemo(
      () => ({ router: n, navigator: S, static: !1, basename: L }),
      [n, S, L]
    );
  return P.createElement(
    P.Fragment,
    null,
    P.createElement(
      dl.Provider,
      { value: v },
      P.createElement(
        xu.Provider,
        { value: l },
        P.createElement(
          Yv.Provider,
          { value: C.current },
          P.createElement(
            Ud.Provider,
            { value: u },
            P.createElement(
              Iv,
              {
                basename: L,
                location: l.location,
                navigationType: l.historyAction,
                navigator: S,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              l.initialized || n.future.v7_partialHydration
                ? P.createElement(bv, {
                    routes: n.routes,
                    future: n.future,
                    state: l,
                  })
                : t
            )
          )
        )
      )
    ),
    null
  );
}
function bv(e) {
  let { routes: t, future: n, state: r } = e;
  return Pv(t, void 0, r, n);
}
const ey =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  ty = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ny = P.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: f,
        unstable_viewTransition: p,
      } = t,
      m = Id(t, $v),
      { basename: E } = P.useContext(on),
      x,
      w = !1;
    if (typeof s == "string" && ty.test(s) && ((x = s), ey))
      try {
        let h = new URL(window.location.href),
          S = s.startsWith("//") ? new URL(h.protocol + s) : new URL(s),
          L = Tt(S.pathname, E);
        S.origin === h.origin && L != null
          ? (s = L + S.search + S.hash)
          : (w = !0);
      } catch {}
    let C = Ev(s, { relative: l }),
      d = ly(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: f,
        relative: l,
        unstable_viewTransition: p,
      });
    function c(h) {
      r && r(h), h.defaultPrevented || d(h);
    }
    return P.createElement(
      "a",
      ar({}, m, { href: x || C, onClick: w || o ? r : c, ref: n, target: u })
    );
  }),
  ga = P.forwardRef(function (t, n) {
    let {
        "aria-current": r = "page",
        caseSensitive: l = !1,
        className: o = "",
        end: i = !1,
        style: a,
        to: u,
        unstable_viewTransition: s,
        children: f,
      } = t,
      p = Id(t, Vv),
      m = Uo(u, { relative: p.relative }),
      E = hl(),
      x = P.useContext(xu),
      { navigator: w, basename: C } = P.useContext(on),
      d = x != null && oy(m) && s === !0,
      c = w.encodeLocation ? w.encodeLocation(m).pathname : m.pathname,
      h = E.pathname,
      S =
        x && x.navigation && x.navigation.location
          ? x.navigation.location.pathname
          : null;
    l ||
      ((h = h.toLowerCase()),
      (S = S ? S.toLowerCase() : null),
      (c = c.toLowerCase())),
      S && C && (S = Tt(S, C) || S);
    const L = c !== "/" && c.endsWith("/") ? c.length - 1 : c.length;
    let v = h === c || (!i && h.startsWith(c) && h.charAt(L) === "/"),
      _ =
        S != null &&
        (S === c || (!i && S.startsWith(c) && S.charAt(c.length) === "/")),
      T = { isActive: v, isPending: _, isTransitioning: d },
      O = v ? r : void 0,
      F;
    typeof o == "function"
      ? (F = o(T))
      : (F = [
          o,
          v ? "active" : null,
          _ ? "pending" : null,
          d ? "transitioning" : null,
        ]
          .filter(Boolean)
          .join(" "));
    let Y = typeof a == "function" ? a(T) : a;
    return P.createElement(
      ny,
      ar({}, p, {
        "aria-current": O,
        className: F,
        ref: n,
        style: Y,
        to: u,
        unstable_viewTransition: s,
      }),
      typeof f == "function" ? f(T) : f
    );
  });
var wa;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(wa || (wa = {}));
var rc;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(rc || (rc = {}));
function ry(e) {
  let t = P.useContext(dl);
  return t || V(!1), t;
}
function ly(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      unstable_viewTransition: a,
    } = t === void 0 ? {} : t,
    u = kv(),
    s = hl(),
    f = Uo(e, { relative: i });
  return P.useCallback(
    (p) => {
      if (Bv(p, n)) {
        p.preventDefault();
        let m = r !== void 0 ? r : kn(s) === kn(f);
        u(e, {
          replace: m,
          state: l,
          preventScrollReset: o,
          relative: i,
          unstable_viewTransition: a,
        });
      }
    },
    [s, u, f, r, l, n, e, o, i, a]
  );
}
function oy(e, t) {
  t === void 0 && (t = {});
  let n = P.useContext(Ud);
  n == null && V(!1);
  let { basename: r } = ry(wa.useViewTransitionState),
    l = Uo(e, { relative: t.relative });
  if (!n.isTransitioning) return !1;
  let o = Tt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = Tt(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return pa(l.pathname, i) != null || pa(l.pathname, o) != null;
}
function iy() {
  const { logIn: e, status: t } = mu();
  return R.jsx("section", {
    className: "rounded-md bg-black/70 p-2 ",
    children: R.jsx("div", {
      className:
        "flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 h-screen",
      children: R.jsxs("div", {
        className: "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",
        children: [
          R.jsx("h2", {
            className: "text-2xl font-bold leading-tight text-black",
            children: "Sign in to your account",
          }),
          R.jsxs("p", {
            className: "mt-2text-sm text-gray-600 ",
            children: [
              "Don't have an account?",
              R.jsx("a", {
                href: "/signup",
                className:
                  "font-semibold text-black transition-all duration-200 hover:underline",
                children: "Create a free account",
              }),
            ],
          }),
          R.jsx("form", {
            className: "my-8",
            children: R.jsxs("div", {
              className: "space-y-5",
              children: [
                R.jsxs("div", {
                  children: [
                    R.jsxs("label", {
                      className: "text-base font-medium text-gray-900",
                      children: [" ", "Email address", " "],
                    }),
                    R.jsx("div", {
                      className: "mt-2",
                      children: R.jsx("input", {
                        className:
                          "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                        type: "email",
                        placeholder: "Email",
                        id: "Email",
                      }),
                    }),
                  ],
                }),
                R.jsxs("div", {
                  children: [
                    R.jsxs("div", {
                      className: "flex items-center justify-between",
                      children: [
                        R.jsxs("label", {
                          htmlFor: "",
                          className: "text-base font-medium text-gray-900",
                          children: [" ", "Password", " "],
                        }),
                        R.jsxs("a", {
                          href: "#",
                          title: "",
                          className:
                            "text-sm font-semibold text-black hover:underline",
                          children: [" ", "Forgot password?", " "],
                        }),
                      ],
                    }),
                    R.jsx("div", {
                      className: "mt-2",
                      children: R.jsx("input", {
                        className:
                          "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                        type: "password",
                        placeholder: "Password",
                        id: "Password",
                      }),
                    }),
                  ],
                }),
                R.jsx("div", {
                  children: R.jsxs("button", {
                    type: "button",
                    className:
                      "inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/60",
                    onClick: (n) => {
                      n.preventDefault();
                      let r = document.querySelector("#Email").value,
                        l = document.querySelector("#Password").value;
                      e(r, l);
                    },
                    children: [
                      "Get started ",
                      R.jsx(Sd, { className: "ml-2", size: 16 }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function ay() {
  const { signUp: e } = mu();
  return R.jsx("section", {
    className: "rounded-md bg-black/80 p-2",
    children: R.jsx("div", {
      className:
        "flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8",
      children: R.jsxs("div", {
        className: "xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md",
        children: [
          R.jsx("h2", {
            className: "text-2xl font-bold leading-tight text-black",
            children: "Sign up to create account",
          }),
          R.jsxs("p", {
            className: "mt-2 text-base text-gray-600",
            children: [
              "Already have an account?",
              " ",
              R.jsx("a", {
                href: "/signin",
                title: "",
                className:
                  "font-medium text-black transition-all duration-200 hover:underline",
                children: "Sign In",
              }),
            ],
          }),
          R.jsx("form", {
            action: "#",
            method: "POST",
            className: "mt-8",
            children: R.jsxs("div", {
              className: "space-y-5",
              children: [
                R.jsxs("div", {
                  children: [
                    R.jsxs("label", {
                      htmlFor: "name",
                      className: "text-base font-medium text-gray-900",
                      children: [" ", "Full Name", " "],
                    }),
                    R.jsx("div", {
                      className: "mt-2",
                      children: R.jsx("input", {
                        className:
                          "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                        type: "text",
                        placeholder: "Full Name",
                        id: "name",
                      }),
                    }),
                  ],
                }),
                R.jsxs("div", {
                  children: [
                    R.jsxs("label", {
                      htmlFor: "email",
                      className: "text-base font-medium text-gray-900",
                      children: [" ", "Email address", " "],
                    }),
                    R.jsx("div", {
                      className: "mt-2",
                      children: R.jsx("input", {
                        className:
                          "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                        type: "email",
                        placeholder: "Email",
                        id: "email",
                      }),
                    }),
                  ],
                }),
                R.jsxs("div", {
                  children: [
                    R.jsx("div", {
                      className: "flex items-center justify-between",
                      children: R.jsxs("label", {
                        htmlFor: "password",
                        className: "text-base font-medium text-gray-900",
                        children: [" ", "Password", " "],
                      }),
                    }),
                    R.jsx("div", {
                      className: "mt-2",
                      children: R.jsx("input", {
                        className:
                          "flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50",
                        type: "password",
                        placeholder: "Password",
                        id: "password",
                      }),
                    }),
                  ],
                }),
                R.jsx("div", {
                  children: R.jsxs("button", {
                    type: "button",
                    className:
                      "inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80",
                    onClick: (t) => {
                      t.preventDefault();
                      let n = document.querySelector("#name").value,
                        r = document.querySelector("#email").value,
                        l = document.querySelector("#password").value;
                      e({ name: n, email: r, password: l });
                    },
                    children: [
                      "Create Account ",
                      R.jsx(Sd, { className: "ml-2", size: 16 }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  });
}
function uy() {
  return R.jsx(R.Fragment, {
    children: R.jsxs("div", {
      className: "flex flex-col justify-center max-w-fit py-10 m-auto gap-10",
      children: [
        R.jsx(ga, {
          to: "/signin",
          children: R.jsxs("button", {
            type: "button",
            className:
              "inline-flex items-center gap-2 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700/80",
            children: [R.jsx(Tm, {}), "Sign In"],
          }),
        }),
        R.jsx(ga, {
          to: "/signup",
          children: R.jsxs("button", {
            type: "button",
            className:
              "inline-flex items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700/80",
            children: ["Sign Up", R.jsx(Lm, {})],
          }),
        }),
      ],
    }),
  });
}
function sy() {
  const { users: e } = mu();
  return R.jsx(R.Fragment, {
    children: R.jsx("div", {
      class:
        "relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl",
      children: R.jsxs("table", {
        class: "w-full text-left table-auto min-w-max",
        children: [
          R.jsx("thead", {
            children: R.jsxs("tr", {
              children: [
                R.jsx("th", {
                  class:
                    "p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center",
                  children: R.jsx("p", {
                    class:
                      "block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70",
                    children: "Name",
                  }),
                }),
                R.jsx("th", {
                  class:
                    "p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center",
                  children: R.jsx("p", {
                    class:
                      "block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70",
                    children: "Email",
                  }),
                }),
                R.jsx("th", {
                  class:
                    "p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center",
                  children: R.jsx("p", {
                    class:
                      "block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70",
                    children: "Password",
                  }),
                }),
              ],
            }),
          }),
          R.jsx("tbody", {
            children: e.map((t, n) =>
              R.jsxs(
                "tr",
                {
                  class: "even:bg-blue-gray-50/50 text-center ",
                  children: [
                    R.jsx("td", {
                      class: "p-4",
                      children: R.jsx("p", {
                        class:
                          "block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900",
                        children: t.name,
                      }),
                    }),
                    R.jsx("td", {
                      class: "p-4",
                      children: R.jsx("p", {
                        class:
                          "block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900",
                        children: t.email,
                      }),
                    }),
                    R.jsx("td", {
                      class: "p-4",
                      children: R.jsx("p", {
                        class:
                          "block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900",
                        children: t.password,
                      }),
                    }),
                  ],
                },
                n
              )
            ),
          }),
        ],
      }),
    }),
  });
}
function cy({ status: e }) {
  return e
    ? R.jsx(R.Fragment, {
        children: R.jsx("div", {
          className:
            "flex flex-col justify-center max-w-fit py-10 m-auto gap-10",
          children: R.jsx(ga, {
            to: "/signin",
            children: R.jsxs("button", {
              type: "button",
              className:
                "inline-flex items-center gap-2 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700/80",
              onClick: () => {
                setStatus(!1), console.log("mewoo");
              },
              children: ["LogOut", R.jsx(jm, {})],
            }),
          }),
        }),
      })
    : R.jsx(R.Fragment, { children: "mewwwooooo" });
}
const fy = Wv(
  ya(
    R.jsxs(R.Fragment, {
      children: [
        R.jsx(Dn, { path: "", element: R.jsx(uy, {}) }),
        R.jsx(Dn, { path: "signin", element: R.jsx(iy, {}) }),
        R.jsx(Dn, { path: "signup", element: R.jsx(ay, {}) }),
        R.jsx(Dn, { path: "admin", element: R.jsx(sy, {}) }),
        R.jsx(Dn, { path: "in", element: R.jsx(cy, {}) }),
      ],
    })
  )
);
function dy() {
  const [e, t] = P.useState([]),
    [n, r] = P.useState(!1),
    l = (a, u) => {
      e.map((s) => (s.email === a && s.password === u ? r(!0) : r(!1)));
    },
    o = () => {
      r(!1);
    },
    i = (a) => {
      t((u) => [a, ...u]), r(!1);
    };
  return (
    P.useEffect(() => {}, [n]),
    P.useEffect(() => {
      const a = JSON.parse(localStorage.getItem("users"));
      a && a.length > 0 && t(a);
    }, []),
    P.useEffect(() => {
      localStorage.setItem("users", JSON.stringify(e));
    }, [e]),
    R.jsx(Dm, {
      value: { users: e, logIn: l, logOut: o, signUp: i },
      children: R.jsx(qv, { router: fy }),
    })
  );
}
wi.createRoot(document.getElementById("root")).render(
  R.jsx(mc.StrictMode, { children: R.jsx(dy, {}) })
);
