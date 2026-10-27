// tags/pick.marko
const $setup$2 = [[], []];
_shells({ c: "c," });
var pick_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	return input.value + "!";
});

// tags/label.marko
const $template = "<output></output>";
const $setup$1 = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "d");
	$scope0_page ? _scope($scope0_id, { d: input.get }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$2], ["c>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `0${_w0}&/${_w1}&`)("", " b")};${((_w0, _w1) => `${_w0}${_w1}`)("", $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_v = _client_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $childScope = _patch_child($scope0_id, "a", 0, $cg__input_v && 1);
	let picked = pick_default({ value: input.v });
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xg", picked, !_server_guard($scope0_reason, 0));
	$cg__input_v && _var($scope0_id, "b", $childScope, "a1");
	_patch_child_end();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope2 = _patch_child($scope0_id, "c", 1);
	label_default({ get: _bind_resume(function() {
		return picked;
	}, "a0", $scope0_id) });
	_patch_child_end();
	$scope0_page && _scope($scope0_id, {
		g: picked,
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2)
	});
}, 1);
