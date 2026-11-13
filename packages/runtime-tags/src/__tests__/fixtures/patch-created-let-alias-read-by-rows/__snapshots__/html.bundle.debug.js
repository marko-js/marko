// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_sel#1:1/setup __tests__/template.marko_2_picked#1:5_item#4/setup!__tests__/template.marko_2; D%b%;<button><!><!></button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let sel = 1;
			_for_of([1, 2], (item) => {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_mark($scope2_id, "#text/1", item === sel ? "*" : "")}${_text_mark($scope2_id, "#text/2", item, 2, 0, 0)}</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_write($scope2_id, "PatchWrite:item", item, 1);
				_scope($scope2_id, {
					item,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "4:4", { item: "4:8" });
			}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_sel#1/fill", sel, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
