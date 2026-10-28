// template.marko
const $template = "<button> </button><main></main>";
const $walks = " D l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l ;<button> </button><main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell,<p>shown</p>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let clicks = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", clicks)}</button>${_el_resume($scope0_id, "#button/0")}<main>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchMarkedWrite:label", label, !$sg__input_title);
			_html("<p>shown</p>");
			_script($scope1_id, "__tests__/template.marko_1_label#0", 0, _filled_guard($scope0_reason, 1), "label");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:6/init");
			_scope($scope1_id, {
				label,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:4", { label: "5:12" });
			return 0;
		}
	}, $scope0_id, "#main/2", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/2", $wg__input_show)}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_title: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title,
		clicks
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		clicks: "1:6"
	}) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !$sg__input_title);
}, 1);
