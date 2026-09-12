// template.marko
var template_default = _template("a", (input) => {
	_serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.html,
		f: show
	});
}, 1);
