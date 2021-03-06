import { configureTnsOAuth, TnsOAuthClient, ITnsOAuthTokenResult } from "nativescript-oauth2";
import {
    TnsOaProvider,
    TnsOaProviderFacebook,
    TnsOaProviderOptionsFacebook,
    TnsOaProviderOptionsGoogle,
    TnsOaProviderGoogle
} from "nativescript-oauth2/providers";
import { ɵCompiler_compileModuleSync__POST_R3__ } from "@angular/core";
let client: TnsOAuthClient = null;
export function configureOAuthProviders() {
    const googleProvider = configureOAuthProviderGoogle();
    configureTnsOAuth([googleProvider]);
}
function configureOAuthProviderGoogle() {
    const googleProviderOptions: TnsOaProviderOptionsGoogle = {
        openIdSupport: 'oid-full',
        clientId: '350469076262-2d537fgunp2omv6ova0qjf1ru32m230q.apps.googleusercontent.com',
        redirectUri: 'com.googleusercontent.apps.350469076262-2d537fgunp2omv6ova0qjf1ru32m230q:/auth',
        urlScheme: 'com.googleusercontent.apps.350469076262-2d537fgunp2omv6ova0qjf1ru32m230q',
        scopes: ['email']
    };
    const googleProvider = new TnsOaProviderGoogle(googleProviderOptions);
    return googleProvider;
}
function configureOAuthProviderFacebook(){
    const FacebookProviderOptions: TnsOaProviderOptionsFacebook = {
        clientId: '',
        clientSecret: '',
        scopes: ['email'],
        openIdSupport: 'oid-none',
        redirectUri: ''
    };
    const FacebookProvider = new TnsOaProviderFacebook(FacebookProviderOptions);
    return FacebookProvider;
}
export function tnsOAuthLogin(providerType) {
    client = new TnsOAuthClient(providerType);
    if(providerType == 'google'){
       var loginType = 1;
    }
    else {
        var loginType = 2;
    }
    client.loginWithCompletion((tokenResult: ITnsOAuthTokenResult, error) => {
        if (error) {
            console.log('there was error logging in!');
            console.log(error);
        } else {
            alert('logged in successfully');
            this.router.navigate(["add-note"]);
            // this.http.post(this.env.API_URL + 'auth/register',
            //     { name: '', email: '', login_type: loginType, social_token: tokenResult.idToken }
            // ).then((data) =>{
               
            //     console.log(tokenResult.idToken);
            // },
            // error => {
            //     alert(JSON.stringify(error));
            // });
            
        }

    });
}