module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/errors",
        "plugin:import/warnings",
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ["react", "import"],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
                moduleDirectory: ["node_modules", "src/"],
            },
        },
    },
    globals: {
        React: "writable",
    },
    rules: {
        "react/react-in-jsx-scope": "off",
        "react/prop-types": "off",
        "no-unused-vars": "off",
        semi: ["error", "always"],
        quotes: ["error", "double"],
        "react/button-has-type": "error",
        "react/no-array-index-key": "error",
        "react/self-closing-comp": [
            "error",
            {
                component: true,
                html: true,
            },
        ],
        "import/order": [
            "error",
            {
                groups: [
                    "builtin",
                    "external",
                    "parent",
                    "sibling",
                    "index",
                    "object",
                    "type",
                ],
                pathGroups: [
                    {
                        pattern: "src/**/*",
                        group: "parent",
                        position: "before",
                    },
                ],
                alphabetize: { order: "asc" },
            },
        ],
    },
};
