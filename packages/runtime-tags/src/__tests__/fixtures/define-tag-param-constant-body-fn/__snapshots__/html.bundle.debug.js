// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const D = { content: _content("__tests__/template.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const f = function() {
			return "A";
		};
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(f())}</span>`);
				return 0;
			}
		}, $scope1_id, "#text/0", 0, 0, 0, 0, 1);
	}, $scope0_id) };
	D.content({ on: true });
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/2", n)}</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { n }, "__tests__/template.marko", 0, { n: "6:6" });
}, 1);
