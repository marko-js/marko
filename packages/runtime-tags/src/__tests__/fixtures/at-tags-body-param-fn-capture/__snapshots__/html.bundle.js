// tags/reader.marko
var reader_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input.get });
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_then__OR__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.then, { x: input.x }, 0, 0, $wg__input_then__OR__input_x);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.then,
		e: _write_if($scope0_reason, 1) && input.x
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_v << 1 | $wg__input_v << 5);
	const $childScope2 = _peek_scope_id();
	wrap_default({
		x: input.v,
		then: attrTag({ content: _content_resume("a1", ({ x }) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			reader_default({ get: _resume(function() {
				return x;
			}, "a0", $scope1_id) });
			_scope($scope1_id, {
				d: x,
				a: _write_if($scope1_reason, 0) && _existing_scope($childScope)
			});
		}, $scope0_id) })
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope2) });
}, 1);
