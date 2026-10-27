// tags/disclosure.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
const $setup$1 = [[], ["b0"]];
_shells({ b: "b !b0;b%b ;<!><!><button>toggle</button>" });
var disclosure_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			$scope0_page && _scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_patch_fill($scope0_id, "vb2", open, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: open
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks)};${((_w0) => `<!>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 0);
	disclosure_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", input.suffix, void 0, $scope0_reason, 0)}</em>`);
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_suffix__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
	}, $scope0_id) });
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, {
		d: input.suffix,
		e: _write_if($scope0_reason, 0) && $input_suffix__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
