// tags/one.marko
const $template$2 = "<i>one</i>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/one.marko": "^__tests__/tags/one.marko,<i>one</i>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = `one ${input.id}`;
	_html("<i>one</i>");
	return $return;
});

// tags/two.marko
const $template$1 = "<b>two</b>";
const $walks$1 = "b";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/two.marko": "^__tests__/tags/two.marko,<b>two</b>" });
var two_default = _template("__tests__/tags/two.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $return = `two ${input.id}`;
	_html("<b>two</b>");
	return $return;
});

// template.marko
const $template = "<!><!><span> </span><!><!>";
const $walks = "b1bD l%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<p> </p>",
	"__tests__/template.marko": "__tests__/template.marko !;b1bD l%;<!><!><span> </span><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 2), $wi__input_id = _write_if($scope0_reason, 2), $cg__input_id = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	const $inputwhichOneTwo_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "#text/0", input.which ? one_default : two_default, { id: input.id }, 1, void 0, void 0, void 0, $scope0_reason, 0, void 0, void 0, void 0, "__tests__/template.marko_0_v#9/var");
	_var($scope0_id, "#scopeOffset/1", $inputwhichOneTwo_scope, "__tests__/template.marko_0_v#9/var");
	_html(`<span>${_text_resume($scope0_id, "#text/2", v)}</span>`);
	_try($scope0_id, "#text/3", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "#text/0", input.id, void 0, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_id ? "__tests__/template.marko_2_input_id#0:7/init" : "__tests__/template.marko_2_input_id#0:7/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_id__closures, _scope($scope2_id, {
			_: $wi__input_id && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_id/10": $wi__input_id && 1
		}, "__tests__/template.marko", "5:2"), "__tests__/template.marko_2_input_id#0:7/subscribe");
	}, () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_html(`loading ${_text_resume($scope1_id, "#text/0", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "7:4"), "__tests__/template.marko_1_input_id#0:7/subscribe", $wg__input_id);
		$wg__input_id || _resume_branch($scope1_id);
	}, void 0, "__tests__/template.marko_1*content", void 0, "__tests__/template.marko_2*content", 1);
	_filled_guard($scope0_reason, 1) && $cg__input_id && _patch_write($scope0_id, "PatchMarkedWrite:input_which", input.which);
	_patch_join_init($scope0_id, "__tests__/template.marko_0_input_which#6_input_id#7/init", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && "input_which", _filled_guard($scope0_reason, 2) && "input_id");
	_scope($scope0_id, {
		input_which: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.which,
		input_id: input.id,
		"ClosureScopes:input_id/10": $wi__input_id && $input_id__closures
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_id: ["input.id"]
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.id, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.id));
}, 1);
