// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let serverEntries = [
		"a",
		"b",
		"c"
	];
	let entries = serverEntries;
	_html("<ul>");
	_for_of(entries, (entry) => {
		const $scope1_id = _scope_id();
		const remove = _action(_resume(async () => {
			entries = entries.filter((e) => e !== entry);
			serverEntries = await resolveAfter(serverEntries.filter((e) => e !== entry));
		}, "__tests__/template.marko_1/remove", $scope1_id));
		_html(`<li><button${_attr("disabled", remove.pending)}>${_escape(entry)}${_el_resume($scope1_id, "#text/1")}</button>${_el_resume($scope1_id, "#button/0")}</li>`);
		_script($scope1_id, "__tests__/template.marko_1_remove");
		writeScope($scope1_id, {
			entry,
			remove
		}, "__tests__/template.marko", "8:4", {
			entry: "8:8",
			remove: "9:13"
		});
	}, (e) => e, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	writeScope($scope0_id, {
		serverEntries,
		entries
	}, "__tests__/template.marko", 0, {
		serverEntries: "4:6",
		entries: "5:8"
	});
	_resume_branch($scope0_id);
}, 1);
