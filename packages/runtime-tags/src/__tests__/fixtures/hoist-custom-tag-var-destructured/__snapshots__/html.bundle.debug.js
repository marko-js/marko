// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	const $return = { get: _resume(() => count, "__tests__/tags/child.marko_0/_return", $scope0_id) };
	_scope($scope0_id, { count }, "__tests__/tags/child.marko", 0, { count: "1:6" });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let log = "";
	_if(() => {
		if (true) {
			const $scope1_id = _scope_id();
			let x = child_default({});
			_html(`<button class=whole>whole</button>${_el_mark($scope1_id, "#button/2")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {
				x,
				get: x.get,
				_: _scope_with_id($scope0_id)
			}, "__tests__/template.marko", "4:2", {
				x: "5:10",
				get: "6:12"
			});
			_assert_hoist(x.get);
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 0, 0, 0, 1);
	_html(`<button class=hoisted>hoisted</button>${_el_mark($scope0_id, "#button/1")}<div>${_text_mark($scope0_id, "#text/2", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { log }, "__tests__/template.marko", 0, { log: "3:6" });
}, 1);
