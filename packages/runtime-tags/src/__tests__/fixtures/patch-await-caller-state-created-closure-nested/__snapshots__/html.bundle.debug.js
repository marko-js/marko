// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_3*content": "__tests__/tags/show-await.marko_3*content,error",
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;D%c%;<p><!>:<!></p>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", x, 1, $scope0_reason, 0)}:${_text_resume($scope2_id, "#text/1", input.promise ? "p" : "-", 2, $scope0_reason, 0)}</p>`);
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_promise ? "__tests__/tags/show-await.marko_2_input_promise#0:3/init" : "__tests__/tags/show-await.marko_2_input_promise#0:3/subscribe");
			_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, $cg__input_promise ? "__tests__/tags/show-await.marko_2_x#1:2/init" : "__tests__/tags/show-await.marko_2_x#1:2/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 0) && $await_content__x__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_promise__closures, _scope($scope2_id, { _: $wi__input_promise && _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "2:4"), $cg__input_promise && "__tests__/tags/show-await.marko_2_input_promise#0:3/subscribe"), $cg__input_promise && "__tests__/tags/show-await.marko_2_x#1:2/subscribe");
		}, void 0, () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html("error");
		}, 0, "__tests__/tags/show-await.marko_3*content", "__tests__/tags/show-await.marko_2*content", 1, 0, 1);
		$wi__input_promise && _scope($scope1_id, { "ClosureScopes:x/5": _unfilled_if($scope0_reason, 0) && $await_content__x__closures }, "__tests__/tags/show-await.marko", "1:2");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0) && 3, 1);
	_scope($scope0_id, { "ClosureScopes:input_promise/4": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $input_promise__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=swap>swap</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_p#0:6/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			show_await_default({ promise: p });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { p: _write_if($scope0_reason, 1) && p }, "__tests__/template.marko", 0, { p: "1:6" });
}, 1);
