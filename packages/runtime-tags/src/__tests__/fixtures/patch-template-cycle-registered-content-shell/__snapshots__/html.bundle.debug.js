// tags/wrap.marko
const $template$3 = "<!><!><!>";
const $walks$3 = "b%c";
const $setup$3 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": "__tests__/tags/wrap.marko_1*shell;b%;<!><!><!>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/wrap.marko_1_input_content#0:4/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/wrap.marko_1_input_content#0:4/setup", "input_content");
	_scope($scope0_id, { input_content: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] }) || $fg__input_content && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 2));
});

// tags/tree-b.marko
const $template$2 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!><!>`)($template$3);
const $walks$2 = /*@__PURE__*/ ((_w0) => `b/${_w0}&%c`)("b%c");
const $setup$2 = _shell_setup([[], []], ["#childScope/0>", $setup$3]);
_shells({
	"__tests__/tags/tree-b.marko_1*content": "__tests__/tags/tree-b.marko_1*content",
	"__tests__/tags/tree-b.marko": `__tests__/tags/tree-b.marko${_shell_marker($setup$2)};${((_w0) => `b/${_w0}&%c`)("b%c")};${((_w0) => `<!>${_w0}<!><!>`)($template$3)}`,
	"__tests__/tags/tree-b.marko_2*shell": "__tests__/tags/tree-b.marko_2*shell;b%;<!><!><!>"
});
var tree_b_default = _template("__tests__/tags/tree-b.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_depth = _client_guard($scope0_reason, 2), $uf__input_show = _updates_from($scope0_reason, 1), $wg__input_show__OR__input_depth = _write_guard($scope0_reason, 0), $wi__input_show__OR__input_depth = _write_if($scope0_reason, 0), $wg__input_depth = _write_guard($scope0_reason, 2), $ui__input_show__OR__input_depth = _unfilled_if($scope0_reason, 0), $ui__input_depth = _unfilled_if($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_depth = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_depth__closures = new Set();
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/tags/tree-b.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<span>${_text_mark($scope1_id, "#text/0", input.depth, 1, $scope0_reason, 2)}</span>`);
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "__tests__/tags/tree-b.marko_1_input_depth#0:5/subscribe", $cg__input_depth);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_depth__closures, _scope($scope1_id, { _: $wi__input_show__OR__input_depth && _scope_with_id($scope0_id) }, "__tests__/tags/tree-b.marko", "1:2"), $cg__input_depth && "__tests__/tags/tree-b.marko_1_input_depth#0:5/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_if(() => {
		if (input.depth) {
			const $scope2_id = _scope_id();
			_dynamic_tag($scope2_id, "#text/0", tree_a_default, {
				show: input.show,
				depth: input.depth - 1
			}, 9, 0, 0, $wg__input_show__OR__input_depth, $scope0_reason, 0);
			_patch_render($scope2_id, "__tests__/tags/tree-b.marko_2_input_show#0:4_input_depth#0:5/setup", [_filled_guard($scope0_reason, 1) && ">input_show", _filled_guard($scope0_reason, 2) && ">input_depth"], $scope0_reason, 0);
			$wi__input_show__OR__input_depth && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/tree-b.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $wg__input_depth, 1, 0, 0, ["__tests__/tags/tree-b.marko_2*shell"], $scope0_reason, 2);
	$fg__input_show && $cg__input_depth && _patch_render($scope0_id, "__tests__/tags/tree-b.marko_2_input_show#0:4/setup", "input_show");
	$fg__input_depth && _patch_subscribers($scope0_id, "__tests__/tags/tree-b.marko_0_input_depth#5/subscribers", "input_depth");
	_scope($scope0_id, {
		input_show: ($ui__input_depth || $ui__input_show__OR__input_depth) && input.show,
		input_depth: ($ui__input_show || $ui__input_show__OR__input_depth || $ui__input_depth) && input.depth,
		"ClosureScopes:input_depth/7": _write_if($scope0_reason, 2) && $input_depth__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/tree-b.marko", 0, {
		input_show: ["input.show"],
		input_depth: ["input.depth"]
	}) || ($fg__input_show && $ui__input_depth && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 1)), $fg__input_depth && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_depth", input.depth, !_server_guard($scope0_reason, 2)));
});

// tags/tree-a.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&b`)($walks$2);
const $setup$1 = _shell_setup([[], ["__tests__/tags/tree-a.marko_0"]], ["#childScope/2>", $setup$2]);
_shells({ "__tests__/tags/tree-a.marko": `__tests__/tags/tree-a.marko${_shell_marker($setup$1)};${((_w0) => ` D l/${_w0}&b`)($walks$2)};${((_w0) => `<button> </button>${_w0}<!>`)($template$2)}` });
var tree_a_default = _template("__tests__/tags/tree-a.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	tree_b_default({
		show: input.show,
		depth: input.depth
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/tree-a.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/tree-a.marko_0_count#7/fill", count, 1);
	_scope($scope0_id, {
		count,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/tags/tree-a.marko", 0, { count: "1:6" });
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_show = _updates_from($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	tree_a_default({
		show: input.show,
		depth: 1
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
