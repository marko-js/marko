// template.marko
const $template = "<button><!><!></button><p> </p>";
const $walks = " D%b%lD l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D%b%lD ;<button><!><!></button><p> </p>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let a = 1;
	let b = 2;
	_html(`<button>${_text_mark($scope0_id, "#text/1", a)}${_text_mark($scope0_id, "#text/2", b, 2)}</button>${_el_mark($scope0_id, "#button/0")}<p>${_text_mark($scope0_id, "#text/3", a + b + $global$1.x)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_a#4_b#5_$global_x#9");
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_a#4_b#5_$global_x#9/setup");
	_scope($scope0_id, {
		a,
		b
	}, "__tests__/template.marko", 0, {
		a: "1:6",
		b: "2:6"
	});
}, 1);
