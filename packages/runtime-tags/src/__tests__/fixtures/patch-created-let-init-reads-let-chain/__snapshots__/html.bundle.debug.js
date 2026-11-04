// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1; b D ;<span></span><button> </button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			let z = y;
			_html(`<span></span>${_el_mark($scope1_id, "#span/0")}<button>${_text_mark($scope1_id, "#text/2", x)}</button>${_el_mark($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_script($scope1_id, "__tests__/template.marko_1_z#5");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_x#3/fill", x, 1);
			_scope($scope1_id, {
				x,
				z
			}, "__tests__/template.marko", "1:2", {
				x: "2:8",
				z: "4:8"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
