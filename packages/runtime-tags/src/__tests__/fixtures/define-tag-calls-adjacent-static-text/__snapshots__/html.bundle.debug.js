// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const D = { content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("Z");
	}, $scope0_id) };
	D.content({});
	D.content({});
	_html(`<span>${_text_resume($scope0_id, "#text/2", n)}</span>`);
	_if(() => {
		if (n > 0) {
			const $scope2_id = _scope_id();
			_html("more");
			_scope($scope2_id, {}, "__tests__/template.marko", "5:2");
			return 0;
		} else {
			const $scope3_id = _scope_id();
			_html("none");
			_scope($scope3_id, {}, "__tests__/template.marko", "5:23");
			return 1;
		}
	}, $scope0_id, "#text/3");
	_html(`<button>inc</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "1:6" });
}, 1);
