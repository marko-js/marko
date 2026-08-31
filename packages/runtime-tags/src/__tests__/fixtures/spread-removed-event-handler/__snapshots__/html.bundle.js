// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let phase = 0;
	let log = "";
	_html(`<div${_attrs(phase === 0 ? {
		onClick: _resume(function() {
			phase = 1;
		}, "a0", $scope0_id),
		onMouseOver: _resume(function() {
			log = `${log}M`;
		}, "a1", $scope0_id)
	} : { onClick: _resume(function() {
		phase = 0;
	}, "a2", $scope0_id) }, "a", $scope0_id, "div")}>${_text_resume($scope0_id, "b", phase)}:${_text_resume($scope0_id, "c", log, 2)}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		d: phase,
		e: log
	});
	_resume_branch($scope0_id);
}, 1);
