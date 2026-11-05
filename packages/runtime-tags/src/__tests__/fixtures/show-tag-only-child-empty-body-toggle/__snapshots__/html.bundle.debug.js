// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}<section>`);
	_show_start(open, 1, 1, "</section>");
	_show_end($scope0_id, "#section/1", open, 1, 1, "</section>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { open }, "__tests__/template.marko", 0, { open: "1:6" });
}, 1);
