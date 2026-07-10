// template.marko
const cols = ["name", "price"];
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_rows = _serialize_guard($scope0_reason, 0), $si__input_rows = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<table><tbody>");
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_html("<tr>");
		_for_of(cols, (col) => {
			const $scope2_id = _scope_id();
			_html(`<td>${_escape(row[col])}${_el_resume($scope2_id, "#text/0", $sg__input_rows)}</td>`);
			$si__input_rows && writeScope($scope2_id, {
				col,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "11:10", { col: "11:14" });
		}, 0, $scope1_id, "#tr/0", $sg__input_rows, 0, 0, 0, 1);
		_html("</tr>");
		$si__input_rows && writeScope($scope1_id, {}, "__tests__/template.marko", "9:6");
	}, 0, $scope0_id, "#tbody/0", $sg__input_rows, $sg__input_rows, $sg__input_rows, "</tbody>", 1);
	_html("<tfoot><tr><td colspan=2>end of table</td></tr></tfoot></table>");
	$si__input_rows && writeScope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
