// tags/card.marko
const $template$1 = "<button class=switch>switch</button><!><!>";
const $walks$1 = " b%c";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=switch>switch</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.a;
	_html(`<button class=switch>switch</button>${_el_mark($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, { input_b: input.b }, "__tests__/tags/card.marko", 0, { input_b: ["input.b"] }) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 1));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks$1)};${((_w0) => `${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		a: attrTag({ content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>A ${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label * 2)}</b>`);
			$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:3/subscribe");
			_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_label && "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
		}, $scope0_id) }),
		b: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>B ${_text_mark($scope2_id, "#text/0", input.label, 2, $scope0_reason, 0)}</i>`);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:3/subscribe", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label/4": $wi__input_label && 1
			}, "__tests__/template.marko", "3:4"), $cg__input_label && "__tests__/template.marko_2_input_label#0:3/subscribe");
		}, $scope0_id) })
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/4": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#3/subscribers", "input_label");
}, 1);
