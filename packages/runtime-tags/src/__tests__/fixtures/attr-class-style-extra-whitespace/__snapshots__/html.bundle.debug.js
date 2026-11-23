// styles.css.ts
const item = "x";
const on = "on";
const pair = "p q";

// template.marko
const $class = [_attr_class("a  b   d  e "), _attr_class(`a  b  ${"on"}`)];
const $class2 = [_attr_class("x"), _attr_class(`${"x"} ${"p q"}`)];
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on$1 = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}<div${_assert_class_toggles("a  b ", [`${"on"}  d  e `]), $class[on$1 ? 1 : 0]}></div>${_el_mark($scope0_id, "#div/1")}<div class=${on$1 ? "\"f g  h\"" : "\"f i\""}></div>${_el_mark($scope0_id, "#div/2")}<div${_assert_class_toggles("x", ["p q"]), $class2[on$1 ? 1 : 0]}></div>${_el_mark($scope0_id, "#div/3")}<div${_attr_style({ "color ": on$1 && "red" })}></div>${_el_mark($scope0_id, "#div/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { on: on$1 }, "__tests__/template.marko", 0, { on: "2:6" });
}, 1);
