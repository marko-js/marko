// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content !__tests__/template.marko_1",
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1), $wi__input_label__OR__input_which = _write_if($scope0_reason, 0), $wg__input_label__OR__input_which = _write_guard($scope0_reason, 0), $cg__input_which = _client_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Counter = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let n = 0;
		_html(`<button class=inc>${_text_resume($scope1_id, "#text/1", input.label, 1, $scope0_reason, 1)} ${_text_resume($scope1_id, "#text/2", n, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "__tests__/template.marko_1_input_label#0:3/init" : "__tests__/template.marko_1_input_label#0:3/subscribe");
		_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill1", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			n,
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { n: "2:8" }));
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<i>${_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 1)}</i>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_label ? "__tests__/template.marko_2_input_label#0:3/init" : "__tests__/template.marko_2_input_label#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/8": $wi__input_label && 1
		}, "__tests__/template.marko", "5:2"));
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "#text/0", input.which ? Counter : Other, { label: input.label }, 1, 0, 0, $wg__input_label__OR__input_which, $scope0_reason, 0);
	_filled_guard($scope0_reason, 2) && $cg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_which", input.which);
	_patch_join_init($scope0_id, "__tests__/template.marko_0_input_label#3_input_which#4_Counter#5_Other#6/init", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && "input_label", _filled_guard($scope0_reason, 2) && "input_which");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		input_which: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.which,
		Counter: _unfilled_if($scope0_reason, 0) && Counter,
		Other: _unfilled_if($scope0_reason, 0) && Other,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_which: ["input.which"],
		Counter: "1:9",
		Other: "5:9"
	}) || (_filled_guard($scope0_reason, 1) && ($cg__input_which || _content_withheld("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 0) || _content_withheld("__tests__/template.marko_2*content", $scope0_id)) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), $cg__input_which && _content_withhold(input.label));
}, 1);
