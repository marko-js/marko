// Replaces `<add-enum/>` with a static enum, as a migrator could.
module.exports = function (tag, t) {
  tag.replaceWith(
    t.markoScriptlet(
      [
        t.tsEnumDeclaration(t.identifier("Added"), [
          t.tsEnumMember(t.identifier("A"), t.numericLiteral(1)),
        ]),
      ],
      true,
    ),
  );
};
