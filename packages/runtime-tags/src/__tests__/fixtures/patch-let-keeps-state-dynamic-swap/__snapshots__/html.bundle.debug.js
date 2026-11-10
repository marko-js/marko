// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_flag__OR__input_a = _write_guard($scope0_reason, 0), $ui__input_flag__OR__input_a = _unfilled_if($scope0_reason, 0), $ui__input_a = _unfilled_if($scope0_reason, 2), $ui__input_flag = _unfilled_if($scope0_reason, 1), $fg__input_flag = _filled_guard($scope0_reason, 1), $fg__input_a = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const A = { content: _content_resume("__tests__/template.marko_1*content", ({ x }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let l = String(x);
		_html(`<button>${_text_mark($scope1_id, "#text/1", l)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_l#5/fill", l, 1);
		_scope($scope1_id, { l }, "__tests__/template.marko", "1:2", { l: "2:8" });
	}, $scope0_id) };
	const B = { content: _content_resume("__tests__/template.marko_2*content", ({ x }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html("<b>B</b>");
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.flag ? B : A, { x: input.a }, 1, 0, 0, $wg__input_flag__OR__input_a, $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_flag#3_input_a#4_A#5_B#6/setup", (($fg__input_flag ? " input_flag" : "") + ($fg__input_a ? " input_a" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_flag: ($ui__input_a || $ui__input_flag__OR__input_a) && input.flag,
		input_a: ($ui__input_flag || $ui__input_flag__OR__input_a) && input.a,
		A: $ui__input_flag__OR__input_a && A,
		B: $ui__input_flag__OR__input_a && B
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_a: ["input.a"],
		A: "1:9",
		B: "5:9"
	}) || ($fg__input_flag && $ui__input_a && _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !_server_guard($scope0_reason, 1)), $fg__input_a && $ui__input_flag && _patch_write($scope0_id, "PatchMarkedWrite:input_a", input.a, !_server_guard($scope0_reason, 2)));
}, 1);
