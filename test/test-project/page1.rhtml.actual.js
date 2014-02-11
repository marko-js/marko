module.exports = function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      taglib_init_widgets_tag = require("../../taglib/init-widgets-tag");

  return function render(data, context) {
    context.i("./foo/view.rhtml", {}, require)
      .t(
        taglib_init_widgets_tag,
        {});
  };
}