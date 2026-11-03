// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			forOf([{ n: 1 }, { n: 2 }], (item) => {
				const $scope2_id = _scope_id();
				_html(`<button class=r>x</button>${_el_resume($scope2_id, "#button/0")}`);
				_script($scope2_id, "__tests__/template.marko_2");
				_scope($scope2_id, {
					item_n: item?.n,
					_: _scope_with_id($scope1_id)
				}, "__tests__/template.marko", "3:4", { item_n: ["item.n", "3:8"] });
			});
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2");
			return 0;
		}
	}, $scope0_id, "#text/0", $wg__input_show, $wg__input_show);
	_html(`<p>${_text_resume($scope0_id, "#text/1", count)}</p>`);
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
