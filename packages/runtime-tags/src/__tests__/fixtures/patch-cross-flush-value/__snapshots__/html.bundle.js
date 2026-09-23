// tags/tagged/index.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
_shells({ b: "b !b0; D%c%;<button><!>:<!></button>" });
var tagged_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button${_patch_attr($scope0_id, "a", "id", input.id, $scope0_reason, 0)}>${_patch_text($scope0_id, "b", input.tag.name, void 0, $scope0_reason, 2)}:${_text_resume($scope0_id, "c", count, 2)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", count, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.tag,
		i: count
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "g", input.tag);
}, 0, 0);

// template.marko
_shells({
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template),
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template),
	a2: /*@__PURE__*/ ((_w0, _w1) => `a2;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks), $template),
	a3: /*@__PURE__*/ ((_w0, _w1) => `a3;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks), $template),
	a: "a;b%b%;<!><!><!><!>"
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.first, (a) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 0) << 5);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		tagged_default({
			id: "a",
			tag: a.tag
		});
		_scope($scope1_id, { a: _existing_scope($childScope) });
	}, 1, "a1", 1);
	_await($scope0_id, "b", input.second, (b) => {
		const $scope2_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 1) << 5);
		const $childScope2 = _peek_scope_id();
		_patch_child($scope2_id, "a", $childScope2);
		tagged_default({
			id: "b",
			tag: b.tag
		});
		_scope($scope2_id, { a: _existing_scope($childScope2) });
	}, 1, "a0", 1);
}, 1, () => [tagged_default]);
