// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("a1", ({ as, onClick, content }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", as, {
			onClick,
			content
		});
		_scope($scope1_id, {
			d: as,
			f: content
		});
	}, $scope0_id) };
	const Message = { content: _content("a2", (input) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope2_id, "a", input.before + input.after, 0));
	}, $scope0_id) };
	let x = 1;
	_set_scope_reason(162);
	const $childScope = _peek_scope_id();
	Wrap.content({
		as: "div",
		onClick: _resume(function() {
			console.log(x++);
		}, "a0", $scope0_id),
		content: _content_resume("a3", () => {
			_scope_reason();
			_scope_id();
			Message.content({
				before: "hello",
				after: "world"
			});
		}, $scope0_id)
	});
	_scope($scope0_id, {
		b: x,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
