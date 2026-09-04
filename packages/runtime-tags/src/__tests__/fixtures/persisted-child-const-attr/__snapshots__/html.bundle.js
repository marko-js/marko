// tags/badge/index.marko
const $template = "<div><!><i> </i></div>";
const $walks = "D%bD m";
_shells({
	b: "b;D%bD ;<div><!><i> </i></div>",
	b0: "b0;D ;<b> </b>"
});
var badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_label = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_if(() => {
		if (input.label) {
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", input.label, void 0, $scope0_owned, 0)}</b>`);
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_label, $sg__input_label, void 0, void 0, ["b0"], $scope0_owned, 0);
	_html(`<i>${_patch_text($scope0_id, "b", input.note, void 0, $scope0_owned, 1)}</i></div>`);
	$scope0_reason && _scope($scope0_id, { e: input.label });
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => `D/${_w0}& D m`)($walks), ((_w0) => `<main>${_w0}<button> </button></main>`)($template)) });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_set_serialize_reason({ 1: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	badge_default({
		label: "hi",
		note: input.title
	});
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a0");
	$scope0_reason && _scope($scope0_id, {
		g: count,
		a: _existing_scope($childScope)
	});
}, 1, () => [badge_default]);
