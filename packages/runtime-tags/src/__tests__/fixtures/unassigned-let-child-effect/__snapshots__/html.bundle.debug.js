// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0), $wg__input_w = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.v, $wg__input_v)}${_text_resume($scope0_id, "#text/1", input.w, $wg__input_w * 2)}</p>`);
	_script($scope0_id, "__tests__/tags/child.marko_0_input_v#4", $wg__input_v || $wg__input_w);
	_scope($scope0_id, { input_v: input.v }, "__tests__/tags/child.marko", 0, { input_v: ["input.v"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let x = input.v;
	_set_scope_reason($wg__input_w << 3);
	const $childScope = _peek_scope_id();
	child_default({
		v: x,
		w: input.w
	});
	$wi__input_w && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
	$wg__input_w || $wi__input_w && _resume_branch($scope0_id);
}, 1);
