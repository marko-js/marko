// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const go = _action($scope0_id, "a0");
	_html(`<a href=/next>go ${_text_resume($scope0_id, "b", go.pending, 2)}</a>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: go,
		d: void 0
	});
}, 1);
