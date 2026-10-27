// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_patch_attr($scope0_id, "PatchAttr:#label/0 for", "for", uid, $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_patch_attr($scope0_id, "PatchAttr:#input/2 id", "id", uid, $scope0_reason, 0)}${_patch_attr($scope0_id, "PatchAttr:#input/2 aria-describedby", "aria-describedby", input.heading, $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<h1>Fields</h1><!><!>";
const $walks = " b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content;D ;<p> </p>",
	"__tests__/template.marko_4_#text#0/await": "__tests__/template.marko_4_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;b%;<!><!><!>",
	"__tests__/template.marko_3*content": /*@__PURE__*/ (() => `__tests__/template.marko_3*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))}`)(),
	"__tests__/template.marko": "__tests__/template.marko; b%;<h1>Fields</h1><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_rows = _client_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const heading = _id("heading");
	_html(`<h1${_patch_attr($scope0_id, "PatchAttr:#h1/0 id", "id", heading, 0, 0)}>Fields</h1>${_el_resume($scope0_id, "#h1/0", 0)}`);
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_promise__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_await($scope4_id, "#text/0", row.promise, (v) => {
				const $scope5_id = _scope_id();
				_html(`<p>${_patch_text($scope5_id, "#text/0", v, void 0, $scope0_reason, 0)}</p>`);
				$scope0_page && _scope($scope5_id, {}, "__tests__/template.marko", "4:4");
			}, 1, "__tests__/template.marko_5*content");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope4_id, $cg__input_rows ? "__tests__/template.marko_4_row_promise#1:4/init" : "__tests__/template.marko_4_row_promise#1:4/subscribe");
			$scope0_page && $wi__input_rows && _subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_promise__closures, _scope($scope4_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:3"), $cg__input_rows && "__tests__/template.marko_4_row_promise#1:4/subscribe", 0);
			$wi__input_rows && _resume_branch($scope4_id);
		}, () => {
			const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_set_scope_reason(0);
			_patch_child($scope2_id, "#childScope/0", 0);
			field_default({
				name: row.key,
				heading
			});
			_patch_child_end();
			$scope2_page && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4");
			_resume_branch($scope2_id);
		}, (error) => {
			const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
			const $scope3_id = _scope_id();
			_set_scope_reason(16);
			const $childScope = _patch_child($scope3_id, "#childScope/0", 1);
			field_default({
				name: error.message,
				heading
			});
			_patch_child_end();
			$scope3_page && _scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "6:4");
		}, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content", "__tests__/template.marko_4*content", void 0, 1, 1);
		$scope0_page && _scope($scope1_id, {
			"#LoopKey": row?.key,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:row_promise/8": $wi__input_rows && _unfilled_if($scope0_reason, 0) && $for_content__row_promise__closures
		}, "__tests__/template.marko", "2:2", { "#LoopKey": ["row.key", "2:6"] });
	}, "key", $scope0_id, "#text/1", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, { heading }, "__tests__/template.marko", 0, { heading: "1:5" });
}, 1);
