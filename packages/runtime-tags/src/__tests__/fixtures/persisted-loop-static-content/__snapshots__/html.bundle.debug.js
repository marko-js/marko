// template.marko
const $template = "<main><h1> </h1><!></main>";
const $walks = "E l%l";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;E l%;<main><h1> </h1><!></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;Db%;<p>item <!></p>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "#text/0")}</h1>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_html(`<p>item <!>${_patch_text($scope1_id, "#text/0", name)}${_el_resume($scope1_id, "#text/0")}</p>`);
		writeScope($scope1_id, {}, "__tests__/template.marko", "3:4");
	}, 0, $scope0_id, "#text/1", 1, 1, 0, void 0, void 0, "__tests__/template.marko_1*shell");
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, 0);
