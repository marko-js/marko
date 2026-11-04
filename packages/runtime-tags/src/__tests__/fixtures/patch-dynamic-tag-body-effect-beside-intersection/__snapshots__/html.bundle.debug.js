// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_tag = _write_guard($scope0_reason, 2), $fg__input_a = _filled_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_a__closures = new Set();
	const $input_b__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.tag, {}, 2, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let n = 0;
		_html(`<button>${_text_mark($scope1_id, "#text/1", input.a + n)}</button>${_el_mark($scope1_id, "#button/0")}<p>${_text_mark($scope1_id, "#text/2", input.a + input.b, 1, $scope0_reason, 1)}</p>`);
		_script($scope1_id, "__tests__/template.marko_1_input_a#0:4", 1, _filled_guard($scope0_reason, 3), ">input_a");
		_script($scope1_id, "__tests__/template.marko_1");
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_a#0:4/subscribe", _client_guard($scope0_reason, 3));
		_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope1_id, "__tests__/template.marko_1_input_b#0:5/subscribe");
		_patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:4_input_b#0:5/setup", [_filled_guard($scope0_reason, 3) && ">input_a", _filled_guard($scope0_reason, 4) && ">input_b"], $scope0_reason, 1);
		_patch_render($scope1_id, "__tests__/template.marko_1_input_a#0:4_n#4/setup", _filled_guard($scope0_reason, 3) && ">input_a");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_n#4/fill", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 4) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope1_id, {
			n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:4", { n: "2:8" })));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_b: input.b }] : []), 0, $wg__input_tag, $scope0_reason, 2, 0, void 0, 0, 0, "__tests__/template.marko_1*content");
	$fg__input_a && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_a#4/subscribers", "input_a");
	$fg__input_b && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_b#5/subscribers", "input_b");
	_scope($scope0_id, {
		input_a: input.a,
		input_b: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		"ClosureScopes:input_a/6": _write_if($scope0_reason, 3) && $input_a__closures,
		"ClosureScopes:input_b/7": _write_if($scope0_reason, 4) && $input_b__closures
	}, "__tests__/template.marko", 0, {
		input_a: ["input.a"],
		input_b: ["input.b"]
	}) || ($fg__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 3)), $fg__input_b && (_client_branch_if("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 0)) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 4)));
}, 1);
