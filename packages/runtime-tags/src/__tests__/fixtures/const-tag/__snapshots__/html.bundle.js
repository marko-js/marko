// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $y_getter = _hoist($scope0_id, "a1");
	const x = 1;
	const y = _resume(() => 1, "a0");
	_html(`<div>${_escape(x)}${_escape(y())}</div>${_escape(typeof $y_getter)}`);
	writeScope($scope0_id, { e: y });
}, 1);
