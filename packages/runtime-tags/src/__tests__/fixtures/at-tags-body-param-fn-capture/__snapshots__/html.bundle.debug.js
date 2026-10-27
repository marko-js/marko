// tags/reader.marko
var reader_default = _template("__tests__/tags/reader.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "#output/0")}`);
	_script($scope0_id, "__tests__/tags/reader.marko_0_get#3");
	_scope($scope0_id, { get: input.get }, "__tests__/tags/reader.marko", 0, { get: "1:10" });
});

// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_then__OR__input_x = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", input.then, { x: input.x }, 0, 0, $wg__input_then__OR__input_x);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_then: _write_if($scope0_reason, 2) && input.then,
		input_x: _write_if($scope0_reason, 1) && input.x
	}, "__tests__/tags/wrap.marko", 0, {
		input_then: ["input.then"],
		input_x: ["input.x"]
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_v = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_v << 1 | $wg__input_v << 5);
	const $childScope2 = _peek_scope_id();
	wrap_default({
		x: input.v,
		then: attrTag({ content: _content_resume("__tests__/template.marko_1*content", ({ x }) => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			reader_default({ get: _resume(function() {
				return x;
			}, "__tests__/template.marko_1/get", $scope1_id) });
			_scope($scope1_id, {
				x,
				"#childScope/0": _write_if($scope1_reason, 0) && _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4", { x: "2:12" });
		}, $scope0_id) })
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope2) }, "__tests__/template.marko", 0);
}, 1);
