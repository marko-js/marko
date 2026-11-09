// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 1;
	const $return = {
		n,
		get: _resume(() => n, "b0", $scope0_id)
	};
	_scope($scope0_id, { a: n });
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let log = "";
	let api = child_default({});
	_html(`<button class=mid>mid</button>${_el_mark($scope0_id, "c")}<div class=log>${_text_mark($scope0_id, "d", log)}</div>`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: api,
		g: api.get
	});
}, 1);
