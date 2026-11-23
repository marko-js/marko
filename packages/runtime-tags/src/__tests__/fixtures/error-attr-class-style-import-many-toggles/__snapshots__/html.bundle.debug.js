// styles.css.ts
const item = "x";
const on = "x";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attr_class(`${"x"}${input.on ? " a" : ""}${input.on ? " b" : ""}${input.on ? " c" : ""}${input.on ? " d" : ""}${input.on ? " " + "x" : ""}`)}></div>${_el_mark($scope0_id, "#div/0", _write_guard($scope0_reason, 0))}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
