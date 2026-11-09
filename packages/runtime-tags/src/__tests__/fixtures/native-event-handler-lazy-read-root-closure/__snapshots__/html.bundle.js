// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = { id: 1 };
	let user = {
		nick: "n",
		name: "u"
	};
	let log = "";
	_html(`<button class=whole>whole</button>${_el_mark($scope0_id, "a")}<button class=clear>clear</button>${_el_mark($scope0_id, "b")}<button class=copy>copy</button>${_el_mark($scope0_id, "c")}<button class=shown>shown</button>${_el_mark($scope0_id, "d")}`);
	forOf([1], (n) => {
		const $scope1_id = _scope_id();
		_html(`<button class=item>item</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	});
	_html(`<div class=log>${_text_mark($scope0_id, "f", log)}</div>`);
	_script($scope0_id, "a1");
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: todo,
		h: user,
		i: user.nick,
		j: user.name,
		k: log
	});
}, 1);
