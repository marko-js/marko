// tags/leaf.marko
const $template$1 = "<!><!><!>";
_shells({
	b: "b !;b%;<!><!><!>",
	b0: "b0;D ;<em> </em>"
});
var leaf_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_flag = _source_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.flag) {
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_reason, 2)}</em>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_flag, $sg__input_flag, void 0, void 0, ["b0"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: input.label }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b0", input.label);
}, 0, 0);

// tags/mid.marko
const $template = "<!><!><!>";
_shells({
	c: "c !;b%;<!><!><!>",
	c0: /*@__PURE__*/ ((_w0, _w1) => `c0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `D/${_w0}&l`)("b%c"), /*@__PURE__*/ ((_w0) => `<section>${_w0}</section>`)($template$1))
});
var mid_default = _template_persisted("c", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _source_guard($scope0_reason, 2), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_set_serialize_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 3) << 3 | _mask_group($scope0_reason, 4) << 5);
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			leaf_default({
				flag: input.flag,
				label: input.label
			});
			_html("</section>");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["c0"], $scope0_reason, 2);
	$scope0_page ? _scope($scope0_id, {
		e: input.flag,
		f: input.label
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "c0", input.flag), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "c1", input.label));
}, 0, () => [leaf_default]);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& l`)("b%c"), ((_w0) => `<main>${_w0}<button>+</button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason(56 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 2) << 9));
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	mid_default({
		show: true,
		flag: input.flag,
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 2) && _patch_value($scope0_id, "a0", input.label);
}, 1, () => [mid_default]);
