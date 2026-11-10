// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const f = function() {
		return "A";
	};
	const D = { content: _content("__tests__/template.marko_1*content", ({ on }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(f())}</span>`);
				return 0;
			}
		}, $scope1_id, "#text/0", 0, 0, 0, 0, 1);
	}, $scope0_id) };
	D.content({ on: true });
	counter_default({});
}, 1);
