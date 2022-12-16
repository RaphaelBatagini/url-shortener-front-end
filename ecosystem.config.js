module.exports = {
  apps : [
      {
        name: "url_shortener_front",
        script: "npm",
        args: "start",
        watch: true,
        env: {
          "NODE_ENV": "production",
        }
      }
  ]
}
