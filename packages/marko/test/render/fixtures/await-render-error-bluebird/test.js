var deferred = require("bluebird").defer();
const { promiseProvider } = require("../../../__util__/async-helpers");

promiseProvider(1).then(() => deferred.resolve({}));

exports.templateData = {
  promiseData: deferred.promise
};

exports.skip_vdom = true;
