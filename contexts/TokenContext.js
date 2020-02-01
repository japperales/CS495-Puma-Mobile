import React  from 'react';
//context for the token, and an empty method passed down to set the token
const TokenContext = React.createContext( ["THE TOKEN IS NOT RETRIEVED YET", () => {}]);

export default TokenContext;
