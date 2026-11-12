// template.marko
const $template = "<p> </p>";
const $walks = "D l";
const $setup = [[], ["__tests__/template.marko_0_$global_meta_title_length#6"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_$global_meta_title_length#6;D ;<p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<p>${_text_mark($scope0_id, "#text/0", JSON.stringify($global$1.meta), 1, 4, 0)}</p>`);
	_fill_global_subscribe("__tests__/template.marko_0_$global_meta#4/subscribe", $scope0_id);
	_script($scope0_id, "__tests__/template.marko_0_$global_meta_title_length#6");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
