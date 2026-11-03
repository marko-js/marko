// template.marko
_shells({ a: "a !a0; bD l%b ;<!----><p> </p><!><button>+</button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<!--${_escape_comment(input.label)} ${_escape_comment(count)}-->${_el_mark($scope0_id, "a")}`);
	const $show = input.on;
	_show_start($show, 0);
	_html(`<p>${_text_mark($scope0_id, "b", input.label, 1, $scope0_reason, 0)}</p>`);
	_show_end($scope0_id, "c", $show, 1, 0, 0, 1, 2, void 0, $scope0_reason, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_patch_render($scope0_id, "a1", $fg__input_label && "g");
	_scope($scope0_id, {
		g: input.label,
		i: count
	}) || $fg__input_label && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 0));
}, 1);
