// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1; b%;<button id=open>open</button><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	const Foo = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__input_content = _write_guard($scope1_reason, 0);
		_content_withhold(input?.content), _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", input?.content);
		let open = false;
		_html(`<button id=open>open</button>${_el_resume($scope1_id, "#button/0")}`);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
				_scope($scope2_id, {}, "__tests__/template.marko", "5:4");
				return 0;
			}
		}, $scope1_id, "#text/1");
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", open, 1);
		_scope($scope1_id, { input_content: input?.content }, "__tests__/template.marko", "2:2", { input_content: ["input.content", "2:13"] });
	}, $scope0_id, 1) };
	let count = 1;
	_dynamic_tag($scope0_id, "#text/0", show ? Foo : "div", {}, 10, _content_resume("__tests__/template.marko_3*content", () => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`count ${_text_resume($scope3_id, "#text/0", count, 2, 0, 0)}`);
		_scope($scope3_id, {}, "__tests__/template.marko", "8:4");
	}, $scope0_id, ($scope) => [{ count }]), 0, 0, 0, 0);
}, 1);
