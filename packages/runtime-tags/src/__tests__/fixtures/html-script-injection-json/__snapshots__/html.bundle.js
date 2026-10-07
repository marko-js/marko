// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<script${_attr_nonce()} type=application/ld+json>${_escape_script(JSON.stringify({ a: input.a }))}<\/script>${_el_resume($scope0_id, "a", $wg__input_a)}`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
