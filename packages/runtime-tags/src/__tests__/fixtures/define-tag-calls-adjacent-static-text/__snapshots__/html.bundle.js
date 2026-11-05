// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const D = { content: _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("Z");
	}, $scope0_id) };
	D.content({});
	D.content({});
	_html(`<span>${_text_mark($scope0_id, "c", n)}</span>`);
	_if(() => {
		{
			const $scope3_id = _scope_id();
			_html("none");
			_scope($scope3_id, {});
			return 1;
		}
	}, $scope0_id, "d");
	_html(`<button>inc</button>${_el_mark($scope0_id, "e")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { f: n });
}, 1);
