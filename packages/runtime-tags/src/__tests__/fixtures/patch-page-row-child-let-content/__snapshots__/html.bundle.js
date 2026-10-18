// tags/card.marko
const $template = "<section><button>clear</button><!><p> </p></section>";
const $walks = "D b%bD m";
_shells({ b: "b !b0;D b%bD ;<section><button>clear</button><!><p> </p></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html(`<p>${_patch_text($scope0_id, "c", input.user.name, void 0, $scope0_reason, 1)}</p></section>`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb1", c, 1);
	$scope0_page ? _scope($scope0_id, {}) : _content_withhold(input.content);
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0) => `a0;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_id__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "va4", row?.id);
		_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
		const $childScope = _patch_child($scope1_id, "a");
		card_default({
			user: row.user,
			content: _content_resume("a3", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", row.id, $wg__input_rows)} ${_text_resume($scope2_id, "b", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_rows__OR__input_label && _subscribe($wi__input_rows && $for_content__row_id__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a1", $wg__input_rows || $wg__input_label), "a2", $wg__input_rows || $wg__input_label);
				$wg__input_rows || $wg__input_label || $wi__input_rows__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id)
		});
		_scope($scope1_id, {
			_: $wi__input_rows__OR__input_label && _scope_with_id($scope0_id),
			g: $wi__input_rows && $for_content__row_id__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a0", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: $wi__input_rows && input.label,
		f: $wi__input_label && $input_label__closures
	}) : _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "va5", input.label, !_server_guard($scope0_reason, 2));
}, 1);
