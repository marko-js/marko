// tags/wrap.marko
const $Card_content__walks = "b%c";
const $Card_content__template = "<!><!><!>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Card_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Card_content__walks);
const $setup$1 = [["#childScope/0>"], []];
_shells({
	"__tests__/tags/wrap.marko_1*content": `__tests__/tags/wrap.marko_1*content;${$Card_content__walks};${$Card_content__template}`,
	"__tests__/tags/wrap.marko": `__tests__/tags/wrap.marko #childScope/0>;${((_w0) => `b/${_w0}&b`)($Card_content__walks)};${((_w0) => `<!>${_w0}<!>`)($Card_content__template)}`,
	"__tests__/tags/wrap.marko_2*shell": "__tests__/tags/wrap.marko_2*shell;D ;<p> </p>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_show__closures = new Set();
	const Card = { content: _content("__tests__/tags/wrap.marko_1*content", () => {
		const $scope1_id = _scope_id(), $fg__input_label = _filled_guard($scope0_reason, 1);
		const $scope1_reason = _scope_reason();
		const x = input.label + "!";
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "#text/0", x, 1, $scope0_reason, 1)}</p>`);
				_script($scope2_id, "__tests__/tags/wrap.marko_2_x#1:1", 1, _filled_guard($scope0_reason, 1));
				$cg__input_label && _patch_render($scope2_id, "__tests__/tags/wrap.marko_2_x#1:1/setup");
				_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/wrap.marko", "3:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/wrap.marko_2*shell"], $scope0_reason, 2);
		$fg__input_label && $cg__input_show && _patch_render($scope1_id, "__tests__/tags/wrap.marko_2_x#1:1/setup", "x");
		$cg__input_label && _patch_render($scope1_id, "__tests__/tags/wrap.marko_1_input_label#0:3/subscribe");
		$cg__input_show && _patch_render($scope1_id, "__tests__/tags/wrap.marko_1_input_show#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			x,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		}, "__tests__/tags/wrap.marko", "1:2", { x: "2:10" }), $cg__input_label && "__tests__/tags/wrap.marko_1_input_label#0:3/subscribe", $wg__input_show), $cg__input_show && "__tests__/tags/wrap.marko_1_input_show#0:4/subscribe", $wg__input_show) || $fg__input_label && _patch_write($scope1_id, "PatchMarkedWrite:x", x, !_server_guard($scope0_reason, 1));
		$wg__input_show || _resume_branch($scope1_id);
	}, $scope0_id, 0) };
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Card.content({});
	_patch_child_end();
	_scope($scope0_id, {
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 1) && $input_label__closures,
		"ClosureScopes:input_show/6": _write_if($scope0_reason, 2) && $input_show__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)($walks$1)};${((_w0) => `<!>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3 | _updates_from($scope0_reason, 2) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({
		label: input.label,
		show: input.show
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
