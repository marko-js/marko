// template.marko
_shells({ a: "a !a0;E l%b ;<main><div> </div><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__rest = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let count = 0;
	const { known, ...rest } = input;
	_html(`<main><div>${_text_mark($scope0_id, "a", known, 1, $scope0_reason, 0)}</div>`);
	_if(() => {}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__rest && "h");
	_scope($scope0_id, {
		f: count,
		h: rest
	}) || $fg__rest && _patch_write($scope0_id, "xh", rest, !_server_guard($scope0_reason, 1), input);
}, 1);
