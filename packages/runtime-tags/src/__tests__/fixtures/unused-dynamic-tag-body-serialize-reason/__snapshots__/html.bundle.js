// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Wrap = { content: _content("a1", ({ as, onClick, content }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__as__OR__onClick__OR__content = _write_guard($scope1_reason, 3);
		_dynamic_tag($scope1_id, "a", as, {
			onClick,
			content
		}, 0, 0, $wg__as__OR__onClick__OR__content);
		_write_if($scope1_reason, 3) && _scope($scope1_id, {
			d: _write_if($scope1_reason, 2) && as,
			e: _write_if($scope1_reason, 1) && onClick,
			f: _write_if($scope1_reason, 0) && content
		});
	}, $scope0_id) };
	const Message = { content: _content("a2", (input) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason(), $wg__input_before__OR__input_after = _write_guard($scope2_reason, 0);
		_html(_text_resume($scope2_id, "a", input.before + input.after, $wg__input_before__OR__input_after));
		_write_if($scope2_reason, 0) && _scope($scope2_id, {
			d: _write_if($scope2_reason, 2) && input.before,
			e: _write_if($scope2_reason, 1) && input.after
		});
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
}, 1);
