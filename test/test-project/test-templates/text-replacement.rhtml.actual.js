function create(helpers) {
  var empty = helpers.e,
      notEmpty = helpers.ne,
      escapeXml = helpers.x;

  return function render(data, context) {
    var person = data.person;

    context.w('Hello ')
      .w(escapeXml(person.name))
      .w('. You are from ')
      .w(escapeXml(person.address.city))
      .w(', ')
      .w(escapeXml(person.address.state));
  };
}