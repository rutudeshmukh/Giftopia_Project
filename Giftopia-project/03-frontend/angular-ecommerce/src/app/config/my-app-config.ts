export default {

    oidc: {
        clientId : '0oaamosrl54GjfdNF5d7',
        issuer: 'https://dev-19750369.okta.com/oauth2/default',
        redirectUri: 'https://localhost:4200/login/callback',
        scopes: ['openid','profile','email']
    }
}
//FYI : clientid taken from okta autherization server 'https://dev-19750369-admin.okta.com/admin/app/oidc_client/client/0oaamcim4md3XOEbe5d7#tab-general' login link "https://developer.okta.com/login/"
// issuer also taken from same site

//npm install @okta/okta-angular@5.1 @okta/okta-auth-js@6.0