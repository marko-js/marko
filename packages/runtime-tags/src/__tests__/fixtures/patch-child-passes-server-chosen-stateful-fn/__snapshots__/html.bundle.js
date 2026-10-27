// tags/label-view.marko
const $template$1 = "<output></output>";
const $setup$2 = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_view_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "c");
	$scope0_page ? _scope($scope0_id, { c: input }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xc", input, !_server_guard($scope0_reason, 0));
});

// tags/mid.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup$1 = _shell_setup([[], []], ["a>", $setup$2]);
_shells({ c: /*@__PURE__*/ ((_w0) => `c${_shell_marker($setup$1)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1) });
var mid_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a");
	label_view_default(_patch_live($childScope, { get: input.get }, $scope0_id, "d"));
	$scope0_page ? _scope($scope0_id, { a: _existing_scope($childScope) }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b`)($walks)};${((_w0) => `${_w0}<button>inc</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_title = _server_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.title, !$sg__input_title);
	let n = 0;
	const up = _resume(() => "U" + input.title + n, "a0", $scope0_id);
	const low = _bind_resume(() => "l" + input.title, "a1", $scope0_id);
	_set_scope_reason(6);
	const $childScope = _patch_child($scope0_id, "a");
	mid_default({ get: input.upper ? up : low });
	_html(`<button>inc</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	_patch_effect($scope0_id, "ia5", _filled_guard($scope0_reason, 1) && "f", "i", _filled_guard($scope0_reason, 0) && "j");
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: input.upper,
		g: n,
		i: _write_if($scope0_reason, 1) && up,
		j: low,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va4", input.upper, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xj", low, !$sg__input_title));
}, 1);
