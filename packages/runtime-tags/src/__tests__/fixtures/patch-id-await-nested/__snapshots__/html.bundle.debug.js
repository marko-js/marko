// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "#label/0", $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "#input/2", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "#input/2", $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_3*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_2_#text#0/await": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_2_#text#0/await${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_inner__closures = new Set();
		_await($scope1_id, "#text/0", item.outer, (outer) => {
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", item.inner, (inner) => {
				const $scope3_id = _scope_id();
				_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
				const $childScope = _patch_child($scope3_id, "#childScope/0", 0);
				field_default({ name: inner });
				_patch_child_end();
				_scope($scope3_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "3:6");
			}, 1, "__tests__/template.marko_3*content");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_items ? "__tests__/template.marko_2_item_inner#1:4/init" : "__tests__/template.marko_2_item_inner#1:4/subscribe");
			$wi__input_items && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_inner__closures, _scope($scope2_id, {}, "__tests__/template.marko", "2:4"), $cg__input_items && "__tests__/template.marko_2_item_inner#1:4/subscribe", 0);
			$wi__input_items && _resume_branch($scope2_id);
		}, 1, "__tests__/template.marko_2*content");
		$wi__input_items && _scope($scope1_id, { "ClosureScopes:item_inner/5": _unfilled_if($scope0_reason, 0) && $for_content__item_inner__closures }, "__tests__/template.marko", "1:2");
	}, "key", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
