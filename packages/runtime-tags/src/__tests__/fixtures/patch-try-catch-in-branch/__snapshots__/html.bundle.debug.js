// template.marko
const $template = "<main></main>";
const $walks = " b";
function boom() {
	throw new Error("boom");
}
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D%b%;<em><!><!></em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_show = _source_guard($scope0_reason, 1), $si__input_show = _source_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_message__closures = new Set();
	const $input_boom__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_id = _scope_id();
				const $scope2_reason = _scope_reason();
				_html(`<em>${_patch_text($scope2_id, "#text/0", input.message, void 0, $scope0_reason, 2)}${_patch_text($scope2_id, "#text/1", input.boom ? boom() : "", 2, $scope0_reason, 3)}</em>`);
				_subscribe(_unfilled_if($scope0_reason, 3) && $input_boom__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_message__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6")));
			}, $scope1_id), { catch: attrTag({ content: _content_elide("__tests__/template.marko_3*content", (err) => {
				const $scope3_reason = _scope_reason(), $sg__err_message = _source_guard($scope3_reason, 0);
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "#text/0", err.message, $sg__err_message)}</b>`);
				_source_if($scope3_reason, 0) && _scope($scope3_id, {}, "__tests__/template.marko", "8:8");
			}, $scope1_id) }) });
			$scope0_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $sg__input_show)}`);
	$scope0_page && _scope($scope0_id, {
		input_message: $si__input_show && input.message,
		input_boom: $si__input_show && input.boom,
		"ClosureScopes:input_message": $input_message__closures,
		"ClosureScopes:input_boom": $input_boom__closures
	}, "__tests__/template.marko", 0, {
		input_message: ["input.message"],
		input_boom: ["input.boom"]
	});
}, 1, 0);
