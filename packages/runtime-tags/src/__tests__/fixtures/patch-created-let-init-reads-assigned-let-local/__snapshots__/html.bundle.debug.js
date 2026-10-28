// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_input_a#0:4_x#4/init!__tests__/template.marko_1; D l D ;<span> </span><button> </button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let x = 1;
			let y = x;
			const k = y + 1;
			_html(`<span>${_text_resume($scope1_id, "#text/1", input.a, 1, $scope0_reason, 1)}</span>${_el_resume($scope1_id, "#span/0")}<button>${_text_resume($scope1_id, "#text/3", x + input.a)}</button>${_el_resume($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_script($scope1_id, "__tests__/template.marko_1_y#6");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_a#0:4/init");
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", x, 1);
			_scope($scope1_id, {
				x: _write_if($scope0_reason, 1) && x,
				y,
				k,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "1:2", {
				x: "2:8",
				y: "3:8",
				k: "4:10"
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_a: input.a }, "__tests__/template.marko", 0, { input_a: ["input.a"] }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.a, !_server_guard($scope0_reason, 1));
}, 1);
