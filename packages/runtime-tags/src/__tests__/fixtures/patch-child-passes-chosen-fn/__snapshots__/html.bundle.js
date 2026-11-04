// tags/label.marko
const $template$1 = "<output></output>";
const $setup$2 = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input_get, "d");
	_scope($scope0_id, { d: input.get }) || $fg__input_get && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// tags/mid.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ c: `c${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)(" b")};${$template$1}` });
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	label_default({ get: input.get });
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $ui__input_title__OR__input_upper = _unfilled_if($scope0_reason, 0), $ui__input_upper = _unfilled_if($scope0_reason, 2), $ui__input_title = _unfilled_if($scope0_reason, 1), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title = _filled_guard($scope0_reason, 1), $fg__input_upper = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "xd", input.title, !$sg__input_title);
	const up = _bind_resume(() => "U" + input.title, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	mid_default({ get: input.upper ? up : low });
	_patch_child_end();
	_patch_render($scope0_id, "a2", [
		$fg__input_upper && "e",
		$fg__input_title && "f",
		$fg__input_title && "d",
		$fg__input_title && "g"
	], $scope0_reason, 0);
	_scope($scope0_id, {
		d: input.title,
		e: ($ui__input_title || $ui__input_title__OR__input_upper) && input.upper,
		f: ($ui__input_upper || $ui__input_title__OR__input_upper) && up,
		g: ($ui__input_upper || $ui__input_title__OR__input_upper) && low,
		a: _existing_scope($childScope)
	}) || ($fg__input_upper && $ui__input_title && _patch_write($scope0_id, "xe", input.upper, !_server_guard($scope0_reason, 2)), $fg__input_title && $ui__input_upper && _patch_write($scope0_id, "xf", up, !$sg__input_title), $fg__input_title && $ui__input_upper && _patch_write($scope0_id, "xg", low, !$sg__input_title));
}, 1);
