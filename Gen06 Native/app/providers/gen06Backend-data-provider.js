var provider,
    TelerikBackendServices = require('../everlive/everlive.all.min');

provider = new TelerikBackendServices({

    offlineStorage: true,

    url: '//testtap.telerik.com/bs-api/v1/',

    apiKey: 'CAQkp9RyP3YDkM5w',
    scheme: 'https'
});

module.exports = provider;