// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "a", resolveAfter("done", 1), (x) => {
			const $scope4_id = _scope_id();
			_html(`<span>${_escape(x)}</span>${_el_resume($scope4_id, "a")}`);
			_script($scope4_id, "a0");
			_scope($scope4_id, { d: x });
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("a1", () => {
		_scope_reason();
		_scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(item)}:`);
		_await($scope1_id, "c", resolveAfter(item, item), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
		_html(`</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a3");
		_scope($scope1_id, { M: item });
	}, (x) => x, $scope0_id, "b", 1, 1, 1, 0, 1);
	_scope($scope0_id, { c: items });
}, 1);
