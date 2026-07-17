// template.marko
var template_default = _template("a", (input) => {
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
		}, "a0", $scope1_id));
		_html(`<li><button${_attr("disabled", remove.pending)}>${_escape(entry)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}</li>`);
		_script($scope1_id, "a1");
		writeScope($scope1_id, {
			d: entry,
			f: remove
		});
	}, (e) => e, $scope0_id, "a", 1, 1, 1, "</ul>", 1);
	writeScope($scope0_id, {
		b: serverEntries,
		c: entries
	});
	_resume_branch($scope0_id);
}, 1);
