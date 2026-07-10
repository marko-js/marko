// tags/probe.marko
var probe_default = _template("__tests__/tags/probe.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { name, log } = input;
	_html(`<em>${_escape(name)}${_el_resume($scope0_id, "#text/0", _serialize_guard($scope0_reason, 0))}</em>`);
	_script($scope0_id, "__tests__/tags/probe.marko_0_name_log");
	writeScope($scope0_id, {
		name,
		log
	}, "__tests__/tags/probe.marko", 0, {
		name: "1:10",
		log: "1:16"
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		"x",
		"y",
		"z"
	];
	const log = _resume(function(msg) {
		((sink) => sink())(_el_read_error).textContent += msg + ";";
	}, "__tests__/template.marko_0/log", $scope0_id);
	_html(`<div class=sink></div>${_el_resume($scope0_id, "#div/0")}<div id=list>`);
	_for_of(items, (name) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		_set_serialize_reason(1);
		probe_default({
			name,
			log
		});
		writeScope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "5:4");
	}, (name) => name, $scope0_id, "#div/1", 1, 1, 1, "</div>", 1);
	_html(`<button id=reorder>reorder</button>${_el_resume($scope0_id, "#button/2")}<button id=remove>remove x</button>${_el_resume($scope0_id, "#button/3")}<button id=clear>clear</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { log }, "__tests__/template.marko", 0, { log: "3:8" });
	_resume_branch($scope0_id);
}, 1);
