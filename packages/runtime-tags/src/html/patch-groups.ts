import { DIGEST_WIDTH } from "../common/value-claims";
import { regionDigest } from "./region-digest";
// C-track value groups (server-only). A patch's serialized value props are
// attributed to groups (top-level branch subtrees under the patch root;
// group 0 is the root/globals). Each group accumulates canonical entries —
// shared-value emissions (def and alias sites alike) replaced by the
// value's canonical hash, register splices stripped by exact position —
// and digests to 96 bits at completion. A group the request's echo claims
// at today's digest ships no value props or group effects; structural props
// always ship, and a claim mismatch flushes the withheld props as late
// frames. The codec here is the whole codec: the router and carrier
// transport these strings verbatim.
import type { PatchFlushHooks } from "./serializer";

export const FEEDBACK_PREFIX = "//E1:";

/** One withheld value prop (or effect) of a claimed group. */
export interface DeferredProp {
  scopeId: number;
  group: string;
  /** Scope ids this text references (root/globals excluded); a shipped
   * prop's ref into a hit group's interior force-misses that group. */
  refs?: number[];
  /** Owner-keyed span: exempt from the force-miss closure (an unresolved
   * serialized owner falls back to the compiled chain). */
  owner?: 1;
  /** Deferred only for ordering (its text references a claimed group's
   * scope): ships unconditionally at drain. */
  forceShip?: 1;
  /** Emission order across the response; late flushes preserve it. */
  seq: number;
  /** Emitted text (`key:value`, alias tokens intact), or an effect
   * registry id when `effect` is set. */
  text: string;
  /** The ready channel the prop rode; late flushes must ride it too. */
  readyId?: string;
  /** Alias defs this text references whose defining props are deferred:
   * if this ships, they must ship (in seq order) — the drain closure. */
  deps?: DeferredProp[];
  /** Left the store early (pin rule) or was drained; never re-emitted. */
  taken?: boolean;
}

export interface PatchGroupsState {
  claims: Map<string, string>;
  /** group key -> canonical `S\0scope\0key\0text` entries (sorted at end). */
  entries: Map<string, string[]>;
  deferred: DeferredProp[];
  /** scopeId -> group key, recorded at first write. */
  groupOfScope: Map<number, string>;
  /** group key -> this response's branch scope id (G-frame addressing). */
  groupBranchScope: Map<string, number>;
  /** Canonical hash memo for shared (aliased) values. */
  valueHash: WeakMap<WeakKey, string>;
  /** Same, for deduped strings (primitives cannot key the WeakMap). */
  strHash: Map<string, string>;
  /** value -> the deferred entry whose span first emitted it. */
  divertedDefOf: WeakMap<WeakKey, DeferredProp>;
  /** Same, for deduped strings (primitives cannot key the WeakMap). */
  strDivertedDefOf: Map<string, DeferredProp>;
  /** group key -> enclosing group key (missed-forest dispatch roots). */
  parentOf: Map<string, string>;
  /** site+path -> occurrences so far; sibling instances of one site get
   * an `~n` suffix (deterministic under stable render order — a shifted
   * occurrence only ever misses). */
  siteSeen: Map<string, number>;
  /** `scopeId\0key` pairs whose values are client-owned state seeds
   * (construct-only material): their values stay out of digests. */
  seedProps: Set<string>;
  /** Scope ids referenced by live-shipped (never deferred) spans. */
  liveRefs: Set<number>;
  /** Groups that shipped live spans this response (their completion
   * dispatch may need a bare G entry when their parent chain holds). */
  streamed: Set<string>;
  /** Drain/feedback share one canonicalization per response. */
  ranksCache?: Map<number, number>;
  digestCache?: Map<string, string>;
  /** Response-local region id (";N") -> markup digest. Fresh-construct
   * region ids carry no content, so canonical entries referencing them
   * substitute the region's markup digest — otherwise two responses whose
   * regions differ only in markup would digest identically. */
  regionContent: Map<string, string>;
  seq: number;
}

export function createPatchGroups(
  echoValues: string | undefined,
): PatchGroupsState {
  return {
    // The completion line applies every missed group's fills before any
    // dispatch (one transaction), so a claimed group defers whole — no
    // ordering classes to carve out.
    claims: decodeClaims(echoValues),
    entries: new Map(),
    deferred: [],
    groupOfScope: new Map(),
    groupBranchScope: new Map(),
    valueHash: new WeakMap(),
    strHash: new Map(),
    divertedDefOf: new WeakMap(),
    strDivertedDefOf: new Map(),
    parentOf: new Map(),
    siteSeen: new Map(),
    seedProps: new Set(),
    liveRefs: new Set(),
    streamed: new Set(),
    regionContent: new Map(),
    seq: 0,
  };
}

/** The serializer-facing handler: classifies each flush's prop spans,
 * feeds canonical group entries, and diverts claimed groups' elidable
 * value props into the deferred store. */
export function createFlushHandler(groups: PatchGroupsState): PatchFlushHooks {
  const defOf = (value: unknown) =>
    typeof value === "string"
      ? groups.strDivertedDefOf.get(value)
      : groups.divertedDefOf.get(value as WeakKey);
  return {
    flush(facts) {
      const {
        buf,
        spans,
        reuseAt,
        scopeRefs,
        defSplices,
        defValueAt,
        strEmitAt,
        pinned,
        newRefs,
        readyId,
      } = facts;
      const refAt = new Map<number, { value: WeakKey; endPos: number }>();
      for (const ref of newRefs) {
        if (ref.pos !== null && ref.endPos !== null) {
          refAt.set(ref.pos, { value: ref.value, endPos: ref.endPos });
        }
      }

      // Canonical piece text: def splices stripped by exact position,
      // shared-value emissions — def and alias sites alike — replaced by
      // the value's canonical hash. Symmetry is the point: whichever
      // group happens to hold a shared value's first use must digest
      // identically to its aliasing peers, or a def-site migration
      // (a list prepend claiming first-use) flips unchanged groups.
      const hashing = new Set<WeakKey>();
      const canonicalPiece = (i: number, depth: number): string => {
        const reused = reuseAt.get(i);
        if (reused !== undefined) {
          return "@" + valueHash(reused, depth);
        }
        const strEmit = strEmitAt.get(i);
        if (strEmit !== undefined) {
          return "@" + valueHash(strEmit, depth);
        }
        // A scope ref becomes a placeholder token resolved at digest time
        // (a group's rank map is only complete once all its scopes are
        // seen): identity — target group key plus in-group rank — replaces
        // the response-local id, making digests shift-invariant.
        const refScope = scopeRefs.get(i);
        if (refScope !== undefined) {
          return "\x01R" + refScope + "\x01";
        }
        const splice = defSplices.get(i);
        const piece = buf[i];
        const text = splice
          ? piece.slice(splice[0], piece.length - splice[1])
          : piece;
        // `quote` leaves \x01 unescaped, so raw user text could forge a
        // ref token; rewrite it to the text form (collision with a literal
        // "\x01" string is theoretical and only ever a same-shape miss).
        return text.indexOf("\x01") < 0 ? text : text.replace(/\x01/g, "\\x01");
      };
      // Scope refs pair by response-local rank at drain; collapsing a
      // ref-bearing emission to a hash would freeze absolute ids inside
      // it, so only scope-free emissions collapse (the rest keep the
      // expanded walk whose \x01R tokens rank-resolve per group).
      const scopeFree = (start: number, end: number) => {
        for (let i = start; i < end; i++) {
          if (scopeRefs.has(i)) return false;
        }
        return true;
      };
      const canonicalRange = (start: number, end: number, depth: number) => {
        let text = "";
        for (let i = start; i < end; i++) {
          const emit = refAt.get(i);
          if (
            emit !== undefined &&
            emit.endPos <= end &&
            // Inside its own hash walk the emission expands (the hash IS
            // its expanded content — what alias sites digest).
            !hashing.has(emit.value) &&
            scopeFree(i, emit.endPos)
          ) {
            text += "@" + valueHash(emit.value, depth);
            i = emit.endPos - 1;
            continue;
          }
          text += canonicalPiece(i, depth);
        }
        // A user string that happens to look like a region id substitutes
        // too; both responses substitute alike, so at worst it misses.
        return groups.regionContent.size
          ? text.replace(
              /";\d+"/g,
              (id) => groups.regionContent.get(id.slice(1, -1)) || id,
            )
          : text;
      };
      const valueHash = (value: WeakKey | string, depth: number): string => {
        if (typeof value === "string") {
          let hash = groups.strHash.get(value);
          if (!hash) groups.strHash.set(value, (hash = regionDigest(value)));
          return hash;
        }
        const memo = groups.valueHash.get(value);
        if (memo) return memo;
        const ref = firstEmission.get(value);
        // An unseen or too-deep value keeps a positionally unstable token;
        // the digest then misses, which only ever ships more.
        if (!ref || depth >= 8 || hashing.has(value)) return "?";
        hashing.add(value);
        const hash = regionDigest(
          canonicalRange(ref.pos, ref.endPos, depth + 1),
        );
        hashing.delete(value);
        groups.valueHash.set(value, hash);
        return hash;
      };
      const firstEmission = new Map<WeakKey, { pos: number; endPos: number }>();
      for (const [pos, ref] of refAt) {
        firstEmission.set(ref.value, { pos, endPos: ref.endPos });
      }

      // Pass 1: canonical entries + divert decisions.
      if (process.env.PATCH_GROUPS_DEBUG) {
        console.error(
          "[pg] flush spans=%d claims=%s groups=%s",
          spans.length,
          [...groups.claims.keys()].join(","),
          spans
            .map(
              (s) =>
                s.scopeId +
                ":" +
                (groups.groupOfScope.get(s.scopeId) ?? "?") +
                s.key,
            )
            .join(" "),
        );
      }
      const diverted: (typeof spans)[number][] = [];
      const divertedBySpanStart = new Map<number, DeferredProp>();
      // Spans and recorded positions both ascend through the flush buffer;
      // two-pointer walks keep ref collection linear.
      const refList = [...scopeRefs];
      const emissionList = [...refAt];
      let refCursor = 0;
      let emissionCursor = 0;
      for (const span of spans) {
        // Each global is its own group ("$"-prefixed): globals apply by
        // plain assignment (no dispatch), so one changed global — the
        // cart — must not re-ship the rest of the root group.
        const group =
          span.scopeId === 0
            ? "$" + span.key
            : groups.groupOfScope.get(span.scopeId) || "0";
        const value = canonicalRange(span.start + 1, span.end, 0);
        let entries = groups.entries.get(group);
        if (!entries) groups.entries.set(group, (entries = []));
        // A state-sourced seed (marked at its compiled write site) is
        // construct-only material: matched scopes own that state and
        // ignore server seeds, and constructs only follow misses — so its
        // VALUE stays out of the digest. Otherwise a shared mutable value
        // (the cart, serialized once and aliased everywhere) would flip
        // every referencing group on every change. Request-derived values
        // (delivered through update signals even when matched) and
        // ref-bearing values keep full content identity.
        entries.push(
          groups.seedProps.has(span.scopeId + "\0" + span.key) &&
            value.indexOf("\x01") < 0
            ? "K\0" + span.scopeId + "\0" + span.key
            : "S\0" + span.scopeId + "\0" + span.key + "\0" + value,
        );

        // Scope refs in range (root and globals excluded — both have
        // fixed pairings). An Owner-keyed span is exempt from ordering
        // rules: constructBranch's compile-chain fallback makes an
        // unresolved serialized owner safe, and owner edges into parent
        // interiors would otherwise avalanche misses up the tree.
        const ownerKey = span.key === "_" || span.key === '"_"';
        let refs: number[] | undefined;
        let refsClaimed = false;
        while (
          refCursor < refList.length &&
          refList[refCursor][0] <= span.start
        ) {
          refCursor++;
        }
        for (
          let i = refCursor;
          i < refList.length && refList[i][0] < span.end;
          i++
        ) {
          const id = refList[i][1];
          if (id > 1) {
            (refs ||= []).push(id);
            if (!refsClaimed && !ownerKey) {
              const targetGroup = groups.groupOfScope.get(id) || "0";
              refsClaimed =
                targetGroup !== group && groups.claims.has(targetGroup);
            }
          }
        }

        // A claimed group defers whole: the completion line lands all of
        // its fills before its dispatch, so no prop is order-coupled.
        // The co-divert rule: a span referencing a CLAIMED group's scope
        // defers too, whatever its own group — no referencing byte leaves
        // before the drain decides the target's fate. (Def-spliced spans
        // divert with their group; live reuses pin them back out.)
        const ownClaimed = groups.claims.has(group);
        if (ownClaimed || refsClaimed) {
          const entry: DeferredProp = {
            scopeId: span.scopeId,
            group,
            seq: groups.seq++,
            text: emittedText(buf, span),
            readyId,
            refs,
            owner: ownerKey ? 1 : undefined,
            forceShip: ownClaimed ? undefined : 1,
          };
          // Deferred text referencing a deferred def: drain must ship
          // the def with it (the oracle's Rule 4) whatever group the def
          // sits in — a hit def group would otherwise strand the alias.
          for (let i = span.start + 1; i < span.end; i++) {
            const reused = reuseAt.get(i);
            if (reused !== undefined) {
              const def = defOf(reused);
              if (def && def !== entry) (entry.deps ||= []).push(def);
            }
          }
          groups.deferred.push(entry);
          diverted.push(span);
          divertedBySpanStart.set(span.start, entry);
          // First emissions and same-flush def splices inside the span
          // leave the live stream: record them for reuse-site pinning and
          // drain-time dep closure.
          while (
            emissionCursor < emissionList.length &&
            emissionList[emissionCursor][0] <= span.start
          ) {
            emissionCursor++;
          }
          for (
            let i = emissionCursor;
            i < emissionList.length && emissionList[i][0] < span.end;
            i++
          ) {
            groups.divertedDefOf.set(emissionList[i][1].value, entry);
          }
          for (const [piece, value] of defValueAt) {
            if (piece >= span.start && piece < span.end) {
              if (typeof value === "string") {
                groups.strDivertedDefOf.set(value, entry);
              } else {
                groups.divertedDefOf.set(value as WeakKey, entry);
              }
            }
          }
          // Every dedup-length string emitted here leaves the live
          // stream with the span — registered whether or not a same-flush
          // reuse already assigned it, so a later live flush's alias can
          // pin this def instead of dangling on its register. First
          // registration wins: only the first emission carries (or can
          // receive) the register assignment; a channel-blind re-emission
          // of the same string must not retarget the pin.
          for (const [piece, value] of strEmitAt) {
            if (
              piece >= span.start &&
              piece < span.end &&
              !groups.strDivertedDefOf.has(value)
            ) {
              groups.strDivertedDefOf.set(value, entry);
            }
          }
        } else {
          groups.streamed.add(group);
          if (refs) for (const id of refs) groups.liveRefs.add(id);
          // A live span reusing a diverted def pins the def back into the
          // live stream (recursively through its deps) — the alias token
          // in this text must evaluate against a shipped assignment.
          for (let i = span.start + 1; i < span.end; i++) {
            const reused = reuseAt.get(i);
            if (reused !== undefined) {
              const def = defOf(reused);
              if (def) pinProp(def, pinned);
            }
          }
        }
      }

      // Pass 2: blank diverted pieces and fix separators per scope.
      const firstKeptFixed = new Set<number>();
      for (const span of diverted) {
        for (let i = span.start; i < span.end; i++) buf[i] = "";
      }
      for (const span of spans) {
        if (divertedBySpanStart.has(span.start)) continue;
        if (firstKeptFixed.has(span.scopeId)) continue;
        firstKeptFixed.add(span.scopeId);
        if (span.hadSep) {
          // An earlier (diverted) sibling contributed the leading comma.
          const hadDivertedBefore = spans.some(
            (other) =>
              other.scopeId === span.scopeId &&
              other.start < span.start &&
              divertedBySpanStart.has(other.start),
          );
          if (hadDivertedBefore) buf[span.start] = buf[span.start].slice(1);
        }
      }
    },
  };

  // Confirms a reuse-site pin: the prop (and, transitively, the deferred
  // defs its own text references) ships live after all, so its refs count
  // like any live span's — hit anchors it names still enter the pairing
  // table and interior targets still force-miss.
  function pinProp(prop: DeferredProp, pinned: string[]) {
    if (prop.taken) return;
    prop.taken = true;
    if (prop.deps) for (const dep of prop.deps) pinProp(dep, pinned);
    if (prop.refs) for (const id of prop.refs) groups.liveRefs.add(id);
    // A pinned co-diverted (unclaimed) prop streams after all: its group
    // must stay reachable in the dispatch forest.
    if (prop.forceShip) groups.streamed.add(prop.group);
    pinned.push(fillsExpression([prop]));
  }
}

function emittedText(
  buf: string[],
  span: { start: number; end: number; hadSep: boolean },
) {
  let text = "";
  for (let i = span.start; i < span.end; i++) text += buf[i];
  return span.hadSep ? text.slice(1) : text;
}

/** One fills expression applying the given props (already `key:value`
 * text) grouped per scope, in the given order. */
function fillsExpression(props: DeferredProp[]) {
  let out = "";
  let openScope = -1;
  for (const prop of props) {
    if (prop.scopeId === openScope) {
      out += "," + prop.text;
    } else {
      // One arrow per scope is LOAD-BEARING, not framing: drained props
      // from later flushes alias earlier scopes' applied values by access
      // path (`_(6)["Nsrc:a"]`), so each scope's fills must APPLY before
      // the next scope's expressions evaluate. A merged signed-skip run
      // (the live writer's grammar) evaluates every slot object in one
      // expression, before any assignment.
      out +=
        (openScope === -1 ? "[" : "}],(_,$)=>[") +
        prop.scopeId +
        ",{" +
        prop.text;
      openScope = prop.scopeId;
    }
  }
  // `$` is the serializer's undefined placeholder: bound (to nothing) so
  // diverted texts that reference it evaluate exactly as they would have
  // in their original frame.
  return out && "(_,$)=>" + out + "}]";
}

/** Drains the deferred store at boundary completion: claimed groups whose
 * final digest matches drop their props; the rest flush late, defs pulled
 * in by the dep closure, in emission order, ready-batch content under its
 * readyId. Returns the late frame body (comma sequence) or "". */
export function drainDeferred(groups: PatchGroupsState) {
  const ranks = (groups.ranksCache ??= buildRanks(groups));
  const missed = new Set<string>();
  for (const [group, claim] of groups.claims) {
    const entries = groups.entries.get(group);
    if (!entries || groupDigest(group, entries, groups, ranks) !== claim) {
      missed.add(group);
    }
    if (process.env.PATCH_GROUPS_DEBUG) {
      console.error(
        "[pg] drain group=%s claim=%s digest=%s entries=%s",
        group.slice(-12),
        claim,
        entries && groupDigest(group, entries, groups, ranks),
        JSON.stringify(entries),
      );
    }
  }

  // Force-miss closure: a shipping (or already live-shipped — pinned
  // spans punch through co-divert) ref into a hit group's
  // INTERIOR (its anchor pairs by identity instead, and owner-keyed spans
  // fall back to the compiled chain) flips that group to missed,
  // transitively. Live-shipped refs applied hollow on early lines; the
  // forced completion dispatch re-merges the target over them.
  for (let changed = 1; changed;) {
    changed = 0;
    for (const id of groups.liveRefs) {
      const targetGroup = groups.groupOfScope.get(id) || "0";
      if (
        groups.claims.has(targetGroup) &&
        !missed.has(targetGroup) &&
        id !== groups.groupBranchScope.get(targetGroup)
      ) {
        missed.add(targetGroup);
        changed = 1;
        if (process.env.PATCH_GROUPS_DEBUG) {
          console.error(
            "[pg] force-miss %s <- live (scope %d interior)",
            targetGroup.slice(-16),
            id,
          );
        }
      }
    }
    for (const prop of groups.deferred) {
      if (
        prop.taken ||
        prop.owner ||
        !prop.refs ||
        !(missed.has(prop.group) || prop.forceShip)
      ) {
        continue;
      }
      for (const id of prop.refs) {
        const targetGroup = groups.groupOfScope.get(id) || "0";
        if (
          targetGroup !== prop.group &&
          groups.claims.has(targetGroup) &&
          !missed.has(targetGroup) &&
          id !== groups.groupBranchScope.get(targetGroup)
        ) {
          missed.add(targetGroup);
          changed = 1;
          if (process.env.PATCH_GROUPS_DEBUG) {
            console.error(
              "[pg] force-miss %s <- %s (scope %d interior)",
              targetGroup.slice(-16),
              prop.group.slice(-16),
              id,
            );
          }
        }
      }
    }
  }

  const ship = new Set<DeferredProp>();
  const add = (prop: DeferredProp) => {
    if (prop.taken || ship.has(prop)) return;
    ship.add(prop);
    if (prop.deps) for (const dep of prop.deps) add(dep);
  };
  for (const prop of groups.deferred) {
    if (!prop.taken && (missed.has(prop.group) || prop.forceShip)) add(prop);
  }
  if (!ship.size && !groups.claims.size) return "";

  const ordered = [...ship].sort((a, b) => a.seq - b.seq);
  const plain: DeferredProp[] = [];
  const byReady = new Map<string, DeferredProp[]>();
  // Missed groups shipping content; a lazy group's dispatch parks with
  // the batch that carries its last fill.
  const shipped = new Set<string>();
  const lastReadyOf = new Map<string, string>();
  for (const prop of ordered) {
    prop.taken = true;
    // Dep-pulled props of HIT groups ship as pure alias defs: they must
    // not mark their group dispatchable (that would suppress children's
    // direct entries while the group's other props stay elided).
    if (missed.has(prop.group) || prop.forceShip) shipped.add(prop.group);
    if (prop.readyId) {
      let list = byReady.get(prop.readyId);
      if (!list) byReady.set(prop.readyId, (list = []));
      list.push(prop);
      lastReadyOf.set(prop.group, prop.readyId);
    } else {
      plain.push(prop);
      lastReadyOf.delete(prop.group);
    }
  }

  // Dispatch roots: a shipped (or streamed) parent's walk reaches its
  // children through its own structural props, so only groups whose
  // parent chain neither ships nor streams — a hit parent's walk never
  // runs — dispatch directly through their anchors. Streamed groups
  // under a hit parent get a bare entry: their fills applied on earlier
  // lines, and nothing else will ever dispatch them. Root first: its
  // merge pairs the scopes the others resolve owners through.
  const gByReady = new Map<string, string>();
  let gTop = "";
  const dispatchable = new Set(shipped);
  for (const group of groups.streamed) dispatchable.add(group);
  for (const group of [...dispatchable].sort((a, b) =>
    a === "0" ? -1 : b === "0" ? 1 : 0,
  )) {
    // Globals need no dispatch: their fills assign directly.
    if (group[0] === "$") continue;
    // A SHIPPED group's fills exist only at completion, so only a parent
    // that also ships (and therefore walks at completion) absorbs it — a
    // merely-streamed parent walked on earlier lines, too early. A
    // streamed-only group's fills applied early, so any walked parent
    // (shipped or streamed) absorbs it; only a hit parent chain leaves
    // it undispatched (bare entry).
    const parent = groups.parentOf.get(group) || "0";
    if (group === "0") {
      if (!shipped.has("0")) continue;
    } else if (shipped.has(group)) {
      if (shipped.has(parent)) continue;
    } else if (shipped.has(parent) || groups.streamed.has(parent)) {
      continue;
    }
    const entry =
      ",[1," +
      JSON.stringify(group) +
      "," +
      (group === "0" ? 1 : groups.groupBranchScope.get(group)) +
      "]";
    const readyId = lastReadyOf.get(group);
    if (readyId) gByReady.set(readyId, (gByReady.get(readyId) || "") + entry);
    else gTop += entry;
  }

  let out = fillsExpression(plain);
  for (const [readyId, props] of byReady) {
    out +=
      (out && ",") +
      "[" +
      JSON.stringify(readyId) +
      "," +
      fillsExpression(props) +
      (gByReady.get(readyId) || "") +
      "]";
  }
  if (gTop) out += out ? gTop : gTop.slice(1);

  // The anchor-pairing table: for every group still HIT whose anchor
  // scope this response references (from shipped or live-streamed
  // content), pair the response-local placeholder to the live anchor by
  // key — identity resolution replacing any memory of prior numbering.
  const referenced = new Set(groups.liveRefs);
  for (const prop of ordered) {
    if (prop.refs) for (const id of prop.refs) referenced.add(id);
  }
  let table = "";
  for (const [group, branchId] of groups.groupBranchScope) {
    if (
      groups.claims.has(group) &&
      !missed.has(group) &&
      referenced.has(branchId)
    ) {
      table += "," + branchId + "," + JSON.stringify(group);
    }
  }
  if (table) out += (out && ",") + "[2" + table + "]";
  return out;
}

/** Fixed-width digests make the codec textual: entries are
 * `<escaped group key><16-char digest>` joined by `.` (keys escape `%`
 * and `.`). Malformed input is a miss, never an error. */
export function decodeClaims(value: string | undefined) {
  const claims = new Map<string, string>();
  if (value) {
    for (const entry of value.split(".")) {
      if (entry.length <= DIGEST_WIDTH) return new Map<string, string>();
      claims.set(
        unescapeKey(entry.slice(0, -DIGEST_WIDTH)),
        entry.slice(-DIGEST_WIDTH),
      );
    }
  }
  return claims;
}

function escapeKey(key: string) {
  return key.replace(/%/g, "%25").replace(/\./g, "%2E");
}

function unescapeKey(key: string) {
  return key.replace(/%2E/g, ".").replace(/%25/g, "%");
}

// The client merges this into its committed store, redeemed whole via the
// claim-set id or shed to the carrier's field on E1; shedding only misses.
// Fixed protocol constant — keep in lockstep with run's `echoValuesCap`.
export const FEEDBACK_CAP = 720;

export function encodeFeedback(groups: PatchGroupsState) {
  // The root group carries the most value; the rest keep the largest
  // groups (canonical byte mass — the best proxy for elidable bytes)
  // while they fit.
  const entries = [...groups.entries].sort(
    (a, b) =>
      (a[0] === "0" ? -1 : b[0] === "0" ? 1 : 0) ||
      byteMass(b[1]) - byteMass(a[1]),
  );
  const ranks = (groups.ranksCache ??= buildRanks(groups));
  let out = "";
  for (const [key, groupEntries] of entries) {
    // Delta feedback: the client merges, so a digest the request already
    // claimed correctly needs no restating — an absent line (or entry)
    // means keep. Hit groups therefore cost nothing at steady state.
    if (
      process.env.PATCH_GROUPS_DEBUG_GROUP &&
      key.includes(process.env.PATCH_GROUPS_DEBUG_GROUP)
    ) {
      console.error(
        "[pg] canon %s %s digest=%s %s",
        groups.claims.get(key) === groupDigest(key, groupEntries, groups, ranks)
          ? "HIT "
          : "miss",
        key,
        groupDigest(key, groupEntries, groups, ranks),
        JSON.stringify(
          groupEntries.map((entry) =>
            canonicalEntry(entry, key, groups, ranks),
          ),
        ),
      );
    }
    if (
      groups.claims.get(key) === groupDigest(key, groupEntries, groups, ranks)
    ) {
      continue;
    }
    const next =
      (out && ".") +
      escapeKey(key) +
      groupDigest(key, groupEntries, groups, ranks);
    if (out.length + next.length > FEEDBACK_CAP) continue;
    out += next;
  }
  return out && FEEDBACK_PREFIX + out;
}

function byteMass(entries: string[]) {
  let total = 0;
  for (const entry of entries) total += entry.length;
  return total;
}

/** Per-group rank of each scope id (ascending): an external structural
 * change offsets every later id uniformly, preserving intra-group order,
 * so ranks — unlike ids — are shift-invariant. */
export function buildRanks(groups: PatchGroupsState) {
  const byGroup = new Map<string, number[]>();
  for (const [id, group] of groups.groupOfScope) {
    let list = byGroup.get(group);
    if (!list) byGroup.set(group, (list = []));
    list.push(id);
  }
  const ranks = new Map<number, number>();
  for (const list of byGroup.values()) {
    list.sort((a, b) => a - b);
    for (let i = 0; i < list.length; i++) ranks.set(list[i], i);
  }
  return ranks;
}

/** Resolves an entry's absolute ids to identity: the leading scope id
 * becomes its in-group rank, and each \x01R<id>\x01 ref token becomes
 * `#<rank>` (same group), `@R`/`@G` (root/globals), or a length-prefixed
 * `@<len>:<key>#<rank>` cross-group token. An unattributed target yields
 * a deliberately unstable token — the referencing group always misses. */
function canonicalEntry(
  entry: string,
  group: string,
  groups: PatchGroupsState,
  ranks: Map<number, number>,
) {
  const idEnd = entry.indexOf("\0", 2);
  const scopeId = +entry.slice(2, idEnd);
  if (entry[0] === "K") {
    return (
      "K\0" +
      (scopeId === 0 ? "G" : (ranks.get(scopeId) ?? "?" + scopeId)) +
      entry.slice(idEnd)
    );
  }
  return (
    "S\0" +
    (scopeId === 0 ? "G" : (ranks.get(scopeId) ?? "?" + scopeId)) +
    entry.slice(idEnd)
  ).replace(/\x01R(\d+)\x01/g, (_raw, idText: string) => {
    const id = +idText;
    if (id === 0) return "@G";
    if (id === 1) return "@R";
    const targetGroup = groups.groupOfScope.get(id);
    const rank = ranks.get(id);
    if (targetGroup === undefined || rank === undefined) return "@?" + id;
    if (targetGroup === group) return "#" + rank;
    return "@" + targetGroup.length + ":" + targetGroup + "#" + rank;
  });
}

export function groupDigest(
  group: string,
  entries: string[],
  groups: PatchGroupsState,
  ranks: Map<number, number>,
) {
  const cache = (groups.digestCache ??= new Map());
  let digest = cache.get(group);
  if (digest === undefined) {
    digest = regionDigest(
      entries
        .map((entry) => canonicalEntry(entry, group, groups, ranks))
        .sort()
        .join("\n"),
    ).slice(0, DIGEST_WIDTH);
    cache.set(group, digest);
  }
  return digest;
}
