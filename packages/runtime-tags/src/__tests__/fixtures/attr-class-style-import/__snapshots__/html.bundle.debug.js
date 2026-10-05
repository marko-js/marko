// styles.css.ts
const box = "box";
const item = "item";
const on = "on";
const tone = { warn: "warn" };

// tags/input-toggle.marko
const $class$1 = [_attr_class(item), _attr_class(`${item} ${"on"}`)];
var input_toggle_default = _template("__tests__/tags/input-toggle.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<div${_assert_class_toggles(item, ["on"]), $class$1[input.on ? 1 : 0]}></div>${_el_resume($scope0_id, "#div/0", $wg__input_on)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/input-toggle.marko", 0);
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
const $class7 = _attr_class("on");
const $class8 = _attr_class(item);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let on$1 = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}<div${$class}></div><div${$class2}></div><div${$class3}></div><div${_assert_class_toggles(item, ["on"]), $class4[on$1 ? 1 : 0]}></div>${_el_resume($scope0_id, "#div/1")}<div${_assert_class_toggles(item, ["on", "lit"]), $class5[(on$1 ? 1 : 0) + (!on$1 ? 2 : 0)]}></div>${_el_resume($scope0_id, "#div/2")}<div${_assert_class_toggles("", ["on"]), $class6[on$1 ? 1 : 0]}></div>${_el_resume($scope0_id, "#div/3")}<div${on$1 ? $class7 : $class}></div>${_el_resume($scope0_id, "#div/4")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	input_toggle_default({ on: on$1 });
	_if(() => {
		if (on$1) {
			const $scope1_id = _scope_id();
			_html(`<span${$class8}></span>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "13:2");
			return 0;
		}
	}, $scope0_id, "#text/6", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on: on$1,
		"#childScope/5": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { on: "3:6" });
}, 1);
