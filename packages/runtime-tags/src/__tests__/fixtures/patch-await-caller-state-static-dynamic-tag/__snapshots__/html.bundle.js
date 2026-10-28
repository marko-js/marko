// tags/brand.marko
_shells({ b: "b;D ;<span> </span>" });
var brand_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<span>${_text_resume($scope0_id, "a", $global$1.brand, 1, 4, 0)}</span>`);
	_fill_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
});

// tags/show-await.marko
const $template = "<!><!><!>";
const tags = [brand_default];
const $setup$1 = [[], []];
_shells({
	c0: "c0;D l%;<p> </p><!><!>",
	c1: "c1;D l%;<p> </p><!><!>",
	c: "c;b%;<!><!><!>"
});
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", x, 1, $scope0_reason, 0)}</p>`);
		_dynamic_tag($scope1_id, "b", tags[0], {}, 2, 0, 0, 0, 0, 0);
		_scope($scope1_id, {});
	}, 1, "c0", _unfilled_if($scope0_reason, 0), 1);
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
