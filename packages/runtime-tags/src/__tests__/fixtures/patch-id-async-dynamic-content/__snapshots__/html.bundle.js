// tags/field.marko
const $template = "<label> </label><input>";
const $walks = " D l b";
const $setup$1 = [[], []];
_shells({ b: "b; D l ;<label> </label><input>" });
var field_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("A");
	_html(`<label${_attr("for", uid, $scope0_id, "aa$for", $scope0_reason, 0)}>${_text_resume($scope0_id, "b", input.name, 1, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "ac$id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "ac$aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "c", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {});
});

// tags/loaded.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ c: /*@__PURE__*/ (() => `c${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)($walks)};${((_w0) => `${_w0}<!><!>`)($template)}`)() });
var loaded_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	field_default({ name: input.name });
	_patch_child_end();
	_dynamic_tag($scope0_id, "b", input.content, {}, 10, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
_shells({
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))}`)(),
	a3: "a3;b%;<!><!><!>",
	a4: "a4;b%;<!><!><!>",
	a5: "a5;b%;<!><!><!>",
	a: "a;b%;<!><!><!>",
	a6: "a6;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_loaded = _write_guard($scope0_reason, 0), $cg__input_loaded = _client_guard($scope0_reason, 2), $wi__input_items__OR__input_loaded = _write_if($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_loaded__closures = /* @__PURE__ */ new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_promise__closures = /* @__PURE__ */ new Set();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", item.promise, (ready) => {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "a", input.loaded ? loaded_default : "section", { name: ready }, 17, _content_resume("a0", () => {
					const $scope4_id = _scope_id();
					_scope_reason();
					_set_scope_reason(0);
					const $childScope = _peek_scope_id($scope4_id, "a", 1);
					field_default({ name: item.key });
					_patch_child_end();
					_scope($scope4_id, {
						_: $wi__input_items__OR__input_loaded && _scope_with_id($scope3_id),
						a: _existing_scope($childScope)
					});
				}, $scope3_id, ($scope) => [
					{ M: item?.key },
					{ _: $scope($scope1_id) },
					{ _: $scope($scope2_id) }
				]), 0, $wg__input_items__OR__input_loaded, $scope0_reason, 0);
				_filled_guard($scope0_reason, 1) && $cg__input_loaded && _patch_write($scope3_id, "xc", ready);
				(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope3_id, "a1");
				_patch_join_init($scope3_id, "a2", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">>>e", _filled_guard($scope0_reason, 1) && "c");
				$wi__input_items__OR__input_loaded && _subscribe(_unfilled_if($scope0_reason, 2) && $input_loaded__closures, _scope($scope3_id, { c: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && ready }), $cg__input_loaded && "a1", $wg__input_items__OR__input_loaded);
				$wg__input_items__OR__input_loaded || $wi__input_items__OR__input_loaded && _resume_branch($scope3_id);
			}, 1, "a3", 0, 1);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_items ? "a7" : "a8");
			$wi__input_items__OR__input_loaded && _subscribe(_unfilled_if($scope0_reason, 1) && $for_content__item_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_items && "a8", 0);
			$wi__input_items__OR__input_loaded && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_set_scope_reason(0);
			_patch_child(0);
			field_default({ name: "loading" });
			_patch_child_end();
		}, void 0, "a9", void 0, "a5");
		$wi__input_items__OR__input_loaded && _scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 2) && item?.key,
			_: _scope_with_id($scope0_id),
			g: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $for_content__item_promise__closures
		});
	}, "key", $scope0_id, "a", 1, 1, 1, 0, 0, "a6", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_items && _patch_fill($scope0_id, "va10", input.loaded);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.loaded,
		f: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_loaded__closures
	});
}, 1);
