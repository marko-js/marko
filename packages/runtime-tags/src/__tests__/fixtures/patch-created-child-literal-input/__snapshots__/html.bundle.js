// tags/demo-card.marko
const $template$1 = "<span class=title><!> <!></span>";
const $walks$1 = "D%c%l";
_shells({ b: "b;D%c%;<span class=title><!> <!></span>" });
var demo_card_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span class=title>${_patch_text($scope0_id, "a", input.name, void 0, $scope0_reason, 0)} ${_patch_text($scope0_id, "b", input.progress, 2, $scope0_reason, 1)}</span>`);
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// tags/page-b.marko
const $template = /*@__PURE__*/ ((_w0) => `<button> </button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` D l/${_w0}&`)($walks$1);
_shells({ c: /*@__PURE__*/ ((_w0, _w1) => `c !c0;${_w0};${_w1}`)(((_w0) => ` D l/${_w0}&`)($walks$1), ((_w0) => `<button> </button>${_w0}`)($template$1)) });
var page_b_default = _template_patch("c", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let progress = 0;
	_html(`<button>${_text_resume($scope0_id, "b", progress)}</button>${_el_resume($scope0_id, "a")}`);
	const $childScope = _peek_scope_id();
	if ($scope0_page || _must_render(demo_card_default)) {
		_set_serialize_reason(8);
		_patch_child($scope0_id, "c", $childScope);
		demo_card_default({
			name: "Switch",
			progress
		});
	}
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c1", progress, 1);
	$scope0_page && _scope($scope0_id, {
		d: progress,
		c: _existing_scope($childScope)
	});
}, 0, () => [demo_card_default]);

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			page_b_default({});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"], $scope0_reason, 0);
	$scope0_page && _scope($scope0_id, {});
}, 1, () => [page_b_default]);
