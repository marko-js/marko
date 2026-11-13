// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell !;b%;<!><!><!>",
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell __tests__/template.marko_2_sel#1:2_item#4/setup!__tests__/template.marko_2; D%b%;<button><!><!></button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_i2 = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const items = [1, 2];
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id(), $fg__input_i = _filled_guard($scope0_reason, 2);
			let sel = items[input.i];
			_for_of(items, (item) => {
				const $scope2_id = _scope_id();
				_html(`<button>${_text_mark($scope2_id, "#text/1", item === sel ? "*" : "")}${_text_mark($scope2_id, "#text/2", item, 2, 0, 0)}</button>${_el_mark($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_patch_write($scope2_id, "PatchWrite:item", item, 1);
				_scope($scope2_id, {
					item,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "4:4", { item: "4:8" });
			}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_2*shell", 0, 0);
			!_client_guard($scope0_reason, 0) && _unfilled_if() && _patch_write($scope0_id, "PatchWrite:items", items);
			_patch_render($scope1_id, "__tests__/template.marko_1_input_i#0:4_items#0:5/setup", $fg__input_i && ">input_i", $scope0_reason, 2);
			$fg__input_i && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_sel#2/fill", sel, 1);
			_scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	$fg__input_i2 && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/template.marko_1_input_i#0:4/setup", "input_i");
	_scope($scope0_id, {
		input_i: _write_if($scope0_reason, 1) && ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.i,
		items: _write_if($scope0_reason, 0) && items
	}, "__tests__/template.marko", 0, {
		input_i: ["input.i"],
		items: "1:8"
	}) || $fg__input_i2 && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_i", input.i, !_server_guard($scope0_reason, 2));
}, 1);
