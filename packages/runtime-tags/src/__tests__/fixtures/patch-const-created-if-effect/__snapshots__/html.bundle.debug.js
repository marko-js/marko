// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=open>inc</button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_n#0:6/init;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const y = input.label + "!";
			_filled_guard($scope0_reason, 1) ? _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", y) : _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/init");
			_html(`<p>${_text_resume($scope1_id, "#text/0", y + n)}</p>`);
			_script($scope1_id, "__tests__/template.marko_1_y#1");
			_scope($scope1_id, {
				y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:2", { y: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !$sg__input_label);
}, 1);
