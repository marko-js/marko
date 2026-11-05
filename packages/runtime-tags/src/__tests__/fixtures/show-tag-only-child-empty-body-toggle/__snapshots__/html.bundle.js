// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}<section>`);
	_show_start(open, 1, 1, "</section>");
	_show_end($scope0_id, "b", open, 1, 1, "</section>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: open });
}, 1);
