import throwAggregateError from "../util/merge-errors";

// Deferring an error lets a compile stage keep going and report everything it
// finds at once (in the same aggregate form as parse errors) instead of
// aborting on the first mistake. Deferred errors are thrown at the end of the
// stage that deferred them; a stage may throw them earlier itself, eg to stop
// before follow-on work that assumes an error-free template.

const deferredErrors = new WeakMap();
const maxDeferredErrors = 8;

export function deferCompileError(path, error) {
  if (!(error instanceof Error)) throw error;
  const { file } = path.hub;
  let errors = deferredErrors.get(file);
  if (!errors) deferredErrors.set(file, (errors = []));
  if (errors.length >= maxDeferredErrors) return;
  // The message embeds the code frame, so an identical message is the same
  // error reached through a second path; reporting it twice adds nothing.
  for (const existing of errors) {
    if (existing.message === error.message) return;
  }
  errors.push(error);
}

export function throwDeferredCompileErrors(path) {
  const errors = deferredErrors.get(path.hub.file);
  if (errors) {
    deferredErrors.delete(path.hub.file);
    throwAggregateError(errors);
  }
}
