// tags/card.marko
const $template = "<section><button>clear</button><!><p> </p></section>";
const $walks = "D b%bD m";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0;D b%bD ;<section><button>clear</button><!><p> </p></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {}, 2, void 0, void 0, void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0, 1);
	_html(`<p>${_patch_text($scope0_id, "c", input.user.name, void 0, $scope0_reason, 1)}</p></section>`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {}) || _content_withhold(input.content);
});

// template.marko
_shells({
	a2: "a2;D%c%;<em><!> <!></em>",
	a: "a !;b%;<!><!><!>",
	a3: /*@__PURE__*/ ((_w0) => `a3${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0), $cg__input_rows = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_id__closures = /* @__PURE__ */ new Set();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
		const $childScope = _patch_child($scope1_id, "a", 0);
		card_default({
			user: row.user,
			content: _content_kept("a2", () => {
				_scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_patch_text($scope2_id, "a", row.id, void 0, $scope0_reason, 1)} ${_patch_text($scope2_id, "b", input.label, 2, $scope0_reason, 2)}</em>`);
				_client_guard($scope0_reason, 2) && _patch_init($scope2_id, "a0");
				$cg__input_rows && _patch_init($scope2_id, "a1");
				_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__row_id__closures, _subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: $wi__input_rows__OR__input_label && _scope_with_id($scope1_id) })));
			}, $scope1_id)
		});
		_patch_child_end();
		_scope($scope1_id, {
			_: $wi__input_rows__OR__input_label && _scope_with_id($scope0_id),
			g: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $for_content__row_id__closures,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 1);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && $cg__input_rows && _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 2));
}, 1);
