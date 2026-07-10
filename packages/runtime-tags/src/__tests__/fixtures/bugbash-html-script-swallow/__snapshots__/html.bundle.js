// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<script${_attr_nonce()}>var bugbashX = '${_escape_script(input.code)}'<\/script>${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}<div id=after>after</div>`);
	_serialize_if($scope0_reason, 0) && writeScope($scope0_id, {});
}, 1);
