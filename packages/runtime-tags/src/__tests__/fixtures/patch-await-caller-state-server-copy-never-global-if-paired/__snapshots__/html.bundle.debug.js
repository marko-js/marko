// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;b%;<!><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>",
	"__tests__/tags/show-await.marko_2*shell": "__tests__/tags/show-await.marko_2*shell;D%c%;<p><!>:<!></p>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_promise = _write_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (x && $global$1.flag) {
				const $scope2_id = _scope_id();
				let n = 3;
				_html(`<p>${_text_resume($scope2_id, "#text/0", x, 1, $scope0_reason, 0)}:${_text_resume($scope2_id, "#text/1", n, 2, 0, 0)}</p>`);
				$cg__input_promise && _patch_init($scope2_id, "__tests__/tags/show-await.marko_2_x#1:2/init");
				_scope($scope2_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "2:4");
				return 0;
			}
		}, $scope1_id, "#text/0", 1, $scope0_page || $wg__input_promise, 1, 0, 0, ["__tests__/tags/show-await.marko_2*shell"], (2 | _mask_group($scope0_reason, 0)) << 1, 0);
		_fill_global_subscribe("__tests__/tags/show-await.marko_1_$global_flag#0:8_x#2", $scope1_id, $cg__input_promise);
		_scope($scope1_id, { x: _unfilled_if($scope0_reason, 0) && x }, "__tests__/tags/show-await.marko", "1:2", { x: "1:8" });
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0) && 2, 1);
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
