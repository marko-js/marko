// template.marko
const $template = "<p> </p>";
const $walks = "D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let seed = $global$1.suffix;
	_html(`<p>${_text_resume($scope0_id, "#text/0", seed)}</p>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_suffix#4", $scope0_id);
	$scope0_page && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
