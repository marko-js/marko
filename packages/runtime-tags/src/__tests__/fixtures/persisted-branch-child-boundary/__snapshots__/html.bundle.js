// tags/loader.marko
const $template = "<div class=ld><!></div>";
_shells({
	b0: "b0; ; ",
	b1: "b1; ; ",
	b: "b;D%;<div class=ld><!></div>"
});
var loader_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership();
	_persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div class=ld>");
	_await($scope0_id, "a", input.promise, (v) => {
		const $scope1_id = _scope_id();
		_html(`${_patch_text($scope1_id, "a", v, $scope0_owned, 0)}${_el_resume($scope1_id, "a")}`);
		writeScope($scope1_id, {});
	}, void 0, "b1", 1);
	_html("</div>");
}, 0, 0);

// template.marko
_shells({
	a: "a; ;<main></main>",
	a0: /*@__PURE__*/ ((_w0, _w1) => `a0;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template),
	a1: "a1,<em>closed</em>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_serialize_reason({ 0: _mask_group($scope0_owned, 2) });
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "a", $childScope);
			loader_default({ promise: input.promise });
			writeScope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<em>closed</em>");
			$scope0_reason && writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a0", "a1"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, { e: input.promise });
}, 1, () => [loader_default]);
