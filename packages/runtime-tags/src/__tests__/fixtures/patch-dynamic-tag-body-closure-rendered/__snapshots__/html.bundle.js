// tags/card.marko
_shells({ b: "b !b0; b%;<button id=toggle>toggle</button><!><!>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason();
	_source_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button id=toggle>toggle</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "b0", input.content);
}, 0, 0);

// tags/heading.marko
const $template = "<!><!><!>";
_shells({ c: "c;b%;<!><!><!>" });
var heading_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_type = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_depth__closures = /* @__PURE__ */ new Set();
	const $tag = input.type;
	_dynamic_tag($scope0_id, "a", $tag, {}, _content_resume("c0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`depth ${_patch_text($scope1_id, "a", input.depth, 2, $scope0_reason, 2)}`);
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_depth__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "c1");
	}, $scope0_id, ($scope) => [{ e: input.depth }]), 0, $sg__input_type, _patch_dynamic_tag($scope0_id, "a", $tag, 0, "c0", 0, $scope0_reason, 1));
	$scope0_page && _scope($scope0_id, {
		e: _source_if($scope0_reason, 1) && input.depth,
		f: $input_depth__closures
	});
}, 0, 1);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `b/${_w0}&b`)("b%c"), ((_w0) => `<!>${_w0}<!>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	heading_default({
		type: card_default,
		depth: input.depth
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1, () => [heading_default]);
