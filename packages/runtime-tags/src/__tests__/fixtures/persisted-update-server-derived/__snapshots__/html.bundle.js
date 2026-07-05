// data.js
function getDetails(id) {
	if (typeof window !== "undefined") throw new Error("getDetails is server-only");
	return {
		name: `Part ${id}`,
		price: id * 10
	};
}

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_detailId = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.detailId) {
			const $scope1_id = _scope_id();
			const details = getDetails(input.detailId);
			_html(`<section><h2>${_escape(_hole_value($scope1_id, "Qa", details.name, _persisted_reason()))}${_el_resume($scope1_id, "a", $sg__input_detailId)}</h2><p>costs ${_sep($sg__input_detailId)}${_escape(_hole_value($scope1_id, "Qb", details.price, _persisted_reason()))}${_el_resume($scope1_id, "b", $sg__input_detailId)}</p><button class=copy>use price</button>${_el_resume($scope1_id, "c")}</section>`);
			_script($scope1_id, "a3");
			writeScope($scope1_id, {
				f: details?.price,
				_: _scope_with_id($scope0_id)
			});
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html("<p>no selection</p>");
			$sg__input_detailId && writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "c", $sg__input_detailId, $sg__input_detailId, $sg__input_detailId, 0, 1);
	_script($scope0_id, "a4");
	writeScope($scope0_id, {
		f: (_serialize_if($scope0_reason, 0) || _update_reason()) && input.detailId,
		g: _state_reason() && count
	});
	_resume_branch($scope0_id);
}, 1);
