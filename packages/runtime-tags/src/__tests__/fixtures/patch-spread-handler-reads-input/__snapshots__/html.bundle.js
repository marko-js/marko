// template.marko
_shells({ a: "a !a1;D l b%b D ;<p> </p><div></div><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}</p><div${_attr("title", input.label, $scope0_id, "ab$title", $scope0_reason, 0)}></div>${_el_mark($scope0_id, "b")}`);
	_if(() => {}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_html(`<button>${_text_mark($scope0_id, "e", count)}</button>${_el_mark($scope0_id, "d")}`);
	_script($scope0_id, "a1");
	$fg__input_label && _patch_render($scope0_id, "a0", "h");
	_scope($scope0_id, {
		h: input.label,
		i: count
	}) || $fg__input_label && _patch_write($scope0_id, "xh", input.label, !_server_guard($scope0_reason, 0));
}, 1);
