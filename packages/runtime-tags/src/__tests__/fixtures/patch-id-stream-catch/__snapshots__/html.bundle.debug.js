// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/2 id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "PatchAttr:#input/2 aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<h1>Fields</h1><!><!>";
const $walks = " b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;b%;<!><!><!>",
	"__tests__/template.marko_3*content": /*@__PURE__*/ (() => `__tests__/template.marko_3*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))}`)(),
	"__tests__/template.marko_1_#text#1/await": "__tests__/template.marko_1_#text#1/await;b%;<!><!><!>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ (() => `__tests__/template.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1)}`)(),
	"__tests__/template.marko": "__tests__/template.marko; b%;<h1>Fields</h1><!><!>",
	"__tests__/template.marko_5*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_5*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const heading = _id("heading");
	_html(`<h1${_attr("id", heading, $scope0_id, "PatchAttr:#h1/0 id", 0, 0)}>Fields</h1>${_el_resume($scope0_id, "#h1/0", 0)}`);
	_try($scope0_id, "#text/1", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_set_scope_reason(0);
		const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 2);
		field_default({
			name: "before",
			heading
		});
		_patch_child_end();
		_await($scope1_id, "#text/1", input.promise, (items) => {
			const $scope4_id = _scope_id();
			_for_of(items, (item) => {
				const $scope5_id = _scope_id();
				_set_scope_reason(0);
				const $childScope3 = _peek_scope_id($scope5_id, "#childScope/0", 3);
				field_default({
					name: item.key,
					heading
				});
				_patch_child_end();
				_scope($scope5_id, {
					_: $wi__input_promise && _scope_with_id($scope4_id),
					"#childScope/0": _existing_scope($childScope3)
				}, "__tests__/template.marko", "5:4");
			}, "key", $scope4_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_5*shell", $scope0_reason, 0);
			_scope($scope4_id, {}, "__tests__/template.marko", "4:3");
		}, 1, "__tests__/template.marko_4*content", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/template.marko_1_input_promise#0:4/init" : "__tests__/template.marko_1_input_promise#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, {
			_: $wi__input_promise && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope2)
		}, "__tests__/template.marko", "2:2"), $cg__input_promise && "__tests__/template.marko_1_input_promise#0:4/subscribe");
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_set_scope_reason(0);
		_patch_child($scope2_id, "#childScope/0", 0);
		field_default({
			name: "loading",
			heading
		});
		_patch_child_end();
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:3");
		_resume_branch($scope2_id);
	}, (error) => {
		const $scope3_reason = _scope_reason();
		const $scope3_id = _scope_id();
		_set_scope_reason(16);
		const $childScope = _peek_scope_id($scope3_id, "#childScope/0", 1);
		field_default({
			name: error.message,
			heading
		});
		_patch_child_end();
		_scope($scope3_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "8:3");
	}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content", "__tests__/template.marko_1*content", 1, 1, 1);
	_scope($scope0_id, {
		heading,
		"ClosureScopes:input_promise/6": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures
	}, "__tests__/template.marko", 0, { heading: "1:5" });
}, 1);
