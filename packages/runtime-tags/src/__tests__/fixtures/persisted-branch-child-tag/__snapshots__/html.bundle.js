// tags/badge.marko
const $template = "<span class=badge><!><!></span>";
const $walks = "D%b%l";
_shells({ b: "b;D%b%;<span class=badge><!><!></span>" });
var badge_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<span class=badge>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_owned, 0)}${_patch_text($scope0_id, "b", input.note ? ` (${_to_text(input.note)})` : "", 2, $scope0_owned, 1)}</span>`);
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a: "a !a2;D%b D ;<main><!><button> </button></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template),
	a1: "a1,<em>closed</em>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({
				0: _mask_group($scope0_owned, 3),
				1: _mask_group($scope0_owned, 4)
			});
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			badge_default({
				label: input.title,
				note: input.note
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && _scope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0", "a1"], $scope0_owned, 2);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && _scope($scope0_id, {
		g: input.title,
		h: input.note,
		i: count
	});
	_resume_branch($scope0_id);
}, 1, () => [badge_default]);
