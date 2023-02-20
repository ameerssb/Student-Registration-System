 
var ngst = [
{"ID": "Abuja", "Name": "Abuja"},
{"ID": "Abia", "Name": "Abia"},
{"ID": "Adamawa", "Name": "Adamawa"},
{"ID": "Anambra", "Name": "Anambra"},
{"ID": "Akwa Ibom", "Name": "Akwa Ibom"},
{"ID": "Bauchi", "Name": "Bauchi"},
{"ID": "Bayelsa", "Name": "Bayelsa"},
{"ID": "Benue", "Name": "Benue"},
{"ID": "Borno", "Name": "Borno"},
{"ID": "Cross River", "Name": "Cross River"},
{"ID": "Delta", "Name": "Delta"},
{"ID": "Ebonyi", "Name": "Ebonyi"},
{"ID": "Edo", "Name": "Edo"},
{"ID": "Ekiti", "Name": "Ekiti"},
{"ID": "Enugu", "Name": "Enugu"},
{"ID": "Gombe", "Name": "Gombe"},
{"ID": "Imo", "Name": "Imo"},
{"ID": "Jigawa", "Name": "Jigawa"},
{"ID": "Kaduna", "Name": "Kaduna"},
{"ID": "Kano", "Name": "Kano"},
{"ID": "Katsina", "Name": "Katsina"},
{"ID": "kebbi", "Name": "Kebbi"},
{"ID": "Kogi", "Name": "Kogi"},
{"ID": "Kwara", "Name": "Kwara"},
{"ID": "Lagos", "Name": "Lagos"},
{"ID": "Nassarawa", "Name": "Nassarawa"},
{"ID": "Niger", "Name": "Niger"},
{"ID": "Ogun", "Name": "Ogun"},
{"ID": "Ondo", "Name": "Ondo"},
{"ID": "Osun", "Name": "Osun"},
{"ID": "Oyo", "Name": "Oyo"},
{"ID": "Plateau", "Name": "Plateau"},
{"ID": "Rivers", "Name": "Rivers"},
{"ID": "Sokoto", "Name": "Sokoto"},
{"ID": "Taraba", "Name": "Taraba"},
{"ID": "Yobe", "Name": "Yobe"},
{"ID": "Zamfara", "Name": "Zamfara"},
];
var parts = 
  {
    "Abia": [
      "Aba North",
      "Aba South",
      "Arochukwu",
      "Bende",
      "Ikwuano",
      "Isiala-Ngwa North",
      "Isiala-Ngwa South",
      "Isuikwato",
      "Obi Nwa",
      "Ohafia",
      "Osisioma",
      "Ngwa",
      "Ugwunagbo",
      "Ukwa East",
      "Ukwa West",
      "Umuahia North",
      "Umuahia South",
      "Umu-Neochi"
    ],
    "Adamawa": [
      "Demsa",
      "Fufore",
      "Ganaye",
      "Gireri",
      "Gombi",
      "Guyuk",
      "Hong",
      "Jada",
      "Lamurde",
      "Madagali",
      "Maiha",
      "Mayo-Belwa",
      "Michika",
      "Mubi North",
      "Mubi South",
      "Numan",
      "Shelleng",
      "Song",
      "Toungo",
      "Yola North",
      "Yola South"
    ],
    "Anambra": [
      "Aguata",
      "Anambra East",
      "Anambra West",
      "Anaocha",
      "Awka North",
      "Awka South",
      "Ayamelum",
      "Dunukofia",
      "Ekwusigo",
      "Idemili North",
      "Idemili south",
      "Ihiala",
      "Njikoka",
      "Nnewi North",
      "Nnewi South",
      "Ogbaru",
      "Onitsha North",
      "Onitsha South",
      "Orumba North",
      "Orumba South",
      "Oyi"
    ],
    "Akwa Ibom": [
      "Abak",
      "Eastern Obolo",
      "Eket",
      "Esit Eket",
      "Essien Udim",
      "Etim Ekpo",
      "Etinan",
      "Ibeno",
      "Ibesikpo Asutan",
      "Ibiono Ibom",
      "Ika",
      "Ikono",
      "Ikot Abasi",
      "Ikot Ekpene",
      "Ini",
      "Itu",
      "Mbo",
      "Mkpat Enin",
      "Nsit Atai",
      "Nsit Ibom",
      "Nsit Ubium",
      "Obot Akara",
      "Okobo",
      "Onna",
      "Oron",
      "Oruk Anam",
      "Udung Uko",
      "Ukanafun",
      "Uruan",
      "Urue-Offong/Oruko ",
      "Uyo"
    ],
    "Bauchi": [
      "Alkaleri",
      "Bauchi",
      "Bogoro",
      "Damban",
      "Darazo",
      "Dass",
      "Ganjuwa",
      "Giade",
      "Itas/Gadau",
      "Jama'are",
      "Katagum",
      "Kirfi",
      "Misau",
      "Ningi",
      "Shira",
      "Tafawa-Balewa",
      "Toro",
      "Warji",
      "Zaki"
    ],
    "Bayelsa": [
      "Brass",
      "Ekeremor",
      "Kolokuma/Opokuma",
      "Nembe",
      "Ogbia",
      "Sagbama",
      "Southern Jaw",
      "Yenegoa"
    ],
    "Benue": [
      "Ado",
      "Agatu",
      "Apa",
      "Buruku",
      "Gboko",
      "Guma",
      "Gwer East",
      "Gwer West",
      "Katsina-Ala",
      "Konshisha",
      "Kwande",
      "Logo",
      "Makurdi",
      "Obi",
      "Ogbadibo",
      "Oju",
      "Okpokwu",
      "Ohimini",
      "Oturkpo",
      "Tarka",
      "Ukum",
      "Ushongo",
      "Vandeikya"
    ],
    "Borno": [
      "Abadam",
      "Askira/Uba",
      "Bama",
      "Bayo",
      "Biu",
      "Chibok",
      "Damboa",
      "Dikwa",
      "Gubio",
      "Guzamala",
      "Gwoza",
      "Hawul",
      "Jere",
      "Kaga",
      "Kala/Balge",
      "Konduga",
      "Kukawa",
      "Kwaya Kusar",
      "Mafa",
      "Magumeri",
      "Maiduguri",
      "Marte",
      "Mobbar",
      "Monguno",
      "Ngala",
      "Nganzai",
      "Shani"
    ],
    "Cross River": [
      "Akpabuyo",
      "Odukpani",
      "Akamkpa",
      "Biase",
      "Abi",
      "Ikom",
      "Yarkur",
      "Odubra",
      "Boki",
      "Ogoja",
      "Yala",
      "Obanliku",
      "Obudu",
      "Calabar South",
      "Etung",
      "Bekwara",
      "Bakassi",
      "Calabar Municipality"
    ],
    "Delta": [
      "Oshimili",
      "Aniocha",
      "Aniocha South",
      "Ika South",
      "Ika North-East",
      "Ndokwa West",
      "Ndokwa East",
      "Isoko south",
      "Isoko North",
      "Bomadi",
      "Burutu",
      "Ughelli South",
      "Ughelli North",
      "Ethiope West",
      "Ethiope East",
      "Sapele",
      "Okpe",
      "Warri North",
      "Warri South",
      "Uvwie",
      "Udu",
      "Warri Central",
      "Ukwani",
      "Oshimili North",
      "Patani"
    ],
    "Ebonyi": [
      "Afikpo South",
      "Afikpo North",
      "Onicha",
      "Ohaozara",
      "Abakaliki",
      "Ishielu",
      "lkwo",
      "Ezza",
      "Ezza South",
      "Ohaukwu",
      "Ebonyi",
      "Ivo"
    ],
    "Enugu": [
      "Enugu South,",
      "Igbo-Eze South",
      "Enugu North",
      "Nkanu",
      "Udi Agwu",
      "Oji-River",
      "Ezeagu",
      "IgboEze North",
      "Isi-Uzo",
      "Nsukka",
      "Igbo-Ekiti",
      "Uzo-Uwani",
      "Enugu Eas",
      "Aninri",
      "Nkanu East",
      "Udenu."
    ],
    "Edo": [
      "Esan North-East",
      "Esan Central",
      "Esan West",
      "Egor",
      "Ukpoba",
      "Central",
      "Etsako Central",
      "Igueben",
      "Oredo",
      "Ovia SouthWest",
      "Ovia South-East",
      "Orhionwon",
      "Uhunmwonde",
      "Etsako East",
      "Esan South-East"
    ],
    "Ekiti": [
      "Ado",
      "Ekiti-East",
      "Ekiti-West",
      "Emure/Ise/Orun",
      "Ekiti South-West",
      "Ikare",
      "Irepodun",
      "Ijero,",
      "Ido/Osi",
      "Oye",
      "Ikole",
      "Moba",
      "Gbonyin",
      "Efon",
      "Ise/Orun",
      "Ilejemeje."
    ],
    "Abuja": [
      "Abaji",
      "AMAC",
      "Bwari",
      "Gwagwalada",
      "Kuje",
      "Kwali"
    ],
    "Gombe": [
      "Akko",
      "Balanga",
      "Billiri",
      "Dukku",
      "Kaltungo",
      "Kwami",
      "Shomgom",
      "Funakaye",
      "Gombe",
      "Nafada/Bajoga",
      "Yamaltu/Delta."
    ],
    "Imo": [
      "Aboh-Mbaise",
      "Ahiazu-Mbaise",
      "Ehime-Mbano",
      "Ezinihitte",
      "Ideato North",
      "Ideato South",
      "Ihitte/Uboma",
      "Ikeduru",
      "Isiala Mbano",
      "Isu",
      "Mbaitoli",
      "Mbaitoli",
      "Ngor-Okpala",
      "Njaba",
      "Nwangele",
      "Nkwerre",
      "Obowo",
      "Oguta",
      "Ohaji/Egbema",
      "Okigwe",
      "Orlu",
      "Orsu",
      "Oru East",
      "Oru West",
      "Owerri-Municipal",
      "Owerri North",
      "Owerri West"
    ],
    "Jigawa": [
      "Auyo",
      "Babura",
      "Birni Kudu",
      "Biriniwa",
      "Buji",
      "Dutse",
      "Gagarawa",
      "Garki",
      "Gumel",
      "Guri",
      "Gwaram",
      "Gwiwa",
      "Hadejia",
      "Jahun",
      "Kafin Hausa",
      "Kaugama Kazaure",
      "Kiri Kasamma",
      "Kiyawa",
      "Maigatari",
      "Malam Madori",
      "Miga",
      "Ringim",
      "Roni",
      "Sule-Tankarkar",
      "Taura",
      "Yankwashi"
    ],
    "Kaduna": [
      "Birni-Gwari",
      "Chikun",
      "Giwa",
      "Igabi",
      "Ikara",
      "jaba",
      "Jema'a",
      "Kachia",
      "Kaduna North",
      "Kaduna South",
      "Kagarko",
      "Kajuru",
      "Kaura",
      "Kauru",
      "Kubau",
      "Kudan",
      "Lere",
      "Makarfi",
      "Sabon-Gari",
      "Sanga",
      "Soba",
      "Zango-Kataf",
      "Zaria"
    ],
    "Kano": [
      "Ajingi",
      "Albasu",
      "Bagwai",
      "Bebeji",
      "Bichi",
      "Bunkure",
      "Dala",
      "Dambatta",
      "Dawakin Kudu",
      "Dawakin Tofa",
      "Doguwa",
      "Fagge",
      "Gabasawa",
      "Garko",
      "Garum",
      "Mallam",
      "Gaya",
      "Gezawa",
      "Gwale",
      "Gwarzo",
      "Kabo",
      "Kano Municipal",
      "Karaye",
      "Kibiya",
      "Kiru",
      "kumbotso",
      "Kunchi",
      "Kura",
      "Madobi",
      "Makoda",
      "Minjibir",
      "Nasarawa",
      "Rano",
      "Rimin Gado",
      "Rogo",
      "Shanono",
      "Sumaila",
      "Takali",
      "Tarauni",
      "Tofa",
      "Tsanyawa",
      "Tudun Wada",
      "Ungogo",
      "Warawa",
      "Wudil"
    ],
    "Katsina": [
      "Bakori",
      "Batagarawa",
      "Batsari",
      "Baure",
      "Bindawa",
      "Charanchi",
      "Dandume",
      "Danja",
      "Dan Musa",
      "Daura",
      "Dutsi",
      "Dutsin-Ma",
      "Faskari",
      "Funtua",
      "Ingawa",
      "Jibia",
      "Kafur",
      "Kaita",
      "Kankara",
      "Kankia",
      "Katsina",
      "Kurfi",
      "Kusada",
      "Mai'Adua",
      "Malumfashi",
      "Mani",
      "Mashi",
      "Matazuu",
      "Musawa",
      "Rimi",
      "Sabuwa",
      "Safana",
      "Sandamu",
      "Zango"
    ],
    "Kebbi": [
      "Aleiro",
      "Arewa-Dandi",
      "Argungu",
      "Augie",
      "Bagudo",
      "Birnin Kebbi",
      "Bunza",
      "Dandi",
      "Fakai",
      "Gwandu",
      "Jega",
      "Kalgo",
      "Koko/Besse",
      "Maiyama",
      "Ngaski",
      "Sakaba",
      "Shanga",
      "Suru",
      "Wasagu/Danko",
      "Yauri",
      "Zuru"
    ],
    "Kogi": [
      "Adavi",
      "Ajaokuta",
      "Ankpa",
      "Bassa",
      "Dekina",
      "Ibaji",
      "Idah",
      "Igalamela-Odolu",
      "Ijumu",
      "Kabba/Bunu",
      "Kogi",
      "Lokoja",
      "Mopa-Muro",
      "Ofu",
      "Ogori/Mangongo",
      "Okehi",
      "Okene",
      "Olamabolo",
      "Omala",
      "Yagba East",
      "Yagba West"
    ],
    "Kwara": [
      "Asa",
      "Baruten",
      "Edu",
      "Ekiti",
      "Ifelodun",
      "Ilorin East",
      "Ilorin West",
      "Irepodun",
      "Isin",
      "Kaiama",
      "Moro",
      "Offa",
      "Oke-Ero",
      "Oyun",
      "Pategi"
    ],
    "Lagos": [
      "Agege",
      "Ajeromi-Ifelodun",
      "Alimosho",
      "Amuwo-Odofin",
      "Apapa",
      "Badagry",
      "Epe",
      "Eti-Osa",
      "Ibeju/Lekki",
      "Ifako-Ijaye",
      "Ikeja",
      "Ikorodu",
      "Kosofe",
      "Lagos Island",
      "Lagos Mainland",
      "Mushin",
      "Ojo",
      "Oshodi-Isolo",
      "Shomolu",
      "Surulere"
    ],
    "Nasarawa": [
      "Akwanga",
      "Awe",
      "Doma",
      "Karu",
      "Keana",
      "Keffi",
      "Kokona",
      "Lafia",
      "Nasarawa",
      "Nasarawa-Eggon",
      "Obi",
      "Toto",
      "Wamba"
    ],
    "Niger": [
      "Agaie",
      "Agwara",
      "Bida",
      "Borgu",
      "Bosso",
      "Chanchaga",
      "Edati",
      "Gbako",
      "Gurara",
      "Katcha",
      "Kontagora",
      "Lapai",
      "Lavun",
      "Magama",
      "Mariga",
      "Mashegu",
      "Mokwa",
      "Muya",
      "Pailoro",
      "Rafi",
      "Rijau",
      "Shiroro",
      "Suleja",
      "Tafa",
      "Wushishi"
    ],
    "Ogun": [
      "Abeokuta North",
      "Abeokuta South",
      "Ado-Odo/Ota",
      "Egbado North",
      "Egbado South",
      "Ewekoro",
      "Ifo",
      "Ijebu East",
      "Ijebu North",
      "Ijebu North East",
      "Ijebu Ode",
      "Ikenne",
      "Imeko-Afon",
      "Ipokia",
      "Obafemi-Owode",
      "Ogun Waterside",
      "Odeda",
      "Odogbolu",
      "Remo North",
      "Shagamu"
    ],
    "Ondo": [
      "Akoko North East",
      "Akoko North West",
      "Akoko South Akure East",
      "Akoko South West",
      "Akure North",
      "Akure South",
      "Ese-Odo",
      "Idanre",
      "Ifedore",
      "Ilaje",
      "Ile-Oluji",
      "Okeigbo",
      "Irele",
      "Odigbo",
      "Okitipupa",
      "Ondo East",
      "Ondo West",
      "Ose",
      "Owo"
    ],
    "Osun": [
      "Aiyedade",
      "Aiyedire",
      "Atakumosa East",
      "Atakumosa West",
      "Boluwaduro",
      "Boripe",
      "Ede North",
      "Ede South",
      "Egbedore",
      "Ejigbo",
      "Ife Central",
      "Ife East",
      "Ife North",
      "Ife South",
      "Ifedayo",
      "Ifelodun",
      "Ila",
      "Ilesha East",
      "Ilesha West",
      "Irepodun",
      "Irewole",
      "Isokan",
      "Iwo",
      "Obokun",
      "Odo-Otin",
      "Ola-Oluwa",
      "Olorunda",
      "Oriade",
      "Orolu",
      "Osogbo"
    ],
    "Oyo": [
      "Afijio",
      "Akinyele",
      "Atiba",
      "Atigbo",
      "Egbeda",
      "Ibadan Central",
      "Ibadan North",
      "Ibadan North West",
      "Ibadan South East",
      "Ibadan South West",
      "Ibarapa Central",
      "Ibarapa East",
      "Ibarapa North",
      "Ido",
      "Irepo",
      "Iseyin",
      "Itesiwaju",
      "Iwajowa",
      "Kajola",
      "Lagelu Ogbomosho North",
      "Ogbmosho South",
      "Ogo Oluwa",
      "Olorunsogo",
      "Oluyole",
      "Ona-Ara",
      "Orelope",
      "Ori Ire",
      "Oyo East",
      "Oyo West",
      "Saki East",
      "Saki West",
      "Surulere"
    ],
    "Plateau": [
      "Barikin Ladi",
      "Bassa",
      "Bokkos",
      "Jos East",
      "Jos North",
      "Jos South",
      "Kanam",
      "Kanke",
      "Langtang North",
      "Langtang South",
      "Mangu",
      "Mikang",
      "Pankshin",
      "Qua'an Pan",
      "Riyom",
      "Shendam",
      "Wase"
    ],
    "Rivers": [
      "Abua/Odual",
      "Ahoada East",
      "Ahoada West",
      "Akuku Toru",
      "Andoni",
      "Asari-Toru",
      "Bonny",
      "Degema",
      "Emohua",
      "Eleme",
      "Etche",
      "Gokana",
      "Ikwerre",
      "Khana",
      "Obia/Akpor",
      "Ogba/Egbema/Ndoni",
      "Ogu/Bolo",
      "Okrika",
      "Omumma",
      "Opobo/Nkoro",
      "Oyigbo",
      "Port-Harcourt",
      "Tai"
    ],
    "Sokoto": [
      "Binji",
      "Bodinga",
      "Dange-shnsi",
      "Gada",
      "Goronyo",
      "Gudu",
      "Gawabawa",
      "Illela",
      "Isa",
      "Kware",
      "kebbe",
      "Rabah",
      "Sabon birni",
      "Shagari",
      "Silame",
      "Sokoto North",
      "Sokoto South",
      "Tambuwal",
      "Tqngaza",
      "Tureta",
      "Wamako",
      "Wurno",
      "Yabo"
    ],
    "Taraba": [
      "Ardo-kola",
      "Bali",
      "Donga",
      "Gashaka",
      "Cassol",
      "Ibi",
      "Jalingo",
      "Karin-Lamido",
      "Kurmi",
      "Lau",
      "Sardauna",
      "Takum",
      "Ussa",
      "Wukari",
      "Yorro",
      "Zing"
    ],
    "Yobe": [
      "Bade",
      "Bursari",
      "Damaturu",
      "Fika",
      "Fune",
      "Geidam",
      "Gujba",
      "Gulani",
      "Jakusko",
      "Karasuwa",
      "Karawa",
      "Machina",
      "Nangere",
      "Nguru Potiskum",
      "Tarmua",
      "Yunusari",
      "Yusufari"
    ],
    "Zamfara": [
      "Anka",
      "Bakura",
      "Birnin Magaji",
      "Bukkuyum",
      "Bungudu",
      "Gummi",
      "Gusau",
      "Kaura",
      "Namoda",
      "Maradun",
      "Maru",
      "Shinkafi",
      "Talata Mafara",
      "Tsafe",
      "Zurmi"
    ]
  };

var col_id_issued = document.getElementById("col_id_date_issued");
var col_id_expiry = document.getElementById("col_id_date_expiry");
var disab_type_col = document.getElementById("col_disability_type");

var file_photo_passport_clear_id = this.document.getElementById("file_photo_passport-clear_id");
var file_identification_clear_id = this.document.getElementById("file_identification-clear_id");
var file_first_certificate_clear_id = this.document.getElementById("file_first_certificate-clear_id");
var file_first_testimonial_clear_id = this.document.getElementById("file_first_testimonial-clear_id");
var file_second_certificate_clear_id = this.document.getElementById("file_second_certificate-clear_id");
var file_second_testimonial_clear_id = this.document.getElementById("file_second_testimonial-clear_id");
var file_awaiting_exam_slip_clear_id = this.document.getElementById("file_awaiting_exam_slip-clear_id");
var file_scratch_card_clear_id = this.document.getElementById("file_scratch_card-clear_id");

clear_list = [file_photo_passport_clear_id,file_identification_clear_id,file_first_certificate_clear_id,
              file_first_testimonial_clear_id,file_second_certificate_clear_id,file_second_testimonial_clear_id,
              file_awaiting_exam_slip_clear_id,file_scratch_card_clear_id]

//program
var session = this.document.getElementById("id_session");
var type = document.getElementById("id_p_type");
var faculty = document.getElementById("id_faculty");
var course = document.getElementById("id_course");
var p_subject1 = document.getElementById("id_p_subject1");
var p_subject2 = document.getElementById("id_p_subject2");
var p_subject3 = document.getElementById("id_p_subject3");

const list_1 = [session,type,faculty,course,p_subject1,p_subject2,p_subject3]

//personal
var first_name = document.getElementById("id_first_name");
var last_name = document.getElementById("id_last_name");
var other_name = document.getElementById("id_other_name");
var dob = document.getElementById("id_dob");
var gender = document.getElementById("id_gender");
var marital_status = document.getElementById("id_marital_status");
var disab = document.getElementById("id_disability");
var disab_type = document.getElementById("id_disability_type");
var previous_ijmb_number = document.getElementById("id_previous_ijmb_number");
var id_type = document.getElementById("id_id_type");
var id_number = document.getElementById("id_id_number");
var id_issued = document.getElementById("id_id_issued");
var id_expiry = document.getElementById("id_id_expiry");
var email = document.getElementById("id_email");
var phone = document.getElementById("id_phone");
var address = document.getElementById("id_address");
var postal = document.getElementById("id_postal");
var state_of_origin = this.document.getElementById("id_state_of_origin");
var state = this.document.getElementById("id_state");
var lga = this.document.getElementById('id_lga');

const list_2 = [first_name,last_name,other_name,dob,state_of_origin,gender,marital_status,disab,disab_type,previous_ijmb_number,
                id_type,id_number,id_issued,id_expiry,email,phone,address,postal,state,lga]

//education
var o_level_status = document.getElementById("id_o_level_status");
var first_sitting = document.getElementById("first_sitting");
var second_sitting = document.getElementById("second_sitting");
var exam_sitting_label1 = document.getElementById("exam_sitting_label1");
var exam_sitting_label2 = document.getElementById("exam_sitting_label2");
var exam_sitting_label3 = document.getElementById("exam_sitting_label3");
var examination_type = document.querySelectorAll("#id_examination_type");
var examination_center = document.querySelectorAll("#id_examination_center");
var examination_number = document.querySelectorAll("#id_examination_number");
var examination_year = document.querySelectorAll("#id_examination_year");
var subject1 = document.querySelectorAll("#id_subject1");
var subject2 = document.querySelectorAll("#id_subject2");
var subject3 = document.querySelectorAll("#id_subject3");
var subject4 = document.querySelectorAll("#id_subject4");
var subject5 = document.querySelectorAll("#id_subject5");
var subject6 = document.querySelectorAll("#id_subject6");
var subject7 = document.querySelectorAll("#id_subject7");
var subject8 = document.querySelectorAll("#id_subject8");
var subject9 = document.querySelectorAll("#id_subject9");
var grade1 = document.querySelectorAll("#id_grade1");
var grade2 = document.querySelectorAll("#id_grade2");
var grade3 = document.querySelectorAll("#id_grade3");
var grade4 = document.querySelectorAll("#id_grade4");
var grade5 = document.querySelectorAll("#id_grade5");
var grade6 = document.querySelectorAll("#id_grade6");
var grade7 = document.querySelectorAll("#id_grade7");
var grade8 = document.querySelectorAll("#id_grade8");
var grade9 = document.querySelectorAll("#id_grade9");

const list_3_1 = [o_level_status,examination_type[0],examination_center[0],examination_number[0],examination_year[0],subject1[0],subject2[0],subject3[0],subject4[0],
  subject5[0],subject6[0],subject7[0],subject8[0],subject9[0],grade1[0],grade2[0],grade3[0],grade4[0],grade5[0],grade6[0],grade7[0],grade8[0],grade9[0]]              

const list_3_2 = [o_level_status,examination_type[1],examination_center[1],examination_number[1],examination_year[1],subject1[1],subject2[1],subject3[1],subject4[1],
  subject5[1],subject6[1],subject7[1],subject8[1],subject9[1],grade1[1],grade2[1],grade3[1],grade4[1],grade5[1],grade6[1],grade7[1],grade8[1],grade9[1]]              
  

//nextofkin
var next_of_kin_name = document.getElementById("id_next_of_kin_name");
var next_of_kin_email = document.getElementById("id_next_of_kin_email");
var next_of_kin_phone = document.getElementById("id_next_of_kin_phone");
var next_of_kin_address = document.getElementById("id_next_of_kin_address");
var next_of_kin_relationship = document.getElementById("id_next_of_kin_relationship");
var next_of_kin_occupation = document.getElementById("id_next_of_kin_occupation");
var next_of_kin_occupation_address = document.getElementById("id_next_of_kin_occupation_address");

const list_4 = [next_of_kin_name,next_of_kin_email,next_of_kin_phone,next_of_kin_address,next_of_kin_relationship,next_of_kin_occupation,next_of_kin_occupation_address]

//requirements
var file_photo_passport = document.getElementById("id_file_photo_passport");
var file_identification = document.getElementById("id_file_identification");
var file_first_certificate = document.getElementById("id_file_first_certificate");
var file_first_testimonial = document.getElementById("id_file_first_testimonial");
var file_second_certificate = document.getElementById("id_file_second_certificate");
var file_second_testimonial = document.getElementById("id_file_second_testimonial");
var file_awaiting_exam_slip = document.getElementById("id_file_awaiting_exam_slip");
var file_scratch_card = document.getElementById("id_file_scratch_card");

const list_5 = [file_photo_passport,file_identification,file_first_certificate,file_first_testimonial,
                file_second_certificate,file_second_testimonial,file_awaiting_exam_slip,file_scratch_card]

const list_5_values = [file1,file2,file3,file4,file5,file6,file7,file8]

var prev = document.querySelectorAll("#prev");
var save = document.querySelectorAll("#save");
var withdraw = document.querySelectorAll("#withdraw");
var next = document.querySelectorAll("#next");
var alert = document.getElementById("alert");
var button_alert = document.getElementById("button-alert");
var addModal = document.getElementById("AddModal");
var modal = new bootstrap.Modal(addModal);
var modal_body = document.getElementById("modal-body");
var modal_title = document.getElementById("modal-title");
var modal_widthdraw = document.getElementById("modal-widthdraw");
var modal_submit = document.getElementById("modal-submit");


// var tab = document.querySelectorAll('#nav-requirement-tab');

const tabs = document.querySelectorAll('.nav-tabs a');
const tab_count = tabs.length;
const program_error = document.querySelectorAll('#program_error');
const personal_error = document.querySelectorAll('#personal_error');
const o_level_error = document.getElementById('o_level_error');
var education_1_error = document.querySelectorAll('#education_1_error');
var education_2_error = document.querySelectorAll('#education_2_error');
const nextofkin_error = document.querySelectorAll('#nextofkin_error');
const requirement_error = document.querySelectorAll('#requirement_error');

var data_1_1 = {}
var data_1_1_validate = {}
var data_2_1 = {}
var data_2_1_validate = {}
var data_3_1 = {}
var data_3_1_validate = {}
var data_3_2 = {}
var data_3_2_validate = {}
var data_4_1 = {}
var data_4_1_validate = {}
var data_5_1 = {}
var data_5_1_validate = {}

var all_error_list = []

function func_data_all(array){
  var all_error_list = []
  let j = 0;
  for(let i in array){
    if(array[i].checkValidity()){
      if(array[i].value.length == 0 || array[i].value == "----------" || array[i].value == "Select"){
        if(array[i].required == false && array[i].type == 'file'){ 
        }                    
        else if(array[i].required == false && array[i].nodeName != 'SELECT'){
          if(array[i] == previous_ijmb_number){
          }
          else if(array[i].parentNode.hidden == true){
          }
          else{
            all_error_list.push(array[i])
          }
        }
        else{
          all_error_list.push(array[i])
        }
      }
      else{
      }
    }
    else{
      all_error_list.push(array[i])
    }
    j += 1;
  }
  return all_error_list
}

function func_data_all_education(array,error){
  var all_error_list = []
  let j = 0;
  d = false;
  if (error == 22){
    d = true;
  }
  for(let i in array){
    if(d == true){
      let c = 0;
    }
    else{
      if(array[i].checkValidity()){
        if(array[i].value.length == 0 || array[i].value == "----------" || array[i].value == "Select"){
          if(array[i].required == false && array[i].nodeName != 'SELECT'){
          }
          else if(array[i].parentNode.hidden == true){
          }
          else{
            all_error_list.push(array[i])
          }
        }
        else{
        }
      }
      else{
        all_error_list.push(array[i])
      }
      j += 1;      
    }
    d = false;   
  }
  return all_error_list
}

window.addEventListener("load",
  function(){
    tabstate();
    hideprevnext();
    func_clear_list();
    type.disabled = true;
    faculty.disabled = true;
    course.disabled = true;
    p_subject1.disabled = true;
    p_subject2.disabled = true;
    p_subject3.disabled = true;
    
    var option = this.document.createElement('option');
    option.innerHTML = "Select"
    state_of_origin.appendChild(option)
    var option = this.document.createElement('option');
    option.value = ""
    option.innerHTML = "Select"
    state.appendChild(option)
    var option = this.document.createElement('option');
    option.value = ""
    option.innerHTML = "Select"
    lga.appendChild(option)
    for (var i = 0; i < ngst.length; i++) {
      var option = this.document.createElement("option");
      option.value = ngst[i]['ID'];
      option.innerHTML = ngst[i]['Name'];
      state_of_origin.appendChild(option);
      var option = this.document.createElement("option");
      option.value = ngst[i]['ID'];
      option.innerHTML = ngst[i]['Name'];
      state.appendChild(option);
  }
  state_of_origin.value = st_o;
  state.value = st;
  if(disab.value == 'Yes'){
    disab_type_col.hidden = false;
  }
  if(id_type.value == "International Passport"){
    col_id_issued.hidden = false;
    col_id_expiry.hidden = false;
  }

  local_g(lg);
  func_o_level(o_level_status,first_sitting,second_sitting);
  });

function to_dict(list,dict,dict_validate){
  for(let i=0; i<list.length; i++){
    dict[list[i].name] = list[i].value
    dict_validate[list[i].name] = list[i]    
}
}

function to_dict_file(list,dict,dict_validate){
  for(let i=0; i<list.length; i++){
    dict[list[i].name] = list[i].value
    dict_validate[list[i].name] = list[i]    
}
}

function func_data_education(array,error){
  let j = 0;
  d = false;
  if (error.length == 22){
    d = true;
  }
  for(let i in array){
    if(d == true){
      let c = 0;
    }
    else{
//   console.log(i)
      if(array[i].checkValidity()){
        if(array[i].value.length == 0 || array[i].value == "----------" || array[i].value == "Select"){
          if(array[i].required == false && array[i].nodeName != 'SELECT'){
            error[j].innerHTML = ''
          }
          else if(array[i].parentNode.hidden == true){
            error[j].innerHTML = ''
          }
          else{
            error[j].innerHTML = "This field is required";
          }
        }
        else{
          error[j].innerHTML = ''
        }
      }
      else{
        error[j].innerHTML = "This field is required";      
      }
      j += 1;      
    }
    d = false;   
  }
}

function func_data(array,error){
  let j = 0;
  for(let i in array){
//    console.log(array[i])
    if(array[i].checkValidity()){
      if(array[i].value.length == 0 || array[i].value == "----------" || array[i].value == "Select"){
        if(array[i].required == false && array[i].type == 'file'){
          error[j].innerHTML = ''          
        }                    
        else if(array[i].required == false && array[i].nodeName != 'SELECT'){
          if(array[i] == previous_ijmb_number){
            error[j].innerHTML = ''
          }
          else if(array[i].parentNode.hidden == true){
              error[j].innerHTML = "";              
          }
          else{
            error[j].innerHTML = "This field is required";            
          }
        }
        else{
          error[j].innerHTML = "This field is required";
        }
      }
      else{
        error[j].innerHTML = ''
      }
    }
    else{
      error[j].innerHTML = "This field is required";      
    }

    j += 1;
  }
}

function checker(list){
  var valid = true;
  for(let i=0; i<list.length; i++){
    if(list[i].innerHTML != ""){
      valid = false;
    }
  }
  return valid;
}

function output(er){
  var sum = ''
  for(let i in er){
    if(i==0){
      sum += er[i].name          
    }
    else{
    sum += ", " + er[i].name 
    }
  }
  return sum;
};

function output_all(error,section){
  var add = document.createElement("h5")
  add.classList = ["text-success"]
  add.innerHTML = section + " Section Requirement's"
  modal_body.append(add)
  var add = document.createElement("p")
  add.classList = ["text-danger"]
  valuee = output(error);
  add.innerHTML = valuee;
  modal_body.append(add)
}

function func_all_validate(){
  to_dict(list_1,data_1_1,data_1_1_validate);
  var program_er = func_data_all(data_1_1_validate);
  to_dict(list_2,data_2_1,data_2_1_validate);
  var personal_er = func_data_all(data_2_1_validate);
  if (o_level_status.value == 'One Sitting'){
    to_dict(list_3_1,data_3_1,data_3_1_validate);
    var education_er1 = func_data_all_education(data_3_1_validate,23);
  }
  else if (o_level_status.value == 'Two Sitting'){
    to_dict(list_3_1,data_3_1,data_3_1_validate);
    var education_er1 = func_data_all_education(data_3_1_validate,23);
    to_dict(list_3_2,data_3_2,data_3_2_validate);
    var education_er12 = func_data_all_education(data_3_2_validate,22);
  }
  else{
    var education_er1 = [o_level_status]
  }
  to_dict(list_4,data_4_1,data_4_1_validate);
  var nextofkin_er = func_data_all(data_4_1_validate);
  to_dict_file(list_5,data_5_1,data_5_1_validate);
  var files_er = ''
  files_er = func_data_all(data_5_1_validate);
  console.log(files_er)
  modal_body.innerHTML = '';
  modal_title.innerHTML = ''
  modal_title.innerHTML = 'Required Fields'
  if(program_er.length > 0){
    output_all(program_er,'Program');
  }
  if(personal_er.length > 0){
    output_all(personal_er,'Personal Details');
  }
  if(education_er1.length > 0){
    output_all(education_er1,'Education');
  }
  education_er12 = []
  if (o_level_status.value == 'Two Sitting'){
    if(education_er12.length > 0){
      output_all(education_er12,'Education');
    }
  }
  if(nextofkin_er.length > 0){
    output_all(nextofkin_er,'Next of kin');
  }
  if(files_er.length > 0){
    output_all(files_er,'Requirements');
  }
  if(program_er == 0 && personal_er == 0 && education_er1 == 0 && education_er12 == 0 && nextofkin_er == 0 && files_er == 0){
    modal_body.innerHTML = ''
    modal_title.innerHTML = ''
    modal_title.innerHTML = 'Submit Comfirmation'
    var add = document.createElement("h5")
    add.classList = ["text-danger"]
    add.innerHTML = "Make sure you have saved all sections including the requirement section."
    modal_body.append(add)
    var add = document.createElement("h6")
    add.classList = ["text-danger"]
    add.innerHTML = "Once submiited you can't change any data provided. Any required data missing will cause the widthdrawal of the application"
    modal_body.append(add)
    modal_submit.hidden = false;
    modal_widthdraw.hidden = true;  
    modal.show()  
  }
  else{
    modal_widthdraw.hidden = true;
    modal_submit.hidden = true;
    modal.show()
  }
}

function saving_data_all(dict,type){
  csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
  dict["csrfmiddlewaretoken"] = csrf_token;
  dict['post_type'] = type;
  $.ajax({
    type: 'POST',
    url: "",
    data: dict,
    dataType: 'json',
    success:function(response){
      if(response['message'] == 'Successful'){
        console.log(response)
        window.location = '/ijmb/'
      }
      else{
        modal_body.innerHTML = ''
        modal_title.innerHTML = ''
        modal_title.innerHTML = 'Submit Failed'
        var add = document.createElement("h5")
        add.classList = ["text-danger"]
        add.innerHTML = response['message']
        modal_body.append(add)
        modal.show()  
      }
    },
    error:function(response){
      console.log("error with\n"+ response);
    },
  });  
}

function saving_data_file_all(dict,type){
  var form_data = new FormData();
  var check = 0
  var file = ''
  for(let item in dict){
    if(dict[item].type == 'application/pdf'){
      form_data.append(dict[item].name,dict[item].files[0]);
    }
    else{
      check = 1;
      file = dict[item].name;
      break;      
    }
  }
    if(check == 1){
      csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
      form_data.append("csrfmiddlewaretoken",csrf_token);
      form_data.append('post_type',type);
      $.ajax({
        type: 'POST',
        url: '',
        data: form_data,
        cache: false,
        processData: false,
        contentType: false,
        dataType: 'json',
        success:function(response){
          console.log(response);
        },
        error:function(response){
          console.log("error with\n"+ response.message);
        },
      });
    }
    else{
      if(Object.keys(dict).length > 0){
      alert.className = '';
      alert.classList.add("container-fluid","alert","alert-danger","alert-dismissible","fade","show");
      var text = document.getElementById('text-alert');
      text.innerHTML = file + " is not in pdf format";
      alert.hidden = false;
      }
    }
}

function saving_data(dict,type,action,tab){
  csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
  dict["csrfmiddlewaretoken"] = csrf_token;
  dict['post_type'] = type;
  $.ajax({
    type: 'POST',
    url: "",
    data: dict,
    dataType: 'json',
    success:function(response){
      console.log(response);
      alert.className = '';
      alert.classList.add("container-fluid","alert","alert-success","alert-dismissible","fade","show");
      var text = document.getElementById('text-alert');
      text.innerHTML = response.message;
      alert.hidden = false;
      if(action == 'prev' && tab == 4){
        $(tabs[tab-1]).tab('show');
      }
      else if(action == 'prev' && tab != 0){
        $(tabs[tab-1]).tab('show');
        hideprevnext();        
      }
      else if(action == 'next' && tab != 4){
        $(tabs[tab+1]).tab('show');
        hideprevnext();
      }
    },
    error:function(response){
      console.log("error with\n"+ response.message);
      alert.className = '';
      alert.classList.add("container-fluid","alert","alert-danger","alert-dismissible","fade","show");
      var text = document.getElementById('text-alert');
      text.innerHTML = response.message;
      alert.hidden = false;
    },
  });  
}

function saving_data_file(dict,type,action,tab){
  var form_data = new FormData();
  var checker = true
  var check = 0
  var file = ''
  for(let item in dict){
    if(dict[item].name == 'file_photo_passport' || dict[item].name == 'file_identification'){
      if(dict[item].value != ''){
        if(dict[item].files[0].type.includes('application/pdf') || dict[item].files[0].type.includes('image/')){
          form_data.append(dict[item].name,dict[item].files[0]);
          check = 1;
        }
        else{
          checker = false;
          check = 2;
          file = dict[item].parentNode.firstElementChild.innerText;
          break;      
        }  
      }
    }
    else{
      if(dict[item].value != ''){
        if(dict[item].files[0].type.includes('application/pdf') || dict[item].files[0].type.includes('image/')){
          form_data.append(dict[item].name,dict[item].files[0]);
          check = 1;
        }
        else{
          checker = false;
          check = 2;
           file = dict[item].parentNode.firstElementChild.innerText;
          break;      
        }  
      }      
    }
  }
    if(checker == true && check == 1){
      csrf_token = $('input[name="csrfmiddlewaretoken"]').val();
      form_data.append("csrfmiddlewaretoken",csrf_token);
      form_data.append('post_type',type);
      $.ajax({
        type: 'POST',
        url: '',
        data: form_data,
        cache: false,
        processData: false,
        contentType: false,
        dataType: 'json',
        success:function(response){
          console.log(response);
          alert.className = '';
          alert.classList.add("container-fluid","alert","alert-success","alert-dismissible","fade","show");
          var text = document.getElementById('text-alert');
          text.innerHTML = response.message;
          alert.hidden = false;
          if(action == 'prev' && tab != 0){
            $(tabs[tab-1]).tab('show');
            hideprevnext();                
          }
          if(action == 'next' && tab != 4){
            $(tabs[tab+1]).tab('show');
            hideprevnext();                
          }
        },
        error:function(response){
          console.log("error with\n"+ response.message);
          alert.className = '';
          alert.classList.add("container-fluid","alert","alert-danger","alert-dismissible","fade","show");
          var text = document.getElementById('text-alert');
          text.innerHTML = response.message;
          alert.hidden = false;
        },
      });
    }
    else{
      if(check == 2){
      alert.className = '';
      alert.classList.add("container-fluid","alert","alert-danger","alert-dismissible","fade","show");
      var text = document.getElementById('text-alert');
      text.innerHTML = file + " is not in pdf format";
      alert.hidden = false;
    }
    else{
      alert.className = '';
      alert.classList.add("container-fluid","alert","alert-success","alert-dismissible","fade","show");
      var text = document.getElementById('text-alert');
      text.innerHTML = "No change was detected on any file";
      alert.hidden = false;
      if(action == 'prev' && tab == 4){
        $(tabs[tab-1]).tab('show');
      }
    }
  }
}
function tabstate(){
 if(post_type == 'personal'){
    $(tabs[1]).tab('show');
  }
  else if(post_type == 'o_level_1' || post_type == 'o_level_2'){
    $(tabs[2]).tab('show');
  }
  else if(post_type == 'next_of_kin'){
    $(tabs[3]).tab('show');
  }
  else if(post_type == 'requirement'){
    $(tabs[4]).tab('show');
  }             
  else{
    $(tabs[0]).tab('show');    
  } 
}

function hideprevnext(){
  if(tabs[0].ariaSelected == 'true' || post_type == 'program'){
    prev[0].hidden = true;
    prev[1].hidden = true;
    withdraw[0].innerHTML = 'Widthdraw'
    withdraw[1].innerHTML = 'Widthdraw'
  }
  else{
    prev[0].hidden = false;
    prev[1].hidden = false;
    next[0].hidden = false;
    next[1].hidden = false;
    withdraw[0].innerHTML = 'Widthdraw'
    withdraw[1].innerHTML = 'Widthdraw'
  }
  if(tabs[4].ariaSelected == 'true' || post_type == 'requirement'){
    next[0].hidden = true;
    next[1].hidden = true;
    withdraw[0].innerHTML = 'Submit'
    withdraw[1].innerHTML = 'Submit'
  }
  else{
    prev[0].hidden = false;
    prev[1].hidden = false;
    next[0].hidden = false;
    next[1].hidden = false;
    withdraw[0].innerHTML = 'Widthdraw'
    withdraw[1].innerHTML = 'Widthdraw'
  }
}

function all_in(action){
  for(let i=0; i<tab_count; i++){
    if(tabs[i].ariaSelected == 'true' && i == 0){
      to_dict(list_1,data_1_1,data_1_1_validate);
      func_data(data_1_1_validate,program_error);
      valid = checker(program_error);
      if(valid == true){
        saving_data(data_1_1,'program',action,i);
      }
    }
    if(tabs[i].ariaSelected == 'true' && i == 1){
      to_dict(list_2,data_2_1,data_2_1_validate);
      func_data(data_2_1_validate,personal_error);
      valid = checker(personal_error);
      if(valid == true){
        saving_data(data_2_1,'personal',action,i);    
      }        
    }
    if(tabs[i].ariaSelected == 'true' && i == 2){
      if(o_level_status.value == 'One Sitting'){
        education_1_error[0].innerHTML = '';
        to_dict(list_3_1,data_3_1,data_3_1_validate);          
        func_data_education(data_3_1_validate,education_1_error);          
        valid = checker(education_1_error);
        if(valid == true){
          saving_data(data_3_1,'o_level_1',action,i);
        }
      }
      else if(o_level_status.value == 'Two Sitting'){
        education_1_error[0].innerHTML = '';
        to_dict(list_3_1,data_3_1,data_3_1_validate);          
        func_data_education(data_3_1_validate,education_1_error);          
        valid = checker(education_1_error);
        if(valid == true){
          saving_data(data_3_1,'o_level_1',action,i);
        }
        to_dict(list_3_2,data_3_2,data_3_2_validate);
        func_data_education(data_3_2_validate,education_2_error);          
        valid = checker(education_2_error);
        if(valid == true){
          saving_data(data_3_2,'o_level_2',action,i);
        }          
      }
      else{
        education_1_error[0].innerHTML = 'This field is required';          
      }
    }
    if(tabs[i].ariaSelected == 'true' && i == 3){
      to_dict(list_4,data_4_1,data_4_1_validate);        
      func_data(data_4_1_validate,nextofkin_error);
      valid = checker(nextofkin_error);
      if(valid == true){
        saving_data(data_4_1,'next_of_kin',action,i);
      }
    }                 
    if(tabs[i].ariaSelected == 'true' && i == 4){
      to_dict(list_5,data_5_1,data_5_1_validate);        
      func_data(data_5_1_validate,requirement_error);
      valid = checker(requirement_error);
      if(valid == true){
        saving_data_file(list_5,'requirement',action,i);
      }
    }
  }

}

function func_clear_list(){
  for(i in clear_list){
    if (clear_list[i] !== null){
      clear_list[i].nextElementSibling.remove()
      clear_list[i].remove();
    }
  }
}


prev[0].addEventListener('click',
  function(){
    all_in('prev');
  }
);

save[0].addEventListener('click',
  function(){
    all_in("");
  }
);

withdraw[0].addEventListener('click',
  function(){
    if (tabs[4].ariaSelected == 'true'){      
      func_all_validate();
    }
    else{
    modal_body.innerHTML = ''
    modal_title.innerHTML = ''
    modal_title.innerHTML = 'Widthdrawal Comfirmation'
    var add = document.createElement("h5")
    add.classList = ["text-danger"]
    add.innerHTML = "Are you sure you want to widthdraw this application?"
    modal_body.append(add)
    modal_widthdraw.hidden = false;
    modal_submit.hidden = true;
    modal.show()
    }
  }
);

next[0].addEventListener('click',
  function(){
    all_in('next');    
  }
);

prev[1].addEventListener('click',
  function(){
    all_in('prev');
  }
);

save[1].addEventListener('click',
  function(){
    all_in("");
  }
);

withdraw[1].addEventListener('click',
  function(){
    if (tabs[4].ariaSelected == 'true'){
      func_all_validate();
    }
    else{
    modal_body.innerHTML = ''
    modal_title.innerHTML = ''
    modal_title.innerHTML = 'Widthdrawal Comfirmation'
    var add = document.createElement("h5")
    add.classList = ["text-danger"]
    add.innerHTML = "Are you sure you want to widthdraw this application?"
    modal_body.append(add)
    modal_widthdraw.hidden = false;
    modal_submit.hidden = true;
    modal.show()
    }
  }
);

next[1].addEventListener('click',
  function(){
    all_in('next');  
  }
);

modal_submit.addEventListener('click',function(){
  saving_data_all({'status': 2},'submit');
});

modal_widthdraw.addEventListener('click',function(){
  saving_data_all({'status': 5},'widthdraw');
});

tabs[0].addEventListener('click',
  function(){
    prev[0].hidden = true;
    next[0].hidden = false;
    prev[1].hidden = true;
    next[1].hidden = false;
    withdraw[0].innerHTML = 'Widthdraw'
    withdraw[1].innerHTML = 'Widthdraw'
  }
);

tabs[1].addEventListener('click',
  function(){
    prev[0].hidden = false;
    next[0].hidden = false;
    prev[1].hidden = false;
    next[1].hidden = false;
    withdraw[0].innerHTML = 'Widthdraw'
    withdraw[1].innerHTML = 'Widthdraw'
  }
);

tabs[2].addEventListener('click',
  function(){
    prev[0].hidden = false;
    next[0].hidden = false;
    prev[1].hidden = false;
    next[1].hidden = false;
    withdraw[0].innerHTML = 'Widthdraw'
    withdraw[1].innerHTML = 'Widthdraw'
  }
);

tabs[3].addEventListener('click',
  function(){
    prev[0].hidden = false;
    next[0].hidden = false;
    prev[1].hidden = false;
    next[1].hidden = false;
    withdraw[0].innerHTML = 'Widthdraw'
    withdraw[1].innerHTML = 'Widthdraw'
  }
);

tabs[4].addEventListener('click',
  function(){
    prev[0].hidden = false;
    next[0].hidden = true;
    prev[1].hidden = false;
    next[1].hidden = true;
    withdraw[0].innerHTML = 'Submit'
    withdraw[1].innerHTML = 'Submit'
  }
);


button_alert.onclick = function(){
  alert.hidden = true;
};

session.addEventListener("change",
  function(){
    func_session(session,type);
  }
);

type.addEventListener("change",
  function(){
    func_program_type(type,faculty);
  }
);

faculty.addEventListener("change",
  function(){
    func_program_faculty(faculty,course);
  }
);

course.addEventListener("change",
  function(){
    func_program_course(course,p_subject1,p_subject2,p_subject3);
  }
);

id_type.addEventListener("change",
  function(){
    func_identification(id_type,col_id_issued,col_id_expiry);
  }
);

o_level_status.addEventListener("change",
  function(){
    func_o_level(o_level_status,first_sitting,second_sitting);
  }
);

disab.addEventListener('change',
  function(){
    if(disab.value != 'Yes'){
      disab_type_col.hidden = true;
      disab_type.value = '';
    }
    else{
      disab_type_col.hidden = false;
    }
  }
);

state.addEventListener('change',
  function(){
    var a = '';
    local_g(a);
  }
);

function func_session(first,second){
  if(first.value.length != 0 && first.value != "Select" && first.value != "----------"){
    second.disabled = false;
    second.innerHTML = "Please Wait";
    $.ajax({
      type: 'GET',
      url: "/ijmb/pre",
      data:{
        program_session : first.value,
      },
      dataType: 'json',
      success:function(response){
        var select = second;
        var option = document.createElement("option");
        option.innerHTML = "----------";
        select.appendChild(option);
        for(var i=0; i<response.filt.length; i++){
          var option = document.createElement("option");
          option.value = response.filt[i]["id"];
          option.innerHTML = response.filt[i]["name"];
          select.appendChild(option);
        }
      },
      error:function(response){
        console.log("error with\n"+ response.data);
      },
    });
  }
    else{
      second.innerHTML = "----------";
      second.disabled = true;
    }
  }

function func_program_type(first,second){
  if(first.value.length != 0 && first.value != "Select" && first.value != "----------"){
    second.innerHTML = "Please Wait";
    second.disabled = false;
  $.ajax({
    type: 'GET',
    url: "/ijmb/pre",
    data:{
      program_type : first.value,
    },
    dataType: 'json',
    success:function(response){
      var select = second;
      var option = document.createElement("option");
      option.innerHTML = "----------";
      select.appendChild(option);
      for(var i=0; i<response.filt.length; i++){
        var option = document.createElement("option");
        option.value = response.filt[i]["id"];
        option.innerHTML = response.filt[i]["name"];
        select.appendChild(option);
      }
    },
    error:function(response){
      console.log("error with\n"+ response.data);
    },
  });
  }
  else{
    second.innerHTML = "----------";
    second.disabled = true ;
  }
}

function func_program_faculty(first,second){
  if(first.value.length != 0 && first.value != "Select" && first.value != "----------"){
    second.innerHTML = "Please Wait";
    second.disabled = false;
  $.ajax({
    type: 'GET',
    url: "/ijmb/pre",
    data:{
      program_faculty : first.value,
    },
    dataType: 'json',
    success:function(response){
      var select = second;
      var option = document.createElement("option");
      option.innerHTML = "----------";
      select.appendChild(option);
      for(var i=0; i<response.filt.length; i++){
        var option = document.createElement("option");
        option.value = response.filt[i]["id"];
        option.innerHTML = response.filt[i]["name"];
        select.appendChild(option);
      }
    },
    error:function(response){
      console.log("error with\n"+ response.data);
    },
  });
  }
  else{
    second.innerHTML = "----------";
    second.disabled = true ;
  }
}

function func_program_course(first,second1,second2,second3){
  if(first.value.length != 0 && first.value != "Select" && first.value != "----------"){
    second1.innerHTML = "Please Wait";
    second2.innerHTML = "Please Wait";
    second3.innerHTML = "Please Wait";
    second1.disabled = false;
    second2.disabled = false;
    second3.disabled = false;    
    $.ajax({
      type: 'GET',
      url: "/ijmb/pre",
      data:{
        program_course : first.value,
      },
      dataType: 'json',
      success:function(response){
        const select = [second1,second2,second3];
        for(var i=0; i<response.filt.length; i++){
          var option = document.createElement("option");
          option.value = response.filt[i]["id"];
          option.innerHTML = response.filt[i]["name"];
          select[i].appendChild(option);
        }
        if(response.filt.length < 3){
          if(response.filt.length == 0){
            var cou = 0
          }
          if(response.filt.length == 1){
            var cou = 1
          }
          if(response.filt.length == 2){
            var cou = 2
          }
          for(var j=cou; j<response.filt.length+1; j++){
            var option = document.createElement("option");
            option.innerHTML = "----------";
            select[j].appendChild(option);
            for(var i=0; i<response.other.length; i++){
              var option = document.createElement("option");
              option.value = response.other[i]["id"];
              option.innerHTML = response.other[i]["name"];
              select[j].appendChild(option);
            }
          }          
        }
      },
      error:function(response){
        console.log("error with\n"+ response.data);
      },
    });
  }
  else{
    second1.innerHTML = "----------";
    second2.innerHTML = "----------";
    second3.innerHTML = "----------";
    second1.disabled = true;
    second2.disabled = true;
    second3.disabled = true;    
  }
}

function func_identification(id,issued,expiry){
  if(id.value == "International Passport"){
    issued.hidden = false;
    expiry.hidden = false;
  }
  else{
      issued.hidden = true;
      expiry.hidden = true;
      id_issued.value = '';
      id_expiry.value = '';
  }
}

function func_o_level(status,first,second){
  if(status.value == "One Sitting"){
    exam_sitting_label1.innerHTML = status.value + " Exam Details"
    first.hidden = false;
    second.hidden = true;
  }
  else if(status.value == "Two Sitting"){
    exam_sitting_label1.innerHTML = "One Sitting Exam Details";
    exam_sitting_label2.innerHTML = status.value + " Exam Details"
    first.hidden = false;
    second.hidden = false;
  }
  else{
    first.hidden = true;
    second.hidden = true;
  }  
}

function local_g(value){
  $("#id_lga").empty();
  var msg = state.value;
  var option = document.createElement('option');
  option.value = ''
  option.innerHTML = "Select"
  lga.appendChild(option)
  if(msg.length != 0){
  for (i = 0; i < parts[msg].length; i++) {
    var option = document.createElement('option');
    option.value = parts[msg][i];
    option.innerHTML = parts[msg][i];
    lga.appendChild(option);
    }
  }
  lga.value = value;    
}