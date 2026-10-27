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
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_bold__OR__input_label = _write_guard($scope0_reason, 2), $wi__input_tag__OR__input_bold__OR__input_label = _write_if($scope0_reason, 3), $wg__input_tag = _write_guard($scope0_reason, 4), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_bold__closures = new Set();
	const $input_label__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", input.tag, {}, 10, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		_dynamic_tag($scope1_id, "#text/0", input.bold ? bold_default : italic_default, { label: input.label }, 1, 0, 0, $wg__input_bold__OR__input_label, $scope0_reason, 2);
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 2)) && _patch_init($scope1_id, "__tests__/template.marko_1_input_bold#0:4/subscribe");
		(_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 2)) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe");
		_patch_join_init($scope1_id, "__tests__/template.marko_1_input_bold#0:4_input_label#0:5/init", $scope0_reason, 2, _filled_guard($scope0_reason, 5) && ">input_bold", _filled_guard($scope0_reason, 6) && ">input_label");
		$scope1_page && $wi__input_tag__OR__input_bold__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 6) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_bold__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4")));
		$wg__input_bold__OR__input_label || $wi__input_tag__OR__input_bold__OR__input_label && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => [{
		input_label: input.label,
		input_bold: input.bold
	}]), 0, $wg__input_tag, $scope0_reason, 4);
	_filled_guard($scope0_reason, 5) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.bold) : _filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 6) && _patch_write($scope0_id, "PatchMarkedWrite:input_bold", input.bold);
	_filled_guard($scope0_reason, 6) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.label) : _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label);
	$scope0_page && _scope($scope0_id, {
		input_bold: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.bold,
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.label,
		"ClosureScopes:input_bold/6": _write_if($scope0_reason, 5) && $input_bold__closures,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 6) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_bold: ["input.bold"],
		input_label: ["input.label"]
	});
}, 1);
