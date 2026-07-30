// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let items = [{ id: 0 }, { id: 1 }];
	let shown = true;
	_html("<div class=host>");
	_if(() => {
		if (outer) {
			const $scope1_id = _scope_id();
			_for_of(items, (item) => {
				const $scope2_id = _scope_id();
				_if(() => {
					if (item.id % 2 === 0) {
						const $scope3_id = _scope_id();
						_html(`<b>even <!>${_escape(item.id)}${_el_resume($scope3_id, "#text/0")}</b>`);
						writeScope($scope3_id, {}, "__tests__/template.marko", "8:8");
						return 0;
					} else {
						const $scope4_id = _scope_id();
						_html(`<i>odd <!>${_escape(item.id)}${_el_resume($scope4_id, "#text/0")}</i>`);
						writeScope($scope4_id, {}, "__tests__/template.marko", "11:8");
						return 1;
					}
				}, $scope2_id, "#text/0", 1, 1, 1, 0, 1);
				writeScope($scope2_id, { item_id: item?.id }, "__tests__/template.marko", "7:6", { item_id: ["item.id", "7:10"] });
			}, "id", $scope1_id, "#text/0");
			_show_start(shown);
			_html("<u>tail</u>");
			_show_end($scope1_id, "#text/2", shown, 1, 1, 0, 1);
			writeScope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#div/0", 1, 1, 1, "</div>");
	_html(`<button class=outer>Outer</button>${_el_resume($scope0_id, "#button/1")}<button class=rotate>Rotate</button>${_el_resume($scope0_id, "#button/2")}<button class=drop>Drop</button>${_el_resume($scope0_id, "#button/3")}<button class=clear>Clear</button>${_el_resume($scope0_id, "#button/4")}<button class=show>Show</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		outer,
		items,
		shown
	}, "__tests__/template.marko", 0, {
		outer: "1:6",
		items: "2:6",
		shown: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
