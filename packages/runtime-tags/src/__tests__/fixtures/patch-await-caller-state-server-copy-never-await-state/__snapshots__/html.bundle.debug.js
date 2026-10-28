// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1_#text#3/await": "__tests__/tags/show-await.marko_1_#text#3/await;D ;<b> </b>",
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content __tests__/tags/show-await.marko_1_#text#3/init!__tests__/tags/show-await.marko_1;D l D l%;<p> </p><button class=q> </button><!><!>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await __tests__/tags/show-await.marko_1_#text#3/init!__tests__/tags/show-await.marko_1;D l D l%;<p> </p><button class=q> </button><!><!>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let n = 0;
		let q = Promise.resolve("k");
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, 1, $scope0_reason, 0)}</p><button class=q>${_text_resume($scope1_id, "#text/2", n)}</button>${_el_resume($scope1_id, "#button/1")}`);
		_await($scope1_id, "#text/3", q, (y) => {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "#text/0", y)}</b>`);
			_scope($scope2_id, {}, "__tests__/tags/show-await.marko", "6:4");
		}, 1, 0);
		_script($scope1_id, "__tests__/tags/show-await.marko_1");
		_patch_fill($scope1_id, "PatchFill:__tests__/tags/show-await.marko_fill0", n, 1);
		_patch_fill($scope1_id, "PatchFill:__tests__/tags/show-await.marko_fill1", q, 1);
		_scope($scope1_id, { n }, "__tests__/tags/show-await.marko", "1:2", { n: "3:8" });
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0) && 3, 1);
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
