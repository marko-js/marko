// template.marko
const $template = "<div><h1> </h1><p> </p></div>";
const $walks = "D D lD m";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;D D lD ;<div><h1> </h1><p> </p></div>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<div><h1${_attr("title", $global$1.locale, $scope0_id, "#h1/0")}>${_text_resume($scope0_id, "#text/1", $global$1.brand, void 0, 4, 0)}</h1>${_el_resume($scope0_id, "#h1/0")}<p>${_text_resume($scope0_id, "#text/2", input.name, void 0, $scope0_reason, 0)}</p></div>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_locale#5", $scope0_id);
	_fill_global_subscribe("__tests__/template.marko_0_$global_brand#7", $scope0_id);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
