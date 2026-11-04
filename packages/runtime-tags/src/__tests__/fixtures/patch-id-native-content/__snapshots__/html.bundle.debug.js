// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; b ;<label>body</label><input>",
	"__tests__/template.marko": "__tests__/template.marko;b%b%;<!><!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; ;<div></div>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell; ;<section></section>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const Body = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const uid = _id("uid");
		_html(`<label${_attr("for", uid, $scope1_id, "PatchAttr:#label/0 for", 0, 0)}>body</label>${_el_mark($scope1_id, "#label/0", 0)}<input${_attr("id", uid, $scope1_id, "PatchAttr:#input/1 id", 0, 0)}>${_el_mark($scope1_id, "#input/1", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, $scope0_id) };
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_html("<div>");
		_attr_content("#div/0", $scope2_id, Body, 0, 1, 0, 0);
		_html(`</div>${_el_mark($scope2_id, "#div/0", 0)}`);
		_scope($scope2_id, {}, "__tests__/template.marko", "2:2");
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", $scope0_reason, 0);
	_for_of(input.items, (item) => {
		const $scope3_id = _scope_id();
		_html("<section>");
		_attr_content("#section/0", $scope3_id, Body, 1, 1, 0, 0);
		_html(`</section>${_el_mark($scope3_id, "#section/0", 0)}`);
		_scope($scope3_id, {}, "__tests__/template.marko", "3:2");
	}, 0, $scope0_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", $scope0_reason, 0);
	_scope($scope0_id, { Body: _unfilled_if($scope0_reason, 0) && Body }, "__tests__/template.marko", 0, { Body: "1:9" });
}, 1);
