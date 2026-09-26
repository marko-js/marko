// tags/boundary.marko
var boundary_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0), $si__input_content = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $sg__input_content);
		$si__input_content && _subscribe($input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2", $sg__input_content);
		$sg__input_content || $si__input_content && _resume_branch($scope1_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("b0", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) }, 0);
	$si__input_content && _scope($scope0_id, { e: $input_content__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 1;
	_html(`<button>inc</button>${_el_resume($scope0_id, "a")}`);
	boundary_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<span>${_text_resume($scope1_id, "a", count)}</span>`);
		_await($scope1_id, "b", resolveAfter(0, 1), () => {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "a", count)}</b>`);
			_subscribe($count__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				Cd: 1
			}), "a0");
		});
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1");
	}, $scope0_id) });
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		c: count,
		d: $count__closures
	});
}, 1);
