// tags/probe.marko
var probe_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const { name, log } = input;
	_html(`<em>${_escape(name)}${_el_resume($scope0_id, "a", _serialize_guard($scope0_reason, 0))}</em>`);
	_script($scope0_id, "b0");
	writeScope($scope0_id, {
		d: name,
		e: log
	});
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [
		"x",
		"y",
		"z"
	];
	const log = _resume(function(msg) {
		((sink) => sink())(_el_read_error).textContent += msg + ";";
	}, "a0", $scope0_id);
	_html(`<div class=sink></div>${_el_resume($scope0_id, "a")}<div id=list>`);
	_for_of(items, (name) => {
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		_set_serialize_reason(1);
		probe_default({
			name,
			log
		});
		writeScope($scope1_id, { a: _existing_scope($childScope) });
	}, (name) => name, $scope0_id, "b", 1, 1, 1, "</div>", 1);
	_html(`<button id=reorder>reorder</button>${_el_resume($scope0_id, "c")}<button id=remove>remove x</button>${_el_resume($scope0_id, "d")}<button id=clear>clear</button>${_el_resume($scope0_id, "e")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, { g: log });
	_resume_branch($scope0_id);
}, 1);
