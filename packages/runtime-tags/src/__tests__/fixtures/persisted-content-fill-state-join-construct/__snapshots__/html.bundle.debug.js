// tags/frame.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<div><!></div>" });
var frame_default = _template_persisted("__tests__/tags/frame.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</div>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
}, 0, 0);

// tags/card.marko
const $template$1 = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2);
const $walks$1 = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
_shells({ "__tests__/tags/card.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/card.marko;${_w0};${_w1}`)(((_w0) => `E l/${_w0}&l`)("D%l"), ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$2)) });
var card_default = _template_persisted("__tests__/tags/card.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</h2>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/1", $childScope);
	frame_default({ content: input.content });
	_html("</section>");
	$scope0_reason && _scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/tags/card.marko", 0);
}, 0, () => [frame_default]);

// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content __tests__/template.marko_2_count#6/init;D%c%c%;<span><!>/<!>/<!></span>",
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $template$1)
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_items = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $p_name__closures = new Set();
	let count = 0;
	const p = input.p;
	_html("<main>");
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__item_id__closures = new Set();
		_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		card_default({
			title: item.title,
			content: _content_elide("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<span>${_patch_text($scope2_id, "#text/0", p.name, void 0, $scope0_owned, 0)}/${_text_resume($scope2_id, "#text/1", count, 2)}/${_patch_text($scope2_id, "#text/2", item.id, 2, $scope0_owned, 1)}</span>`);
				_subscribe(_unfilled_if($scope0_owned, 1) && $for_content__item_id__closures, _subscribe(_unfilled_if($scope0_owned, 0) && $p_name__closures, _subscribe($count__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6"))));
			}, $scope1_id)
		});
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"ClosureScopes:item_id": $for_content__item_id__closures,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "4:4");
	}, 0, $scope0_id, "#text/0", 1, $sg__input_items, $sg__input_items, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_owned, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, {
		count,
		p_name: _source_if($scope0_reason, 1) && p?.name,
		"ClosureScopes:count": $count__closures,
		"ClosureScopes:p_name": $p_name__closures
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		p_name: ["p.name", "2:8"]
	});
}, 1, () => [card_default]);
