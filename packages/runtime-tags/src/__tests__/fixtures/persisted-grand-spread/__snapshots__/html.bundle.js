// tags/mid/tags/leaf/index.marko
const $template = "<em> </em>";
_shells({ c: "c;D ;<em> </em>" });
var leaf_default = _template_persisted("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "a", input.text, void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// tags/mid/index.marko
_shells({ b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)("D l"), $template) });
var mid_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	leaf_default(input);
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 0, () => [leaf_default]);

// template.marko
_shells({ a: "a !a0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			mid_default({ text: input.text });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>t</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		e: input.text,
		f: show
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.text);
}, 1, () => [mid_default]);
