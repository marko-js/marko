// template.marko
const $template = "<h2>Fields</h2><!><!>";
const $walks = " b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; b%;<h2>Fields</h2><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; D l ;<label> </label><input>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const headingId = _id("headingId");
	_html(`<h2${_attr("id", headingId, $scope0_id, "#h2/0", 0, 0)}>Fields</h2>${_el_resume($scope0_id, "#h2/0", 0)}`);
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const uid = _id("uid");
		_html(`<label${_attr("for", uid, $scope1_id, "#label/0", 0, 0)}>${_patch_text($scope1_id, "#text/1", item.key, void 0, $scope0_reason, 0)}</label>${_el_resume($scope1_id, "#label/0", 0)}<input${_attr("id", uid, $scope1_id, "#input/2", 0, 0)}${_attr("aria-describedby", headingId, $scope1_id, "#input/2", 0, 0)}>${_el_resume($scope1_id, "#input/2", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "3:2");
	}, "key", $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, { headingId: _unfilled_if($scope0_reason, 0) && headingId }, "__tests__/template.marko", 0, { headingId: "1:5" });
}, 1);
