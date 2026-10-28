// template.marko
const $template = "<main></main>";
const $walks = " b";
function check(fail) {
	if (fail) throw new Error("down");
}
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D%b%;<p><!><!></p>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_rows = _client_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_fail__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "#text/0", row.key, 1, $scope0_reason, 0)}${_text_resume($scope3_id, "#text/1", check(row.fail), 2, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_rows ? "__tests__/template.marko_3_row_fail#1:4/init" : "__tests__/template.marko_3_row_fail#1:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__row_fail__closures, _scope($scope3_id, { _: $wi__input_rows && _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), $cg__input_rows && "__tests__/template.marko_3_row_fail#1:4/subscribe");
		}, void 0, () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`Unavailable ${_escape(row.key)}`);
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "8:8");
			_resume_branch($scope2_id);
		}, 0, "__tests__/template.marko_2*content", "__tests__/template.marko_3*content");
		_scope($scope1_id, {
			"#LoopKey": row?.key,
			"ClosureScopes:row_fail/6": $wi__input_rows && _unfilled_if($scope0_reason, 0) && $for_content__row_fail__closures
		}, "__tests__/template.marko", "5:4", { "#LoopKey": ["row.key", "5:8"] });
	}, "key", $scope0_id, "#main/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`</main>${_el_resume($scope0_id, "#main/0")}`);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
