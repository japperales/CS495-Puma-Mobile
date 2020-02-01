import React  from 'react';
//context for the current portfolio, and an empty method passed down to set the portfolio
const PortfolioContext = React.createContext( ["", () => {}]);

export default PortfolioContext;
