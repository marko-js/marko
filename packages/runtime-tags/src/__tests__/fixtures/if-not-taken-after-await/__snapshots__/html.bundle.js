// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	_html(`<button>${_text_resume($scope0_id, "b", x)}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<b>before</b>");
			_await($scope1_id, "a", resolveAfter("A", 1), (v) => {
				_scope_id();
				_html(`<i>${_escape(v)}</i>`);
			}, 0);
			_if(() => {}, $scope1_id, "b");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c");
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: x });
	_resume_branch($scope0_id);
}, 1);
