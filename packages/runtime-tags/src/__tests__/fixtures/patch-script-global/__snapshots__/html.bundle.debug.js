// template.marko
const $template = "<main><h1> </h1></main>";
const $walks = "E m";
const $setup = [[], ["__tests__/template.marko_0_$global_brand#4"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_brand#4;E ;<main><h1> </h1></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<main><h1>${_text_resume($scope0_id, "#text/0", $global$1.brand, void 0, 4, 0)}</h1></main>`);
	_script($scope0_id, "__tests__/template.marko_0_$global_brand#4");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
