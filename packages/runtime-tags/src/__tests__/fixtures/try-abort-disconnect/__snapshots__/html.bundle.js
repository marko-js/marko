// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_a = _serialize_guard($scope0_reason, 1), $si__input_a = _serialize_if($scope0_reason, 1), $sg__input_b = _serialize_guard($scope0_reason, 2), $si__input_b = _serialize_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", input.a, (v) => {
			const $scope4_id = _scope_id();
			_html(`<p>A:${_text_resume($scope4_id, "a", (console.log("body-ran:a", v), v), $sg__input_a * 2)}</p>`);
			$si__input_a && _scope($scope4_id, {});
		}, $sg__input_a);
		$si__input_a && _subscribe($input_a__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a0", () => {
		_scope_reason();
		_scope_id();
		_html("caught-a");
	}, $scope0_id) }) });
	_try($scope0_id, "b", _content_resume("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", input.b, (v) => {
			const $scope6_id = _scope_id();
			_html(`<p>B:${_text_resume($scope6_id, "a", (console.log("body-ran:b", v), v), $sg__input_b * 2)}</p>`);
			$si__input_b && _scope($scope6_id, {});
		}, $sg__input_b);
		$si__input_b && _subscribe($input_b__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope2_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a2", () => {
		_scope_reason();
		_scope_id();
		_html("caught-b");
	}, $scope0_id) }) });
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {
		g: $si__input_a && $input_a__closures,
		h: $si__input_b && $input_b__closures
	});
}, 1);
