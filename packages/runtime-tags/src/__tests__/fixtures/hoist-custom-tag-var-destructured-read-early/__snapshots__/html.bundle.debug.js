// tags/child.marko
var child_default = _template("__tests__/tags/child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const $return = {
		n,
		get: _resume(() => n, "__tests__/tags/child.marko_0/_return", $scope0_id)
	};
	_scope($scope0_id, { n }, "__tests__/tags/child.marko", 0, { n: "1:6" });
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let log = "";
	let api = child_default({});
	_html(`<button class=mid>mid</button>${_el_mark($scope0_id, "#button/2")}<div class=log>${_text_mark($scope0_id, "#text/3", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		api,
		get: api.get
	}, "__tests__/template.marko", 0, {
		api: "4:8",
		get: "6:10"
	});
	_assert_hoist(api.get);
}, 1);
