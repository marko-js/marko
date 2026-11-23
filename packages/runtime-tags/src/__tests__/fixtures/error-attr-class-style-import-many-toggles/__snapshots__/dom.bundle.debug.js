// template.marko
const $template = /*@__PURE__*/ (() => `<div class="${"x"}"></div>`)();
const $walks = " b";
const $setup = ($_) => {};
const $on = ($scope, on) => {
	_attr_class_names($scope["#div/0"], "x", on);
	_attr_class_items($scope["#div/0"], {
		a: on,
		b: on,
		c: on,
		d: on
	});
};
const $input = ($scope, input) => $on($scope, input.on);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// styles.css.ts
const item = "x";
const on = "x";
