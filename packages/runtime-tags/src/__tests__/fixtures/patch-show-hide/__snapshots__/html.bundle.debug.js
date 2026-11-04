// template.marko
const $template = "<!><p> </p><!><button> </button>";
const $walks = "bD l%b D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;bD l%b D ;<!><p> </p><!><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const $show = input.on;
	_show_start($show, 0);
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 1)}</p>`);
	_show_end($scope0_id, "#text/1", $show, 1, 0, 0, 1, "#text/1", void 0, $scope0_reason, 0);
	_html(`<button>${_text_mark($scope0_id, "#text/3", count)}</button>${_el_mark($scope0_id, "#button/2")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
