// tags/card.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b3: "b3 !b0; b%;<button>clear</button><!><!>",
	b4: "b4 !b0; b%;<button>clear</button><!><!>",
	b: "b;b%;<!><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0), $scope0_page = _page_render(), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", resolveAfter("v", 1), (v) => {
		const $scope1_id = _scope_id();
		let c = input.content;
		_html(`<button>clear</button>${_el_resume($scope1_id, "a")}`);
		_dynamic_tag($scope1_id, "b", c, {}, void 0, void 0, void 0, void 0, 2, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
		_script($scope1_id, "b0");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, $cg__input_content ? "b1" : "b2");
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: $wi__input_content && _scope_with_id($scope0_id) }), $cg__input_content && "b2");
	}, 1, "b3", 1);
	$scope0_page ? _scope($scope0_id, { e: $wi__input_content && _unfilled_if($scope0_reason, 0) && $input_content__closures }) : _content_withhold(input.content);
});

// template.marko
_shells({
	a1: "a1;Db%;<em>static <!></em>",
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_label = _write_if($scope0_reason, 0), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({ content: _content_kept("a1", () => {
				_scope_reason();
				const $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_html(`<em>static ${_patch_text($scope2_id, "a", input.label, 2, $scope0_reason, 2)}</em>`);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a0");
				$scope2_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_label && _scope_with_id($scope1_id) }));
			}, $scope1_id) });
			$scope0_page && _scope($scope1_id, {
				_: $wi__input_show__OR__input_label && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures
	}) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.label, !_server_guard($scope0_reason, 2));
}, 1);
