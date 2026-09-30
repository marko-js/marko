// tags/layout.marko
const $template$1 = "<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>";
const $walks$1 = "E l%bD%l b l";
_shells({
	"__tests__/tags/layout.marko": "__tests__/tags/layout.marko !;E l%bD%l b ;<main><h1> </h1><!><header><!></header><ul></ul><ol></ol></main>",
	"__tests__/tags/layout.marko_1*shell": "__tests__/tags/layout.marko_1*shell;D%b%;<li><!><!></li>",
	"__tests__/tags/layout.marko_2*shell": "__tests__/tags/layout.marko_2*shell;D%b%;<li><!><!></li>"
});
var layout_default = _template_patch("__tests__/tags/layout.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 3), $sg__input_rows = _source_guard($scope0_reason, 5), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 2)}</h1>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_reason, 3));
	_html("<header>");
	const $tag2 = input.header;
	_dynamic_tag($scope0_id, "#text/2", $tag2, {}, 0, 0, _source_guard($scope0_reason, 4), _patch_dynamic_tag($scope0_id, "#text/2", $tag2, 0, 0, 0, $scope0_reason, 4));
	_html("</header><ul>");
	_for_of(input.rows, (n) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "#text/0", n, void 0, $scope0_reason, 5)}`);
		const $tag3 = input.row;
		_dynamic_tag($scope1_id, "#text/1", $tag3, {}, 0, 0, _source_guard($scope0_reason, 6), _patch_dynamic_tag($scope1_id, "#text/1", $tag3, 0, 0, 0, $scope0_reason, 6));
		_html("</li>");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/layout.marko", "6:6");
	}, 0, $scope0_id, "#ul/3", 1, 1, $sg__input_rows, void 0, void 0, "__tests__/tags/layout.marko_1*shell", $scope0_reason, 5);
	_html(`</ul>${_el_resume($scope0_id, "#ul/3")}<ol>`);
	_for_of(input.rows, (n) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_patch_text($scope2_id, "#text/0", n, void 0, $scope0_reason, 5)}`);
		const $tag4 = input.content;
		_dynamic_tag($scope2_id, "#text/1", $tag4, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope2_id, "#text/1", $tag4, 0, 0, 0, $scope0_reason, 3));
		_html("</li>");
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/layout.marko", "11:6");
	}, 0, $scope0_id, "#ol/4", 1, 1, $sg__input_rows, void 0, void 0, "__tests__/tags/layout.marko_2*shell", $scope0_reason, 5);
	_html(`</ol>${_el_resume($scope0_id, "#ol/4")}</main>`);
	$scope0_page ? _scope($scope0_id, {
		input_content: _unfilled_if($scope0_reason, 5) && input.content,
		input_row: _unfilled_if($scope0_reason, 5) && input.row
	}, "__tests__/tags/layout.marko", 0, {
		input_content: ["input.content"],
		input_row: ["input.row"]
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "__tests__/tags/layout.marko_fill0", input.content), _filled_guard($scope0_reason, 6) && _client_guard($scope0_reason, 5) && _patch_value($scope0_id, "__tests__/tags/layout.marko_fill1", input.row));
}, 0, 0);

// template.marko
const $template = $template$1;
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;D ;<b> <input></b>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	_set_serialize_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5 | _mask_group($scope0_reason, 2) << 11);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	layout_default({
		title: input.title,
		rows: input.rows,
		header: attrTag({ content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "#text/0", input.text, void 0, $scope0_reason, 3)}<input></b>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
		}, $scope0_id) }),
		row: attrTag({ content: _content_resume("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "#text/0", input.text, void 0, $scope0_reason, 3)}<input></em>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_text/6": 1
			}, "__tests__/template.marko", "4:4"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_2_input_text#0:5/subscribe");
		}, $scope0_id) }),
		content: _content_resume("__tests__/template.marko_3*content", () => {
			const $scope3_reason = _scope_reason();
			const $scope3_id = _scope_id();
			_html(`<p>${_patch_text($scope3_id, "#text/0", input.text, void 0, $scope0_reason, 3)}<input></p>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_text__closures, _scope($scope3_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_text/6": 2
			}, "__tests__/template.marko", "1:2"), _client_guard($scope0_reason, 3) && "__tests__/template.marko_3_input_text#0:5/subscribe");
		}, $scope0_id)
	});
	$scope0_page && _scope($scope0_id, {
		input_text: _source_if($scope0_reason, 2) && input.text,
		"ClosureScopes:input_text/6": $input_text__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_text: ["input.text"] });
}, 1, () => [layout_default]);
