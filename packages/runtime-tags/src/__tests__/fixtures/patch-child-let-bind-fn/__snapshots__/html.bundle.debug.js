// tags/picker.marko
const $template$1 = "<button>load</button><ul></ul>";
const $walks$1 = " b b";
const $setup$1 = [[], ["__tests__/tags/picker.marko_0"]];
_shells({ "__tests__/tags/picker.marko": "^__tests__/tags/picker.marko !__tests__/tags/picker.marko_0; b ;<button>load</button><ul></ul>" });
var picker_default = _template("__tests__/tags/picker.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let refreshing = input.refreshing;
	let catalog = null;
	const load = _resume(async (refresh) => {
		if (refresh) refreshing = true;
		catalog = ["a", "b"];
		if (refresh) refreshing = false;
	}, "__tests__/tags/picker.marko_0/load", $scope0_id);
	const $return = load;
	_html(`<button>load</button>${_el_resume($scope0_id, "#button/0")}<ul>`);
	if ($scope0_page) _for_of(catalog || [], (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", item)}</li>`);
		$scope0_page && _scope($scope1_id, {}, "__tests__/tags/picker.marko", "10:6");
	}, 0, $scope0_id, "#ul/1", 1, 1, 1, "</ul>", 1);
	_script($scope0_id, "__tests__/tags/picker.marko_0");
	_patch_write($scope0_id, "PatchWrite:load", load, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/picker.marko_0_input_refreshing#4_input_refreshingChange#5/init");
	const $refreshingChange = input.refreshingChange || void 0;
	_patch_let_change($scope0_id, "PatchFill:__tests__/tags/picker.marko_fill2", refreshing, "PatchWrite:TagVariableChange:refreshing", $refreshingChange, $scope0_reason, 0);
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/picker.marko_fill3", catalog, 1);
	$scope0_page ? _scope($scope0_id, {
		input_refreshing: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.refreshing,
		input_refreshingChange: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.refreshingChange,
		load,
		"TagVariableChange:refreshing": $refreshingChange
	}, "__tests__/tags/picker.marko", 0, {
		input_refreshing: ["input.refreshing"],
		input_refreshingChange: ["input.refreshingChange"],
		load: "3:8",
		"TagVariableChange:refreshing": ["refreshingChange", "1:6"]
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/picker.marko_fill0", input.refreshing, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/picker.marko_fill1", input.refreshingChange, !_server_guard($scope0_reason, 2)));
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button id=outer>outer</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)($walks$1);
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0${_w0}&D l b`)($walks$1)};${((_w0) => `${_w0}<p> </p><button id=outer>outer</button>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let busy = false;
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	let refresh = picker_default({ refreshingChange: _resume(function(v) {
		busy = v;
	}, "__tests__/template.marko_0/refreshingChange", $scope0_id) });
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "#text/2", busy ? "busy" : "idle")}</p><button id=outer>outer</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		refresh,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { refresh: "2:9" });
}, 1);
