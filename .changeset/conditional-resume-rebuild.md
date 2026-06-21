---
"@marko/runtime-tags": patch
---

Fix a conditional (`<if>`) rebuilding its first branch — discarding live DOM state — on the first re-evaluation after an SSR resume. The HTML serializer elides a conditional's renderer index when it is `0`, but the DOM runtime left that accessor uninitialized on resume, so the guard saw `0 !== undefined` and needlessly tore down and rebuilt the resumed branch. The runtime now treats a resumed scope's absent index as `0` (a freshly created scope still renders its first branch).
