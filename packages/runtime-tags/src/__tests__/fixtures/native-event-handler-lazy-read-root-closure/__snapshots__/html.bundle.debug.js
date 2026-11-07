// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let todo = { id: 1 };
	let user = {
		nick: "n",
		name: "u"
	};
	let show = false;
	let log = "";
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}<button class=clear>clear</button>${_el_mark($scope0_id, "#button/1")}<button class=copy>copy</button>${_el_mark($scope0_id, "#button/2")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<div class=all>${_text_mark($scope1_id, "#text/0", JSON.stringify(todo))}</div>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "14:2");
			return 0;
		}
	}, $scope0_id, "#text/3", 1, 1, 0, 0, 1);
	forOf([1], (n) => {
		const $scope2_id = _scope_id();
		_html(`<button class=item>item</button>${_el_mark($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "17:2");
	});
	_html(`<div class=log>${_text_mark($scope0_id, "#text/5", log)}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_nick#8_shown#6");
	_scope($scope0_id, {
		todo,
		user,
		nick: user.nick,
		name: user.name,
		show,
		log
	}, "__tests__/template.marko", 0, {
		todo: "3:6",
		user: "4:6",
		nick: "5:10",
		name: "5:16",
		show: "7:6",
		log: "8:6"
	});
}, 1);
