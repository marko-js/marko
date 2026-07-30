// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let outer = true;
	let items = [{ id: 0 }, { id: 1 }];
	let shown = true;
	_html("<div class=host>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_for_of(items, (item) => {
				const $scope2_id = _scope_id();
				_if(() => {
					if (item.id % 2 === 0) {
						const $scope3_id = _scope_id();
						_html(`<b>even <!>${_escape(item.id)}${_el_resume($scope3_id, "a")}</b>`);
						writeScope($scope3_id, {});
						return 0;
					} else {
						const $scope4_id = _scope_id();
						_html(`<i>odd <!>${_escape(item.id)}${_el_resume($scope4_id, "a")}</i>`);
						writeScope($scope4_id, {});
						return 1;
					}
				}, $scope2_id, "a", 1, 1, 1, 0, 1);
				writeScope($scope2_id, { d: item?.id });
			}, "id", $scope1_id, "a");
			_show_start(shown);
			_html("<u>tail</u>");
			_show_end($scope1_id, "c", shown, 1, 1, 0, 1);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, "</div>");
	_html(`<button class=outer>Outer</button>${_el_resume($scope0_id, "b")}<button class=rotate>Rotate</button>${_el_resume($scope0_id, "c")}<button class=drop>Drop</button>${_el_resume($scope0_id, "d")}<button class=clear>Clear</button>${_el_resume($scope0_id, "e")}<button class=show>Show</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		g: outer,
		h: items,
		i: shown
	});
	_resume_branch($scope0_id);
}, 1);
