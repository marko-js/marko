// tags/shower.marko
const $template = "<button>show</button><output> </output>";
const $walks = " bD l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; bD ;<button>show</button><output> </output>" });
var shower_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<button>show</button>${_el_resume($scope0_id, "a")}<output>${_patch_text($scope0_id, "b", "", void 0, 0, 0, 1)}</output>`);
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, { d: input }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wd", input, !_server_guard($scope0_reason, 0));
});

// template.marko
let n = 0;
const $setup = _shell_setup([[], []], ["d>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` D l b/${_w0}&`)($walks)};${((_w0) => `<label> </label><input>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const uid = "u" + ++n;
	_html(`<label${_patch_attr($scope0_id, "aa$for", "for", `${uid}-${input.name}`, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_patch_input_value($scope0_id, "c", input.value, void 0, "n2c", $scope0_reason, 2)}${_patch_attr($scope0_id, "ac$id", "id", `${uid}-${input.name}`, $scope0_reason, 0)}${_patch_attr($scope0_id, "ac$name", "name", input.name, $scope0_reason, 0)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 2) || _mask_group($scope0_reason, 0))}`);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "d", 0);
	shower_default(_patch_live($childScope, { getId: _resume(function() {
		return uid;
	}, "a0", $scope0_id) }, $scope0_id, ""));
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, {
		j: uid,
		d: _existing_scope($childScope)
	}) : _client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "va1", uid) : _patch_write($scope0_id, "wj", uid);
}, 1);
