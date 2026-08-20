// template.marko
_shells({
	a0: "a0,loading",
	a1: "a1;D ;<em> </em>",
	a2: "a2;D ;<em> </em>",
	a3: "a3;b%;<!><!><!>",
	a: "a; ;<main></main>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_value__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "a", _content_resume("a3", () => {
				const $scope2_id = _scope_id();
				_persisted_reason();
				_await($scope2_id, "a", Promise.resolve(input.value), () => {
					const $scope3_id = _scope_id();
					_html(`<em>${_patch_text($scope3_id, "a", input.value, $scope0_owned, 2)}${_el_resume($scope3_id, "a")}</em>`);
					writeScope($scope3_id, {
						_: _scope_with_id($scope2_id),
						Cf: 1
					});
					_resume_branch($scope3_id);
				}, void 0, "a2");
				$scope0_reason && _subscribe(_source_if($scope0_reason, 2) && $input_value__closures, writeScope($scope2_id, { _: _scope_with_id($scope1_id) }));
				_resume_branch($scope2_id);
			}, $scope1_id), { placeholder: attrTag({ content: _content_record("a0", $scope1_id) }) });
			$scope0_reason && writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["a4"]);
	_html(`</main>${_el_resume($scope0_id, "a", $sg__input_show)}`);
	$scope0_reason && writeScope($scope0_id, {
		e: input.value,
		f: $input_value__closures
	});
}, 1, 0);
