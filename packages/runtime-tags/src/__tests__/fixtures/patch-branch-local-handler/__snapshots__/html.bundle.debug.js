// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !__tests__/template.marko_1;D l ;<p> </p><button>c</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const label = input.title + "!";
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchWrite:label", label, !$sg__input_title);
			_html(`<p>${_patch_text($scope1_id, "#text/0", label, void 0, $scope0_reason, 1)}</p><button>c</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_title#0:4/init");
			_scope($scope1_id, {
				label,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "2:4", { label: "3:12" });
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, { input_title: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.title }, "__tests__/template.marko", 0, { input_title: ["input.title"] }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.title, !$sg__input_title);
}, 1);
