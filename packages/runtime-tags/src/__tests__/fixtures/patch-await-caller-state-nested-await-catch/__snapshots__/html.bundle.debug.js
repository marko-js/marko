// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_4*content": "__tests__/tags/show-await.marko_4*content,<span>caught</span>",
	"__tests__/tags/show-await.marko_3*content": "__tests__/tags/show-await.marko_3*content;D ;<b> </b>",
	"__tests__/tags/show-await.marko_2_#text#0/await": "__tests__/tags/show-await.marko_2_#text#0/await;D ;<b> </b>",
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;D l%;<p> </p><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;D l%;<p> </p><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 1), $cg__input_other = _client_guard($scope0_reason, 2), $wi__input_promise__OR__input_other = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_other__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = new Set();
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, 1, $scope0_reason, 1)}</p>`);
		_try($scope1_id, "#text/1", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", input.other, (y) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "#text/0", x, 1, $scope0_reason, 1)}</b>`);
				_unfilled_if($scope0_reason, 1) && _patch_init($scope3_id, $cg__input_promise ? "__tests__/tags/show-await.marko_3_x#1:3/init" : "__tests__/tags/show-await.marko_3_x#1:3/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__x__closures, _scope($scope3_id, {}, "__tests__/tags/show-await.marko", "4:6"), $cg__input_promise && "__tests__/tags/show-await.marko_3_x#1:3/subscribe");
			}, 1, "__tests__/tags/show-await.marko_3*content", _unfilled_if($scope0_reason, 2), 1);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_other ? "__tests__/tags/show-await.marko_2_input_other#0:4/init" : "__tests__/tags/show-await.marko_2_input_other#0:4/subscribe");
			$wi__input_promise__OR__input_other && _subscribe(_unfilled_if($scope0_reason, 2) && $input_other__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "3:4"), $cg__input_other && "__tests__/tags/show-await.marko_2_input_other#0:4/subscribe", 0);
			$wi__input_promise__OR__input_other && _resume_branch($scope2_id);
		}, void 0, () => {
			const $scope4_reason = _scope_reason();
			const $scope4_id = _scope_id();
			_html("<span>caught</span>");
		}, 0, "__tests__/tags/show-await.marko_4*content", "__tests__/tags/show-await.marko_2*content", 1, 0, 1);
		_scope($scope1_id, { "ClosureScopes:x/6": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $await_content__x__closures }, "__tests__/tags/show-await.marko", "1:2");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, { "ClosureScopes:input_other/5": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_other__closures }, "__tests__/tags/show-await.marko", 0);
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
	_set_scope_reason(14 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	show_await_default({
		promise: p,
		other: input.other
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
