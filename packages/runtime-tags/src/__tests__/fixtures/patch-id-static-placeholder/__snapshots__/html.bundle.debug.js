// tags/field.marko
const $template$1 = "<label> </label><input>";
const $walks$1 = " D l b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "#label/0", $scope0_reason, 0)}>${_patch_text($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "#input/2", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "#input/2", $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_13*content": "__tests__/template.marko_13*content;D ;<p> </p>",
	"__tests__/template.marko_1_#text#0/await": "__tests__/template.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (value) => {
			const $scope13_id = _scope_id();
			_html(`<p>${_patch_text($scope13_id, "#text/0", value, void 0, $scope0_reason, 0)}</p>`);
			_scope($scope13_id, {}, "__tests__/template.marko", "1:7");
		}, 1, "__tests__/template.marko_13*content", 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/template.marko_1_input_promise#0:3/init" : "__tests__/template.marko_1_input_promise#0:3/subscribe");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_promise && "__tests__/template.marko_1_input_promise#0:3/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		forOf([0, 1], (i) => {
			const $scope3_id = _scope_id();
			if (true) {
				const $scope4_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope4_id, "#childScope/0", 0);
				field_default({ name: "loading" });
				_patch_child_end();
			}
		});
		forIn({
			a: 0,
			b: 1
		}, (i) => {
			const $scope5_id = _scope_id();
			if (true) {
				const $scope6_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope6_id, "#childScope/0", 1);
				field_default({ name: "loading" });
				_patch_child_end();
			}
		});
		forTo(1, 0, 1, (i) => {
			const $scope7_id = _scope_id();
			if (true) {
				const $scope8_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope8_id, "#childScope/0", 2);
				field_default({ name: "loading" });
				_patch_child_end();
			}
		});
		forUntil(2, 0, 1, (i) => {
			const $scope9_id = _scope_id();
			if (true) {
				const $scope10_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope10_id, "#childScope/0", 3);
				field_default({ name: "loading" });
				_patch_child_end();
			}
		});
		forOf([0, 1], (g) => {
			const $scope11_id = _scope_id();
			forOf([0, 1], (i) => {
				const $scope12_id = _scope_id();
				_set_scope_reason(0);
				_patch_child($scope12_id, "#childScope/0", 4);
				field_default({ name: "nested" });
				_patch_child_end();
			});
		});
	}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_1*content", 1);
	_scope($scope0_id, { "ClosureScopes:input_promise/4": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures }, "__tests__/template.marko", 0);
}, 1);
