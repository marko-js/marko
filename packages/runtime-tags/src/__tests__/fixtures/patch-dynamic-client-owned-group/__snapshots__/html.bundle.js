// tags/picker/card.marko
_shells({ b: "b;D%c%;<em><!> <!></em>" });
var card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "b", $global$1.brand, 2)}</em>`);
	_fill_global_subscribe("b0", $scope0_id);
	$scope0_page && _scope($scope0_id, {});
});

// tags/picker/index.marko
const $template = "<!><!><!>";
_shells({ c: "c !;b%;<!><!><!>" });
var picker_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_label = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $tag = input.on ? card_default : null;
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $wg__input_on__OR__input_label, void 0, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, $scope0_reason, 0));
	_patch_write($scope0_id, "d", input.on, 1);
	_patch_write($scope0_id, "e", input.label, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "c2");
	$scope0_page ? _scope($scope0_id, {
		d: _source_if($scope0_reason, 2) && input.on,
		e: _source_if($scope0_reason, 1) && input.label
	}) : (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "c0", input.on), _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "c1", input.label));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`)() });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let on = true;
	_html("<main>");
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	picker_default({
		on,
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "a1", on, 1);
	$scope0_page && _scope($scope0_id, {
		f: on,
		a: _existing_scope($childScope)
	});
}, 1);
