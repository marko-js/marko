// child.marko
const $template = "<div></div>";
_shells({ a: "a !a0; ;<div></div>" });
var child_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div${_patch_attr_class($scope0_id, "a", input.name, $scope0_reason, 1)}></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "d e");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "a1");
	$scope0_page ? _scope($scope0_id, {
		d: input.name,
		e: input.item
	}) : (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "d", input.name), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "e", input.item));
});

// template.marko
const $Child_withLoadAssets = withLoadAssets(child_default, flush, "_a");
_shells({
	b0: /*@__PURE__*/ (() => `b0;${/*@__PURE__*/ ((_w0) => `D l%b/${_w0}&b`)(" b")};${/*@__PURE__*/ ((_w0) => `<span> </span><!>${_w0}<!>`)($template)}`)(),
	b1: /*@__PURE__*/ (() => `b1;${((_w0) => `D l%b/${_w0}&b`)(" b")};${((_w0) => `<span> </span><!>${_w0}<!>`)($template)}`)(),
	b2: "b2;b%;<!><!><!>",
	b: /*@__PURE__*/ (() => `b;${((_w0) => `D%b/${_w0}&%l`)(" b")};${((_w0) => `<main><!>${_w0}<!></main>`)($template)}`)()
});
var template_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $item__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const item = { label: input.label };
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	$Child_withLoadAssets({
		name: "a",
		item
	});
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "a", value, void 0, $scope0_reason, 2)}</span>`);
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope2 = _peek_scope_id();
			_patch_child($scope2_id, "c", $childScope2);
			$Child_withLoadAssets({
				name: "c",
				item
			});
			_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "b3");
			_subscribe(_unfilled_if($scope0_reason, 1) && $item__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				c: _existing_scope($childScope2)
			}), _client_guard($scope0_reason, 1) && "b4");
		}, 1, "b0", 1);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b5");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 2) && "b6", 0);
		$scope0_page && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, void 0, "b7", void 0, "b2", 1);
	_html("</main>");
	_patch_write($scope0_id, "h", item, 1);
	$scope0_page && _scope($scope0_id, {
		h: _source_if($scope0_reason, 2) && item,
		b: _existing_scope($childScope),
		j: $item__closures,
		i: _unfilled_if($scope0_reason, 2) && $input_promise__closures
	});
}, 1);
