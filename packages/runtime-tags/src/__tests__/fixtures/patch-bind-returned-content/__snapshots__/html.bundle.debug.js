// tags/child.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/child.marko_1*content": "__tests__/tags/child.marko_1*content __tests__/tags/child.marko_1_count#0:3/init!__tests__/tags/child.marko_1",
	"__tests__/tags/child.marko": "^__tests__/tags/child.marko !,"
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	const Content = { content: _content_resume("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/1", input.label, void 0, $scope0_reason, 0)} ${_text_resume($scope1_id, "#text/2", count, 2)}</em>${_el_resume($scope1_id, "#em/0")}`);
		_script($scope1_id, "__tests__/tags/child.marko_1");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "__tests__/tags/child.marko_1_input_label#0:2/init" : "__tests__/tags/child.marko_1_input_label#0:2/subscribe");
		_subscribe($count__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:2")));
	}, $scope0_id) };
	const $return = Content;
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill1", count, 1);
	_scope($scope0_id, {
		input_label: input.label,
		count,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 0) && $input_label__closures,
		"ClosureScopes:count/6": $count__closures
	}, "__tests__/tags/child.marko", 0, {
		input_label: ["input.label"],
		count: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
	_resume_branch($scope0_id);
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><button> </button>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&b%b D l`)("");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `0${_w0}&b%b D l`)("")};${((_w0) => `<!>${_w0}<!><button> </button>`)("")}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0, $cg__input_label && 1);
	let content = child_default({ label: input.label });
	$cg__input_label && _var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_content#9/var");
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/2", content, {}, 10, 0, 0, 0, 0, 0);
	_html(`<button>${_text_resume($scope0_id, "#text/4", n)}</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
