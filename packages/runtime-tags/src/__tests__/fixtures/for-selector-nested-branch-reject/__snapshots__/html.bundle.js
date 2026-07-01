// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0), $si__input_show = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $selected__closures = /* @__PURE__ */ new Set();
	let selected = 1;
	let rows = [{
		id: 1,
		label: "a"
	}, {
		id: 2,
		label: "b"
	}];
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			forOf(rows, (row) => {
				const $scope2_id = _scope_id();
				_html(`<li${selected === row.id ? " class=danger" : ""}><button class=select>${_escape(row.label)}</button>${_el_resume($scope2_id, "b")}</li>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_subscribe($selected__closures, writeScope($scope2_id, {
					f: row?.id,
					_: _scope_with_id($scope1_id)
				}));
			});
			_html("</ul>");
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", $sg__input_show, $sg__input_show, $sg__input_show, 0, 1);
	writeScope($scope0_id, {
		e: $si__input_show && selected,
		f: $si__input_show && rows,
		Be: $selected__closures
	});
	_resume_branch($scope0_id);
}, 1);
