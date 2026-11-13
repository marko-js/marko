// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;D l%b%;<p> </p><!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_sel#1:3/setup!__tests__/template.marko_2; D%b%;<button><!><!></button>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_sel#1:3/setup;D%b%;<span><!><!></span>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let sel = 1;
			_html(`<p>${_text_mark($scope1_id, "#text/0", sel)}</p>`);
			_for_to(2, 1, 1, (n) => {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_mark($scope2_id, "#text/1", n === sel ? "*" : "")}${_text_mark($scope2_id, "#text/2", n, 2, 0, 0)}</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, {
					"#LoopKey": n,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "4:4", { "#LoopKey": "4:8" });
			}, 0, $scope1_id, "#text/1", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
			_for_of([{ id: 1 }, { id: 2 }], (item) => {
				const $scope3_id = _scope_id();
				_html(`<span>${_text_mark($scope3_id, "#text/0", item.id === sel ? "*" : "")}${_text_mark($scope3_id, "#text/1", item.id, 2, 0, 0)}</span>`);
				_scope($scope3_id, {
					"#LoopKey": item?.id,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "7:4", { "#LoopKey": ["item.id", "7:8"] });
			}, "id", $scope1_id, "#text/2", 1, 1, 1, 0, 0, "__tests__/template.marko_3*shell", 0, 0);
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_sel#3/fill", sel, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
