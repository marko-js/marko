// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const on = input.items.filter((item) => item.on).length;
	_script($scope0_id, "a0", 0);
	_scope($scope0_id, {
		d: input.items?.length,
		e: on
	});
}, 1);
