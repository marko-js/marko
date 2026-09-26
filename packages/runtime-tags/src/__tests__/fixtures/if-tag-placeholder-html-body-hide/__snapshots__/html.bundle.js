// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_html = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	_html("<div><span>before</span>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(_html_resume($scope1_id, "a", input.html, $sg__input_html));
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<span>after</span></div><button>hide</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: input.html });
}, 1);
