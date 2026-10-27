// tags/card/index.marko
const $template = "<section><h2> </h2><!><button>+</button></section>";
const $walks = "E l%b l";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;E l%b ;<section><h2> </h2><!><button>+</button></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</section>`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		g: input.content,
		h: open
	}) : (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 1)), _content_withhold(input.content));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 0)}</em>`);
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, $scope0_id) });
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		d: input.note,
		e: _write_if($scope0_reason, 0) && $input_note__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 0));
}, 1);
