// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_if(() => {}, $scope0_id, "b");
	_html(`<button>t</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: input.html,
		g: show
	});
}, 1);
