// tags/counter.marko
const $template = "<div class=counter><span><!>: <!></span><button class=inc>+</button></div>";
const $walks = "E%c%l l";
_shells({ b: "b !b0;E%c%l ;<div class=counter><span><!>: <!></span><button class=inc>+</button></div>" });
var counter_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let n = input.start;
	_html(`<div class=counter><span>${_patch_text($scope0_id, "a", input.label, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}: <!>${_escape(n)}${_el_resume($scope0_id, "b")}</span><button class=inc>+</button>${_el_resume($scope0_id, "c")}</div>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b0", n, 1);
	$scope0_reason && writeScope($scope0_id, { h: n });
	_resume_branch($scope0_id);
}, 0, 0);

// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $template)
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 3) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			counter_default({
				label: input.title,
				start: input.start
			});
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {
		e: input.title,
		f: input.start
	});
}, 1, () => [counter_default]);
