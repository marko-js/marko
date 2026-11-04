// tags/card.marko
const $template$2 = "<section><!></section>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D%;<section><!></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<button>copy</button>${_w0}<small> </small>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => ` b/${_w0}&D l`)("D%l");
const $setup$1 = _shell_setup([[], ["__tests__/tags/outer.marko_0"]], ["#childScope/1>", $setup$2]);
_shells({ "__tests__/tags/outer.marko": `__tests__/tags/outer.marko${_shell_marker($setup$1)};${((_w0) => ` b/${_w0}&D l`)("D%l")};${((_w0) => `<button>copy</button>${_w0}<small> </small>`)($template$2)}` });
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let value = input.data;
	_html(`<button>copy</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	card_default({ content: value.get("value") });
	_patch_child_end();
	_html(`<small>${_text_mark($scope0_id, "#text/2", value.has(value.get("value")))}</small>`);
	_script($scope0_id, "__tests__/tags/outer.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", value, 1);
	_scope($scope0_id, {
		value,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/tags/outer.marko", 0, { value: "1:6" }) || _client_branch(input.data);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_label#0:3/subscribe", _client_guard($scope0_reason, 0));
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"));
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
			outer_default({ data: new Map([["value", Body.content], [Body.content, "key"]]) });
			_patch_child_end();
			!_client_guard($scope0_reason, 1) && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:Body_content", Body?.content);
			_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 1);
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#3/subscribers", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		Body_content: _unfilled_if($scope0_reason, 1) && Body?.content,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 0) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		Body_content: ["Body.content", "1:9"]
	}) || $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
}, 1);
