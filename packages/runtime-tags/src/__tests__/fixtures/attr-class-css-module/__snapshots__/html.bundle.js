// styles.module.css
var styles_module_default = ".card {\n  color: green;\n}\n.on {\n  color: blue;\n}\n.a {\n  color: red;\n}\n.b {\n  color: teal;\n}\n";

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_active = _serialize_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const { active, x, y } = input;
	_html(`<div${_attr_class(`${styles_module_default.card}${active ? " " + styles_module_default.on : ""}`)}></div>${_el_resume($scope0_id, "a", $sg__input_active)}<div${_attr_class(active ? styles_module_default.on : "")}></div>${_el_resume($scope0_id, "b", $sg__input_active)}<div${_attr_class([x && styles_module_default.a, y && styles_module_default.b])}></div>${_el_resume($scope0_id, "c", _serialize_guard($scope0_reason, 0))}<div${_attr_class(`${styles_module_default.card}${active ? " " + styles_module_default.on : ""}`)}></div>${_el_resume($scope0_id, "d", $sg__input_active)}<div${_attr_class(`base ${styles_module_default.card}${active ? " " + styles_module_default.on : ""}`)}></div>${_el_resume($scope0_id, "e", $sg__input_active)}`);
	_serialize_if($scope0_reason, 1) && writeScope($scope0_id, {
		i: _serialize_if($scope0_reason, 4) && x,
		j: _serialize_if($scope0_reason, 3) && y
	});
}, 1);
