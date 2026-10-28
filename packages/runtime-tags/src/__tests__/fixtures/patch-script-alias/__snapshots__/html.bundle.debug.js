// template.marko
const $template = "<h1> </h1>";
const $walks = "D l";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D ;<h1> </h1>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const copy = input.value;
	_html(`<h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 1)}</h1>`);
	_script($scope0_id, "__tests__/template.marko_0_alias#5", 1, _filled_guard($scope0_reason, 0), "copy");
	_scope($scope0_id, { copy }, "__tests__/template.marko", 0, { copy: "1:8" }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:copy", copy, !_server_guard($scope0_reason, 0));
}, 1);
