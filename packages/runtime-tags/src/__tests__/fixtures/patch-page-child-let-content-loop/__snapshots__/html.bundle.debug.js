// tags/card.marko
const $template$1 = "<section><button>clear</button><!></section>";
const $walks$1 = "D b%l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%;<section><button>clear</button><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_of([c], (x) => {
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", x.content, {});
		_scope($scope1_id, {}, "__tests__/tags/card.marko", "2:54");
	}, 0, $scope0_id, "#text/1");
	_html("</section>");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_c#4/fill", c, 1);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0) || _client_branch(input);
});

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks$1)};${$template$1}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({ content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>one ${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label * 2)}</em>`);
		$cg__input_label && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:3/subscribe");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_label && "__tests__/template.marko_1_input_label#0:3/subscribe", $wg__input_label);
	}, $scope0_id) });
	_patch_child_end();
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#3/subscribers", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/4": $wi__input_label && $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
