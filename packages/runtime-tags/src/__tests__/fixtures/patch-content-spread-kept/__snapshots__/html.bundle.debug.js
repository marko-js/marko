// tags/frag-host.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/frag-host.marko_1*content": "__tests__/tags/frag-host.marko_1*content",
	"__tests__/tags/frag-host.marko": "__tests__/tags/frag-host.marko !; ;<section></section>"
});
var frag_host_default = _template("__tests__/tags/frag-host.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_mode__closures = new Set();
	const $input_b__closures = new Set();
	const one = { content: _content_resume("__tests__/tags/frag-host.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.mode ? "x" : "y", void 0, $scope0_reason, 0)} ${_patch_text($scope1_id, "#text/1", input.b, 2, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_mode ? "__tests__/tags/frag-host.marko_1_input_mode#0:3/init" : "__tests__/tags/frag-host.marko_1_input_mode#0:3/subscribe");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/tags/frag-host.marko_1_input_b#0:4/init" : "__tests__/tags/frag-host.marko_1_input_b#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_mode__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/frag-host.marko", "1:2")));
	}, $scope0_id) };
	_html("<section");
	_patch_attrs_content({ content: input.mode ? one : null }, "#section/0", $scope0_id, "section", 0, void 0, void 0, $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "#section/0")}`);
	_script($scope0_id, "__tests__/tags/frag-host.marko_0_input_mode#3_one#5");
	$cg__input_mode && _patch_write($scope0_id, "PatchWrite:one", one, 1);
	$cg__input_mode && _patch_init($scope0_id, "__tests__/tags/frag-host.marko_0_input_mode#3_one#5/init");
	_scope($scope0_id, {
		input_mode: input.mode,
		input_b: input.b,
		one: _unfilled_if($scope0_reason, 0) && one,
		"ClosureScopes:input_mode/7": _write_if($scope0_reason, 0) && $input_mode__closures,
		"ClosureScopes:input_b/8": _write_if($scope0_reason, 1) && $input_b__closures
	}, "__tests__/tags/frag-host.marko", 0, {
		input_mode: ["input.mode"],
		input_b: ["input.b"],
		one: "1:9",
		"EventAttributes:#section/0": ["...{ content: input.mode ? one : null }", "2:13"]
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/frag-host.marko_fill0", input.mode, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/frag-host.marko_fill1", input.b, !_server_guard($scope0_reason, 1)));
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0) => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template$1) });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	frag_host_default({
		mode: true,
		b: input.b
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
