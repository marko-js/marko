// template.marko
const $template = "<main><h1> </h1><details><summary>More</summary><p>Body</p></details></main>";
const $walks = "E l l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l ;<main><h1> </h1><details><summary>More</summary><p>Body</p></details></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h1><details${_attr_details_open($scope0_id, "#details/1", input.show, _resume(function(next) {
		document.querySelector("main").dataset.open = String(next);
	}, "__tests__/template.marko_0/openChange"), "PatchControl:4#details/1", $scope0_reason, 1, "PatchWrite:ControlledHandler:#details/1", $scope0_reason, 1)}><summary>More</summary><p>Body</p></details>${_el_resume($scope0_id, "#details/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0, { "ControlledHandler:#details/1": ["openChange", "3:28"] });
}, 1);
