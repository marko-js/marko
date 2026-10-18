// tags/wrap.marko
const $template$1 = "<!><!><!>";
_shells({
	c: "c;b%;<!><!><!>",
	c0: "c0;D%;<div><!></div>"
});
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "a", input.body, {}, 0, 0, $wg__input_body, void 0, 2, $scope0_reason, 2);
			_html("</div>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "c1");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["c0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.body }) : (_filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vc2", input.body, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.body));
});

// tags/child.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
_shells({
	b0: "b0,",
	b: /*@__PURE__*/ (() => `b;${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_count = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_count__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	wrap_default({
		show: input.show,
		body: attrTag({ content: _content_resume("b0", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html("<p>body</p>");
			_script($scope1_id, "b1", 0, _client_guard($scope0_reason, 1));
			_server_guard($scope0_reason, 1) && _patch_effect($scope1_id, "eb1", "1 e");
			_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b2" : "b3");
			_subscribe($wi__input_count && $input_count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id) })
	});
	$scope0_page ? _scope($scope0_id, {
		e: input.count,
		f: $wi__input_count && $input_count__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "we", input.count, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)($walks, $walks)};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "c");
	child_default({
		show: input.show,
		count
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope2 = _patch_child($scope0_id, "d");
	child_default({
		show: input.show,
		count: input.count
	});
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", count, 1);
	$scope0_page && _scope($scope0_id, {
		i: count,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	});
}, 1);
