const env = process.env.NODE_ENV;
const appConstants = {
    env: env,
    WEBSITE_URL :
        env == "development"
        ? "http://localhost:1337"
        : process.env.PRODUCTION_URL
}
export default appConstants;