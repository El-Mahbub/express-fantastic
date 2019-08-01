export const AppName = 'Forum ilmu islam';

export const ViewEngine = 'ejs';
export const UrlEncoded = true;
export const XPoweredBy = false;
export const TrustProxy = true;
export const Cors = {
    origin: '*',                // Whitelist, Example: 'http://www.example1.com, http://www.example12.com, http://www.example123.com' and etc. Set this to '*' for development only !.
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200
}
