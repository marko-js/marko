exports.templateData = {
  wait: (timeout) => new Promise((resolve) => setTimeout(resolve, timeout)),
};

exports.skip_vdom = true;
