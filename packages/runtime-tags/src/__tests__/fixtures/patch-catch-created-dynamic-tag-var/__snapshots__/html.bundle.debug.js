// tags/huge-label.marko
const $template$2 = "<em> </em>";
const $walks$2 = "D l";
_shells({ "__tests__/tags/huge-label.marko": "^__tests__/tags/huge-label.marko;D ;<em> </em>" });
var huge_label_default = _template("__tests__/tags/huge-label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</em>`);
	const $return = input.label + "!";
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/huge-label.marko", 0);
	return $return;
});

// tags/tiny-label.marko
const $template$1 = "<b> </b>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/tiny-label.marko": "^__tests__/tags/tiny-label.marko;D ;<b> </b>" });
var tiny_label_default = _template("__tests__/tags/tiny-label.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</b>`);
	const $return = input.label + "?";
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/tiny-label.marko", 0);
	return $return;
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
function boom() {
	throw new Error("SHOWN_message");
}
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_fail = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_big__closures = new Set();
	const $input_label__closures = new Set();
	const $input_fail__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "#text/0", input.fail ? boom() : "ok", void 0, $scope0_reason, 3)}</p>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "__tests__/template.marko_2_input_fail#0:5/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_fail__closures, _scope($scope2_id, { _: $wi__input_fail && _scope_with_id($scope0_id) }, "__tests__/template.marko", "6:2"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_fail#0:5/subscribe");
	}, void 0, (err) => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`<b>${_patch_text($scope1_id, "#text/0", err.message)}</b>`);
		const $inputbigBigSmall_scope = _peek_scope_id();
		let v = _dynamic_tag($scope1_id, "#text/1", input.big ? huge_label_default : tiny_label_default, { label: input.label }, void 0, void 0, void 0, 1);
		_var($scope1_id, "#scopeOffset/2", $inputbigBigSmall_scope, "__tests__/template.marko_1_v#8/var", void 0, 1);
		_html(`<i>${_text_resume($scope1_id, "#text/3", v)}</i>`);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_big__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4"), _client_guard($scope0_reason, 1) && "__tests__/template.marko_1_input_big#0:3/subscribe"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_1_input_label#0:4/subscribe");
	}, void 0, "__tests__/template.marko_1*content", "__tests__/template.marko_2*content", 1, "");
	$scope0_page ? _scope($scope0_id, {
		input_big: input.big,
		input_label: input.label,
		"ClosureScopes:input_big/6": _write_if($scope0_reason, 1) && $input_big__closures,
		"ClosureScopes:input_label/7": _write_if($scope0_reason, 2) && $input_label__closures,
		"ClosureScopes:input_fail/8": $wi__input_fail && _unfilled_if($scope0_reason, 3) && $input_fail__closures
	}, "__tests__/template.marko", 0, {
		input_big: ["input.big"],
		input_label: ["input.label"]
	}) : (_filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.big, !_server_guard($scope0_reason, 1)), _content_withhold(input.big), _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 2)), _content_withhold(input.label));
}, 1);
