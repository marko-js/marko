// tags/card.marko
const $template = "<!><button>x</button>";
const $walks = "/&b b";
const $setup = [["a>b6", "a>b7"], ["b4"]];
_shells({
	b0: "b0 b6 b7,",
	b: "b a>b6 a>b7!b4;/&b ;<!><button>x</button>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_w = _server_guard($scope0_reason, 1), $wi__input_w = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $k__closures = /* @__PURE__ */ new Set();
	let k = input.n;
	const Panel = { content: _content_elide("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_script($scope1_id, "b1", 0);
		$sg__input_w && _patch_effect($scope1_id, "hb1", ">f");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "b2");
		$scope1_page && _subscribe($k__closures, _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b2", 0), "b3", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) };
	const $childScope = _patch_child($scope0_id, "a", 0);
	Panel.content({});
	_patch_child_end();
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b4");
	_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb5", k, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.w,
		g: k,
		h: $wi__input_w && $input_w__closures,
		i: $k__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xf", input.w, !$sg__input_w);
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			card_default({
				n: input.n,
				w: input.w
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_on, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.n,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.w
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_on && _patch_fill($scope0_id, "va3", input.n, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_on && _patch_fill($scope0_id, "va4", input.w, !_server_guard($scope0_reason, 3)));
}, 1);
