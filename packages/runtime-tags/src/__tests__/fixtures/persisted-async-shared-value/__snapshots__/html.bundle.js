// child.marko
const $template = "<div></div>";
_shells({ a: "a !a0; ;<div></div>" });
var child_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div${_patch_attr_class($scope0_id, "a", input.name, $scope0_reason, 0)}></div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a0");
	_patch_effect($scope0_id, "a0", "d e");
	$scope0_page ? _scope($scope0_id, {
		d: input.name,
		e: input.item
	}) : (_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "d", input.name), _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "e", input.item));
}, 0, 0);

// template.marko
_shells({
	b0: "b0,loading",
	b1: /*@__PURE__*/ ((_w0, _w1) => `b1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)(" b"), /*@__PURE__*/ ((_w0) => `<span> </span>${_w0}<!>`)($template)),
	b2: /*@__PURE__*/ ((_w0, _w1) => `b2;${_w0};${_w1}`)(((_w0) => `D l/${_w0}&b`)(" b"), ((_w0) => `<span> </span>${_w0}<!>`)($template)),
	b3: "b3;b%;<!><!><!>",
	b: /*@__PURE__*/ ((_w0, _w1) => `b;${_w0};${_w1}`)(((_w0, _w1) => `D/${_w0}&/${_w1}&%l`)(" b", " b"), ((_w0, _w1) => `<main>${_w0}${_w1}<!></main>`)($template, $template))
});
var template_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $item__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const item = { label: input.label };
	_html("<main>");
	_set_serialize_reason(_mask_group($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	child_default({
		name: "a",
		item
	});
	_set_serialize_reason(_mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope2);
	child_default({
		name: "b",
		item
	});
	_try($scope0_id, "c", _content_resume("b3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope2_id = _scope_id();
			_html(`<span>${_patch_text($scope2_id, "a", value, void 0, $scope0_reason, 2)}</span>`);
			_set_serialize_reason(_mask_group($scope0_reason, 1) << 3);
			const $childScope3 = _peek_scope_id();
			_patch_child($scope2_id, "b", $childScope3);
			child_default({
				name: "c",
				item
			});
			_scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				b: _existing_scope($childScope3)
			});
		}, 1, "b2", 1);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$scope0_page && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_shell("b0", $scope0_id) }) }, 1);
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		h: _source_if($scope0_reason, 2) && item,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2),
		j: $item__closures,
		i: $input_promise__closures
	});
}, 1, () => [child_default]);
