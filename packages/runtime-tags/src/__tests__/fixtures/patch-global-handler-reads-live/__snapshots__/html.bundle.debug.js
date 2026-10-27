// template.marko
const $template = "<button>read</button><output> </output>";
const $walks = " bD l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; bD ;<button>read</button><output> </output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let out = "-";
	_html(`<button>read</button>${_el_resume($scope0_id, "#button/0")}<output>${_text_resume($scope0_id, "#text/1", out)}</output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
