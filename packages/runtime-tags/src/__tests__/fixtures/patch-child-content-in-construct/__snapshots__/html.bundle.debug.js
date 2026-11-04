// tags/wrap/index.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/wrap/index.marko": "__tests__/tags/wrap/index.marko;D%;<section><!></section>" });
var wrap_default = _template("__tests__/tags/wrap/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/wrap/index.marko", 0);
});

// tags/card/index.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)("D%l");
const $setup$1 = _shell_setup([[], ["__tests__/tags/card/index.marko_0"]], ["#childScope/2>", $setup$2]);
_shells({
	"__tests__/tags/card/index.marko_1*content": "__tests__/tags/card/index.marko_1*content;D ;<em> </em>",
	"__tests__/tags/card/index.marko": `__tests__/tags/card/index.marko${_shell_marker($setup$1)};${((_w0) => ` D l/${_w0}&`)("D%l")};${((_w0) => `<button> </button>${_w0}`)($template$2)}`
});
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/2", 0);
	wrap_default({ content: _content("__tests__/tags/card/index.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.note, 1, $scope0_reason, 0)}</em>`);
		$cg__input_note && _patch_render($scope1_id, "__tests__/tags/card/index.marko_1_input_note#0:5/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: $wi__input_note && _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "3:2"), $cg__input_note && "__tests__/tags/card/index.marko_1_input_note#0:5/subscribe");
	}, $scope0_id, 0) });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/card/index.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_0_n#6/fill", n, 1);
	_scope($scope0_id, {
		n,
		"ClosureScopes:input_note/7": $wi__input_note && _unfilled_if($scope0_reason, 0) && $input_note__closures,
		"#childScope/2": _existing_scope($childScope)
	}, "__tests__/tags/card/index.marko", 0, { n: "1:6" });
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ note: input.note });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_note#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_note && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_note#0:4/setup", "input_note");
	_scope($scope0_id, { input_note: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.note }, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || $fg__input_note && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 1));
}, 1);
