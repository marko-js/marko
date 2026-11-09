// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = { id: 1 };
	let user = {
		nick: "n",
		name: "u"
	};
	let log = "";
	_html(`<button class=whole>whole</button>${_el_mark($scope0_id, "#button/0")}<button class=clear>clear</button>${_el_mark($scope0_id, "#button/1")}<button class=copy>copy</button>${_el_mark($scope0_id, "#button/2")}<button class=shown>shown</button>${_el_mark($scope0_id, "#button/3")}`);
	forOf([1], (n) => {
		const $scope1_id = _scope_id();
		_html(`<button class=item>item</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "15:2");
	});
	_html(`<div class=log>${_text_mark($scope0_id, "#text/5", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_nick#8_shown#6");
	_scope($scope0_id, {
		todo,
		user,
		nick: user.nick,
		name: user.name,
		log
	}, "__tests__/template.marko", 0, {
		todo: "4:6",
		user: "5:6",
		nick: "6:10",
		name: "6:16",
		log: "8:6"
	});
}, 1);
