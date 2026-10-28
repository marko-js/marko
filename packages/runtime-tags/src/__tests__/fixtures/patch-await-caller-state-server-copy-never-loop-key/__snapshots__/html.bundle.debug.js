// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_3*content": "__tests__/tags/show-await.marko_3*content;D%c%;<b><!>:<!></b>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_2_#text#0/await": "__tests__/tags/show-await.marko_2_#text#0/await;D%c%;<b><!>:<!></b>",
	"__tests__/tags/show-await.marko_2*shell": "__tests__/tags/show-await.marko_2*shell;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_for_of([x], (n, i) => {
			const $scope2_id = _scope_id();
			const $for_content__n__closures = new Set();
			_await($scope2_id, "#text/0", Promise.resolve(i), (y) => {
				const $scope3_id = _scope_id();
				_html(`<b>${_text_resume($scope3_id, "#text/0", n, 1, $scope0_reason, 0)}:${_text_resume($scope3_id, "#text/1", y, 2, 0, 0)}</b>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope3_id, $cg__input_promise ? "__tests__/tags/show-await.marko_3_n#2:2/init" : "__tests__/tags/show-await.marko_3_n#2:2/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__n__closures, _scope($scope3_id, {}, "__tests__/tags/show-await.marko", "3:6"), $cg__input_promise && "__tests__/tags/show-await.marko_3_n#2:2/subscribe");
			}, 1, "__tests__/tags/show-await.marko_3*content", _unfilled_if($scope0_reason, 0) && 3);
			_write_if($scope0_reason, 0) && _scope($scope2_id, { "ClosureScopes:n/4": _unfilled_if($scope0_reason, 0) && $for_content__n__closures }, "__tests__/tags/show-await.marko", "2:4");
		}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/tags/show-await.marko_2*shell", $scope0_reason, 0);
		_scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0) && 2, 1);
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
