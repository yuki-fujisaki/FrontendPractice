module.exports = {
    env: {
      browser: true,
      es6: true
    },
    "extends": [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended", // TypeScriptでチェックされる項目をLintから除外する設定
      // ver 8.0.0から書き方が変わった模様
      //   "prettier/@typescript-eslint",
      "prettier", // prettierのextendsは他のextendsより後に記述する
    ],
    plugins: ["@typescript-eslint"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
      "sourceType": "module",
      "project": "./tsconfig.json" // TypeScriptのLint時に参照するconfigファイルを指定
    },
    root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
    rules: {}
  }