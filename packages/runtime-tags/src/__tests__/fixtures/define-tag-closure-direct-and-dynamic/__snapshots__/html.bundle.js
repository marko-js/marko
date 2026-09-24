// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	const attrs = { class: "a" };
	const Box = { content: _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div${_attr_class(attrs.class)}></div>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			Box.content({});
			_scope($scope2_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_dynamic_tag($scope0_id, "c", Box, {});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		d: show,
		f: attrs.class,
		g: Box
	});
}, 1);
