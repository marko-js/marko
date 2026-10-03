// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_text = _write_guard($scope0_reason, 2), $wg__input_list = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const [ ...all] = input.list;
	const [ ...chars] = input.text;
	_html(`<div>${_text_resume($scope0_id, "#text/0", all.join("+"), $wg__input_list)}</div><div>${_text_resume($scope0_id, "#text/1", chars.join("-"), $wg__input_text)}</div>`);
	_if(() => {
		if (input.text) {
			const $scope1_id = _scope_id();
			_html(`<span>${_text_resume($scope1_id, "#text/0", chars[0], $wg__input_text)}${_text_resume($scope1_id, "#text/1", chars.join(""), $wg__input_text * 2)}</span>`);
			_write_if($scope0_reason, 2) && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
			return 0;
		}
	}, $scope0_id, "#text/2", $wg__input_text, $wg__input_text, 0, 0, 1);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
