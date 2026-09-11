// card.marko
const $template$2 = "<section><em> </em><!></section>";
const $walks$2 = "E l%l";
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%;<section><em> </em><!></section>" });
var card_default = _template_persisted("__tests__/card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "#text/0", input.meta ? input.meta.n : "-", void 0, $scope0_owned, 0)}</em>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/card.marko", 0);
}, 0, 0);

// box.marko
const $template$1 = "<article><b> </b><!></article>";
const $walks$1 = "E l%l";
_shells({ "__tests__/box.marko": "__tests__/box.marko;E l%;<article><b> </b><!></article>" });
var box_default = _template_persisted("__tests__/box.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<article><b>${_patch_text($scope0_id, "#text/0", input.k, void 0, $scope0_owned, 0)}</b>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_owned, 1));
	_html("</article>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/box.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$2);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$2);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;%c%;<!>!<!>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)),
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($walks$2), ((_w0) => `<!>${_w0}<button>+</button>`)($template$2))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope2);
	card_default({
		meta: attrTag({ n: count }),
		content: _content_elide("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _persisted_reason();
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			box_default({
				k: input.label,
				content: _content_elide("__tests__/template.marko_2*content", () => {
					const $scope2_reason = _persisted_reason();
					const $scope2_id = _scope_id();
					_html(`${_patch_text($scope2_id, "#text/0", input.label, void 0, $scope0_owned, 0)}!${_text_resume($scope2_id, "#text/1", count, 2)}`);
					_subscribe($count__closures, _subscribe(_unfilled_if($scope0_owned, 0) && $input_label__closures, _scope($scope2_id, {
						_: _scope_with_id($scope1_id),
						"ClosureSignalIndex:input_label": 1
					}, "__tests__/template.marko", "6:6")));
				}, $scope1_id)
			});
			_subscribe(_unfilled_if($scope0_owned, 0) && $input_label__closures, _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:4"));
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		count,
		"ClosureScopes:input_label": $input_label__closures,
		"ClosureScopes:count": $count__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { count: "3:6" });
}, 1, () => [box_default, card_default]);
