// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}<div>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_await($scope1_id, "a", resolveAfter("loaded", 2), (value) => {
				_scope_id();
				_html(_escape(value));
			}, 0);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, "</div>");
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
