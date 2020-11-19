module.exports = {
    async redirects() {
        return [
          {
            source: '/not-here',
            destination: '/',
            permanent: false,
          },
        ]
      }
}