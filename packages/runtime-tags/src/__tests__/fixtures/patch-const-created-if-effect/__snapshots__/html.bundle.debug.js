// template.marko
const $template = "<button class=open>inc</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=open>inc</button><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell __tests__/template.marko_1_n#0:6/setup;D ;<p> </p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_label = _server_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const y = input.label + "!";
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:y", y, !$sg__input_label);
			_html(`<p>${_text_mark($scope1_id, "#text/0", y + n)}</p>`);
			_script($scope1_id, "__tests__/template.marko_1_y#1", 1, _filled_guard($scope0_reason, 1), "y");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:5/setup");
			_patch_render($scope1_id, "__tests__/template.marko_1_n#0:6_y#1/setup", _filled_guard($scope0_reason, 1) && "y");
			_scope($scope1_id, {
				y,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "3:2", { y: "4:10" });
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:5/setup", "input_label");
	_scope($scope0_id, {
		input_label: _write_if($scope0_reason, 0) && input.label,
		n
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		n: "1:6"
	}) || $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !$sg__input_label);
}, 1);
