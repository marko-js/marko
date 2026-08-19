// template.marko
_shells({ a0: "a0,loading" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_related__closures = /* @__PURE__ */ new Set();
	const $input_slow__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 4)}${_el_resume($scope0_id, "a")}</h1><section>`);
	_try($scope0_id, "b", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_await($scope1_id, "a", resolveAfter(input.related, input.slow ? 1 : 0), (related) => {
			const $scope3_id = _scope_id();
			_html(`<em>${_patch_text($scope3_id, "a", related, $scope0_owned, 0)}${_el_resume($scope3_id, "a")}</em>`);
			writeScope($scope3_id, {});
		});
		$scope0_reason && _subscribe(_source_if($scope0_reason, 6) && $input_slow__closures, _subscribe(_source_if($scope0_reason, 5) && $input_related__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) })));
		_resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_record("a0", $scope0_id) }) });
	_html("</section><footer>");
	_await($scope0_id, "c", resolveAfter(input.note, input.slow ? 2 : 0), (note) => {
		const $scope4_id = _scope_id();
		_html(`<span>${_patch_text($scope4_id, "a", note, $scope0_owned, 2)}${_el_resume($scope4_id, "a")}</span>`);
		writeScope($scope4_id, {});
	});
	_html(`</footer><button>Count <!>${_escape(count)}${_el_resume($scope0_id, "e")}</button>${_el_resume($scope0_id, "d")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, {
		i: input.related,
		j: input.slow,
		k: input.note,
		m: count,
		n: $input_related__closures,
		o: $input_slow__closures
	});
	_resume_branch($scope0_id);
}, 1, 0);
