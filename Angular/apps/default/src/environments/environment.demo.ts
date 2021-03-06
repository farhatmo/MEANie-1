export const environment = {
    production: true,
    backend: {
        protocol: 'http',
        host: 'localhost',
        port: '3000',
        endpoints: {
          signup: '/api/auth/signup',
          signin: '/api/auth/signin',
          articles: '/api/articles',
          users : '/api/users',
          slides: '/api/slides',
          slidesFix: '/api/slidesFix',
          images: '/api/images',
          imagesServer : '/api/imagesServer',
          search : '/api/search/slides',
          banner : '/api/banner'

        }
    }
};
