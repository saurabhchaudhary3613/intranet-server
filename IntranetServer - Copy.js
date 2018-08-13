/**
 * To build WebService
 */
const express = require('express');
const app = express(); //express returns object Refernce 

//data
const intranetData = {
    "products": {
        "mutualFunds": [
            'US Equity',
            'Global / International Equity',
            'Fixed Income',
            'Tax Advantaged Fixed Income',
            'Equity Sector',
            'Multi Asset',
            'Specialty / Alternative',
            'Money Market'
        ],
        "otherInvestmentOptions": [
            'Separately Managed Accounts',
            'Variable Insurance Portfolios',
            'Closed End Funds',
            'Institutional Trust',
            'Product Presentations',
            'Prospectuses',
            'Product profile',
            'Product snapshot'
        ],
        "productResources": [
            'Morningstar hypo tool',
            'Morningstar Direct Reoprt portal',
            'Portfolio Holding Disclosure Form',
            'Static data'
        ]
    },
    "teams": {
        "sales": [
            'Wholesaler Coverage',
            'Harte Hanks',
            'Pricing Request Form'
        ],
        "keyAccountAndFirm":[
            'Platform Info',
            'Field Info',
            'Policies & Procedures',
            'Marketing Resources',
            'Institutional Services'
        ],
        "igs": [
            'Investment Solutions Overview',
            'Overview Brochure',
            'Team Organization',
            'Client & Industry Research',
            'Capital Markets & Macro',
            'Retail Client Projects',
            'Slide Library',
            'LTCME'
        ]
    },
    "themes": {
        "enterpriseThemes": [
            'Active Management',
            'Client Alignment',
            'Retirement',
            'Sustainable Investing',
            'Fixed Income'
        ],
        "clientThemes": [
            'Capital Markets',
            'Client Insights',
            'Quant/Multi-Asset',
            'Fundamental Equity'
        ],
        "thoughtLeadership": [
            'White Papers',
            'Investment Insights',
            'Market Commentaries',
            'Investment Solutions',
            'Video Library',
            'Learning Center'
        ],
        "campaigns":[
            'Prepare for the Bear',
            "Barron's Recognition",
            'CRM Pilot'
        ]
    },
    "quicklinks": {

    },
    "myfavorites": {

    },
    "search": [
        
    ]


   


}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Writing api's - RestFull webservices
app.get('/api/data', function (req, res) {
    res.json(intranetData);
});

app.listen(8081, function () {
    console.log('Server is Ready!');
});