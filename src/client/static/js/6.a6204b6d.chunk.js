(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[6],{493:function(n,e,t){"use strict";var a=t(0);e.a=function(){Object(a.useLayoutEffect)((function(){window.scrollTo(0,0)}),[])}},494:function(n,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"d",(function(){return c})),t.d(e,"b",(function(){return p})),t.d(e,"c",(function(){return u}));var a=t(7),i=t(44);function r(){var n=Object(a.a)(["\n  query AuthUrl {\n    authUrl\n  }\n"]);return r=function(){return n},n}var o=Object(i.b)(r());function l(){var n=Object(a.a)(["\n  query User($id: ID!, $bookingsPage: Int!, $listingsPage: Int!, $limit: Int!) {\n    user(id: $id) {\n      id\n      name\n      avatar\n      contact\n      hasWallet\n      income\n      bookings(limit: $limit, page: $bookingsPage) {\n        total\n        result {\n          id\n          listing {\n            id\n            title\n            image {\n              url\n            }\n            address\n            price\n          }\n          checkIn\n          checkOut\n        }\n      }\n      listings(limit: $limit, page: $listingsPage) {\n        total\n        result {\n          id\n          title\n          image {\n            url\n          }\n          address\n          price\n        }\n      }\n    }\n  }\n"]);return l=function(){return n},n}var c=Object(i.b)(l());function d(){var n=Object(a.a)(["\n  query Listing($id: ID!, $bookingsPage: Int!, $limit: Int!) {\n    listing(id: $id) {\n      id\n      title\n      description\n      image {\n        url\n      }\n      host {\n        id\n        name\n        avatar\n        hasWallet\n      }\n      address\n      city\n      admin\n      country\n      location {\n        lat\n        lng\n      }\n      bookings(limit: $limit, page: $bookingsPage) {\n        total\n        result {\n          id\n          tenant {\n            id\n            name\n            avatar\n          }\n          checkIn\n          checkOut\n        }\n      }\n      bookingsIndex\n      price\n      guests\n      wifi\n      airCon\n      pool\n      parking\n    }\n  }\n"]);return d=function(){return n},n}var p=Object(i.b)(d());function s(){var n=Object(a.a)(["\n  query Listings(\n    $location: String\n    $filter: ListingsFilter!\n    $limit: Int!\n    $page: Int!\n  ) {\n    listings(location: $location, filter: $filter, limit: $limit, page: $page) {\n      region\n      location {\n        lat\n        lng\n      }\n      total\n      result {\n        id\n        title\n        image {\n          url\n        }\n        address\n        admin\n        country\n        location {\n          lat\n          lng\n        }\n        price\n      }\n    }\n  }\n"]);return s=function(){return n},n}var u=Object(i.b)(s())},525:function(n,e,t){n.exports=t.p+"static/media/sydney.131f0b28.jpg"},526:function(n,e,t){n.exports=t.p+"static/media/sanfrancisco.67e0ee21.jpg"},630:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(86),o=t(493),l=(t(279),t(196)),c=t(26),d=t(45),p=t(7),s=t(8);function u(){var n=Object(p.a)(["\n  margin-top: 20px;\n  margin-bottom: 40px;\n"]);return u=function(){return n},n}function g(){var n=Object(p.a)(["\n  margin-top: 20px;\n"]);return g=function(){return n},n}function m(){var n=Object(p.a)(["\n  padding: 40px 0;\n  text-align: center;\n  margin: 0 auto;\n"]);return m=function(){return n},n}var x=s.d.div(m()),h=s.d.div(g()),f=s.d.div(u()),b=l.a.Paragraph,v=function(){return i.a.createElement(x,null,i.a.createElement(d.f,{content:"Your guide for all things rental",as:"h1"}),i.a.createElement(h,null,i.a.createElement(b,null,"Helping you make the best decisions in renting your last minute locations.")),i.a.createElement(f,null,i.a.createElement(c.b,{to:"/listings/united%20states"},"Popular Listings in the United States")))},y=t(5);function w(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 20px;\n\n  &:last-child {\n    margin-bottom: 5px;\n  }\n\n  .quantity {\n    height: 30px;\n\n    input {\n      font-size: 15px;\n    }\n\n    button.btn svg {\n      width: 18px;\n      height: 18px;\n    }\n  }\n"]);return w=function(){return n},n}function _(){var n=Object(p.a)(["\n  width: 100%;\n\n  strong {\n    font-size: 15px;\n    font-weight: 400;\n    color: ",";\n  }\n"]);return _=function(){return n},n}function k(){var n=Object(p.a)(["\n  display: flex;\n  width: 100%;\n  align-items: center;\n  position: relative;\n\n  .target {\n    right: 10px;\n    left: auto;\n\n    @media only screen and (max-width: 480px) {\n      right: 25px;\n    }\n  }\n\n\n\n    &::after {\n      content: '';\n      width: 1px;\n      height: 20px;\n      display: inline-block;\n      position: absolute;\n      top: calc(50% - 10px);\n      right: auto;\n      left: auto;\n      background-color: ",";\n    }\n\n    @media only screen and (max-width: 991px) {\n      &::after {\n        top: auto;\n        bottom: 0;\n        height: 1px;\n        width: calc(100% - 40px);\n        left: 20px;\n      }\n    }\n\n    @media only screen and (max-width: 480px) {\n      &::after {\n        width: calc(100% - 30px);\n        left: 15px;\n      }\n    }\n\n    input {\n      border: 0;\n      font-size: 15px;\n      font-weight: 400;\n      border-radius: 0;\n      height: 60px;\n      padding: 0 30px 0 40px;\n      background: transparent;\n      color: ",";\n\n      @media only screen and (max-width: 480px) {\n        height: 47px;\n        padding: 0 30px 0 36px;\n      }\n\n      &:hover,\n      &:focus {\n        outline: none;\n        box-shadow: none;\n      }\n\n      &::placeholder {\n        color: ",";\n      }\n    }\n  }\n\n  /* date picker style */\n  .date_picker {\n    min-width: calc(250px - 14px);\n    width: calc(100% - 14px);\n    margin: 0 0 0 14px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    @media only screen and (max-width: 991px) {\n      justify-content: flex-start;\n      height: 60px;\n    }\n\n    @media only screen and (max-width: 480px) {\n      height: 47px;\n    }\n\n    .DayPicker__withBorder {\n      box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);\n    }\n\n    .DateRangePicker {\n      display: block;\n      width: 100%;\n\n      .DateRangePickerInput {\n        border: 0;\n        padding-right: 0;\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n        background: transparent;\n\n        .DateRangePickerInput_clearDates,\n        .DateRangePickerInput_clearDates {\n          &.DateRangePickerInput_clearDates__small {\n            display: none;\n          }\n        }\n\n        .DateInput {\n          width: 100%;\n          padding: 0 15px 0 30px;\n          background: transparent;\n\n          @media only screen and (min-width: 569px) and (max-width: 991px) {\n            padding: 0 25px 0 30px;\n          }\n\n          @media only screen and (max-width: 568px) {\n            padding: 0 15px 0 25px;\n          }\n\n          .DateInput_fang {\n            display: none;\n          }\n\n          .DateInput_input {\n            padding: 0;\n            font-weight: 400;\n            color: ",";\n            background: transparent;\n\n            &.DateInput_input__focused {\n              border-color: transparent;\n            }\n\n            &::placeholder {\n              color: ",";\n            }\n          }\n        }\n\n        .DateRangePickerInput_arrow {\n          & + .DateInput {\n            input {\n              text-align: right;\n            }\n          }\n        }\n      }\n\n      .DateRangePicker_picker {\n        margin-top: -12px;\n        z-index: 2;\n\n        @media only screen and (max-width: 991px) {\n          top: 47px !important;\n        }\n\n        @media only screen and (max-width: 320px) {\n          left: -29px !important;\n          .DayPicker,\n          .DayPicker > div > div,\n          .DayPicker > div > div .DayPicker_transitionContainer {\n            width: 294px !important;\n          }\n\n          .DayPicker {\n            .DayPicker_weekHeader {\n              padding: 0 !important;\n            }\n\n            .CalendarMonth {\n              padding: 0 !important;\n            }\n          }\n        }\n      }\n    }\n  }\n\n  /* view with popup component style */\n  .view_with__popup {\n    max-width: 100%;\n    position: relative;\n\n    &::before {\n      content: '';\n      width: 1px;\n      height: 20px;\n      display: inline-block;\n      position: absolute;\n      top: calc(50% - 10px);\n      right: auto;\n      left: 0;\n      z-index: 1;\n      background-color: ",";\n\n      @media only screen and (max-width: 991px) {\n        top: 0;\n        bottom: auto;\n        height: 1px;\n        width: calc(100% - 40px);\n        left: 20px;\n      }\n\n      @media only screen and (max-width: 480px) {\n        width: calc(100% - 30px);\n        left: 15px;\n      }\n    }\n\n    /* popu handler style */\n    .popup_handler {\n      width: calc(100% - 14px);\n      margin-left: 14px;\n\n      button.ant-btn {\n        min-width: auto;\n        width: 100%;\n        height: 60px;\n        border: 0;\n        padding: 0 30px;\n        border-radius: 0;\n        box-shadow: none;\n        font-weight: 400;\n        font-size: 15px;\n        color: ",";\n        background-color: ",";\n\n        @media only screen and (max-width: 991px) {\n          text-align: left;\n          padding: 0 25px 0 30px;\n        }\n\n        @media only screen and (max-width: 480px) {\n          height: 47px;\n          padding: 0 20px 0 25px;\n        }\n\n        &::after {\n          display: none;\n        }\n      }\n    }\n\n    &.room_guest {\n      .popup_handler {\n        button.ant-btn {\n          display: flex;\n          align-items: center;\n          justify-content: space-between;\n        }\n      }\n    }\n\n    &.active {\n      .popup_container {\n        margin-top: 0;\n        padding: 22px;\n        box-shadow: 0 15px 46px -10px rgba(26, 26, 29, 0.3);\n\n        @media only screen and (max-width: 991px) {\n          margin-top: 0;\n        }\n\n        @media only screen and (max-width: 480px) {\n          min-width: auto;\n        }\n      }\n    }\n  }\n\n  /* icon style */\n  > svg {\n    position: absolute;\n    z-index: 1;\n    top: auto;\n    &.map-marker,\n    &.calendar,\n    &.user-friends {\n      left: 15px;\n      right: auto;\n      fill: ",";\n    }\n\n    &.calendar {\n      @media only screen and (max-width: 480px) {\n        width: 14px;\n        height: 14px;\n      }\n    }\n\n    &.user-friends {\n      width: 17px;\n      height: 17px;\n      @media only screen and (max-width: 480px) {\n        width: 16px;\n        height: 16px;\n      }\n    }\n\n    &.caret-down {\n      right: 12px;\n      left: auto;\n      fill: ",";\n\n      @media only screen and (max-width: 991px) {\n        right: 20px;\n      }\n\n      @media only screen and (max-width: 991px) {\n        right: 15px;\n      }\n    }\n  }\n"]);return k=function(){return n},n}function j(){var n=Object(p.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  background-color: ",";\n  border-radius: 3px 0 0 3px;\n  min-height: 60px;\n\n  @media only screen and (max-width: 991px) {\n    flex-direction: column;\n  }\n\n  @media only screen and (max-width: 480px) {\n    margin-top: 10px;\n  }\n\n  /* submit button style */\n  button[type='submit'].ant-btn {\n    min-width: 157px;\n    height: 60px;\n    color: ",";\n    background-color: ",";\n    border-radius: 0 3px 3px 0;\n    border: 0;\n    box-shadow: none;\n    font-size: 15px;\n    font-weight: 700;\n    text-shadow: none;\n\n    @media only screen and (max-width: 991px) {\n      min-width: 100%;\n      border-radius: 0 0 3px 3px;\n    }\n\n    @media only screen and (max-width: 480px) {\n      height: 47px;\n    }\n\n    &::after {\n      display: none;\n    }\n\n    &:hover {\n      opacity: 0.85;\n    }\n  }\n"]);return j=function(){return n},n}function E(){var n=Object(p.a)(["\n  width: calc(100% - 60px);\n  padding: 28px 30px 30px;\n  border-radius: 6px;\n  background-color: ",";\n  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.08);\n  position: absolute;\n  bottom: 81px;\n  z-index: 1;\n\n  @media only screen and (min-width: 569px) and (max-width: 991px) {\n    width: 414px;\n    left: 30px;\n  }\n\n  @media only screen and (max-width: 480px) {\n    width: calc(100% - 30px);\n    padding: 15px;\n    left: 15px;\n\n    > p {\n      margin: 15px 0;\n    }\n  }\n\n  > div {\n    @media only screen and (min-width: 481px) {\n      margin-top: 30px;\n    }\n  }\n\n  h2 {\n    margin-bottom: 10px;\n  }\n"]);return E=function(){return n},n}function O(){var n=Object(p.a)(["\n  width: 100%;\n  min-height: 100vh;\n  position: relative;\n  background-image: url('https://res.cloudinary.com/dj7nklpkt/image/upload/v1586447066/StockSnap_Q7X4EG7IE2_1_wemkni.jpg');\n  background-size: cover;\n  background-position: center center;\n\n  @media only screen and (max-width: 991px) {\n    > div {\n      max-width: 100%;\n    }\n  }\n\n  .glide,\n  .glide__track,\n  .glide__slides {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    pointer-events: all;\n  }\n\n  .glide__slide {\n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n\n  .glide__bullets {\n    position: absolute;\n    bottom: 30px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1;\n  }\n\n  .glide__bullet {\n    width: 7px;\n    height: 7px;\n    background-color: ",";\n    transition: width 0.3s ease;\n  }\n\n  .glide__bullet--active {\n    width: 25px;\n    border-radius: 8px;\n    background-color: ",";\n  }\n\n  > div {\n    position: relative;\n    min-height: 100vh;\n  }\n\n  &:after {\n    display: block;\n    content: '';\n    width: 100%;\n    height: 60%;\n    position: absolute;\n    bottom: 0;\n    background: linear-gradient(transparent, rgba(0, 0, 0, 0.5));\n    pointer-events: none;\n    z-index: 0;\n  }\n"]);return O=function(){return n},n}var I=s.d.div(O(),Object(y.a)("color.1","#ffffff"),Object(y.a)("color.1","#ffffff")),P=s.d.div(E(),Object(y.a)("color.1","#ffffff")),D=(s.d.div(j(),Object(y.a)("color.2","#F7F7F7"),Object(y.a)("color.1","#ffffff"),Object(y.a)("primary.0","#008489")),s.d.div(k(),Object(y.a)("border.3","#E6E6E6"),Object(y.a)("text.0","#2C2C2C"),Object(y.a)("text.0","#2C2C2C"),Object(y.a)("text.0","#2C2C2C"),Object(y.a)("text.0","#2C2C2C"),Object(y.a)("border.3","#E6E6E6"),Object(y.a)("text.0","#2C2C2C"),Object(y.a)("color.2","#F7F7F7"),Object(y.a)("primary.0","#008489"),Object(y.a)("text.1","#909090")),s.d.div(_(),Object(y.a)("text.0","#2C2C2C")),s.d.div(w()),I),$=t(68),C=l.a.Title,N=function(){return i.a.createElement(D,null,i.a.createElement(d.c,null,i.a.createElement(P,null,i.a.createElement(C,{level:2},"An ideal world. If only for a night."),i.a.createElement(l.a.Paragraph,{strong:!0},"A cool urban vibe. A luxurious retreat. Whatever your travel style, our platform of hotels all over the world covers the globe and spans the possibilities."),i.a.createElement($.f,null))))},S=t(199),z=t(81),F=t(523);t(524);function L(){var n=Object(p.a)(["\n  cursor: pointer;\n  margin: 10px 3px;\n"]);return L=function(){return n},n}function R(){var n=Object(p.a)(["\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  margin: 4px;\n  border: 0;\n  padding: 0;\n  outline: none;\n  border-radius: 50%;\n  background-color: #d6d6d6;\n\n  &:hover,\n  &.glide__bullet--active {\n    background-color: #869791;\n  }\n"]);return R=function(){return n},n}function B(){var n=Object(p.a)([""]);return B=function(){return n},n}function A(){var n=Object(p.a)([""]);return A=function(){return n},n}function V(){var n=Object(p.a)(["\n  display: inline-block;\n"]);return V=function(){return n},n}function q(){var n=Object(p.a)(["\n  position: relative;\n"]);return q=function(){return n},n}function T(){var n=Object(p.a)(["\n  .glide__slides {\n    margin-bottom: 0;\n  }\n  .glide__controls {\n    .glide__prev--area,\n    .glide__next--area {\n      cursor: pointer;\n    }\n  }\n"]);return T=function(){return n},n}var U=s.d.div(T()),W=s.d.li(q()),H=s.d.div(V()),G=s.d.div(A()),J=s.d.div(B()),Q=s.d.button(R()),Y=s.d.button(L()),M=U,X=function(n){var e=n.className,t=n.children,r=n.options,o=n.controls,l=n.prevButton,c=n.nextButton,d=n.bullets,p=n.numberOfBullets,s=n.carouselSelector,u=["glide"];e&&u.push(e);for(var g=[],m=0;m<p;m++)g.push(m);return Object(a.useEffect)((function(){new F.a(s?"#".concat(s):"#glide",Object(z.a)({},r)).mount()}),[s,r]),i.a.createElement(M,{className:u.join(" "),id:s||"glide"},i.a.createElement("div",{className:"glide__track","data-glide-el":"track"},i.a.createElement("ul",{className:"glide__slides"},t)),o&&i.a.createElement(G,{className:"glide__controls","data-glide-el":"controls"},i.a.createElement(H,{className:"glide__prev--area","data-glide-dir":"<"},l||i.a.createElement(Y,null,"Prev")),i.a.createElement(H,{className:"glide__next--area","data-glide-dir":">"},c||i.a.createElement(Y,null,"Next"))),d&&i.a.createElement(J,{className:"glide__bullets","data-glide-el":"controls[nav]"},i.a.createElement(a.Fragment,null,g.map((function(n){return i.a.createElement(Q,{key:n,className:"glide__bullet","data-glide-dir":"=".concat(n)})})))))},K=function(n){var e=n.children;return i.a.createElement(W,{className:"glide__slide"},e)};X.defaultProps={controls:!0};var Z=X;function nn(){var n=Object(p.a)(["\n  .glide__slide {\n    transition: transform 0.3s ease;\n\n    .image_card {\n      > a {\n        @media only screen and (max-width: 1600px) {\n          height: 310px;\n        }\n        @media only screen and (max-width: 991px) {\n          height: 280px;\n        }\n      }\n    }\n  }\n\n  .glide__controls {\n    margin: 0;\n    padding: 0;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.3s ease;\n    @media only screen and (max-width: 480px) {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n\n  .glide__prev--area,\n  .glide__next--area {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    background-color: ",";\n    box-shadow: 0 3px 6px ",";\n    transition: background-color 0.2s ease;\n    position: absolute;\n    top: calc(50% - 36px / 2);\n\n    svg {\n      height: 22px;\n      width: auto;\n      fill: ",";\n    }\n\n    &:hover {\n      background-color: ",";\n      svg {\n        fill: ",";\n      }\n    }\n  }\n\n  .glide__prev--area {\n    left: -18px;\n  }\n\n  .glide__next--area {\n    right: -18px;\n  }\n\n  &:hover {\n    .glide__controls {\n      opacity: 1;\n      visibility: visible;\n    }\n  }\n"]);return nn=function(){return n},n}function en(){var n=Object(p.a)(["\n  padding: 52px 0;\n  @media only screen and (max-width: 480px) {\n    padding: 30px 0;\n  }\n"]);return en=function(){return n},n}var tn=s.d.div(en()),an=s.d.div(nn(),Object(y.a)("color.1","#ffffff"),Object(y.a)("boxShadow.1","rgba(0, 0, 0, 0.16)"),Object(y.a)("primary.0","#008489"),Object(y.a)("primary.0","#008489"),Object(y.a)("color.1","#ffffff")),rn=tn,on={type:"carousel",perView:5,gap:30,hoverpause:!0,breakpoints:{1440:{perView:5,gap:20},1200:{perView:4},991:{perView:3,gap:15},667:{perView:2,gap:20},480:{perView:1,gap:0}}},ln=[{city:"London",locationImage:"https://res.cloudinary.com/dj7nklpkt/image/upload/v1586449566/big-ben-bridge-castle-city-460672_1_plx2mu.jpg"},{city:"New York",locationImage:"https://res.cloudinary.com/dj7nklpkt/image/upload/v1586448981/StockSnap_FW49S4BL9O_1_xhdxyh.jpg"},{city:"Toronto",locationImage:"https://res.cloudinary.com/dj7nklpkt/image/upload/v1586449428/toronto-cityscape-935474_1_n4rckt.jpg"},{city:"Los Angeles",locationImage:"https://res.cloudinary.com/dj7nklpkt/image/upload/v1586449334/red-car-on-the-road-1688186_1_dts1vf.jpg"},{city:"Sydney",locationImage:"https://res.cloudinary.com/dj7nklpkt/image/upload/v1586449148/StockSnap_4AQEUP2PRE_1_jn2nve.jpg"},{city:"San Francisco",locationImage:"https://res.cloudinary.com/dj7nklpkt/image/upload/v1586449451/america-architecture-bay-boat-208745_1_w7v0lz.jpg"},{city:"Berlin",locationImage:"https://res.cloudinary.com/dj7nklpkt/image/upload/v1586449564/concrete-structure-2570063_1_lplvx9.jpg"}],cn=function(){return i.a.createElement(rn,null,i.a.createElement(d.c,{fluid:!0},i.a.createElement(d.f,{content:"Explore Destinations",mb:3,as:"h2"}),i.a.createElement(an,null,i.a.createElement(Z,{carouselSelector:"explore_carousel",prevButton:i.a.createElement(S.b,null),nextButton:i.a.createElement(S.c,null),options:on},i.a.createElement(i.a.Fragment,null,ln.map((function(n,e){return i.a.createElement(K,{key:e},i.a.createElement(d.i,{link:"/listings/".concat(n.city),imageSrc:n.locationImage,title:n.city}))})))))))},dn=(t(280),t(164)),pn=function(n){var e=n.loading,t=n.listings;return e?i.a.createElement("h1",null,"Loading..."):i.a.createElement(d.c,{fluid:!0},i.a.createElement(d.f,{content:"Premium Listings",as:"h2"}),i.a.createElement(dn.a,{grid:{gutter:8,xs:1,sm:2,lg:4},dataSource:t,locale:{emptyText:"No Listings available"},renderItem:function(n){return i.a.createElement(dn.a.Item,null,i.a.createElement(d.o,{listing:n}))}}))},sn=(t(282),t(95)),un=(t(283),t(55));function gn(){var n=Object(p.a)(["\n  .home__listings-img-cover {\n    width: 100%;\n    cursor: pointer;\n  }\n  @media (max-width: 36em) {\n    .home__listings-img-cover {\n      padding: 10px 0;\n    }\n  }\n  .home__listings-img {\n    width: 100%;\n  }\n\n  .homePictures__heading {\n    margin-top: 30px;\n    margin-bottom: 10px;\n  }\n"]);return gn=function(){return n},n}var mn=s.d.div(gn()),xn=t(525),hn=t.n(xn),fn=t(526),bn=t.n(fn),vn=function(){return i.a.createElement(mn,null,i.a.createElement(d.c,{fluid:!0},i.a.createElement(d.f,{content:"Listings of any kind",as:"h2",className:"homePictures__heading"}),i.a.createElement(sn.a,{gutter:12},i.a.createElement(un.a,{xs:24,sm:12},i.a.createElement("div",{className:"home__listings-img-cover"},i.a.createElement(c.b,{to:"/listings/San%20Francisco"},i.a.createElement("img",{src:bn.a,alt:"",className:"home__listings-img"})))),i.a.createElement(un.a,{xs:24,sm:12},i.a.createElement("div",{className:"home__listings-img-cover"},i.a.createElement(c.b,{to:"/listings/Sydney"},i.a.createElement("img",{src:hn.a,alt:"",className:"home__listings-img"})))))))},yn=t(494);e.default=function(){Object(o.a)();var n=Object(r.c)(yn.c,{variables:{filter:"PRICE_HIGH_TO_LOW",limit:4,page:1}}),e=n.loading,t=n.data,a=t?t.listings.result:null;return i.a.createElement(i.a.Fragment,null,i.a.createElement(N,null),i.a.createElement(cn,null),i.a.createElement(v,null),i.a.createElement(pn,{loading:e,listings:a}),i.a.createElement(vn,null))}}}]);
//# sourceMappingURL=6.a6204b6d.chunk.js.map