// tags/card.marko
const $template = "<button>clear</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; b%;<button>clear</button><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_script($scope0_id, "b0");
	$scope0_page ? _scope($scope0_id, {}) : _content_withhold(input.content);
});

// template.marko
_shells({
	a1: "a1; b D ;<input><label> </label>",
	a2: "a2",
	a: "a !;b%b%b%b%;<!><!><!><!><!><!>",
	a3: "a3; b%;<input><!><!>",
	a0: "a0; D ;<label> </label>",
	a4: "a4; ;<label>field</label>",
	a5: /*@__PURE__*/ (() => `a5${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_show = _client_guard($scope0_reason, 3), $wg__input_show__OR__input_on = _write_guard($scope0_reason, 1), $cg__input_on = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const uid = _id("A");
		_html(`<input${_patch_attr($scope1_id, "aa$id", "id", uid, 0, 0)}>${_el_resume($scope1_id, "a", 0)}`);
		_if(() => {
			if (input.show) {
				const $scope2_id = _scope_id();
				_html(`<label${_patch_attr($scope2_id, "aa$for", "for", uid, 0, 0)}>${_patch_text($scope2_id, "b", item.key, void 0, $scope0_reason, 2)}</label>${_el_resume($scope2_id, "a", 0)}`);
				$scope0_page && _scope($scope2_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope1_id) });
				return 0;
			}
		}, $scope1_id, "b", 1, _write_guard($scope0_reason, 3), void 0, void 0, void 0, ["a0"], $scope0_reason, 3);
		$cg__input_show && _patch_write($scope1_id, "wd", uid, 1);
		$cg__input_show && _patch_init($scope1_id, "a6");
		$scope0_page && _scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 3) && item?.key,
			d: _unfilled_if($scope0_reason, 3) && uid,
			_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id)
		});
	}, "key", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 2);
	const Field = { content: _content_resume("a2", ({ show }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason(), $scope3_page = _page_render();
		const uid = _id("B");
		_html(`<input${_patch_attr($scope3_id, "aa$id", "id", uid, 0, 0)}>${_el_resume($scope3_id, "a", 0)}`);
		_if(() => {
			if (show) {
				const $scope4_id = _scope_id();
				_html(`<label${_patch_attr($scope4_id, "aa$for", "for", uid, 0, 0)}>field</label>${_el_resume($scope4_id, "a", 0)}`);
				$scope3_page && _scope($scope4_id, {});
				return 0;
			}
		}, $scope3_id, "b", 1, _write_guard($scope3_reason, 0), void 0, void 0, void 0, ["a4"]);
		_patch_write($scope3_id, "wf", uid, 1);
		$scope3_page && _scope($scope3_id, { f: _unfilled_if($scope3_reason, 0) && uid });
	}, $scope0_id) };
	_dynamic_tag($scope0_id, "b", input.on ? Field : null, { show: input.show }, 1, 0, 0, $wg__input_show__OR__input_on, $scope0_reason, 1);
	_dynamic_tag($scope0_id, "c", input.on ? Field : null, { show: input.show }, 9, 0, 0, $wg__input_show__OR__input_on, $scope0_reason, 1);
	_for_of(input.rows, (row) => {
		const $scope5_id = _scope_id();
		_set_scope_reason(0);
		const $childScope = _patch_child($scope5_id, "a", 2);
		card_default({ content: _content_kept("a1", () => {
			_scope_reason();
			const $scope6_page = _page_render();
			const $scope6_id = _scope_id();
			const uid = _id("C");
			_html(`<input${_patch_attr($scope6_id, "aa$id", "id", uid, 0, 0)}>${_el_resume($scope6_id, "a", 0)}<label${_patch_attr($scope6_id, "ab$for", "for", uid, 0, 0)}>${_patch_text($scope6_id, "c", row.id, void 0, $scope0_reason, 5)}</label>${_el_resume($scope6_id, "b", 0)}`);
			$scope6_page && _scope($scope6_id, { _: _write_if($scope0_reason, 5) && _scope_with_id($scope5_id) });
		}, $scope5_id) });
		_patch_child_end();
		$scope0_page && _scope($scope5_id, { a: _existing_scope($childScope) });
	}, "id", $scope0_id, "d", 1, void 0, void 0, void 0, void 0, "a5", $scope0_reason, 5);
	_filled_guard($scope0_reason, 4) && $cg__input_show && _patch_write($scope0_id, "xi", input.on);
	_patch_join_init($scope0_id, "a8", $scope0_reason, 1, _filled_guard($scope0_reason, 3) && "h", _filled_guard($scope0_reason, 4) && "i");
	$scope0_page ? _scope($scope0_id, {
		h: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.show,
		i: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.on,
		k: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && Field
	}) : (_filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 2) || $cg__input_on) && _patch_fill($scope0_id, "va7", input.show, !_server_guard($scope0_reason, 3)), $cg__input_on && _content_withhold(input.show));
}, 1);
