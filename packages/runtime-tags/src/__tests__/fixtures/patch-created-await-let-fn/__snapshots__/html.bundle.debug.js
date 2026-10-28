// tags/card.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; D ;<button> </button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_resume($scope0_id, "#text/1", f(), 1, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_2*content${_shell_marker(_shell_setup([["__tests__/template.marko_2_input_label#0:4/subscribe"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#0/await": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1_#text#0/await${_shell_marker(_shell_setup([["__tests__/template.marko_2_input_label#0:4/subscribe"], []], ["#childScope/0>", $setup$1]))};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", resolveAfter("v", 1), (v) => {
				const $scope2_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				card_default({ fn: function() {
					return v + ":" + input.label;
				} });
				_patch_child_end();
				$cg__input_label && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:4_v#2/init");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {
					v: $wi__input_label && v,
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "2:17", { v: "2:23" }), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe");
			}, 1, "__tests__/template.marko_2*content");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
