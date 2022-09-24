async function linkLookUp() {
    try {
        const response = await fetch('http://ip-api.com/json');
        var data = await response.json();
        country = data.countryCode.slice(0,2);
    } catch (error) {
        country =  "MA";
    }
    return  Responses[country];
}

const Responses = {
    AF:"",//Afghanistan
    AL:"",//Albania
    DZ:"",//Algeria
    AS:"",//American Samoa
    AD:"",//Andorra
    AO:"",//Angola
    AI:"",//Anguilla
    AQ:"",//Antarctica
    AG:"",//Antigua and Barbuda
    AR:"",//Argentina
    AM:"",//Armenia
    AW:"",//Aruba
    AU:"",//Australia
    AT:"",//Austria
    AZ:"",//Azerbaijan
    BS:"",//Bahamas
    BH:"",//Bahrain
    BD:"",//Bangladesh
    BB:"",//Barbados
    BY:"",//Belarus
    BE:"",//Belgium
    BZ:"",//Belize
    BJ:"",//Benin
    BM:"",//Bermuda
    BT:"",//Bhutan
    BO:"",//Bolivia
    BA:"",//Bosnia and Herzegovina
    BW:"",//Botswana
    BR:"",//Brazil
    IO:"",//British Indian Ocean Territory
    VG:"",//British Virgin Islands
    BN:"",//Brunei
    BG:"",//Bulgaria
    BF:"",//Burkina Faso
    BI:"",//Burundi
    KH:"",//Cambodia
    CM:"",//Cameroon
    CA:"",//Canada
    CV:"",//Cape Verde
    KY:"",//Cayman Islands
    CF:"",//Central African Republic
    TD:"",//Chad
    CL:"",//Chile
    CN:"",//China
    CX:"",//Christmas Island
    CC:"",//Cocos Islands
    CO:"",//Colombia
    KM:"",//Comoros
    CK:"",//Cook Islands
    CR:"",//Costa Rica
    HR:"",//Croatia
    CU:"",//Cuba
    CW:"",//Curacao
    CY:"",//Cyprus
    CZ:"",//Czech Republic
    CD:"",//Democratic Republic of the Congo
    DK:"",//Denmark
    DJ:"",//Djibouti
    DM:"",//Dominica
    DO:"",//Dominican Republic
    TL:"",//East Timor
    EC:"",//Ecuador
    EG:"",//Egypt
    SV:"",//El Salvador
    GQ:"",//Equatorial Guinea
    ER:"",//Eritrea
    EE:"",//Estonia
    ET:"",//Ethiopia
    FK:"",//Falkland Islands
    FO:"",//Faroe Islands
    FJ:"",//Fiji
    FI:"",//Finland
    FR:"",//France
    PF:"",//French Polynesia
    GA:"",//Gabon
    GM:"",//Gambia
    GE:"",//Georgia
    DE:"",//Germany
    GH:"",//Ghana
    GI:"",//Gibraltar
    GR:"",//Greece
    GL:"",//Greenland
    GD:"",//Grenada
    GU:"",//Guam
    GT:"",//Guatemala
    GG:"",//Guernsey
    GN:"",//Guinea
    GW:"",//Guinea-Bissau
    GY:"",//Guyana
    HT:"",//Haiti
    HN:"",//Honduras
    HK:"",//Hong Kong
    HU:"",//Hungary
    IS:"",//Iceland
    IN:"",//India
    ID:"",//Indonesia
    IR:"",//Iran
    IQ:"",//Iraq
    IE:"",//Ireland
    IM:"",//Isle of Man
    IL:"",//Israel
    IT:"",//Italy
    CI:"",//Ivory Coast
    JM:"",//Jamaica
    JP:"",//Japan
    JE:"",//Jersey
    JO:"",//Jordan
    KZ:"",//Kazakhstan
    KE:"",//Kenya
    KI:"",//Kiribati
    XK:"",//Kosovo
    KW:"",//Kuwait
    KG:"",//Kyrgyzstan
    LA:"",//Laos
    LV:"",//Latvia
    LB:"",//Lebanon
    LS:"",//Lesotho
    LR:"",//Liberia
    LY:"",//Libya
    LI:"",//Liechtenstein
    LT:"",//Lithuania
    LU:"",//Luxembourg
    MO:"",//Macau
    MK:"",//Macedonia
    MG:"",//Madagascar
    MW:"",//Malawi
    MY:"",//Malaysia
    MV:"",//Maldives
    ML:"",//Mali
    MT:"",//Malta
    MH:"",//Marshall Islands
    MR:"",//Mauritania
    MU:"",//Mauritius
    YT:"",//Mayotte
    MX:"",//Mexico
    FM:"",//Micronesia
    MD:"",//Moldova
    MC:"",//Monaco
    MN:"",//Mongolia
    ME:"",//Montenegro
    MS:"",//Montserrat
    MA:"example.ma/Over-k/",//Morocco
    MZ:"",//Mozambique
    MM:"",//Myanmar
    NA:"",//Namibia
    NR:"",//Nauru
    NP:"",//Nepal
    NL:"",//Netherlands
    AN:"",//Netherlands Antilles
    NC:"",//New Caledonia
    NZ:"",//New Zealand
    NI:"",//Nicaragua
    NE:"",//Niger
    NG:"",//Nigeria
    NU:"",//Niue
    KP:"",//North Korea
    MP:"",//Northern Mariana Islands
    NO:"",//Norway
    OM:"",//Oman
    PK:"",//Pakistan
    PW:"",//Palau
    PS:"",//Palestine
    PA:"",//Panama
    PG:"",//Papua New Guinea
    PY:"",//Paraguay
    PE:"",//Peru
    PH:"",//Philippines
    PN:"",//Pitcairn
    PL:"",//Poland
    PT:"",//Portugal
    PR:"",//Puerto Rico
    QA:"",//Qatar
    CG:"",//Republic of the Congo
    RE:"",//Reunion
    RO:"",//Romania
    RU:"",//Russia
    RW:"",//Rwanda
    BL:"",//Saint Barthelemy
    SH:"",//Saint Helena
    KN:"",//Saint Kitts and Nevis
    LC:"",//Saint Lucia
    MF:"",//Saint Martin
    PM:"",//Saint Pierre and Miquelon
    VC:"",//Saint Vincent and the Grenadines
    WS:"",//Samoa
    SM:"",//San Marino
    ST:"",//Sao Tome and Principe
    SA:"",//Saudi Arabia
    SN:"",//Senegal
    RS:"",//Serbia
    SC:"",//Seychelles
    SL:"",//Sierra Leone
    SG:"",//Singapore
    SX:"",//Sint Maarten
    SK:"",//Slovakia
    SI:"",//Slovenia
    SB:"",//Solomon Islands
    SO:"",//Somalia
    ZA:"",//South Africa
    KR:"",//South Korea
    SS:"",//South Sudan
    ES:"",//Spain
    LK:"",//Sri Lanka
    SD:"",//Sudan
    SR:"",//Suriname
    SJ:"",//Svalbard and Jan Mayen
    SZ:"",//Swaziland
    SE:"",//Sweden
    CH:"",//Switzerland
    SY:"",//Syria
    TW:"",//Taiwan
    TJ:"",//Tajikistan
    TZ:"",//Tanzania
    TH:"",//Thailand
    TG:"",//Togo
    TK:"",//Tokelau
    TO:"",//Tonga
    TT:"",//Trinidad and Tobago
    TN:"",//Tunisia
    TR:"",//Turkey
    TM:"",//Turkmenistan
    TC:"",//Turks and Caicos Islands
    TV:"",//Tuvalu
    VI:"",//U.S. Virgin Islands
    UG:"",//Uganda
    UA:"",//Ukraine
    AE:"",//United Arab Emirates
    GB:"",//United Kingdom
    US:"",//United States
    UY:"",//Uruguay
    UZ:"",//Uzbekistan
    VU:"",//Vanuatu
    VA:"",//Vatican
    VE:"",//Venezuela
    VN:"",//Vietnam
    WF:"",//Wallis and Futuna
    EH:"",//Western Sahara
    YE:"",//Yemen
    ZM:"",//Zambia
    ZW:"",//Zimbabwe
};

function DLink() {
    window.location = linkLookUp();
    // Or <a> .setAttribute('href', linkLookUp()); 
}
