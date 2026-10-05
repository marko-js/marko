// styles.css.ts
const box = "box";
const item = "item";
const on = "on";
const tone = { warn: "warn" };

// tags/input-toggle.marko
const $class$1 = [_attr_class(item), _attr_class(`${item} ${"on"}`)];
var input_toggle_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${$class$1[input.on ? 1 : 0]}></div>${_el_resume($scope0_id, "a", $wg__input_on)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// template.marko
const $class = _attr_class("box");
const $class2 = _attr_class("box");
const $class3 = _attr_class(`${item} lit ${tone.warn}`);
const $class4 = [_attr_class(item), _attr_class(`${item} ${"on"}`)];
const $class5 = [
	_attr_class(item),
	_attr_class(`${item} ${"on"}`),
	_attr_class(`${item} lit`),
	_attr_class(`${item} ${"on"} lit`)
];
const $class6 = ["", _attr_class("on")];
_attr_class("on");
_attr_class(item);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div${$class}></div><div${$class2}></div><div${$class3}></div><div${$class4[0]}></div>${_el_resume($scope0_id, "b")}<div${$class5[2]}></div>${_el_resume($scope0_id, "c")}<div${$class6[0]}></div>${_el_resume($scope0_id, "d")}<div${$class}></div>${_el_resume($scope0_id, "e")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	input_toggle_default({ on });
	_if(() => {}, $scope0_id, "g", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		h: on,
		f: _existing_scope($childScope)
	});
}, 1);
