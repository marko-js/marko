---
type: perf
impact: low
effort: low
site: packages/runtime-tags/src/translator/core/await.ts › translate
---

# Add a value kind for a promise so `<await>` can render a value that is never one as a plain branch

No kind says whether a value may be a promise: an object literal with no `then` key and no spread, computed key or `__proto__` that could bring one, an array, a string or a template never is one (`isPromise` asks for a `then` function), but `<await>` treats every value as one, and in the DOM always emits `_await_content` and `_await_promise` and imports `catch.feat`. The server's `_await` (`html/control-flow.ts`) already renders a non-promise in place. A "may be a promise" bit, split from `KIND_OBJECT` and set wherever the template cannot rule one out, would let `<await>` translate a value that is never a promise as a branch with no pending or catch wiring. The kind is cheap, one bit; such an `<await>` is unusual, so the win is small.

Check: `pnpm run compile -- -o dom -d` on `<const/user={ name: input.name }/><await|u|=user><b>${u.name}</b></await>` imports `catch.feat` and emits `_await_content` and `_await_promise`.
