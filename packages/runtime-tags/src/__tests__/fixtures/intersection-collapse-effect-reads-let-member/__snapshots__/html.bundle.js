// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const y = 2;
	const z = 3;
	_html(`<button>set</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: y,
		d: z
	});
}, 1);
