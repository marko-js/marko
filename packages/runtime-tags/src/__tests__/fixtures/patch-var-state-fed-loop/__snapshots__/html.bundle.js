// tags/labeler.marko
const $template$1 = "<span> </span>";
_shells({ b: "b;D ;<span> </span>" });
var labeler_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	$scope0_page && _scope($scope0_id, {});
	return $return;
}, 0, 0);

// tags/list.marko
const $template = "<!><!><!>";
_shells({
	c: "c !;b%;<!><!><!>",
	c0: /*@__PURE__*/ ((_w0, _w1) => `c0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("D l"), /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1))
});
var list_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "a", $childScope);
		let label = labeler_default({ title: item + input.suffix });
		_client_guard($scope0_reason, 0) && _var($scope1_id, "b", $childScope, "c1");
		_html(`<p>${_patch_text($scope1_id, "c", label, void 0, $scope0_reason, 0)}</p>`);
		_scope($scope1_id, {
			e: _source_if($scope0_reason, 2) && item,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, _source_guard($scope0_reason, 1), void 0, void 0, "c0", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: _source_if($scope0_reason, 1) && input.suffix }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "c2", input.suffix);
}, 0, () => [labeler_default]);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)("b%c"), ((_w0) => `<!>${_w0}<button>+</button>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = ["x"];
	_set_serialize_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	list_default({
		items,
		suffix: input.suffix
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, { a: _existing_scope($childScope) }) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a1", input.suffix);
}, 1, () => [list_default]);
