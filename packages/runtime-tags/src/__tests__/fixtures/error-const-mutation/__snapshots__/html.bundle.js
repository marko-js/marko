// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	const user = {
		firstName: "George",
		middleName: "R.R.",
		lastName: "Martin"
	};
	_html(`<p>${_escape(user.fullName = `${user.firstName} ${user.middleName} ${user.lastName}`)}</p>`);
}, 1);
