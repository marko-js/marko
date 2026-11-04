// tags/card.marko
const $template$3 = "<button class=clear>clear</button><!><!>";
const $walks$3 = " b%c";
const $setup$3 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=clear>clear</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button class=clear>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/toggle.marko
const $template$2 = "<!><!><!>";
const $walks$2 = "b%c";
const $setup$2 = [[], []];
_shells({
	"__tests__/tags/toggle.marko": "__tests__/tags/toggle.marko;b%;<!><!><!>",
	"__tests__/tags/toggle.marko_1*shell": "__tests__/tags/toggle.marko_1*shell;b%;<!><!><!>"
});
var toggle_default = _template("__tests__/tags/toggle.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $ui__input_open = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/toggle.marko_1_input_content#0:4/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/toggle.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_open, 1, 0, 0, ["__tests__/tags/toggle.marko_1*shell"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/toggle.marko_1_input_content#0:4/setup", "input_content");
	_scope($scope0_id, { input_content: _write_if($scope0_reason, 1) && ($ui__input_open || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/toggle.marko", 0, { input_content: ["input.content"] }) || $fg__input_content && $ui__input_open && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 2));
});

// tags/owner.marko
const $template$1 = /*@__PURE__*/ ((_w0, _w1) => `${_w0}${_w1}<!>`)($template$3, $template$2);
const $walks$1 = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$3, "b%c");
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$3], ["#childScope/1>", $setup$2]);
_shells({
	"__tests__/tags/owner.marko_2*content": "__tests__/tags/owner.marko_2*content",
	"__tests__/tags/owner.marko": `__tests__/tags/owner.marko${_shell_marker($setup$1)};${((_w0, _w1) => `/${_w0}&/${_w1}&b`)($walks$3, "b%c")};${((_w0, _w1) => `${_w0}${_w1}<!>`)($template$3, $template$2)}`
});
var owner_default = _template("__tests__/tags/owner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $uf__input_open = _updates_from($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content_resume("__tests__/tags/owner.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>held ${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label * 2)}</b>`);
		$cg__input_label && _patch_render($scope1_id, "__tests__/tags/owner.marko_1_input_label#0:4/subscribe");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/owner.marko", "1:2"), $cg__input_label && "__tests__/tags/owner.marko_1_input_label#0:4/subscribe", $wg__input_label);
	}, $scope0_id) });
	_patch_child_end();
	_set_scope_reason($uf__input_open << 1 | $uf__input_open << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	toggle_default({
		open: input.open,
		content: _content_resume("__tests__/tags/owner.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>guarded ${_text_mark($scope2_id, "#text/0", input.label, 2, $scope0_reason, 1)}</i>`);
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "__tests__/tags/owner.marko_2_input_label#0:4/subscribe", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label/6": $wi__input_label && 1
			}, "__tests__/tags/owner.marko", "4:2"), $cg__input_label && "__tests__/tags/owner.marko_2_input_label#0:4/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/6": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope),
		"#childScope/1": _existing_scope($childScope2)
	}, "__tests__/tags/owner.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "__tests__/tags/owner.marko_0_input_label#4/subscribers", "input_label");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	owner_default({
		open: input.open,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
