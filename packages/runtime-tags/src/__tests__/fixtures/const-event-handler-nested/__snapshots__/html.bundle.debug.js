// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let show = true;
	const inc = function() {
		count++;
	};
	const add = function(n) {
		count += n;
	};
	forOf([1, 2], (n) => {
		const $scope2_id = _scope_id();
		_html(`<button class=add>+${_escape(n)}</button>${_el_resume($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2");
		_scope($scope2_id, {
			n,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "5:2", { n: "5:6" });
	});
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<button class=inc>inc</button>${_el_resume($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_inc#6");
			_scope($scope1_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "#button/2")}<p>${_text_resume($scope0_id, "#text/3", count)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		show
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		show: "2:6"
	});
}, 1);
