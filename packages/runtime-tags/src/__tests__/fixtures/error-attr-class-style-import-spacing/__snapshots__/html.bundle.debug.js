// styles.css.ts
const on = "a  b";

// template.marko
const $class = ["", _attr_class(on)];
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${$class[input.on ? 1 : 0]}></div>${_el_mark($scope0_id, "#div/0", _write_guard($scope0_reason, 0))}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
