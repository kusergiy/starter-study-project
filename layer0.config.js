module.exports = {
  team: "kuserhii",
  name: "kustarter-study-project.com",
  routes: "./src/routes.ts",
  connector: "@layer0/starter",
  backends: {
    origin: {
      domainOrIp: 'www.lushusa.com',
      hostHeader: 'www.lushusa.com',
      // disableCheckCert: true // disable this line before goin to production
    },
  },
};
