// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let phase = 0;
	let log = "";
	const attrs = phase === 0 ? {
		onClick: _resume(function() {
			phase = 1;
		}, "__tests__/template.marko_0/attrs", $scope0_id),
		onMouseOver: _resume(function() {
			log = `${log}M`;
		}, "__tests__/template.marko_0/attrs2", $scope0_id)
	} : { onClick: _resume(function() {
		phase = 0;
	}, "__tests__/template.marko_0/attrs3", $scope0_id) };
	_html(`<div${_attrs(attrs, "#div/0", $scope0_id, "div")}>${_escape(phase)}${_el_resume($scope0_id, "#text/1")}:<!>${_escape(log)}${_el_resume($scope0_id, "#text/2")}</div>${_el_resume($scope0_id, "#div/0")}`);
	_script($scope0_id, "__tests__/template.marko_0_attrs");
	writeScope($scope0_id, {
		phase,
		log
	}, "__tests__/template.marko", 0, {
		phase: "3:6",
		log: "4:6"
	});
	_resume_branch($scope0_id);
}, 1);
