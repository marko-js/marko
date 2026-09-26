// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_try($scope0_id, "#text/0", _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_await($scope2_id, "#text/0", resolveAfter("done", 1), (x) => {
			const $scope4_id = _scope_id();
			_html(`<span>${_escape(x)}</span>${_el_resume($scope4_id, "#span/0")}`);
			_script($scope4_id, "__tests__/template.marko_4");
			_scope($scope4_id, { x }, "__tests__/template.marko", "5:4", { x: "5:10" });
		});
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("loading");
	}, $scope0_id) }) });
	_for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<button>${_escape(item)}:`);
		_await($scope1_id, "#text/2", resolveAfter(item, item), (v) => {
			const $scope5_id = _scope_id();
			_html(_escape(v));
		}, 0);
		_html(`</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { "#LoopKey": item }, "__tests__/template.marko", "9:2", { "#LoopKey": "9:6" });
	}, (x) => x, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_scope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "2:6" });
}, 1);
