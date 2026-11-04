// template.marko
const $S_content__walks = "b%c";
const $S_content__template = "<!><!><!>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content !;D ;<span> </span>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell __tests__/template.marko_1_p#0:4/setup;${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($S_content__walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($S_content__template)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let p = resolveAfter("x", 1);
	const S = { content: _content("__tests__/template.marko_2*content", ({ promise }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_await($scope2_id, "#text/0", promise, (x) => {
			const $scope3_id = _scope_id();
			let s = x;
			let c = s;
			_html(`<span>${_text_mark($scope3_id, "#text/0", c)}</span>`);
			_patch_fill($scope3_id, "PatchFill:__tests__/template.marko_3_c#4/fill", c, 1, 2, 0);
			_scope($scope3_id, {}, "__tests__/template.marko", "3:4");
		}, 1, "__tests__/template.marko_3*content", 2);
	}, $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			S.content({ promise: p });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "9:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { p: _write_if($scope0_reason, 0) && p }, "__tests__/template.marko", 0, { p: "1:6" });
}, 1);
