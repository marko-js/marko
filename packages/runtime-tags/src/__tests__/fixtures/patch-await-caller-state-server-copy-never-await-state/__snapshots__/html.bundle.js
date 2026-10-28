// tags/show-await.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b3: "b3;D ;<b> </b>",
	b4: "b4 b8!b0;D l D l%;<p> </p><button class=q> </button><!><!>",
	b5: "b5 b8!b0;D l D l%;<p> </p><button class=q> </button><!><!>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let n = 0;
		let q = Promise.resolve("k");
		_html(`<p>${_text_resume($scope1_id, "a", x, 1, $scope0_reason, 0)}</p><button class=q>${_text_resume($scope1_id, "c", n)}</button>${_el_resume($scope1_id, "b")}`);
		_await($scope1_id, "d", q, (y) => {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "a", y)}</b>`);
			_scope($scope2_id, {});
		}, 1, 0);
		_script($scope1_id, "b0");
		_patch_fill($scope1_id, "vb1", n, 1);
		_patch_fill($scope1_id, "vb2", q, 1);
		_scope($scope1_id, { g: n });
	}, 1, "b4", _unfilled_if($scope0_reason, 0) && 3, 1);
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button class=swap>swap</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	show_await_default({ promise: p });
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
