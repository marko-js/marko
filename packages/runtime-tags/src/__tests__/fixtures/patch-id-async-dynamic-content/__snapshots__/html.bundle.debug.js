// tags/field.marko
const $template$2 = "<label> </label><input>";
const $walks$2 = " D l b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/field.marko": "__tests__/tags/field.marko; D l ;<label> </label><input>" });
var field_default = _template("__tests__/tags/field.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const uid = input.uid || _id("uid");
	_html(`<label${_attr("for", uid, $scope0_id, "PatchAttr:#label/0 for", $scope0_reason, 0)}>${_text_resume($scope0_id, "#text/1", input.name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope0_id, "#label/0", _mask_group($scope0_reason, 0))}<input${_attr("id", uid, $scope0_id, "PatchAttr:#input/2 id", $scope0_reason, 0)}${_attr("aria-describedby", input.heading, $scope0_id, "PatchAttr:#input/2 aria-describedby", $scope0_reason, 2)}>${_el_resume($scope0_id, "#input/2", _mask_group($scope0_reason, 0) || _mask_group($scope0_reason, 2))}`);
	_scope($scope0_id, {}, "__tests__/tags/field.marko", 0);
});

// tags/loaded.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)($walks$2);
const $setup$1 = _shell_setup([[], []], ["#childScope/0>", $setup$2]);
_shells({ "__tests__/tags/loaded.marko": /*@__PURE__*/ (() => `__tests__/tags/loaded.marko${_shell_marker($setup$1)};${((_w0) => `/${_w0}&%c`)($walks$2)};${((_w0) => `${_w0}<!><!>`)($template$2)}`)() });
var loaded_default = _template("__tests__/tags/loaded.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	field_default({ name: input.name });
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 10, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/loaded.marko", 0);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_4*content": /*@__PURE__*/ (() => `__tests__/template.marko_4*content${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$2]))}`)(),
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_items__OR__input_loaded = _write_guard($scope0_reason, 0), $cg__input_loaded = _client_guard($scope0_reason, 2), $wi__input_items__OR__input_loaded = _write_if($scope0_reason, 0), $cg__input_items = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_loaded__closures = new Set();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_promise__closures = new Set();
		_try($scope1_id, "#text/0", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", item.promise, (ready) => {
				const $scope3_id = _scope_id();
				_dynamic_tag($scope3_id, "#text/0", input.loaded ? loaded_default : "section", { name: ready }, 17, _content_resume("__tests__/template.marko_4*content", () => {
					const $scope4_id = _scope_id();
					const $scope4_reason = _scope_reason();
					_set_scope_reason(0);
					const $childScope = _peek_scope_id($scope4_id, "#childScope/0", 1);
					field_default({ name: item.key });
					_patch_child_end();
					_scope($scope4_id, {
						_: $wi__input_items__OR__input_loaded && _scope_with_id($scope3_id),
						"#childScope/0": _existing_scope($childScope)
					}, "__tests__/template.marko", "6:7");
				}, $scope3_id, ($scope) => [
					{ "#LoopKey": item?.key },
					{ _: $scope($scope1_id) },
					{ _: $scope($scope2_id) }
				]), 0, $wg__input_items__OR__input_loaded, $scope0_reason, 0);
				_filled_guard($scope0_reason, 1) && $cg__input_loaded && _patch_write($scope3_id, "PatchMarkedWrite:ready", ready);
				(_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope3_id, "__tests__/template.marko_3_input_loaded#0:4/subscribe");
				_patch_join_init($scope3_id, "__tests__/template.marko_3_input_loaded#0:4_ready#2/init", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">>>input_loaded", _filled_guard($scope0_reason, 1) && "ready");
				$wi__input_items__OR__input_loaded && _subscribe(_unfilled_if($scope0_reason, 2) && $input_loaded__closures, _scope($scope3_id, { ready: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && ready }, "__tests__/template.marko", "5:4", { ready: "5:10" }), $cg__input_loaded && "__tests__/template.marko_3_input_loaded#0:4/subscribe", $wg__input_items__OR__input_loaded);
				$wg__input_items__OR__input_loaded || $wi__input_items__OR__input_loaded && _resume_branch($scope3_id);
			}, 1, "__tests__/template.marko_3*content", void 0, 1);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, $cg__input_items ? "__tests__/template.marko_2_item_promise#1:3/init" : "__tests__/template.marko_2_item_promise#1:3/subscribe");
			$wi__input_items__OR__input_loaded && _subscribe(_unfilled_if($scope0_reason, 1) && $for_content__item_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:3"), $cg__input_items && "__tests__/template.marko_2_item_promise#1:3/subscribe", 0);
			$wi__input_items__OR__input_loaded && _resume_branch($scope2_id);
		}, () => {
			const $scope5_reason = _scope_reason();
			const $scope5_id = _scope_id();
			_set_scope_reason(0);
			_patch_child($scope5_id, "#childScope/0", 0);
			field_default({ name: "loading" });
			_patch_child_end();
		}, void 0, "__tests__/template.marko_5*content", void 0, "__tests__/template.marko_2*content");
		$wi__input_items__OR__input_loaded && _scope($scope1_id, {
			"#LoopKey": _unfilled_if($scope0_reason, 2) && item?.key,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:item_promise/6": _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $for_content__item_promise__closures
		}, "__tests__/template.marko", "2:2", { "#LoopKey": ["item.key", "2:6"] });
	}, "key", $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_items && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.loaded);
	_scope($scope0_id, {
		input_loaded: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.loaded,
		"ClosureScopes:input_loaded/5": _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_loaded__closures
	}, "__tests__/template.marko", 0, { input_loaded: ["input.loaded"] });
}, 1);
