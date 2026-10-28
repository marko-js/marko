// tags/card.marko
const $template$2 = "<button class=toggle>toggle</button><!><!>";
const $walks$2 = " b%c";
const $setup$2 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0; b%;<button class=toggle>toggle</button><!><!>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill1", open, 1);
	_scope($scope0_id, {
		input_content: input.content,
		open
	}, "__tests__/tags/card.marko", 0, {
		input_content: ["input.content"],
		open: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// tags/counter.marko
const $template$1 = "<button class=inc> </button>";
const $walks$1 = " D l";
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "^__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button class=inc> </button>" });
_stateful_return("__tests__/tags/counter.marko");
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = 1;
	_html(`<button class=inc>${_text_resume($scope0_id, "#text/1", c)}</button>${_el_resume($scope0_id, "#button/0")}`);
	const $return = c;
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_fill0", c, 1);
	_scope($scope0_id, { c }, "__tests__/tags/counter.marko", 0, { c: "1:6" });
	return $return;
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&%l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_v#0:7/init",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D0${_w0}&%l`)($walks$1)};${((_w0) => `<main>${_w0}<!></main>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	const $v__closures = new Set();
	_html("<main>");
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let v = counter_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#7/var");
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/2", input.on ? card_default : "div", {}, 10, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, 1, $scope0_reason, 1)} ${_text_resume($scope1_id, "#text/1", v, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "__tests__/template.marko_1_input_note#0:6/init" : "__tests__/template.marko_1_input_note#0:6/subscribe");
		_subscribe($v__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:6")));
	}, $scope0_id, ($scope) => $scope0_page ? [{
		v,
		input_note: input.note
	}] : []), 0, _write_guard($scope0_reason, 0), $scope0_reason, 0);
	_html("</main>");
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.note,
		v: _write_if($scope0_reason, 0) && v,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:input_note/8": _write_if($scope0_reason, 1) && $input_note__closures,
		"ClosureScopes:v/9": $v__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		v: "3:12"
	}) || _filled_guard($scope0_reason, 1) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 1));
}, 1);
