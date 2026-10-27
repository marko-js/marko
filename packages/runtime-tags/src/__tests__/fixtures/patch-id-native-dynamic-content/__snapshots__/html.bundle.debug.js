// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; b ;<label>body</label><input>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const uid = _id("uid");
		_html(`<label${_attr("for", uid, $scope1_id, "#label/0", 0, 0)}>body</label>${_el_resume($scope1_id, "#label/0", 0)}<input${_attr("id", uid, $scope1_id, "#input/1", 0, 0)}>${_el_resume($scope1_id, "#input/1", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const Tag = item.on ? "p" : "div";
		_dynamic_tag($scope2_id, "#text/0", Tag, { content: Body }, 1, 0, 0, $wg__input_items, $scope0_reason, 0);
		_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_Body#0:4_Tag#4/init");
		_write_if($scope0_reason, 0) && _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_scope($scope0_id, { Body: _unfilled_if($scope0_reason, 0) && Body }, "__tests__/template.marko", 0, { Body: "1:9" });
}, 1);
