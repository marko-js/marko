// tags/card.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({ b: "b !b1;b%b ;<!><!><button>+</button>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = input.open;
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<div");
			_attrs_content(input, "a", $scope1_id, "div");
			_html(`</div>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b1");
	_patch_value($scope0_id, "b3", open, 1);
	$scope0_page ? _scope($scope0_id, {
		d: input,
		f: open
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "b2", input);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !;${_w0};${_w1}`)(((_w0) => `b/${_w0}&`)($walks), ((_w0) => `<!>${_w0}`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_note = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_set_serialize_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		open: input.open,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.note, $sg__input_note)}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $sg__input_note);
			$sg__input_note || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: $input_note__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "a2", input.note);
}, 1, () => [card_default]);
