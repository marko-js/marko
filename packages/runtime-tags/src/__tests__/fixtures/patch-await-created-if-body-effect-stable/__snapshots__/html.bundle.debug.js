// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content !__tests__/template.marko_2_v#2; ;<div></div>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await !__tests__/template.marko_2_v#2; ;<div></div>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "#text/0", Promise.resolve(1), (v) => {
				const $scope2_id = _scope_id();
				_html(`<div></div>${_el_mark($scope2_id, "#div/0")}`);
				_script($scope2_id, "__tests__/template.marko_2_v#2");
				_patch_write($scope2_id, "PatchWrite:v", v, 1);
				_scope($scope2_id, { v }, "__tests__/template.marko", "2:4", { v: "2:10" });
			}, 1, "__tests__/template.marko_2*content");
			_write_if($scope0_reason, 0) && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
