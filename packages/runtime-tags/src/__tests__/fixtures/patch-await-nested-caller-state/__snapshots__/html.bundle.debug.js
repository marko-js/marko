// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_2*content": "__tests__/tags/show-await.marko_2*content;D%c%c%;<p><!>:<!>:<!></p>",
	"__tests__/tags/show-await.marko_1_#text#0/await": "__tests__/tags/show-await.marko_1_#text#0/await;D%c%c%;<p><!>:<!>:<!></p>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		const $await_content__x__closures = new Set();
		_await($scope1_id, "#text/0", Promise.resolve(x + 10), (y) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.label, 1, $scope0_reason, 2)}:${_text_resume($scope2_id, "#text/1", x, 2, $scope0_reason, 1)}:${_text_resume($scope2_id, "#text/2", y, 2, $scope0_reason, 1)}</p>`);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_label ? "__tests__/tags/show-await.marko_2_input_label#0:4/init" : "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe");
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_promise ? "__tests__/tags/show-await.marko_2_x#1:2/init" : "__tests__/tags/show-await.marko_2_x#1:2/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 1) && $await_content__x__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, {}, "__tests__/tags/show-await.marko", "2:4"), $cg__input_label && "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe"), $cg__input_promise && "__tests__/tags/show-await.marko_2_x#1:2/subscribe");
		}, 1, "__tests__/tags/show-await.marko_2*content", _unfilled_if($scope0_reason, 1), 1);
		_write_if($scope0_reason, 0) && _scope($scope1_id, { "ClosureScopes:x/6": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $await_content__x__closures }, "__tests__/tags/show-await.marko", "1:2");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, { "ClosureScopes:input_label/5": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=open>inc</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=open>inc</button>${_w0}<!>`)($template$1)}`)() });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button class=open>inc</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	show_await_default({
		promise: Promise.resolve(n),
		label: input.label
	});
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		n,
		"#childScope/1": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
