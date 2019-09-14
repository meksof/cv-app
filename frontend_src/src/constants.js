const env = process.env.NODE_ENV;
// const prodUrl = process.env.PRODUCTION_URL; // TODO: will be dynamic from .env file
const appConstants = {
    env: env,
    WEBSITE_URL :
        env == "development"
        ? "http://localhost:1337"
        : "https://dev-front.herokuapp.com"
}
export default appConstants;