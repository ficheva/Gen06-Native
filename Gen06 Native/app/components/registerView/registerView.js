'use strict';
var isInit = true,
    frameModule = require('ui/frame'),

    service = require('./registerView-service'),

    // additional requires
    viewModel = require('./registerView-view-model');

function onLogged() {
    frameModule.topmost().navigate('components/home/home');
}

function onRegister(data) {
    if (!data.username) {
        alert('Missing username');

        return;
    }

    if (!data.password) {
        alert('Missing password');

        return;
    }

    if (!data.email) {
        alert('Missing email');

        return;
    }

    service.register(data)
        .then(onLogged);
}

function onShowLogin() {
    frameModule.topmost().navigate('components/signInView/signInView');
}

// additional functions
function _removeIOSNavBar() {
    var iosFrame = frameModule.topmost().ios;

    if (iosFrame) {
        iosFrame.navBarVisibility = 'never';
    }
}

function pageLoaded(args) {
    var page = args.object;

    _removeIOSNavBar();
    page.bindingContext = viewModel;
    // additional pageLoaded

    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.register, onRegister);

        viewModel.on(viewModel.events.showLogin, onShowLogin);

        // additional pageInit
    }
}

exports.pageLoaded = pageLoaded;