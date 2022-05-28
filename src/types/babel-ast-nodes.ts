import type { Node } from '@babel/types';

type TPropertyType<TObj, TProp extends keyof TObj> = TObj[TProp];

type TTypeOfPropertyType = TPropertyType<Node, 'type'>;
export type TBabelParserAstNodeTypes = { [key in TTypeOfPropertyType]: key };

/** This support Node types that do exist in legacy parsers, although in the context of typescript it should not matter */
export const CEBABEL_PARSER_AST_NODE_TYPES: TBabelParserAstNodeTypes = {
    AnyTypeAnnotation: 'AnyTypeAnnotation',
    ArgumentPlaceholder: 'ArgumentPlaceholder',
    ArrayExpression: 'ArrayExpression',
    ArrayPattern: 'ArrayPattern',
    ArrayTypeAnnotation: 'ArrayTypeAnnotation',
    ArrowFunctionExpression: 'ArrowFunctionExpression',
    AssignmentExpression: 'AssignmentExpression',
    AssignmentPattern: 'AssignmentPattern',
    AwaitExpression: 'AwaitExpression',
    BigIntLiteral: 'BigIntLiteral',
    BinaryExpression: 'BinaryExpression',
    BindExpression: 'BindExpression',
    BlockStatement: 'BlockStatement',
    BooleanLiteral: 'BooleanLiteral',
    BooleanLiteralTypeAnnotation: 'BooleanLiteralTypeAnnotation',
    BooleanTypeAnnotation: 'BooleanTypeAnnotation',
    BreakStatement: 'BreakStatement',
    CallExpression: 'CallExpression',
    CatchClause: 'CatchClause',
    ClassAccessorProperty: 'ClassAccessorProperty',
    ClassBody: 'ClassBody',
    ClassDeclaration: 'ClassDeclaration',
    ClassExpression: 'ClassExpression',
    ClassImplements: 'ClassImplements',
    ClassMethod: 'ClassMethod',
    ClassPrivateMethod: 'ClassPrivateMethod',
    ClassPrivateProperty: 'ClassPrivateProperty',
    ClassProperty: 'ClassProperty',
    ConditionalExpression: 'ConditionalExpression',
    ContinueStatement: 'ContinueStatement',
    DebuggerStatement: 'DebuggerStatement',
    DecimalLiteral: 'DecimalLiteral',
    DeclareClass: 'DeclareClass',
    DeclareExportAllDeclaration: 'DeclareExportAllDeclaration',
    DeclareExportDeclaration: 'DeclareExportDeclaration',
    DeclareFunction: 'DeclareFunction',
    DeclareInterface: 'DeclareInterface',
    DeclareModule: 'DeclareModule',
    DeclareModuleExports: 'DeclareModuleExports',
    DeclareOpaqueType: 'DeclareOpaqueType',
    DeclareTypeAlias: 'DeclareTypeAlias',
    DeclareVariable: 'DeclareVariable',
    DeclaredPredicate: 'DeclaredPredicate',
    Decorator: 'Decorator',
    Directive: 'Directive',
    DirectiveLiteral: 'DirectiveLiteral',
    DoExpression: 'DoExpression',
    DoWhileStatement: 'DoWhileStatement',
    EmptyStatement: 'EmptyStatement',
    EmptyTypeAnnotation: 'EmptyTypeAnnotation',
    EnumBooleanBody: 'EnumBooleanBody',
    EnumBooleanMember: 'EnumBooleanMember',
    EnumDeclaration: 'EnumDeclaration',
    EnumDefaultedMember: 'EnumDefaultedMember',
    EnumNumberBody: 'EnumNumberBody',
    EnumNumberMember: 'EnumNumberMember',
    EnumStringBody: 'EnumStringBody',
    EnumStringMember: 'EnumStringMember',
    EnumSymbolBody: 'EnumSymbolBody',
    ExistsTypeAnnotation: 'ExistsTypeAnnotation',
    ExportAllDeclaration: 'ExportAllDeclaration',
    ExportDefaultDeclaration: 'ExportDefaultDeclaration',
    ExportDefaultSpecifier: 'ExportDefaultSpecifier',
    ExportNamedDeclaration: 'ExportNamedDeclaration',
    ExportNamespaceSpecifier: 'ExportNamespaceSpecifier',
    ExportSpecifier: 'ExportSpecifier',
    ExpressionStatement: 'ExpressionStatement',
    File: 'File',
    ForInStatement: 'ForInStatement',
    ForOfStatement: 'ForOfStatement',
    ForStatement: 'ForStatement',
    FunctionDeclaration: 'FunctionDeclaration',
    FunctionExpression: 'FunctionExpression',
    FunctionTypeAnnotation: 'FunctionTypeAnnotation',
    FunctionTypeParam: 'FunctionTypeParam',
    GenericTypeAnnotation: 'GenericTypeAnnotation',
    Identifier: 'Identifier',
    IfStatement: 'IfStatement',
    Import: 'Import',
    ImportAttribute: 'ImportAttribute',
    ImportDeclaration: 'ImportDeclaration',
    ImportDefaultSpecifier: 'ImportDefaultSpecifier',
    ImportNamespaceSpecifier: 'ImportNamespaceSpecifier',
    ImportSpecifier: 'ImportSpecifier',
    IndexedAccessType: 'IndexedAccessType',
    InferredPredicate: 'InferredPredicate',
    InterfaceDeclaration: 'InterfaceDeclaration',
    InterfaceExtends: 'InterfaceExtends',
    InterfaceTypeAnnotation: 'InterfaceTypeAnnotation',
    InterpreterDirective: 'InterpreterDirective',
    IntersectionTypeAnnotation: 'IntersectionTypeAnnotation',
    JSXAttribute: 'JSXAttribute',
    JSXClosingElement: 'JSXClosingElement',
    JSXClosingFragment: 'JSXClosingFragment',
    JSXElement: 'JSXElement',
    JSXEmptyExpression: 'JSXEmptyExpression',
    JSXExpressionContainer: 'JSXExpressionContainer',
    JSXFragment: 'JSXFragment',
    JSXIdentifier: 'JSXIdentifier',
    JSXMemberExpression: 'JSXMemberExpression',
    JSXNamespacedName: 'JSXNamespacedName',
    JSXOpeningElement: 'JSXOpeningElement',
    JSXOpeningFragment: 'JSXOpeningFragment',
    JSXSpreadAttribute: 'JSXSpreadAttribute',
    JSXSpreadChild: 'JSXSpreadChild',
    JSXText: 'JSXText',
    LabeledStatement: 'LabeledStatement',
    LogicalExpression: 'LogicalExpression',
    MemberExpression: 'MemberExpression',
    MetaProperty: 'MetaProperty',
    MixedTypeAnnotation: 'MixedTypeAnnotation',
    ModuleExpression: 'ModuleExpression',
    NewExpression: 'NewExpression',
    Noop: 'Noop',
    NullLiteral: 'NullLiteral',
    NullLiteralTypeAnnotation: 'NullLiteralTypeAnnotation',
    NullableTypeAnnotation: 'NullableTypeAnnotation',
    NumberLiteral: 'NumberLiteral',
    NumberLiteralTypeAnnotation: 'NumberLiteralTypeAnnotation',
    NumberTypeAnnotation: 'NumberTypeAnnotation',
    NumericLiteral: 'NumericLiteral',
    ObjectExpression: 'ObjectExpression',
    ObjectMethod: 'ObjectMethod',
    ObjectPattern: 'ObjectPattern',
    ObjectProperty: 'ObjectProperty',
    ObjectTypeAnnotation: 'ObjectTypeAnnotation',
    ObjectTypeCallProperty: 'ObjectTypeCallProperty',
    ObjectTypeIndexer: 'ObjectTypeIndexer',
    ObjectTypeInternalSlot: 'ObjectTypeInternalSlot',
    ObjectTypeProperty: 'ObjectTypeProperty',
    ObjectTypeSpreadProperty: 'ObjectTypeSpreadProperty',
    OpaqueType: 'OpaqueType',
    OptionalCallExpression: 'OptionalCallExpression',
    OptionalIndexedAccessType: 'OptionalIndexedAccessType',
    OptionalMemberExpression: 'OptionalMemberExpression',
    ParenthesizedExpression: 'ParenthesizedExpression',
    PipelineBareFunction: 'PipelineBareFunction',
    PipelinePrimaryTopicReference: 'PipelinePrimaryTopicReference',
    PipelineTopicExpression: 'PipelineTopicExpression',
    Placeholder: 'Placeholder',
    PrivateName: 'PrivateName',
    Program: 'Program',
    QualifiedTypeIdentifier: 'QualifiedTypeIdentifier',
    RecordExpression: 'RecordExpression',
    RegExpLiteral: 'RegExpLiteral',
    RegexLiteral: 'RegexLiteral',
    RestElement: 'RestElement',
    RestProperty: 'RestProperty',
    ReturnStatement: 'ReturnStatement',
    SequenceExpression: 'SequenceExpression',
    SpreadElement: 'SpreadElement',
    SpreadProperty: 'SpreadProperty',
    StaticBlock: 'StaticBlock',
    StringLiteral: 'StringLiteral',
    StringLiteralTypeAnnotation: 'StringLiteralTypeAnnotation',
    StringTypeAnnotation: 'StringTypeAnnotation',
    Super: 'Super',
    SwitchCase: 'SwitchCase',
    SwitchStatement: 'SwitchStatement',
    SymbolTypeAnnotation: 'SymbolTypeAnnotation',
    TSAnyKeyword: 'TSAnyKeyword',
    TSArrayType: 'TSArrayType',
    TSAsExpression: 'TSAsExpression',
    TSBigIntKeyword: 'TSBigIntKeyword',
    TSBooleanKeyword: 'TSBooleanKeyword',
    TSCallSignatureDeclaration: 'TSCallSignatureDeclaration',
    TSConditionalType: 'TSConditionalType',
    TSConstructSignatureDeclaration: 'TSConstructSignatureDeclaration',
    TSConstructorType: 'TSConstructorType',
    TSDeclareFunction: 'TSDeclareFunction',
    TSDeclareMethod: 'TSDeclareMethod',
    TSEnumDeclaration: 'TSEnumDeclaration',
    TSEnumMember: 'TSEnumMember',
    TSExportAssignment: 'TSExportAssignment',
    TSExpressionWithTypeArguments: 'TSExpressionWithTypeArguments',
    TSExternalModuleReference: 'TSExternalModuleReference',
    TSFunctionType: 'TSFunctionType',
    TSImportEqualsDeclaration: 'TSImportEqualsDeclaration',
    TSImportType: 'TSImportType',
    TSIndexSignature: 'TSIndexSignature',
    TSIndexedAccessType: 'TSIndexedAccessType',
    TSInferType: 'TSInferType',
    TSInterfaceBody: 'TSInterfaceBody',
    TSInterfaceDeclaration: 'TSInterfaceDeclaration',
    TSIntersectionType: 'TSIntersectionType',
    TSIntrinsicKeyword: 'TSIntrinsicKeyword',
    TSLiteralType: 'TSLiteralType',
    TSMappedType: 'TSMappedType',
    TSMethodSignature: 'TSMethodSignature',
    TSModuleBlock: 'TSModuleBlock',
    TSModuleDeclaration: 'TSModuleDeclaration',
    TSNamedTupleMember: 'TSNamedTupleMember',
    TSNamespaceExportDeclaration: 'TSNamespaceExportDeclaration',
    TSNeverKeyword: 'TSNeverKeyword',
    TSNonNullExpression: 'TSNonNullExpression',
    TSNullKeyword: 'TSNullKeyword',
    TSNumberKeyword: 'TSNumberKeyword',
    TSObjectKeyword: 'TSObjectKeyword',
    TSOptionalType: 'TSOptionalType',
    TSParameterProperty: 'TSParameterProperty',
    TSParenthesizedType: 'TSParenthesizedType',
    TSPropertySignature: 'TSPropertySignature',
    TSQualifiedName: 'TSQualifiedName',
    TSRestType: 'TSRestType',
    TSStringKeyword: 'TSStringKeyword',
    TSSymbolKeyword: 'TSSymbolKeyword',
    TSThisType: 'TSThisType',
    TSTupleType: 'TSTupleType',
    TSTypeAliasDeclaration: 'TSTypeAliasDeclaration',
    TSTypeAnnotation: 'TSTypeAnnotation',
    TSTypeAssertion: 'TSTypeAssertion',
    TSTypeLiteral: 'TSTypeLiteral',
    TSTypeOperator: 'TSTypeOperator',
    TSTypeParameter: 'TSTypeParameter',
    TSTypeParameterDeclaration: 'TSTypeParameterDeclaration',
    TSTypeParameterInstantiation: 'TSTypeParameterInstantiation',
    TSTypePredicate: 'TSTypePredicate',
    TSTypeQuery: 'TSTypeQuery',
    TSTypeReference: 'TSTypeReference',
    TSUndefinedKeyword: 'TSUndefinedKeyword',
    TSUnionType: 'TSUnionType',
    TSUnknownKeyword: 'TSUnknownKeyword',
    TSVoidKeyword: 'TSVoidKeyword',
    TaggedTemplateExpression: 'TaggedTemplateExpression',
    TemplateElement: 'TemplateElement',
    TemplateLiteral: 'TemplateLiteral',
    ThisExpression: 'ThisExpression',
    ThisTypeAnnotation: 'ThisTypeAnnotation',
    ThrowStatement: 'ThrowStatement',
    TopicReference: 'TopicReference',
    TryStatement: 'TryStatement',
    TupleExpression: 'TupleExpression',
    TupleTypeAnnotation: 'TupleTypeAnnotation',
    TypeAlias: 'TypeAlias',
    TypeAnnotation: 'TypeAnnotation',
    TypeCastExpression: 'TypeCastExpression',
    TypeParameter: 'TypeParameter',
    TypeParameterDeclaration: 'TypeParameterDeclaration',
    TypeParameterInstantiation: 'TypeParameterInstantiation',
    TypeofTypeAnnotation: 'TypeofTypeAnnotation',
    UnaryExpression: 'UnaryExpression',
    UnionTypeAnnotation: 'UnionTypeAnnotation',
    UpdateExpression: 'UpdateExpression',
    V8IntrinsicIdentifier: 'V8IntrinsicIdentifier',
    VariableDeclaration: 'VariableDeclaration',
    VariableDeclarator: 'VariableDeclarator',
    Variance: 'Variance',
    VoidTypeAnnotation: 'VoidTypeAnnotation',
    WhileStatement: 'WhileStatement',
    WithStatement: 'WithStatement',
    YieldExpression: 'YieldExpression',
};
