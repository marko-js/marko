// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;b%b ;<!><!><button class=b>b</button>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_b#1:2_i#2/init;D ;<span> </span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let b = 1;
			_for_of([1, 2], (i) => {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", b + i)}</span>`);
				_patch_write($scope2_id, "PatchWrite:i", i, 1);
				_scope($scope2_id, {
					i,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "3:4", { i: "3:8" });
			}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
			_html(`<button class=b>b</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", b, 1);
			_scope($scope1_id, { b }, "__tests__/template.marko", "1:2", { b: "2:8" });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
