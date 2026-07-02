// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { show } = input;
	_dynamic_tag($scope0_id, "#text/0", show ? "div" : null, {}, _content_resume("__tests__/tags/child.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "__tests__/tags/child.marko_1");
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0));
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {}, "__tests__/tags/child.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let show = false;
	_html(`<div id=ref>init</div><button id=o>O</button>${_el_resume($scope0_id, "#button/0")}<button id=s>S</button>${_el_resume($scope0_id, "#button/1")}`);
	_if(() => {
		if (outer) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_set_serialize_reason(1);
			child_default({ show });
			writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "6:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		outer,
		show
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		show: "2:6"
	});
	_resume_branch($scope0_id);
}, 1);
