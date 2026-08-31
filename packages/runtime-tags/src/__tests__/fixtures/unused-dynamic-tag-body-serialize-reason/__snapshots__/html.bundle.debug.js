// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("__tests__/template.marko_1*content", ({ as, onClick, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "#text/0", as, {
			onClick,
			content
		}, 0, 0, _serialize_guard($scope1_reason, 3));
		_serialize_if($scope1_reason, 3) && writeScope($scope1_id, {
			as: _serialize_if($scope1_reason, 2) && as,
			onClick: _serialize_if($scope1_reason, 1) && onClick,
			content: _serialize_if($scope1_reason, 0) && content
		}, "__tests__/template.marko", "1:1", {
			as: "1:15",
			onClick: "1:19",
			content: "1:28"
		});
	}, $scope0_id) };
	const Message = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $sg__input_before__OR__input_after = _serialize_guard($scope2_reason, 0);
		_html(`${_escape(input.before + input.after) || _sep($sg__input_before__OR__input_after)}${_el_resume($scope2_id, "#text/0", $sg__input_before__OR__input_after)}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {
			input_before: _serialize_if($scope2_reason, 2) && input.before,
			input_after: _serialize_if($scope2_reason, 1) && input.after
		}, "__tests__/template.marko", "4:1", {
			input_before: ["input.before", "4:16"],
			input_after: ["input.after", "4:16"]
		});
	}, $scope0_id) };
	let x = 1;
	_set_serialize_reason(26);
	const $childScope = _peek_scope_id();
	Wrap.content({
		as: "div",
		onClick: _resume(function() {
			console.log(x++);
		}, "__tests__/template.marko_0/onClick", $scope0_id),
		content: _content_resume("__tests__/template.marko_3*content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			Message.content({
				before: "hello",
				after: "world"
			});
		}, $scope0_id)
	});
	writeScope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "7:5" });
	_resume_branch($scope0_id);
}, 1);
