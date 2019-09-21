const env = process.env.NODE_ENV;
const appConstants = {
    env: env,
    WEBSITE_URL :
        env == "development"
        ? "http://localhost:1337"
        : process.env.VUE_APP_PRODUCTION_URL // get production url from .env file
}
export default appConstants;