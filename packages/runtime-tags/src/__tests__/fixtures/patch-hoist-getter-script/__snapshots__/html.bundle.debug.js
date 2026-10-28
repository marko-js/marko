// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const label = _resume(() => "ready", "__tests__/template.marko_0/label");
	_html(`<p>${_text_resume($scope0_id, "#text/0", input.title, 1, $scope0_reason, 0)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { label }, "__tests__/template.marko", 0, { label: "5:8" });
	_assert_hoist(label);
}, 1);
