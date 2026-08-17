// tags/pill.marko
const $template = "<b class=pill><!>:<!></b><button class=inc>+</button>";
const $walks = "D%c%l b";
var pill_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<b class=pill>${_patch_text($scope0_id, "a", input.text, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}:<!>${_escape(n)}${_el_resume($scope0_id, "b")}</b><button class=inc>+</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", n, 1);
	$scope0_reason && writeScope($scope0_id, { h: n });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_shells({
	a1: /*@__PURE__*/ ((_w0, _w1) => `a1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template),
	a0: "a0;b%;<!><!><!>",
	a2: "a2,<em>closed</em>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", input.promise, (value) => {
				const $scope3_id = _scope_id();
				_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
				const $childScope = _peek_scope_id();
				_patch_child($scope3_id, "a", $childScope);
				pill_default({
					text: value,
					start: 2
				});
				writeScope($scope3_id, { a: _existing_scope($childScope) });
			}, void 0, "a1");
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0", "a2"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, { e: input.promise });
}, 1, () => [pill_default]);
