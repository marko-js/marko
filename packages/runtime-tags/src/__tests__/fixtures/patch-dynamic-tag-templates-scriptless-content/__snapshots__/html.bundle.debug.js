// tags/bold.marko
const $template$2 = "<b> </b>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/bold.marko": "__tests__/tags/bold.marko;D ;<b> </b>" });
var bold_default = _template("__tests__/tags/bold.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</b>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/bold.marko", 0);
});

// tags/italic.marko
const $template$1 = "<i> </i>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/italic.marko": "__tests__/tags/italic.marko;D ;<i> </i>" });
var italic_default = _template("__tests__/tags/italic.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<i>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</i>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/italic.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content __tests__/template.marko_1_input_bold#0:4/subscribe __tests__/template.marko_1_input_label#0:5/subscribe;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_bold__OR__input_label = _write_guard($scope0_reason, 2), $wi__input_tag__OR__input_bold__OR__input_label = _write_if($scope0_reason, 3), $wg__input_tag = _write_guard($scope0_reason, 4), $cg__input_label = _client_guard($scope0_reason, 6), $cg__input_bold = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_bold__closures = new Set();
	const $input_label__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.tag, {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_dynamic_tag($scope1_id, "#text/0", input.bold ? bold_default : italic_default, { label: input.label }, 0, 0, $wg__input_bold__OR__input_label, void 0, 1, $scope0_reason, 2);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_bold#0:4_input_label#0:5/init");
		$scope1_page && $wi__input_tag__OR__input_bold__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 6) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_bold__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4")));
		$wg__input_bold__OR__input_label || $wi__input_tag__OR__input_bold__OR__input_label && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{
		input_label: input.label,
		input_bold: input.bold
	}] : []), 0, $wg__input_tag, void 0, 2, $scope0_reason, 4);
	$scope0_page ? _scope($scope0_id, {
		input_bold: _write_if($scope0_reason, 1) && input.bold,
		input_label: _write_if($scope0_reason, 0) && input.label,
		"ClosureScopes:input_bold/6": _write_if($scope0_reason, 5) && $input_bold__closures,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 6) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_bold: ["input.bold"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_label ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.bold, !_server_guard($scope0_reason, 5)) : _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/content", input.bold)), (_content_withheld("__tests__/template.marko_1*content", $scope0_id) || $cg__input_label) && _content_withhold(input.bold), _filled_guard($scope0_reason, 6) && ($cg__input_bold ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 6)) : _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/content", input.label)), (_content_withheld("__tests__/template.marko_1*content", $scope0_id) || $cg__input_bold) && _content_withhold(input.label));
}, 1);
