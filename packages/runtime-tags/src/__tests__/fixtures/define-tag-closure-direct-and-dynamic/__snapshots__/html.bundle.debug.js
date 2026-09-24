// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	const attrs = { class: "a" };
	const Box = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<div${_attr_class(attrs.class)}></div>`);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2");
		_resume_branch($scope1_id);
	}, $scope0_id) };
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope2_id = _scope_id();
			Box.content({});
			_scope($scope2_id, {}, "__tests__/template.marko", "7:2");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_dynamic_tag($scope0_id, "#text/2", show ? Box : null, {});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		attrs_class: attrs.class,
		Box
	}, "__tests__/template.marko", 0, {
		show: "1:6",
		attrs_class: ["attrs.class", "2:8"],
		Box: "3:9"
	});
}, 1);
