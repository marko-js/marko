// tags/card.marko
const $template$1 = "<section><button>clear</button><!><p> </p></section>";
const $walks$1 = "D b%bD m";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;D b%bD ;<section><button>clear</button><!><p> </p></section>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_html(`<p>${_patch_text($scope0_id, "#text/2", input.user.name, void 0, $scope0_reason, 1)}</p></section>`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "PatchValue:__tests__/tags/card.marko_fill0", c, 1);
	$scope0_page ? _scope($scope0_id, {}, "__tests__/tags/card.marko", 0) : _content_withhold(input.content);
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_rows = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_rows__OR__input_label = _write_if($scope0_reason, 0), $wi__input_rows = _write_if($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const $for_content__row_id__closures = new Set();
		_filled_guard($scope0_reason, 1) && _patch_value($scope1_id, "PatchValue:__tests__/template.marko_fill1", row?.id);
		_set_scope_reason(_mask_group($scope0_reason, 1) << 3);
		const $childScope = _patch_child($scope1_id, "#childScope/0");
		card_default({
			user: row.user,
			content: _content_resume("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "#text/0", row.id, $wg__input_rows)} ${_text_resume($scope2_id, "#text/1", input.label, $wg__input_label * 2)}</em>`);
				$wi__input_rows__OR__input_label && _subscribe($wi__input_rows && $for_content__row_id__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "1:26"), "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_rows || $wg__input_label), "__tests__/template.marko_2_row_id#1:4/subscribe", $wg__input_rows || $wg__input_label);
				$wg__input_rows || $wg__input_label || $wi__input_rows__OR__input_label && _resume_branch($scope2_id);
			}, $scope1_id)
		});
		_scope($scope1_id, {
			_: $wi__input_rows__OR__input_label && _scope_with_id($scope0_id),
			"ClosureScopes:row_id/6": $wi__input_rows && $for_content__row_id__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2");
	}, 0, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		input_label: $wi__input_rows && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, { input_label: ["input.label"] }) : _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
