// tags/rowsy.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["b7"]];
_shells({
	b1: "b1",
	b2: "b2 b13",
	b: "b !b7; D l%;<button> </button><!><!>",
	b3: "b3;b%;<!><!><!>",
	b0: "b0;b%;<!><!><!>"
});
var rowsy_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tags__OR__input_card = _write_guard($scope0_reason, 0), $scope0_page = _page_render(), $cg__input_tags = _client_guard($scope0_reason, 2), $cg__input_tags__OR__input_card = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $n__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("b1", ({ label, content }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $wg__content = _write_guard($scope3_reason, 2), $scope3_page = _page_render();
		_html(`<p>${_patch_text($scope3_id, "a", label)}`);
		_if(() => {
			if (label) {
				const $scope4_id = _scope_id();
				_dynamic_tag($scope4_id, "a", content, {}, 0, 0, $wg__content, void 0, 2);
				$scope3_page && _write_if($scope3_reason, 0) && _scope($scope4_id, { _: _write_if($scope3_reason, 2) && _scope_with_id($scope3_id) });
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope3_reason, 1), void 0, void 0, void 0, ["b0"]);
		_html("</p>");
		$scope3_page && _scope($scope3_id, { f: _unfilled_if($scope3_reason, 1) && content });
	}, $scope0_id) };
	let n = 0;
	const Label = { content: _content_resume("b2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<em>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 1)} ${_text_resume($scope1_id, "b", n, 2)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b4" : "b5");
		$scope1_page && _subscribe($n__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_html(`<button>${_text_resume($scope0_id, "b", n)}</button>${_el_resume($scope0_id, "a")}`);
	_for_of(input.tags, (tag) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 2) && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && _patch_write($scope2_id, "xc", tag, !_server_guard($scope0_reason, 2));
		_dynamic_tag($scope2_id, "a", input.card ? Card : "span", {
			label: tag,
			content: Label
		}, 0, 0, $wg__input_tags__OR__input_card, void 0, 1, $scope0_reason, 0);
		_patch_join_init($scope2_id, "b6", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">h", _filled_guard($scope0_reason, 2) && "c");
		$scope0_page && _write_if($scope0_reason, 0) && _scope($scope2_id, {
			c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && tag,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "b3", $scope0_reason, 2);
	_script($scope0_id, "b7");
	$cg__input_tags__OR__input_card && _patch_write($scope0_id, "wi", Card, 1);
	$cg__input_tags__OR__input_card && _patch_write($scope0_id, "wk", Label, 1);
	_patch_fill($scope0_id, "vb10", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		h: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.card,
		i: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && Card,
		j: n,
		k: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && Label,
		l: _write_if($scope0_reason, 1) && $input_label__closures,
		o: $n__closures
	}) : (_filled_guard($scope0_reason, 1) && (_content_withheld("b2", $scope0_id) || $cg__input_tags__OR__input_card) && _patch_fill($scope0_id, "vb8", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 3) && $cg__input_tags && _patch_fill($scope0_id, "vb9", input.card, !_server_guard($scope0_reason, 3)), $cg__input_tags && _content_withhold(input.card));
});

// template.marko
_shells({
	a: "a !a3;b%b ;<!><!><button class=c>c</button>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([["a7"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let card = true;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(134 | (_mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5));
			const $childScope = _patch_child($scope1_id, "a");
			rowsy_default({
				card,
				label: input.label,
				tags: input.tags
			});
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_html(`<button class=c>c</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a3");
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label,
		g: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2)) && input.tags,
		h: card
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va5", input.tags, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.tags));
}, 1);
