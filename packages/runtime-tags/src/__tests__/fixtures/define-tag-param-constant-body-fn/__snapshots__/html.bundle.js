// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	({ content: _content("a0", ({ on }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const f = function() {
			return "A";
		};
		_if(() => {
			if (on) {
				_scope_id();
				_html(`<span>${_escape(f())}</span>`);
				return 0;
			}
		}, $scope1_id, "a", 0, 0, 0, 0, 1);
	}, $scope0_id) }).content({ on: true });
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: n });
}, 1);
