// tags/card/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card/index.marko_3*content": "__tests__/tags/card/index.marko_3*content,<span>done</span>",
	"__tests__/tags/card/index.marko_2_#text#0/await": "__tests__/tags/card/index.marko_2_#text#0/await,<span>done</span>",
	"__tests__/tags/card/index.marko_2*content": "__tests__/tags/card/index.marko_2*content;b%;<!><!><!>",
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko !;D%;<section><!></section>"
});
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 1), $scope0_page = _page_render(), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = new Set();
	const $input_promise__closures = new Set();
	_html("<section>");
	_try($scope0_id, "#text/0", () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "#text/0", input.promise, () => {
			const $scope3_id = _scope_id();
			_html("<span>done</span>");
		}, 1, "__tests__/tags/card/index.marko_3*content");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "__tests__/tags/card/index.marko_2_input_promise#0:4/init" : "__tests__/tags/card/index.marko_2_input_promise#0:4/subscribe");
		$scope0_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4"), $cg__input_promise && "__tests__/tags/card/index.marko_2_input_promise#0:4/subscribe", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
		$scope1_page && _subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "4:6"), "__tests__/tags/card/index.marko_1_input_content#0:3/subscribe", $wg__input_content);
		$wg__input_content || _resume_branch($scope1_id);
	}, void 0, "__tests__/tags/card/index.marko_1*content", void 0, "__tests__/tags/card/index.marko_2*content", 1);
	_html("</section>");
	$scope0_page ? _scope($scope0_id, {
		input_content: input.content,
		"ClosureScopes:input_content/5": $wi__input_content && $input_content__closures,
		"ClosureScopes:input_promise/6": $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}, "__tests__/tags/card/index.marko", 0, { input_content: ["input.content"] }) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card/index.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("D%l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("D%l")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	card_default({
		promise: input.promise,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 1)}</em>`);
			$scope1_page && _subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), "__tests__/template.marko_1_input_note#0:4/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 1) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 1));
}, 1);
