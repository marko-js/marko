// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content #childScope/0>!__tests__/template.marko_1",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_n = _write_guard($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 1), $fg__input_n = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const Outer = { content: _content_resume("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__value__closures = new Set();
		const $scope1_reason = _scope_reason(), $wi__value = _write_if($scope1_reason, 0);
		_patch_write($scope1_id, "PatchMarkedWrite:value", value);
		let count = 0;
		const Inner = { content: _content("__tests__/template.marko_2*content", ({ y }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			const b = value + y;
			_html(`<p>${_text_mark($scope2_id, "#text/0", b, 1, 6, 0)}</p>`);
			_patch_write($scope2_id, "PatchWrite:y", y, 1);
			_patch_subscribe($scope2_id, "__tests__/template.marko_2_value#1:4/subscribe");
			_client_guard(6, 0) && _patch_render($scope2_id, "__tests__/template.marko_2_value#1:4_y#3/setup");
			_subscribe(_unfilled_if(6, 0) && $wi__value && $Outer_content__value__closures, _scope($scope2_id, {
				y: _unfilled_if($scope1_reason, 0) && y,
				_: ($wi__value || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "3:4", { y: "3:19" }));
		}, $scope1_id, 0) };
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		Inner.content({ y: count });
		_patch_child_end();
		_html(`<button>inc</button>${_el_mark($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_subscribers($scope1_id, "__tests__/template.marko_1_value#4/subscribers", "value");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_1_count#5/fill", count, 1);
		_scope($scope1_id, {
			value,
			count,
			"ClosureScopes:value/6": $wi__value && $Outer_content__value__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", {
			value: "1:17",
			count: "2:8"
		});
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.show && Outer, { value: input.n }, 9, 0, 0, $wg__input_show__OR__input_n, $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_show#3_input_n#4_Outer#5/setup", [$fg__input_show && "input_show", $fg__input_n && "input_n"], $scope0_reason, 0);
	_scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		Outer: _unfilled_if($scope0_reason, 0) && Outer
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_n: ["input.n"],
		Outer: "1:9"
	}) || ($fg__input_show && _unfilled_if($scope0_reason, 2) && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 1)), $fg__input_n && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "PatchMarkedWrite:input_n", input.n, !_server_guard($scope0_reason, 2)));
}, 1);
