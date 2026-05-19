// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $y_getter = _hoist($scope0_id, "__tests__/template.marko_0_y/hoist");
	const x = 1;
	const y = _resume(() => 1, "__tests__/template.marko_0/y");
	_html(`<div>${_escape(x)}${_escape(y())}</div>${_escape(typeof $y_getter)}`);
	writeScope($scope0_id, { y }, "__tests__/template.marko", 0, { y: "3:10" });
	_assert_hoist(y);
}, 1);
