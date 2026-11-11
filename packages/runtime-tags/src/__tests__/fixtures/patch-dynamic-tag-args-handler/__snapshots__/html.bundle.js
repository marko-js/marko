// template.marko
_shells({ a: "a !a1;b%b D ;<!><!><button> </button>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_tag = _filled_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xg", input.title, !_server_guard($scope0_reason, 2));
	let n = 0;
	_dynamic_tag($scope0_id, "a", input.tag, {
		title: input.title,
		onClick: _bind_resume(function() {
			n = input.title.length;
		}, "a0", $scope0_id)
	}, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0, 0, 1);
	_html(`<button>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", (($fg__input_tag ? " f" : "") + ($fg__input_title ? " g" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 0) && input.tag,
		g: input.title,
		i: n
	}) || $fg__input_tag && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "xf", input.tag, !_server_guard($scope0_reason, 1));
}, 1);
