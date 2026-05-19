// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $y_getter = _hoist($scope0_id, "__tests__/template.marko_0_y/hoist");
	const x = _id();
	const y = _id();
	_html(`<div>${_escape(x)}</div>${_escape($y_getter)}`);
	writeScope($scope0_id, { y }, "__tests__/template.marko", 0, { y: "3:7" });
	_assert_hoist(y);
}, 1);
