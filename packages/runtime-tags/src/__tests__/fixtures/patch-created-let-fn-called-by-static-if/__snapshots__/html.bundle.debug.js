// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;b%b ;<!><!><button>set</button>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_add#1:3/setup;D ;<b> </b>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const on = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let n = 1;
			const add = (v) => v + n;
			_if(() => {
				if (on) {
					const $scope2_id = _scope_id();
					_html(`<b>${_text_mark($scope2_id, "#text/0", add(10))}</b>`);
					_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4");
					return 0;
				}
			}, $scope1_id, "#text/0", 1, 0, 1, 0, 0, ["__tests__/template.marko_2*shell"], 0, 0);
			_html(`<button>set</button>${_el_mark($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			!_client_guard($scope0_reason, 0) && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:on", on);
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_n#2/fill", n, 1);
			_scope($scope1_id, {}, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { on: _unfilled_if($scope0_reason, 0) && on }, "__tests__/template.marko", 0, { on: "1:8" });
}, 1);
