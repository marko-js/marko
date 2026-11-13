// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_sel_id#1:2_item#4/setup!__tests__/template.marko_2; D%b%;<button><!><!></button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_token = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let sel = {
				id: 1,
				token: input.token
			};
			_for_of([1, 2], (item) => {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_mark($scope2_id, "#text/1", item === sel.id ? "*" : "")}${_text_mark($scope2_id, "#text/2", item, 2, 0, 0)}</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_write($scope2_id, "PatchWrite:item", item, 1);
				_scope($scope2_id, {
					item,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "3:4", { item: "3:8" });
			}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
			_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "PatchWrite:sel_id", sel?.id, 1);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_input_token#0:4/setup");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	$fg__input_token && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "__tests__/template.marko_1_input_token#0:4/setup", "input_token");
	_scope($scope0_id, { input_token: _write_if($scope0_reason, 0) && ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.token }, "__tests__/template.marko", 0, { input_token: ["input.token"] }) || $fg__input_token && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_token", input.token, !_server_guard($scope0_reason, 1));
}, 1);
