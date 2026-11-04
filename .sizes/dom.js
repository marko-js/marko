iled(branch, awaitCounter);
    values.forEach(([, apply], promise) =>
      promise.then(
        (mod) =>
          (apply._ = mod._) &&
          !--remaining &&
          queueAsyncRender(branch, (branch) => {
            (create(), values.forEach(([value, apply]) => apply(branch, value)), insert());
          }),
        (error) => remaining > 0 && ((remaining = 0), fail(error)),
      ),
    );
  } else (create(), insert());
}
function loadFailed(scope, awaitCounter) {
  return (error) => {
    (awaitCounter && (awaitCounter.m ? (awaitCounter.i = 0) : awaitCounter.i && awaitCounter.c()),
      queueAsyncRender(scope, renderCatch, error));
  };
}
function _load_signal(load) {
  let pending,
    apply = (scope, value) => {
      ((pending ||= load()),
        scope.X || (!("X" in scope) && scope.H === runId)
          ? (scope.X ||= /* @__PURE__ */ new Map()).set(pending, [value, apply])
          : apply._
            ? apply._(scope, value)
            : pending.then((mod) => queueAsyncRender(scope, (apply._ = mod._), value), noop));
    };
  return apply;
}
function _load_visible_trigger(selector, options) {
  let pending, el;
  return (load) => (_) =>
    (pending ||= new Promise(
      (resolve) =>
        (el = getSelectorOrResolve(selector, resolve)) &&
        new IntersectionObserver(
          (entries, io) =>
            entries.some((entry) => entry.isIntersecting) && resolve(io.disconnect()),
          options,
        ).observe(el),
    )).then(load);
}
function _load_idle_trigger(options) {
  let pending;
  return (load) => (_) =>
    (pending ||= new Promise((resolve) =>
      (self.requestIdleCallback || resolve)(resolve, options),
    )).then(load);
}
function _load_event_trigger(event, selector) {
  let pending;
  return (load) => (_) =>
    (pending ||= new Promise((resolve) =>
      getSelectorOrResolve(selector, resolve)?.addEventListener(event, resolve, { once: !0 }),
    )).then(load);
}
function _load_media_trigger(query) {
  let pending, mql;
  return (load) => (_) =>
    (pending ||= new Promise((resolve) =>
      (mql = matchMedia(query)).matches
        ? resolve()
        : mql.addEventListener("change", resolve, { once: !0 }),
    )).then(load);
}
function _load_race_trigger(...triggers) {
  let pending;
  return (load) => (_) => (pending ||= Promise.race(triggers.map((t) => t(noop)()))).then(load);
}
function getSelectorOrResolve(selector, resolve) {
  return document.querySelector(selector) || resolve();
}
//#endregion
