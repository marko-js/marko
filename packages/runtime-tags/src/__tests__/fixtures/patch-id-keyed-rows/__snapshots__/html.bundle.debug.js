// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; D l ;<label> </label><input>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const uid = _id("uid");
		_html(`<label${_patch_attr($scope1_id, "PatchAttr:#label/0 for", "for", uid, 0, 0)}>${_patch_text($scope1_id, "#text/1", item.key, void 0, $scope0_reason, 0)}</label>${_el_resume($scope1_id, "#label/0", 0)}<input${_patch_attr($scope1_id, "PatchAttr:#input/2 id", "id", uid, 0, 0)}>${_el_resume($scope1_id, "#input/2", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, "key", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
