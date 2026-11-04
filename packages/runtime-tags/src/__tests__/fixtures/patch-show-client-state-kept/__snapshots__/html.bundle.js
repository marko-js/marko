// template.marko
_shells({ a: "a !a0; bD l%;<button>toggle</button><p> </p><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_show_start(open, 0);
	_html(`<p>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}</p>`);
	_show_end($scope0_id, "c", open, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: open });
}, 1);
