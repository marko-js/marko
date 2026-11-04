// tags/card.marko
const $template = "<section><button>clear</button><!><p> </p></section>";
const $walks = "D b%bD m";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%bD ;<section><button>clear</button><!><p> </p></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, 0, 0, 1, _client_guard($scope0_reason, 0) << 1, 0, 1);
	_html(`<p>${_text_mark($scope0_id, "c", input.user.name, 1, $scope0_reason, 1)}</p></section>`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a4: `a4${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 0), $wg__input_label = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $cg__input_rows = _client_guard($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_id__closures = /* @__PURE__ */ new Set();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xe", row?.id, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope1_id, "a3", "e");
		_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		card_default({
			user: row.user,
			content: _content_resume("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "a", row.id, $wg__input_rows)} ${_text_mark($scope2_id, "b", input.label, $wg__input_label * 2)}</em>`);
				$cg__input_label && _patch_render($scope2_id, "a0");
				$cg__input_rows && _patch_render($scope2_id, "a1");
				_subscribe($wi__input_rows && $for_content__row_id__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_label && "a0", $wg__input_rows || $wg__input_label), $cg__input_rows && "a1", $wg__input_rows || $wg__input_label);
			}, $scope1_id)
		});
		_patch_child_end();
		_scope($scope1_id, {
			e: row?.id,
			_: _scope_with_id($scope0_id),
			g: $wi__input_rows && $for_content__row_id__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a5", "e");
}, 1);
