// card.marko
const $template$2 = "<section><em> </em><!></section>";
const $walks$2 = "E l%l";
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

// box.marko
const $template$1 = "<article><b> </b><!></article>";
const $walks$1 = "E l%l";
_shells({ "__tests__/box.marko": "__tests__/box.marko;E l%;<article><b> </b><!></article>" });
var box_default = _template_persisted("__tests__/box.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<article><b>${_patch_text($scope0_id, "#text/0", input.k, void 0, $scope0_reason, 0)}</b>`);
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/1", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/1", $tag, 0, 0, 0, $scope0_reason, 1));
	_html("</article>");
	$scope0_page && _scope($scope0_id, {}, "__tests__/box.marko", 0);
}, 0, 0);

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; ; ",
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content __tests__/template.marko_1_count#6/init;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($walks$1), /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)),
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	const $tag = input.on ? card_default : null;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_set_serialize_reason(2);
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		box_default({
			k: count,
			content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(_patch_text($scope2_id, "#text/0", input.label, void 0, $scope0_reason, 2));
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6"));
			}, $scope1_id)
		});
		_subscribe($count__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "4:4"));
	}, $scope0_id), 0, _source_guard($scope0_reason, 1), _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, "__tests__/template.marko_1*content", 0, $scope0_reason, 1));
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_label: _source_if($scope0_reason, 1) && input.label,
		count,
		"ClosureScopes:input_label": $input_label__closures,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "3:6"
	});
}, 1, 1);
