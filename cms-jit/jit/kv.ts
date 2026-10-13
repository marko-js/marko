/**
 * The slice of Redis the JIT system uses, in memory. `maxBytes` evicts the
 * least frequently read keys first, like `maxmemory-policy allkeys-lfu`.
 */
export class MemoryKv {
  #entries = new Map<
    string,
    { value: string; expires: number; reads: number }
  >();
  #counters = new Map<string, { count: number; expires: number }>();
  #scores = new Map<string, Map<string, number>>();
  #bytes = 0;
  evictions = 0;

  constructor(
    private options: { maxBytes: number; latencyMs?: number } = {
      maxBytes: Infinity,
    },
  ) {}

  get bytes() {
    return this.#bytes;
  }

  async get(key: string) {
    await this.#roundTrip();
    const entry = this.#live(key);
    if (!entry) return undefined;
    entry.reads++;
    return entry.value;
  }

  /** `SET key value PX ttl [NX]`; returns false when `nx` finds the key taken. */
  async set(key: string, value: string, ttlMs: number, nx?: boolean) {
    await this.#roundTrip();
    if (nx && this.#live(key)) return false;
    this.#delete(key);
    this.#entries.set(key, { value, expires: Date.now() + ttlMs, reads: 0 });
    this.#bytes += value.length;
    this.#evict();
    return true;
  }

  /** `PEXPIRE`: sliding expiry for artifacts that keep getting read. */
  async touch(key: string, ttlMs: number) {
    const entry = this.#live(key);
    if (entry) entry.expires = Date.now() + ttlMs;
  }

  async del(key: string) {
    await this.#roundTrip();
    this.#delete(key);
  }

  /** `INCR` with a fixed window: the admission counter. */
  async incr(key: string, windowMs: number) {
    await this.#roundTrip();
    const now = Date.now();
    let counter = this.#counters.get(key);
    if (!counter || counter.expires <= now) {
      counter = { count: 0, expires: now + windowMs };
      this.#counters.set(key, counter);
    }
    return ++counter.count;
  }

  /** `ZINCRBY` on a decaying sorted set: the hot set. */
  async zincr(set: string, member: string, by = 1) {
    const scores = this.#scores.get(set) ?? new Map<string, number>();
    this.#scores.set(set, scores);
    scores.set(member, (scores.get(member) ?? 0) + by);
  }

  /** `ZREVRANGE set 0 count-1`. */
  async ztop(set: string, count: number) {
    await this.#roundTrip();
    return [...(this.#scores.get(set) ?? [])]
      .sort((a, b) => b[1] - a[1])
      .slice(0, count)
      .map(([member]) => member);
  }

  /** Halves every score so the hot set follows recent traffic. */
  async zdecay(set: string) {
    const scores = this.#scores.get(set);
    if (!scores) return;
    for (const [member, score] of scores) {
      if (score < 1) scores.delete(member);
      else scores.set(member, score / 2);
    }
  }

  #live(key: string) {
    const entry = this.#entries.get(key);
    if (entry && entry.expires <= Date.now()) {
      this.#delete(key);
      return undefined;
    }
    return entry;
  }

  #delete(key: string) {
    const entry = this.#entries.get(key);
    if (!entry) return;
    this.#bytes -= entry.value.length;
    this.#entries.delete(key);
  }

  #evict() {
    while (this.#bytes > this.options.maxBytes) {
      let victim: string | undefined;
      let fewest = Infinity;
      for (const [key, entry] of this.#entries) {
        if (entry.reads < fewest) {
          fewest = entry.reads;
          victim = key;
        }
      }
      this.#delete(victim!);
      this.evictions++;
    }
  }

  #roundTrip() {
    const { latencyMs } = this.options;
    return latencyMs
      ? new Promise<void>((resolve) => setTimeout(resolve, latencyMs))
      : Promise.resolve();
  }
}
