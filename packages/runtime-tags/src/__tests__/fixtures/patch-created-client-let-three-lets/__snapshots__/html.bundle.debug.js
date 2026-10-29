// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_b#3_d#6/init!__tests__/template.marko_1;D l ;<span> </span><button class=b>b</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let a = 1;
			let b = 2;
			let c = 3;
			const d = a + c;
			_html(`<span>${_text_resume($scope1_id, "#text/0", d + b)}</span><button class=b>b</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_write($scope1_id, "PatchWrite:d", d, 1);
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", b, 1);
			_scope($scope1_id, {
				b,
				d
			}, "__tests__/template.marko", "1:2", {
				b: "3:8",
				d: "5:10"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
