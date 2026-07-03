// v:template.marko.module.css
var v_template_marko_module_default = "\n  .card { color: green }\n  .on { color: blue }\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_active = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const { active } = input;
	_html(`<div${_attr_class(`${_class_module_value(void 0, "card")}${active ? " " + _class_module_value(void 0, "on") : ""}`)}></div>${_el_resume($scope0_id, "#div/0", $sg__input_active)}<div${_attr_class(`${_class_module_value(void 0, "card")}${active ? " " + _class_module_value(void 0, "on") : ""}`)}></div>${_el_resume($scope0_id, "#div/1", $sg__input_active)}`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
