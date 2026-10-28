// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_value#1:4/subscribe;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content #childScope/0>__tests__/template.marko_2_value#1:4/subscribe!__tests__/template.marko_1",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_n = _write_guard($scope0_reason, 0), $cg__input_n = _client_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const Outer = { content: _content_resume("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		const $Outer_content__value__closures = new Set();
		const $scope1_reason = _scope_reason(), $wi__value = _write_if($scope1_reason, 0);
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill2", value);
		let count = 0;
		const Inner = { content: _content("__tests__/template.marko_2*content", ({ y }) => {
			const $scope2_id = _scope_id();
			const $scope2_reason = _scope_reason();
			const b = value + y;
			_html(`<p>${_text_resume($scope2_id, "#text/0", b, 1, $scope2_reason, 0)}</p>`);
			_patch_write($scope2_id, "PatchWrite:y", y, 1);
			_client_guard($scope2_reason, 0) && _patch_init($scope2_id, "__tests__/template.marko_2_value#1:4_y#3/init");
			_subscribe(_unfilled_if($scope2_reason, 0) && $wi__value && $Outer_content__value__closures, _scope($scope2_id, {
				y: $wi__value && y,
				_: ($wi__value || _write_if($scope2_reason, 0)) && _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "3:4", { y: "3:19" }));
		}, $scope1_id, 1) };
		_set_scope_reason(2);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		Inner.content({ y: count });
		_patch_child_end();
		_html(`<button>inc</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill3", count, 1);
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
	_scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.show,
		input_n: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.n,
		Outer: _unfilled_if($scope0_reason, 0) && Outer
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_n: ["input.n"],
		Outer: "1:9"
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_n && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 1)), $cg__input_n && _content_withhold(input.show), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.n, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.n));
}, 1);
