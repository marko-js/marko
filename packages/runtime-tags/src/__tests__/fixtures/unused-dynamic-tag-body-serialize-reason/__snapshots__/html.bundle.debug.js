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
		});
		_scope($scope1_id, {
			as,
			content
		}, "__tests__/template.marko", "1:1", {
			as: "1:15",
			onClick: "1:19",
			content: "1:28"
		});
	}, $scope0_id) };
	const Message = { content: _content("__tests__/template.marko_2*content", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(_escape(input.before + input.after));
	}, $scope0_id) };
	let x = 1;
	_set_scope_reason(162);
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
	_scope($scope0_id, {
		x,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { x: "7:5" });
	_resume_branch($scope0_id);
}, 1);
