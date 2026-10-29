// tags/card.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/outer.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/outer.marko_1*content": "__tests__/tags/outer.marko_1*content __tests__/tags/outer.marko_1_T#0:5/init;b%;<!><!><!>",
	"__tests__/tags/outer.marko_0_#text#0/await": "__tests__/tags/outer.marko_0_#text#0/await __tests__/tags/outer.marko_1_T#0:5/init;b%;<!><!><!>",
	"__tests__/tags/outer.marko": "__tests__/tags/outer.marko !;b%;<!><!><!>"
});
var outer_default = _template("__tests__/tags/outer.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $T__closures = new Set();
	let T = input.fmt;
	_await($scope0_id, "#text/0", Promise.resolve(input.label), (v) => {
		const $scope1_id = _scope_id();
		_content_withhold(v), _filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/outer.marko_fill1", v);
		_dynamic_tag($scope1_id, "#text/0", T, { label: v });
		_subscribe($T__closures, _scope($scope1_id, { v }, "__tests__/tags/outer.marko", "2:2", { v: "2:8" }));
	}, 1, "__tests__/tags/outer.marko_1*content", _unfilled_if($scope0_reason, 1), 1);
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/outer.marko_fill0", T, 1);
	_scope($scope0_id, {
		T: _write_if($scope0_reason, 1) && T,
		"ClosureScopes:T/6": $T__closures
	}, "__tests__/tags/outer.marko", 0, { T: "1:6" }) || _content_withhold(input.fmt);
	_resume_branch($scope0_id);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	outer_default({
		fmt: card_default,
		label: input.label
	});
	_patch_child_end();
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
