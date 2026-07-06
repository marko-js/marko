// styles.module.css
var styles_module_default = ".card {\n  color: green;\n}\n.on {\n  color: blue;\n}\n.a {\n  color: red;\n}\n.b {\n  color: teal;\n}\n";

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_active = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { active, x, y } = input;
	_html(`<div${_attr_class(`${_class_module_value(styles_module_default.card, "card")}${active ? " " + _class_module_value(styles_module_default.on, "on") : ""}`)}></div>${_el_resume($scope0_id, "#div/0", $sg__input_active)}<div${_attr_class(active ? _class_module_value(styles_module_default.on, "on") : "")}></div>${_el_resume($scope0_id, "#div/1", $sg__input_active)}<div${_attr_class([x && _class_module_value(styles_module_default.a, "a"), y && _class_module_value(styles_module_default.b, "b")])}></div>${_el_resume($scope0_id, "#div/2", _serialize_guard($scope0_reason, 0))}<div${_attr_class(`${_class_module_value(styles_module_default.card, "card")}${active ? " " + _class_module_value(styles_module_default.on, "on") : ""}`)}></div>${_el_resume($scope0_id, "#div/3", $sg__input_active)}<div${_attr_class(`base ${_class_module_value(styles_module_default.card, "card")}${active ? " " + _class_module_value(styles_module_default.on, "on") : ""}`)}></div>${_el_resume($scope0_id, "#div/4", $sg__input_active)}`);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, {
		x: _serialize_if($scope0_reason, 4) && x,
		y: _serialize_if($scope0_reason, 3) && y
	}, "__tests__/template.marko", 0, {
		x: "3:18",
		y: "3:21"
	});
}, 1);
