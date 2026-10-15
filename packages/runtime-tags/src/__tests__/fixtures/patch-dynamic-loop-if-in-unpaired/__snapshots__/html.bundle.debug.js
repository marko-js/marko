// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%;<section><em> </em><!></section>" });
var card_default = _template("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "#text/0", input.meta ? input.meta.n : "-", void 0, $scope0_reason, 0)}</em>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 0, 0, _write_guard($scope0_reason, 1), void 0, 2, $scope0_reason, 1);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}& b`)($walks$1);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !__tests__/template.marko_0;${((_w0) => `/${_w0}& b`)($walks$1)};${((_w0) => `${_w0}<button>+</button>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; ;<ul></ul>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D%c%;<li><!>:<!></li>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_on__OR__input_items__OR__input_label = _write_if($scope0_reason, 1), $wg__input_on = _write_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_items__closures = new Set();
	const $input_on__closures = new Set();
	let count = 0;
	_set_scope_reason(2);
	const $childScope = _patch_child($scope0_id, "#childScope/0");
	card_default({
		meta: attrTag({ n: count }),
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.on) {
					const $scope2_id = _scope_id();
					_html("<ul>");
					_for_of(input.items, (x) => {
						const $scope3_id = _scope_id();
						_html(`<li>${_patch_text($scope3_id, "#text/0", x, void 0, $scope0_reason, 3)}:${_patch_text($scope3_id, "#text/1", input.label, 2, $scope0_reason, 4)}</li>`);
						_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, "__tests__/template.marko_3_input_label#0:6/init");
						_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope3_id, { _: $wi__input_on__OR__input_items__OR__input_label && _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:21"));
					}, 0, $scope2_id, "#ul/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_3*shell", $scope0_reason, 3);
					_html(`</ul>${_el_resume($scope2_id, "#ul/0")}`);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope2_id, "__tests__/template.marko_2_input_items#0:5/init");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_items__closures, _scope($scope2_id, { _: $wi__input_on__OR__input_items__OR__input_label && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4"));
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $wg__input_on, void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_on#0:4/init");
			$wi__input_on__OR__input_items__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
			$wg__input_on || $wi__input_on__OR__input_items__OR__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill2", count, 1);
	$scope0_page ? _scope($scope0_id, {
		input_items: _unfilled_if($scope0_reason, 2) && input.items,
		input_label: _unfilled_if($scope0_reason, 0) && input.label,
		count,
		"ClosureScopes:input_label/10": _write_if($scope0_reason, 4) && _unfilled_if($scope0_reason, 4) && $input_label__closures,
		"ClosureScopes:input_items/9": _write_if($scope0_reason, 3) && _unfilled_if($scope0_reason, 3) && $input_items__closures,
		"ClosureScopes:input_on/8": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_on__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_label: ["input.label"],
		count: "2:6"
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.items, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 3)) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.label, !_server_guard($scope0_reason, 4)));
}, 1);
