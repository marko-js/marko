// card.marko
const $template$1 = "<section><em> </em><!></section>";
const $walks$1 = "E l%l";
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%;<section><em> </em><!></section>" });
var card_default = _template_persisted("__tests__/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "#text/0", input.meta ? input.meta.n : "-", void 0, $scope0_reason, 0)}</em>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/card.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
_shells({
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content;b%;<!><!><!>",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($walks$1), ((_w0) => `<!>${_w0}<button>+</button>`)($template$1)),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell; ;<ul></ul>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell;D%c%;<li><!>:<!></li>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_items = _source_guard($scope0_reason, 3), $scope0_page = _page_render(), $sg__input_on = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_items__closures = new Set();
	const $input_on__closures = new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
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
						_subscribe(_unfilled_if($scope0_reason, 4) && $input_label__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:21"));
					}, 0, $scope2_id, "#ul/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_3*shell", $scope0_reason, 3);
					_html(`</ul>${_el_resume($scope2_id, "#ul/0", $sg__input_items)}`);
					$scope0_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_items__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:4"));
					return 0;
				}
			}, $scope1_id, "#text/0", 1, $sg__input_on, $sg__input_on, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 2);
			$scope0_page && _subscribe(_unfilled_if($scope0_reason, 2) && $input_on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
			$sg__input_on || $scope0_page && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_items: _source_if($scope0_reason, 2) && input.items,
		input_label: _source_if($scope0_reason, 0) && input.label,
		count,
		"ClosureScopes:input_label": $input_label__closures,
		"ClosureScopes:input_items": $input_items__closures,
		"ClosureScopes:input_on": $input_on__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_items: ["input.items"],
		input_label: ["input.label"],
		count: "2:6"
	});
}, 1, () => [card_default]);
