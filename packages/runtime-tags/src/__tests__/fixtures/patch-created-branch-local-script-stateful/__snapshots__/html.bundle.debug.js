// template.marko
const $template = "<button> </button><main></main>";
const $walks = " D l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button> </button><main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell,<p>shown</p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1), $fg__input_title2 = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", clicks)}</button>${_el_mark($scope0_id, "#button/0")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_title = _filled_guard($scope0_reason, 1);
			const label = input.title + "!";
			$fg__input_title && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !$sg__input_title);
			_html("<p>shown</p>");
			_script($scope1_id, "__tests__/template.marko_1_label#0", 0, $fg__input_title, "label");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:6/setup");
			_scope($scope1_id, {
				label,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:4", { label: "5:12" });
			return 0;
		}
	}, $scope0_id, "#main/2", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_mark($scope0_id, "#main/2", $wg__input_show)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title2 && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:6/setup", "input_title");
	_scope($scope0_id, {
		input_title: _write_if($scope0_reason, 0) && input.title,
		clicks
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		clicks: "1:6"
	}) || $fg__input_title2 && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
}, 1);
