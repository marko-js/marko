// tags/keeper.marko
const $template$2 = "<button class=toggle>t</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/keeper.marko_0"]];
_shells({ "__tests__/tags/keeper.marko": "__tests__/tags/keeper.marko !__tests__/tags/keeper.marko_0; b%;<button class=toggle>t</button><!><!>" });
var keeper_default = _template("__tests__/tags/keeper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>t</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/keeper.marko_1_input_content#0:4/setup");
			_scope($scope1_id, {}, "__tests__/tags/keeper.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/keeper.marko_0");
	$fg__input_content && _patch_render($scope0_id, "__tests__/tags/keeper.marko_1_input_content#0:4/setup", "input_content");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/keeper.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/keeper.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || $fg__input_content && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 0));
});

// tags/level.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/1>", $setup$2]);
_shells({
	"__tests__/tags/level.marko_2*content": "__tests__/tags/level.marko_2*content",
	"__tests__/tags/level.marko": `__tests__/tags/level.marko${_shell_marker($setup$1)};${((_w0) => `b%b/${_w0}&b`)($walks$2)};${((_w0) => `<!><!>${_w0}<!>`)($template$2)}`,
	"__tests__/tags/level.marko_1*shell": `__tests__/tags/level.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
const $content = (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_n = _client_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_n = _write_guard($scope0_reason, 0), $fg__input_n = _filled_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_n__closures = new Set();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.n) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			$content({
				n: input.n - 1,
				label: input.label,
				content: _content_resume("__tests__/tags/level.marko_2*content", () => {
					const $scope2_reason = _scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_mark($scope2_id, "#text/0", input.n, 1, $scope0_reason, 0)}:${_text_mark($scope2_id, "#text/1", input.label, 2, $scope0_reason, 1)}</em>`);
					_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "__tests__/tags/level.marko_2_input_n#0:4/subscribe", $cg__input_n);
					_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/level.marko_2_input_label#0:5/subscribe", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_n__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/level.marko", "2:4"), $cg__input_n && "__tests__/tags/level.marko_2_input_n#0:4/subscribe"), $cg__input_label && "__tests__/tags/level.marko_2_input_label#0:5/subscribe");
				}, $scope1_id)
			});
			_patch_child_end();
			$cg__input_n && _patch_render($scope1_id, "__tests__/tags/level.marko_1_input_n#0:4/setup");
			$cg__input_label && _patch_render($scope1_id, "__tests__/tags/level.marko_1_input_label#0:5/setup");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/tags/level.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_n, 1, 0, 0, ["__tests__/tags/level.marko_1*shell"], $scope0_reason, 0);
	_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	keeper_default({ content: input.content });
	_patch_child_end();
	$fg__input_n && _patch_subscribers($scope0_id, "__tests__/tags/level.marko_0_input_n#4/subscribers", "input_n");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/tags/level.marko_0_input_label#5/subscribers", "input_label");
	$fg__input_label && $cg__input_n && _patch_render($scope0_id, "__tests__/tags/level.marko_1_input_label#0:5/setup", "input_label");
	_scope($scope0_id, {
		input_n: input.n,
		input_label: input.label,
		"ClosureScopes:input_n/7": _write_if($scope0_reason, 0) && $input_n__closures,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 1) && $input_label__closures,
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/level.marko", 0, {
		input_n: ["input.n"],
		input_label: ["input.label"]
	}) || ($fg__input_n && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 0)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)));
};
var level_default = _template("__tests__/tags/level.marko", $content);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks$1)};${((_w0) => `<main>${_w0}</main>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	level_default({
		n: 2,
		label: input.label
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
