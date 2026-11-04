// tags/list.marko
_shells({
	c0: "c0",
	c: "c;b%;<!><!><!>",
	c4: "c4;b%;<!><!><!>"
});
var list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_row = _client_guard($scope0_reason, 1), $wg__input_row__OR__input_tag = _write_guard($scope0_reason, 0), $wi__input_tag = _write_if($scope0_reason, 2), $wi__input_row__OR__input_tag = _write_if($scope0_reason, 0), $sg__input_row = _server_guard($scope0_reason, 1), $wi__input_row = _write_if($scope0_reason, 1), $fg__input_tag = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_for_of(input.row, (row) => {
		const $scope1_id = _scope_id(), $ui__input_tag = _unfilled_if($scope0_reason, 2), $fg__input_row = _filled_guard($scope0_reason, 1);
		const $for_content__row_label__closures = /* @__PURE__ */ new Set();
		$fg__input_row && $ui__input_tag && _patch_write($scope1_id, "xd", row?.onSelect, !$sg__input_row);
		_dynamic_tag($scope1_id, "a", input.tag, { onClick: row.onSelect }, 1, _content_resume("c0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(_text_mark($scope2_id, "a", row.label, 2, $scope0_reason, 1));
			_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "c1", $cg__input_row);
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__row_label__closures, _scope($scope2_id, { _: $wi__input_row__OR__input_tag && _scope_with_id($scope1_id) }), $cg__input_row && "c1");
		}, $scope1_id, ($scope) => $scope0_page ? [{ f: row?.label }] : []), 0, $wg__input_row__OR__input_tag, $scope0_reason, 0, 0, 2, void 0, 0, "c0");
		_patch_render($scope1_id, "c2", ((_filled_guard($scope0_reason, 2) ? " >e" : "") + ($fg__input_row ? " d" : "")).slice(1), $scope0_reason, 0);
		$wi__input_row__OR__input_tag && _scope($scope1_id, {
			d: $wi__input_tag && _unfilled_if($scope0_reason, 0) && row?.onSelect,
			f: $wi__input_tag && ($ui__input_tag || _unfilled_if($scope0_reason, 1)) && row?.label,
			_: _scope_with_id($scope0_id),
			g: $wi__input_row && $for_content__row_label__closures
		});
		$fg__input_row && (_client_branch_if("c0", $scope1_id) || $ui__input_tag) && _patch_write($scope1_id, "xf", row?.label, !$sg__input_row) && _patch_subscribers($scope1_id, "c3", "f");
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "c4", $scope0_reason, 1);
	$fg__input_tag && $cg__input_row && _patch_render($scope0_id, "c5", "e");
	_scope($scope0_id, { e: $wi__input_row && _unfilled_if($scope0_reason, 0) && input.tag }) || $fg__input_tag && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.tag, !_server_guard($scope0_reason, 2));
});

// tags/card.marko
const $template = "<section><button>clear</button><!><!></section>";
const $walks = "D b%b%l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%b%;<section><button>clear</button><!><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_dynamic_tag($scope0_id, "c", c, {}, 10, 0, 0, 1, $cg__input_content << 1, 0, 1);
	_html("</section>");
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a6: `a6${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_tag = _client_guard($scope0_reason, 3), $wg__input_show = _write_guard($scope0_reason, 2), $wi__input_tag = _write_if($scope0_reason, 3), $wi__input_items = _write_if($scope0_reason, 4), $wi__input_label = _write_if($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_tag__closures = /* @__PURE__ */ new Set();
	const $input_items__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_filled_guard($scope0_reason, 5) && _patch_write($scope0_id, "xg", input.label, !_server_guard($scope0_reason, 5)) && _patch_subscribers($scope0_id, "a9", "g");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope2 = _peek_scope_id($scope1_id, "a", 1);
			card_default({ content: _content_resume("a5", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 0) << 3 | _updates_from($scope0_reason, 3) << 5);
				let $row;
				forOf(input.items, (item) => $row = attrTags($row, {
					label: item,
					onSelect: _resume_locals(function() {
						console.log(item, input.label);
					}, "a0", { k: item }, $scope2_id)
				}));
				const $childScope = _peek_scope_id($scope2_id, "a", 0);
				list_default({
					tag: input.tag,
					row: $row
				});
				_patch_child_end();
				$cg__input_tag && _patch_render($scope2_id, "a1");
				_patch_render($scope2_id, "a2", ((_filled_guard($scope0_reason, 4) ? " >>f" : "") + (_filled_guard($scope0_reason, 5) ? " >>g" : "")).slice(1), $scope0_reason, 0);
				_subscribe($wi__input_label && $input_label__closures, _subscribe($wi__input_items && $input_items__closures, _subscribe($wi__input_tag && $input_tag__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					a: _write_if($scope0_reason, 1) && _existing_scope($childScope)
				}), $cg__input_tag && "a1", 0), _client_guard($scope0_reason, 4) && "a3", 0), _client_guard($scope0_reason, 5) && "a4", 0);
				(_write_guard($scope0_reason, 3) || _write_guard($scope0_reason, 4) || _write_guard($scope0_reason, 5)) && _resume_branch($scope2_id);
			}, $scope1_id) });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope2)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a6"], $scope0_reason, 2);
	_scope($scope0_id, {
		e: input.tag,
		f: input.items,
		g: input.label,
		h: $wi__input_tag && $input_tag__closures,
		i: $wi__input_items && $input_items__closures,
		j: $wi__input_label && $input_label__closures
	}) || (_filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "xe", input.tag, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "a7", "e"), _filled_guard($scope0_reason, 4) && _patch_write($scope0_id, "xf", input.items, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "a8", "f"));
}, 1);
