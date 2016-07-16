module.exports = {
    "extends": "google",
    "ecmaFeatures": {
      "modules": true,
    },
    "env":{
      "amd": true,
      "browser": true,
      "es6": true,
      "jquery": true,
      "node": true,
    },
    "rules": {
      "no-unused-expressions": [
        2,
        {
          allowShortCircuit: true,
          allowTernary: true
        }
      ],
      "space-before-function-paren": [2, "always"]
    }
};
