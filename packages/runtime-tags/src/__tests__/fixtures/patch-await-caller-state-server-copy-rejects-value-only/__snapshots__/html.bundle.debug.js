// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_3*content": "__tests__/tags/show-await.marko_3*content;D ;<p> </p>",
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content,<em>caught</em>",
	"__tests__/tags/show-await.marko_1_#text#0/await": "__tests__/tags/show-await.marko_1_#text#0/await;D ;<p> </p>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_try($scope0_id, "#text/0", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.promise, (x) => {
			const $scope3_id = _scope_id();
			_html(`<p>${_text_resume($scope3_id, "#text/0", x, 1, $scope0_reason, 0)}</p>`);
			_scope($scope3_id, {}, "__tests__/tags/show-await.marko", "3:4");
		}, 1, "__tests__/tags/show-await.marko_3*content", _unfilled_if($scope0_reason, 0) && 2, 1);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_promise ? "__tests__/tags/show-await.marko_1_input_promise#0:3/init" : "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/show-await.marko", "1:2"), $cg__input_promise && "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, void 0, () => {
		const $scope2_reason = _scope_reason();
		const $scope2_id = _scope_id();
		_html("<em>caught</em>");
	}, 0, "__tests__/tags/show-await.marko_2*content", "__tests__/tags/show-await.marko_1*content", 1, 0, 1);
	_scope($scope0_id, { "ClosureScopes:input_promise/4": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	show_await_default({ promise: p });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
