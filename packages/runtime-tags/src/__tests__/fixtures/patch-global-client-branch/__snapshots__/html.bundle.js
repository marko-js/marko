// template.marko
_shells({ a: "a !a1;D b%;<main><button>t</button><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_page_render();
	_write_guard($scope0_reason, 0);
	const $fg__input_name = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$global();
	let open = false;
	_html(`<main><button>t</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_html("</main>");
	_script($scope0_id, "a1");
	$fg__input_name && _patch_render($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: input.name,
		f: open
	}) || $fg__input_name && _patch_write($scope0_id, "xe", input.name, !_server_guard($scope0_reason, 0));
}, 1);
