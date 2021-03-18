var promise;
module.exports =
  typeof queueMicrotask === "function"
    ? queueMicrotask
    : typeof Promise === "function" && (promise = Promise.resolve())
    ? function (cb) {
        promise.then(cb).catch(rethrow);
      }
    : setTimeout;
function rethrow(err) {
  setTimeout(function () {
    throw err;
  });
}
