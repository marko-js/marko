// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;b%;<!><!><!>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content __tests__/template.marko_4_n#2:1/subscribe;D ;<p> </p>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await __tests__/template.marko_4_n#2:1/subscribe;D ;<p> </p>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		wrap_default({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			const $wrap_content__n__closures = new Set();
			let n = 1;
			_try($scope2_id, "#text/0", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", resolveAfter(0, 1), () => {
					const $scope4_id = _scope_id();
					_html(`<p>${_text_mark($scope4_id, "#text/0", n)}</p>`);
					_subscribe($wrap_content__n__closures, _scope($scope4_id, {}, "__tests__/template.marko", "7:8"), "__tests__/template.marko_4_n#2:1/subscribe");
				}, 1, "__tests__/template.marko_4*content");
				_scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "6:6");
			}, () => {
				const $scope5_reason = _scope_reason();
				const $scope5_id = _scope_id();
				_html("loading");
			}, void 0, "__tests__/template.marko_5*content", void 0, "__tests__/template.marko_3*content");
			_script($scope2_id, "__tests__/template.marko_2", 0);
			_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_2_n#1/fill", n, 1);
			_scope($scope2_id, { "ClosureScopes:n/2": $wrap_content__n__closures }, "__tests__/template.marko", "3:4");
			_resume_branch($scope2_id);
		}, $scope1_id, 0) });
		_patch_child_end();
		_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
