// tags/box.marko
const $template = "<div></div><button>+</button>";
const $walks = " b b";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0; b ;<div></div><button>+</button>" });
var box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<div");
	_attrs_content({
		...input,
		"data-count": count
	}, "a", $scope0_id, "div", 0);
	_html(`</div>${_el_resume($scope0_id, "a")}<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_patch_fill($scope0_id, "vb3", count, 1);
	$scope0_page ? _scope($scope0_id, {
		d: input,
		e: count
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb2", input, !_server_guard($scope0_reason, 0)), _content_withhold(input));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "a", 0);
	box_default({
		class: input.kind,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.note, $wg__input_note)}</em>`);
			$scope1_page && _subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_note);
			$wg__input_note || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: $wi__input_note && $input_note__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 1));
}, 1);
