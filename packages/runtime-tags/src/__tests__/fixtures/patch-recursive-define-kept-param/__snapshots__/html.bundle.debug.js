// tags/keeper.marko
const $template$1 = "<button class=toggle>t</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/keeper.marko_0"]];
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

// template.marko
const $Level_content__walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks$1);
const $Level_content__template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($Level_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($Level_content__walks);
const $setup = _shell_setup([[], []], ["#childScope/0>", _shell_setup([[], []], ["#childScope/1>", $setup$1])]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($Level_content__walks)};${((_w0) => `<main>${_w0}</main>`)($Level_content__template)}`,
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell${_shell_marker([[], []], ["#childScope/0>", _shell_setup([[], []], ["#childScope/1>", $setup$1])])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Level_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Level_content__template)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Level = { content: _content("__tests__/template.marko_1*content", ({ n, label, content }) => {
		const $scope1_id = _scope_id();
		const $Level_content__n__closures = new Set();
		const $Level_content__label__closures = new Set();
		const $scope1_reason = _scope_reason(), $cg__label = _client_guard($scope1_reason, 1), $wg__n = _write_guard($scope1_reason, 0), $fg__n = _filled_guard($scope1_reason, 0), $cg__n = _client_guard($scope1_reason, 0), $fg__label = _filled_guard($scope1_reason, 1);
		_if(() => {
			if (n) {
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope1_reason, 0) << 1 | _updates_from($scope1_reason, 1) << 3);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				Level.content({
					n: n - 1,
					label,
					content: _content_resume("__tests__/template.marko_3*content", () => {
						const $scope3_reason = _scope_reason();
						const $scope3_id = _scope_id();
						_html(`<em>${_text_mark($scope3_id, "#text/0", n, 1, $scope1_reason, 0)}:${_text_mark($scope3_id, "#text/1", label, 2, $scope1_reason, 1)}</em>`);
						_unfilled_if($scope1_reason, 0) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_n#1:4/subscribe");
						_unfilled_if($scope1_reason, 1) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_label#1:5/subscribe", $cg__label);
						_subscribe(_unfilled_if($scope1_reason, 1) && $Level_content__label__closures, _subscribe(_unfilled_if($scope1_reason, 0) && $Level_content__n__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "3:6"), $cg__n && "__tests__/template.marko_3_n#1:4/subscribe"), $cg__label && "__tests__/template.marko_3_label#1:5/subscribe");
					}, $scope2_id)
				});
				_patch_child_end();
				$cg__label && _patch_render($scope2_id, "__tests__/template.marko_2_label#1:5/setup");
				_scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__n, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope1_reason, 0);
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
		keeper_default({ content });
		_patch_child_end();
		$fg__n && _patch_subscribers($scope1_id, "__tests__/template.marko_1_n#4/subscribers", "n");
		$fg__n && $cg__n && _patch_render($scope1_id, "__tests__/template.marko_2_n#1:4/setup", "n");
		$fg__label && _patch_subscribers($scope1_id, "__tests__/template.marko_1_label#5/subscribers", "label");
		$fg__label && $cg__n && _patch_render($scope1_id, "__tests__/template.marko_2_label#1:5/setup", "label");
		_scope($scope1_id, {
			n,
			label,
			"ClosureScopes:n/7": _write_if($scope1_reason, 0) && $Level_content__n__closures,
			"ClosureScopes:label/8": _write_if($scope1_reason, 1) && $Level_content__label__closures,
			"#childScope/1": _existing_scope($childScope2)
		}, "__tests__/template.marko", "1:2", {
			n: "1:17",
			label: "1:20"
		}) || ($fg__n && _patch_write($scope1_id, "PatchMarkedWrite:n", n, !_server_guard($scope1_reason, 0)), $fg__label && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !_server_guard($scope1_reason, 1)));
	}, $scope0_id) };
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope3 = _peek_scope_id($scope0_id, "#childScope/0", 2);
	Level.content({
		n: 2,
		label: input.label
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope3) }, "__tests__/template.marko", 0);
}, 1);
