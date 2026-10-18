// template.marko
const $template = "<!><!><p> </p>";
const $walks = "b1bD l";
_shells({
	"__tests__/template.marko_2*content": "^__tests__/template.marko_2*content,",
	"__tests__/template.marko_1*content": "^__tests__/template.marko_1*content !__tests__/template.marko_1,",
	"__tests__/template.marko": "__tests__/template.marko;b1bD ;<!><!><p> </p>"
});
_client_return("__tests__/template.marko_1*content");
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label__OR__input_which = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const Counter = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let n = 0;
		_html(`<button class=inc>${_patch_text($scope1_id, "#text/1", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "#text/2", n, 2)}</button>${_el_resume($scope1_id, "#button/0")}`);
		const $return = n;
		_script($scope1_id, "__tests__/template.marko_1");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:5/subscribe");
		_patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", n, 1);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			n,
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", { n: "2:8" }));
		return $return;
	}, $scope0_id) };
	const Other = { content: _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`<i>${_patch_text($scope2_id, "#text/0", input.label, void 0, $scope0_reason, 1)}</i>`);
		const $return2 = -1;
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "__tests__/template.marko_2_input_label#0:5/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope2_id, {
			_: $wi__input_label__OR__input_which && _scope_with_id($scope0_id),
			"ClosureSignalIndex:input_label/11": $wi__input_label && 1
		}, "__tests__/template.marko", "6:2"));
		return $return2;
	}, $scope0_id) };
	const $inputwhichCounterOther_scope = _peek_scope_id();
	let count = _dynamic_tag($scope0_id, "#text/0", input.which ? Counter : Other, { label: input.label }, void 0, void 0, void 0, "__tests__/template.marko_0_count#10/var", 1, $scope0_reason, 0);
	_var($scope0_id, "#scopeOffset/1", $inputwhichCounterOther_scope, "__tests__/template.marko_0_count#10/var", void 0, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/2", count)}</p>`);
	_patch_write($scope0_id, "PatchWrite:input_which", input.which, 1);
	_patch_write($scope0_id, "PatchWrite:Counter", Counter, 1);
	_patch_write($scope0_id, "PatchWrite:Other", Other, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		input_which: $wi__input_label && input.which,
		Counter: $wi__input_label__OR__input_which && Counter,
		Other: $wi__input_label__OR__input_which && Other,
		"ClosureScopes:input_label/11": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_which: ["input.which"],
		Counter: "1:9",
		Other: "6:9"
	}) : _filled_guard($scope0_reason, 1) && (_content_withheld("__tests__/template.marko_1*content", $scope0_id) || _client_guard($scope0_reason, 0) || _content_withheld("__tests__/template.marko_2*content", $scope0_id)) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1));
}, 1);
