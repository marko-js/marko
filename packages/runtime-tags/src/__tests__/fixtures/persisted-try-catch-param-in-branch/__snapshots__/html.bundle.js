// template.marko
_shells({
	a0: "a0,done",
	a1: "a1,done",
	a2: "a2;b%;<!><!><!>",
	a: "a !a5; D l%;<button> </button><!><!>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a2", () => {
				const $scope3_id = _scope_id();
				_persisted_reason();
				_await($scope3_id, "a", input.promise, () => {
					_scope_id();
					_html("done");
				}, 1, "a1");
				$scope0_reason && _subscribe(_source_if($scope0_reason, 3) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }));
				$scope0_reason && _resume_branch($scope3_id);
			}, $scope1_id), { catch: attrTag({ content: _content_resume("a4", (err) => {
				_persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_resume($scope2_id, "a", err.message)} ${_text_resume($scope2_id, "b", input.title, 2)}</em>`);
				_subscribe(_source_if($scope0_reason, 2) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id) }) });
			_scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a3"], $scope0_owned, 1);
	_script($scope0_id, "a5");
	$scope0_reason ? _scope($scope0_id, {
		g: input.title,
		h: input.promise,
		i: count,
		j: $input_title__closures,
		k: $input_promise__closures
	}) : _owned_guard($scope0_owned, 2) && _patch_value($scope0_id, "a0", input.title);
}, 1, 0);
