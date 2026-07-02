// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("a1", ({ as, onClick, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_dynamic_tag($scope1_id, "a", as, {
			onClick,
			content
		}, 0, 0, _serialize_guard($scope1_reason, 3));
		_serialize_if($scope1_reason, 3) && writeScope($scope1_id, {
			d: _serialize_if($scope1_reason, 2) && as,
			e: _serialize_if($scope1_reason, 1) && onClick,
			f: _serialize_if($scope1_reason, 0) && content
		});
	}) };
	const Message = { content: _content("a2", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(`${_escape(input.before + input.after)}${_el_resume($scope2_id, "a", _serialize_guard($scope2_reason, 0))}`);
		_serialize_if($scope2_reason, 0) && writeScope($scope2_id, {
			d: _serialize_if($scope2_reason, 2) && input.before,
			e: _serialize_if($scope2_reason, 1) && input.after
		});
	}) };
	let x = 1;
	const $childScope = _peek_scope_id();
	_set_serialize_reason(26);
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
	writeScope($scope0_id, {
		b: x,
		a: _existing_scope($childScope)
	});
	_resume_branch($scope0_id);
}, 1);
