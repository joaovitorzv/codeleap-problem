module.exports = {
  extends: ["react-app", "react-app/jest", "prettier"],
  settings: {
    next: {
      rootDir: [
        "apps/web/",
        "apps/rnative/",
        "packages/ui/",
        "packages/config/",
        "packages/tsconfig/",
      ],
    },
  },
};
