# Svelte compiler types issue

## Steps to reproduce

```sh
pnpm i && tsc
```

## Expected behavior

Error-free compilation.

## Actual behavior

`tsc` prints the following to the terminal:

```plain
index.ts:5:6 - error TS2345: Argument of type 'TemplateNode' is not assignable to parameter of type 'Node'.
  Type 'Text' is not assignable to type 'Node'.
    Type 'Text' is missing the following properties from type 'Property': key, value, kind, method, and 2 more.

5 walk(ast.html, {
       ~~~~~~~~

index.ts:7:7 - error TS2367: This comparison appears to be unintentional because the types '"CatchClause" | "ClassBody" | "Identifier" | "Literal" | "MethodDefinition" | "PrivateIdentifier" | "Program" | "Property" | "PropertyDefinition" | "SpreadElement" | "Super" | ... 59 more ... | "VariableDeclaration"' and '"Text"' have no overlap.

7   if (node.type === 'Text') {
        ~~~~~~~~~~~~~~~~~~~~


Found 2 errors in the same file, starting at: index.ts:5
```