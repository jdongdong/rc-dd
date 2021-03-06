module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es6": true,
        "mocha": true,
        "jest": true,
        "jasmine": true
    },
    "rules": {
        "react/prop-types": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js"] }],
        "no-param-reassign": [0],
        "object-curly-newline": [0],
        "function-paren-newline": [0],
        "import/prefer-default-export": 0,
        "no-unused-expressions": 0,
        "react/no-array-index-key": 0,
        // 数组和对象键值对最后一个逗号， never参数：不能带末尾的逗号, always参数：必须带末尾的逗号，
        // always-multiline：多行模式必须带逗号，单行模式不能带逗号
        "comma-dangle": [2, "always-multiline"],
        "no-plusplus": 0,
    }
};
