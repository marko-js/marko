// template.marko
const $template = "<h1>Keys</h1><!><!>";
const $walks = " b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko; b%;<h1>Keys</h1><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; b ;<label>Key</label><input>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const heading = _id("heading");
	_html(`<h1${_attr("id", heading, $scope0_id, "#h1/0", 0, 0)}>Keys</h1>${_el_resume($scope0_id, "#h1/0", 0)}`);
	_for_of(input.keys, (key) => {
		const $scope1_id = _scope_id();
		const uid = _id("uid");
		_html(`<label${_attr("for", uid, $scope1_id, "#label/0", 0, 0)}>Key</label>${_el_resume($scope1_id, "#label/0", 0)}<input${_attr("id", uid, $scope1_id, "#input/1", 0, 0)}${_attr("aria-labelledby", heading, $scope1_id, "#input/1", 0, 0)}>${_el_resume($scope1_id, "#input/1", 0)}`);
		_scope($scope1_id, {}, "__tests__/template.marko", "1:39");
	}, (key) => key, $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, { heading: _unfilled_if($scope0_reason, 0) && heading }, "__tests__/template.marko", 0, { heading: "1:5" });
}, 1);
