// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content;D ;<p> </p>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await;D ;<p> </p>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global_brand__closures = new Set();
	const $global$1 = $global();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_mark($scope1_id, "#text/0", $global$1.brand + ":" + x, 1, (2 | _updates_from($scope0_reason, 0)) << 1, 0)}</p>`);
		_patch_render($scope1_id, "__tests__/tags/show-await.marko_1_$global_brand#0:8_x#2/setup", [">$global_brand", _filled_guard($scope0_reason, 0) && "x"], (2 | _updates_from($scope0_reason, 0)) << 1, 0);
		_subscribe($wi__input_promise && $global_brand__closures, _scope($scope1_id, { x: _unfilled_if($scope0_reason, 0) && x }, "__tests__/tags/show-await.marko", "1:2", { x: "1:8" }), "__tests__/tags/show-await.marko_1_$global_brand#0:8/subscribe");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0) && 2, 1);
	_fill_global_subscribe("__tests__/tags/show-await.marko_0_$global_brand#8/subscribe", $scope0_id, _client_guard($scope0_reason, 0));
	_scope($scope0_id, { "ClosureScopes:$global_brand/4": $wi__input_promise && _unfilled_if($scope0_reason, 0) && $global_brand__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], ["__tests__/template.marko_0"]], ["#childScope/1>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_mark($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/1", 0);
	show_await_default({ promise: p });
	_patch_child_end();
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
