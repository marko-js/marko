// data.js
function getDetails(id) {
	if (typeof window !== "undefined") {
		throw new Error("getDetails is server-only");
	}
	return {
		name: `Part ${id}`,
		price: id * 10
	};
}

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_detailId = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.detailId ? 0 : 1, $scope0_id, "#text/2", $sg__input_detailId, $sg__input_detailId, $sg__input_detailId, 0, 1, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		const details = getDetails(input.detailId);
		_html(`<section><h2>${_escape(_hole_value($scope1_id, "UpdateHole:#text/0", details.name, _persisted_reason()))}${_el_resume($scope1_id, "#text/0", $sg__input_detailId)}</h2><p>costs ${_sep($sg__input_detailId)}${_escape(details.price)}${_el_resume($scope1_id, "#text/1", $sg__input_detailId)}</p><button class=copy>use price</button>${_el_resume($scope1_id, "#button/2")}</section>`);
		_script($scope1_id, "__tests__/template.marko_1_details_price");
		writeScope($scope1_id, {
			details_price: details?.price,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "5:2", { details_price: ["details.price", "6:10"] });
	}, () => {
		const $scope2_id = _scope_id();
		_html("<p>no selection</p>");
		$sg__input_detailId && writeScope($scope2_id, {}, "__tests__/template.marko", "13:2");
	}]);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {
		input_detailId: (_serialize_if($scope0_reason, 0) || _update_reason()) && input.detailId,
		count: _state_reason() && count
	}, "__tests__/template.marko", 0, {
		input_detailId: ["input.detailId"],
		count: "3:6"
	});
	_resume_branch($scope0_id);
}, 1);
