// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
_shells({ a: "a !a0; D%c%;<button><!>:<!></button>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_patch_text($scope0_id, "b", input.label, void 0, $scope0_reason, 0)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a0", count, 1);
	$scope0_page && _scope($scope0_id, { g: count });
}, 0, 0);

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, "_a", void 0, 1);
_shells({
	b0: /*@__PURE__*/ ((_w0, _w1) => `b0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)),
	b1: /*@__PURE__*/ ((_w0, _w1) => `b1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)($walks), /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template)),
	b2: /*@__PURE__*/ ((_w0, _w1) => `b2;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&b`)($walks), ((_w0) => `<!><!>${_w0}<!>`)($template)),
	b3: /*@__PURE__*/ ((_w0, _w1) => `b3;${_w0};${_w1}`)(((_w0) => `b%b/${_w0}&b`)($walks), ((_w0) => `<!><!>${_w0}<!>`)($template)),
	b: "b;D%b%;<main><!><!></main>"
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<main>");
	_await($scope0_id, "a", input.first, (first) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "b", $childScope);
		$Child_withLoadAssets({ label: first });
		_scope($scope1_id, { b: _existing_scope($childScope) });
	}, 1, "b1", 1);
	_await($scope0_id, "b", input.second, (second) => {
		const $scope2_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope2 = _peek_scope_id();
		_patch_child($scope2_id, "b", $childScope2);
		$Child_withLoadAssets({ label: second });
		_scope($scope2_id, { b: _existing_scope($childScope2) });
	}, 1, "b0", 1);
	_html("</main>");
}, 1, () => [$Child_withLoadAssets]);
