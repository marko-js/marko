// tags/layout.marko
const $template = "<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>";
const $walks = "E l%bD%l b l";
_shells({
	b: "b !;E l%bD%l b ;<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>",
	b0: "b0;D%b%;<li><!><!></li>",
	b1: "b1;D%b%;<li><!><!></li>"
});
var layout_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 3), $sg__input_rows = _source_guard($scope0_reason, 5), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 2)}</h1>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, $scope0_reason, 3));
	_html("<header>");
	const $tag2 = input.header;
	_dynamic_tag($scope0_id, "c", $tag2, {}, 0, 0, _source_guard($scope0_reason, 4), _patch_dynamic_tag($scope0_id, "c", $tag2, 0, 0, 0, $scope0_reason, 4));
	_html("</header><ul>");
	_for_of(input.rows, (n) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", n, void 0, $scope0_reason, 5)}`);
		const $tag3 = input.row;
		_dynamic_tag($scope1_id, "b", $tag3, {}, 0, 0, _source_guard($scope0_reason, 6), _patch_dynamic_tag($scope1_id, "b", $tag3, 0, 0, 0, $scope0_reason, 6));
		_html("</li>");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "d", 1, 1, $sg__input_rows, void 0, void 0, "b0", $scope0_reason, 5);
	_html(`</ul>${_el_resume($scope0_id, "d")}<ol>`);
	_for_of(input.rows, (n) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "a", n, void 0, $scope0_reason, 5)}`);
		const $tag4 = input.content;
		_dynamic_tag($scope2_id, "b", $tag4, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope2_id, "b", $tag4, 0, 0, 0, $scope0_reason, 3));
		_html("</li>");
		_scope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "e", 1, 1, $sg__input_rows, void 0, void 0, "b1", $scope0_reason, 5);
	_html(`</ol>${_el_resume($scope0_id, "e")}</main>`);
	$scope0_page ? _scope($scope0_id, {
		i: _unfilled_if($scope0_reason, 5) && input.content,
		l: _unfilled_if($scope0_reason, 5) && input.row
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "b2", input.content), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "b3", input.row));
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<b> <input></b>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_text__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 11);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	layout_default({
		title: input.title,
		rows: input.rows,
		header: attrTag({ content: _content_elide("a0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", input.text, void 0, $scope0_reason, 3)}<input></b>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id) }),
		row: attrTag({ content: _content_resume("a3", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", input.text, void 0, $scope0_reason, 3)}<input></em>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				Cg: 1
			}), _client_guard($scope0_reason, 3) && "a1");
		}, $scope0_id) }),
		content: _content_resume("a4", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "a", input.text, void 0, $scope0_reason, 3)}<input></p>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope3_id, {
				_: _scope_with_id($scope0_id),
				Cg: 2
			}), _client_guard($scope0_reason, 3) && "a2");
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, {
		f: _source_if($scope0_reason, 2) && input.text,
		g: $input_text__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [layout_default]);
