// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", input.name, 1, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/2 id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "PatchAttr:#input/2 aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<h1>Fields</h1><!><!>";
const $walks = " b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<p> </p>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_2*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1),
	"__tests__/template.marko": "__tests__/template.marko; b%;<h1>Fields</h1><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_rows = _client_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const heading = _id("heading");
	_html(`<h1${_attr("id", heading, $scope0_id, "PatchAttr:#h1/0 id", 0, 0)}>Fields</h1>${_el_resume($scope0_id, "#h1/0", 0)}`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_promise__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", row.promise, (v) => {
				const $scope4_id = _scope_id();
				_html(`<p>${_text_resume($scope4_id, "#text/0", v, 1, $scope0_reason, 0)}</p>`);
				_scope($scope4_id, {}, "__tests__/template.marko", "4:4");
			}, 1, "__tests__/template.marko_4*content");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_rows ? "__tests__/template.marko_3_row_promise#1:3/init" : "__tests__/template.marko_3_row_promise#1:3/subscribe");
			$wi__input_rows && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:3"), $cg__input_rows && "__tests__/template.marko_3_row_promise#1:3/subscribe", 0);
			$wi__input_rows && _resume_branch($scope3_id);
		}, void 0, (error) => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_set_scope_reason(16);
			const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
			field_default({
				name: error.message,
				heading
			});
			_patch_child_end();
			_scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "5:4");
		}, void 0, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content", void 0, 1, 1);
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:row_promise/7": $wi__input_rows && _unfilled_if($scope0_reason, 0) && $for_content__row_promise__closures
		}, "__tests__/template.marko", "2:2");
	}, "key", $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_scope($scope0_id, { heading }, "__tests__/template.marko", 0, { heading: "1:5" });
}, 1);
