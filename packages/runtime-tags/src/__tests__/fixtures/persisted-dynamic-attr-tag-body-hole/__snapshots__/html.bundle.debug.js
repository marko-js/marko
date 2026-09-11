// card.marko
const $template$1 = "<section><em> </em><!><!></section>";
const $walks$1 = "E l%b%l";
_shells({ "__tests__/card.marko": "__tests__/card.marko;E l%b%;<section><em> </em><!><!></section>" });
var card_default = _template_persisted("__tests__/card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><em>${_patch_text($scope0_id, "#text/0", input.meta.n, void 0, $scope0_owned, 0)}</em>`);
	const $tag = input.meta.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_owned, 1));
	const $tag2 = input.content;
	_dynamic_tag($scope0_id, "#text/2", $tag2, {}, 0, 0, _source_guard($scope0_reason, 2), _patch_dynamic_tag($scope0_id, "#text/2", $tag2, 0, 0, 0, $scope0_owned, 2));
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/card.marko", 0);
}, 0, 1);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($walks$1);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; ; ",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content; ; ",
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko !__tests__/template.marko_0;${_w0};${_w1}`)(((_w0) => `b/${_w0}& b`)($walks$1), ((_w0) => `<!>${_w0}<button>+</button>`)($template$1))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let count = 0;
	_set_serialize_reason(2);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	card_default({
		meta: attrTag({
			n: count,
			content: _content_elide("__tests__/template.marko_1*content", () => {
				const $scope1_reason = _persisted_reason();
				const $scope1_id = _scope_id();
				_html(_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_owned, 0));
				_subscribe(_unfilled_if($scope0_owned, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "4:4"));
			}, $scope0_id)
		}),
		content: _content_elide("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _persisted_reason();
			const $scope2_id = _scope_id();
			_html(_patch_text($scope2_id, "#text/0", input.label, void 0, $scope0_owned, 0));
			_subscribe(_unfilled_if($scope0_owned, 0) && $input_label__closures, _scope($scope2_id, {
				_: _scope_with_id($scope0_id),
				"ClosureSignalIndex:input_label": 1
			}, "__tests__/template.marko", "3:4"));
		}, $scope0_id)
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		count,
		"ClosureScopes:input_label": $input_label__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "2:6" });
}, 1, () => [card_default]);
