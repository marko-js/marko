// tags/card.marko
const $template$2 = "<section><button>clear</button> </section>";
const $walks$2 = "D b l";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b ;<section><button>clear</button> </section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.n;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "#button/0")}${_text_mark($scope0_id, "#text/1", c, 1, _client_guard($scope0_reason, 0) << 1, 0, 1)}</section>`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>drop</button>${_w0}`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$2);
const $setup$1 = _shell_setup([[], ["__tests__/tags/outer.marko_0"]], ["#childScope/1>", $setup$2]);
_shells({ "__tests__/tags/outer.marko": `__tests__/tags/outer.marko${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&`)($walks$2)};${((_w0) => `<button>drop</button>${_w0}`)($template$2)}` });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let o = input.n;
	_html(`<button>drop</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	card_default({ n: o });
	_patch_child_end();
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_0_o#5/fill", o, 1);
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/outer.marko", 0);
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
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			outer_default({ n: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:4/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:4/setup", "input_label");
	_scope($scope0_id, { input_label: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || $fg__input_label && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1));
}, 1);
