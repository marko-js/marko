// tags/card.marko
const $template$2 = "<button> </button>";
const $walks$2 = " D l";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; D ;<button> </button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_mark($scope0_id, "#text/1", f(), 1, _client_guard($scope0_reason, 0) << 1, 0, 1)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/inner.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/inner.marko_2*content": `__tests__/tags/inner.marko_2*content${_shell_marker([[], []], ["#childScope/0>", $setup$2])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$2)};${$template$2}`,
	"__tests__/tags/inner.marko": "__tests__/tags/inner.marko;b%;<!><!><!>",
	"__tests__/tags/inner.marko_1_#text#0/await": `__tests__/tags/inner.marko_1_#text#0/await${_shell_marker([[], []], ["#childScope/0>", $setup$2])};${((_w0) => `/${_w0}&`)($walks$2)};${$template$2}`,
	"__tests__/tags/inner.marko_1*shell": "__tests__/tags/inner.marko_1*shell;b%;<!><!><!>"
});
var inner_default = _template("__tests__/tags/inner.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", resolveAfter("v", 1), (v) => {
				const $scope2_id = _scope_id(), $ui__input_label = _unfilled_if($scope0_reason, 2);
				_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
				card_default({ fn: function() {
					return v + ":" + input.label;
				} });
				_patch_child_end();
				$ui__input_label && _patch_write($scope2_id, "PatchWrite:v", v, 1);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/tags/inner.marko_2_input_label#0:4/subscribe");
				$cg__input_label && _patch_render($scope2_id, "__tests__/tags/inner.marko_2_input_label#0:4_v#2/setup");
				_subscribe($ui__input_label && $input_label__closures, _scope($scope2_id, {
					v: $wi__input_label && v,
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/tags/inner.marko", "2:17", { v: "2:23" }), $cg__input_label && "__tests__/tags/inner.marko_2_input_label#0:4/subscribe", 0);
				_resume_branch($scope2_id);
			}, 1, "__tests__/tags/inner.marko_2*content");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/inner.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/inner.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/tags/inner.marko", 0, { input_label: ["input.label"] }) || _filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "__tests__/tags/inner.marko_0_input_label#4/subscribers", "input_label");
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=label>label</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=label>label</button>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let label = "a";
	_html(`<button class=label>label</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(38 | _updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	inner_default({
		show: input.show,
		label
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		label,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { label: "1:6" });
}, 1);
