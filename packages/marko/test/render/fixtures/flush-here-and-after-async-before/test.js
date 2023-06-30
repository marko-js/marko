exports.templateData = {
  wait: (timeout) => new Promise((resolve) => setTimeout(resolve, timeout)),
};

exports["fails_html ≅ vdom"] = true;
