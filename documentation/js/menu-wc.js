'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nest-app documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-a53bbcdf606529889e11a6c0e2c33edb07814d93ccb9a1b598d83891db4e2c4ff475b6978414ba31dfb3cbffd30b2e2da9f77e672baa938e6cd2628c2452698f"' : 'data-bs-target="#xs-controllers-links-module-AppModule-a53bbcdf606529889e11a6c0e2c33edb07814d93ccb9a1b598d83891db4e2c4ff475b6978414ba31dfb3cbffd30b2e2da9f77e672baa938e6cd2628c2452698f"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-a53bbcdf606529889e11a6c0e2c33edb07814d93ccb9a1b598d83891db4e2c4ff475b6978414ba31dfb3cbffd30b2e2da9f77e672baa938e6cd2628c2452698f"' :
                                            'id="xs-controllers-links-module-AppModule-a53bbcdf606529889e11a6c0e2c33edb07814d93ccb9a1b598d83891db4e2c4ff475b6978414ba31dfb3cbffd30b2e2da9f77e672baa938e6cd2628c2452698f"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-a53bbcdf606529889e11a6c0e2c33edb07814d93ccb9a1b598d83891db4e2c4ff475b6978414ba31dfb3cbffd30b2e2da9f77e672baa938e6cd2628c2452698f"' : 'data-bs-target="#xs-injectables-links-module-AppModule-a53bbcdf606529889e11a6c0e2c33edb07814d93ccb9a1b598d83891db4e2c4ff475b6978414ba31dfb3cbffd30b2e2da9f77e672baa938e6cd2628c2452698f"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-a53bbcdf606529889e11a6c0e2c33edb07814d93ccb9a1b598d83891db4e2c4ff475b6978414ba31dfb3cbffd30b2e2da9f77e672baa938e6cd2628c2452698f"' :
                                        'id="xs-injectables-links-module-AppModule-a53bbcdf606529889e11a6c0e2c33edb07814d93ccb9a1b598d83891db4e2c4ff475b6978414ba31dfb3cbffd30b2e2da9f77e672baa938e6cd2628c2452698f"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ArtistModule.html" data-type="entity-link" >ArtistModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ArtistModule-530c17aaedaaca6419cfaee662f0f2980f22dcad70dd32c673921fbf69d894e9a8d8571175684fd0d2c0dab6db5c0f3f2c8cda26163bfad62eba93bf178cf367"' : 'data-bs-target="#xs-controllers-links-module-ArtistModule-530c17aaedaaca6419cfaee662f0f2980f22dcad70dd32c673921fbf69d894e9a8d8571175684fd0d2c0dab6db5c0f3f2c8cda26163bfad62eba93bf178cf367"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ArtistModule-530c17aaedaaca6419cfaee662f0f2980f22dcad70dd32c673921fbf69d894e9a8d8571175684fd0d2c0dab6db5c0f3f2c8cda26163bfad62eba93bf178cf367"' :
                                            'id="xs-controllers-links-module-ArtistModule-530c17aaedaaca6419cfaee662f0f2980f22dcad70dd32c673921fbf69d894e9a8d8571175684fd0d2c0dab6db5c0f3f2c8cda26163bfad62eba93bf178cf367"' }>
                                            <li class="link">
                                                <a href="controllers/ArtistController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArtistController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ArtistModule-530c17aaedaaca6419cfaee662f0f2980f22dcad70dd32c673921fbf69d894e9a8d8571175684fd0d2c0dab6db5c0f3f2c8cda26163bfad62eba93bf178cf367"' : 'data-bs-target="#xs-injectables-links-module-ArtistModule-530c17aaedaaca6419cfaee662f0f2980f22dcad70dd32c673921fbf69d894e9a8d8571175684fd0d2c0dab6db5c0f3f2c8cda26163bfad62eba93bf178cf367"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ArtistModule-530c17aaedaaca6419cfaee662f0f2980f22dcad70dd32c673921fbf69d894e9a8d8571175684fd0d2c0dab6db5c0f3f2c8cda26163bfad62eba93bf178cf367"' :
                                        'id="xs-injectables-links-module-ArtistModule-530c17aaedaaca6419cfaee662f0f2980f22dcad70dd32c673921fbf69d894e9a8d8571175684fd0d2c0dab6db5c0f3f2c8cda26163bfad62eba93bf178cf367"' }>
                                        <li class="link">
                                            <a href="injectables/ArtistService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ArtistService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/BookingModule.html" data-type="entity-link" >BookingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-BookingModule-412fd84a6bfc6160ba7bf2a2f621669785da8f17f5f4923be81ee90acc52fcf2a9e58c2cb4f04a03136bd436141f1cc985b5afd67df4a4013c35610c9d413f31"' : 'data-bs-target="#xs-controllers-links-module-BookingModule-412fd84a6bfc6160ba7bf2a2f621669785da8f17f5f4923be81ee90acc52fcf2a9e58c2cb4f04a03136bd436141f1cc985b5afd67df4a4013c35610c9d413f31"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-BookingModule-412fd84a6bfc6160ba7bf2a2f621669785da8f17f5f4923be81ee90acc52fcf2a9e58c2cb4f04a03136bd436141f1cc985b5afd67df4a4013c35610c9d413f31"' :
                                            'id="xs-controllers-links-module-BookingModule-412fd84a6bfc6160ba7bf2a2f621669785da8f17f5f4923be81ee90acc52fcf2a9e58c2cb4f04a03136bd436141f1cc985b5afd67df4a4013c35610c9d413f31"' }>
                                            <li class="link">
                                                <a href="controllers/BookingController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-BookingModule-412fd84a6bfc6160ba7bf2a2f621669785da8f17f5f4923be81ee90acc52fcf2a9e58c2cb4f04a03136bd436141f1cc985b5afd67df4a4013c35610c9d413f31"' : 'data-bs-target="#xs-injectables-links-module-BookingModule-412fd84a6bfc6160ba7bf2a2f621669785da8f17f5f4923be81ee90acc52fcf2a9e58c2cb4f04a03136bd436141f1cc985b5afd67df4a4013c35610c9d413f31"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-BookingModule-412fd84a6bfc6160ba7bf2a2f621669785da8f17f5f4923be81ee90acc52fcf2a9e58c2cb4f04a03136bd436141f1cc985b5afd67df4a4013c35610c9d413f31"' :
                                        'id="xs-injectables-links-module-BookingModule-412fd84a6bfc6160ba7bf2a2f621669785da8f17f5f4923be81ee90acc52fcf2a9e58c2cb4f04a03136bd436141f1cc985b5afd67df4a4013c35610c9d413f31"' }>
                                        <li class="link">
                                            <a href="injectables/BookingService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BookingService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EventsModule.html" data-type="entity-link" >EventsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-EventsModule-287f5bbc361f5b148988cb16c65e57cf85d24470d2b64c500a7778d9f80582f0462a8bca38693e407fd3d8fe879dac85c7eebde74501f356990435e393b676bd"' : 'data-bs-target="#xs-controllers-links-module-EventsModule-287f5bbc361f5b148988cb16c65e57cf85d24470d2b64c500a7778d9f80582f0462a8bca38693e407fd3d8fe879dac85c7eebde74501f356990435e393b676bd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-EventsModule-287f5bbc361f5b148988cb16c65e57cf85d24470d2b64c500a7778d9f80582f0462a8bca38693e407fd3d8fe879dac85c7eebde74501f356990435e393b676bd"' :
                                            'id="xs-controllers-links-module-EventsModule-287f5bbc361f5b148988cb16c65e57cf85d24470d2b64c500a7778d9f80582f0462a8bca38693e407fd3d8fe879dac85c7eebde74501f356990435e393b676bd"' }>
                                            <li class="link">
                                                <a href="controllers/EventsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-EventsModule-287f5bbc361f5b148988cb16c65e57cf85d24470d2b64c500a7778d9f80582f0462a8bca38693e407fd3d8fe879dac85c7eebde74501f356990435e393b676bd"' : 'data-bs-target="#xs-injectables-links-module-EventsModule-287f5bbc361f5b148988cb16c65e57cf85d24470d2b64c500a7778d9f80582f0462a8bca38693e407fd3d8fe879dac85c7eebde74501f356990435e393b676bd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-EventsModule-287f5bbc361f5b148988cb16c65e57cf85d24470d2b64c500a7778d9f80582f0462a8bca38693e407fd3d8fe879dac85c7eebde74501f356990435e393b676bd"' :
                                        'id="xs-injectables-links-module-EventsModule-287f5bbc361f5b148988cb16c65e57cf85d24470d2b64c500a7778d9f80582f0462a8bca38693e407fd3d8fe879dac85c7eebde74501f356990435e393b676bd"' }>
                                        <li class="link">
                                            <a href="injectables/EventsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EventsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-177eef4f47dc5786773d38dc27c065ec5a9171b9371dbf2a243ed3c499f4ee42d7ef9fed6bc9a28356500696206702b4edf1a8335738e9b24e3e35193254552e"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-177eef4f47dc5786773d38dc27c065ec5a9171b9371dbf2a243ed3c499f4ee42d7ef9fed6bc9a28356500696206702b4edf1a8335738e9b24e3e35193254552e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-177eef4f47dc5786773d38dc27c065ec5a9171b9371dbf2a243ed3c499f4ee42d7ef9fed6bc9a28356500696206702b4edf1a8335738e9b24e3e35193254552e"' :
                                            'id="xs-controllers-links-module-UsersModule-177eef4f47dc5786773d38dc27c065ec5a9171b9371dbf2a243ed3c499f4ee42d7ef9fed6bc9a28356500696206702b4edf1a8335738e9b24e3e35193254552e"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-177eef4f47dc5786773d38dc27c065ec5a9171b9371dbf2a243ed3c499f4ee42d7ef9fed6bc9a28356500696206702b4edf1a8335738e9b24e3e35193254552e"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-177eef4f47dc5786773d38dc27c065ec5a9171b9371dbf2a243ed3c499f4ee42d7ef9fed6bc9a28356500696206702b4edf1a8335738e9b24e3e35193254552e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-177eef4f47dc5786773d38dc27c065ec5a9171b9371dbf2a243ed3c499f4ee42d7ef9fed6bc9a28356500696206702b4edf1a8335738e9b24e3e35193254552e"' :
                                        'id="xs-injectables-links-module-UsersModule-177eef4f47dc5786773d38dc27c065ec5a9171b9371dbf2a243ed3c499f4ee42d7ef9fed6bc9a28356500696206702b4edf1a8335738e9b24e3e35193254552e"' }>
                                        <li class="link">
                                            <a href="injectables/BcryptProvider.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BcryptProvider</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Artist.html" data-type="entity-link" >Artist</a>
                            </li>
                            <li class="link">
                                <a href="classes/Booking.html" data-type="entity-link" >Booking</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateArtistDto.html" data-type="entity-link" >CreateArtistDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateBookingDto.html" data-type="entity-link" >CreateBookingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateEventDto.html" data-type="entity-link" >CreateEventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Event.html" data-type="entity-link" >Event</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RefreshTokenDto.html" data-type="entity-link" >RefreshTokenDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/ToNumberPipe.html" data-type="entity-link" >ToNumberPipe</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateArtistDto.html" data-type="entity-link" >UpdateArtistDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateBookingDto.html" data-type="entity-link" >UpdateBookingDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateEventDto.html" data-type="entity-link" >UpdateEventDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GenerateTokenProvider.html" data-type="entity-link" >GenerateTokenProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HashingProvider.html" data-type="entity-link" >HashingProvider</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RefreshTokenProvider.html" data-type="entity-link" >RefreshTokenProvider</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AccessTokenGuard.html" data-type="entity-link" >AccessTokenGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});