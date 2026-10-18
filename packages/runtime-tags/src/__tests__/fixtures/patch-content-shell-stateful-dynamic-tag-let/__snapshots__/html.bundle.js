// card.marko
const $template = "<section><!></section>";
_shells({ a: "a;D%;<section><!></section>" });
var card_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	b0: "b0 b7 b8!b2;b%b D ;<!><!><button> </button>",
	b: /*@__PURE__*/ ((_w0) => `b;${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_on = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_on__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({ content: _content_elide("b0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_dynamic_tag($scope1_id, "a", input.on ? "p" : "div", { "data-n": n }, _content("b1", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(_text_resume($scope2_id, "a", input.label, $wg__input_label));
			_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$wg__input_label || _resume_branch($scope2_id);
		}, $scope1_id));
		_html(`<button>${_text_resume($scope1_id, "c", n)}</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "b2");
		_patch_value($scope1_id, "vb3", n, 1);
		_subscribe($wi__input_on && $input_on__closures, _scope($scope1_id, {
			d: n,
			_: _scope_with_id($scope0_id)
		}));
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		d: input.on,
		e: input.label,
		g: $wi__input_label && $input_label__closures,
		f: $wi__input_on && $input_on__closures,
		a: _existing_scope($childScope)
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb4", input.on, !_server_guard($scope0_reason, 0)), _content_withhold(input.on), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb5", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
