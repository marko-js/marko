// template.marko
const cols = ["name", "price"];
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_rows = _serialize_guard($scope0_reason, 0), $si__input_rows = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<table><tbody>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_html("<tr>");
		_for_of(cols, (col) => {
			const $scope2_id = _scope_id();
			_html(`<td>${_escape(row[col])}${_el_resume($scope2_id, "a", $sg__input_rows)}</td>`);
			$si__input_rows && writeScope($scope2_id, {
				c: col,
				_: _scope_with_id($scope1_id)
			});
		}, 0, $scope1_id, "a", $sg__input_rows, 0, 0, 0, 1);
		_html("</tr>");
		$si__input_rows && writeScope($scope1_id, {});
	}, 0, $scope0_id, "a", $sg__input_rows, $sg__input_rows, $sg__input_rows, "</tbody>", 1);
	_html("<tfoot><tr><td colspan=2>end of table</td></tr></tfoot></table>");
	$si__input_rows && writeScope($scope0_id, {});
}, 1);
