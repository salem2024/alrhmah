// =========================== [ BACK TO TOP BUTTON ] =========================
let butt = document.getElementById("back-to-top")
// console.log(butt)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
}

function scrollFunction() {
    // documentElement = // For Chrome, Firefox, IE and Opera
    // body = // For Safari
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        butt.style.display = "block"
    } else {
        butt.style.display = "none"
    }
}

// When the user clicks on the button, scroll to the top of the document
function goToTop() {
    // console.log('goToTop')
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
}
// =========================== [ BACK TO TOP BUTTON ] =========================

// =============================== [ MIXIT UP ] ===============================
// $(document).ready(function () {
//     $('.filterizr-filter li').click(function () {
//         $('.filterizr-filter li').removeClass('filtr-active');
//         $(this).addClass('filtr-active');
//     });

//     var filterizd = $('.filtr-container').filterizr();
//     filterizd.filterizr('sort', 'title', 'asc');
// });
// =============================== [ MIXIT UP ] ===============================

// =============================== [ CATEGORIES ] ===============================
var lang = document.getElementsByTagName('html')[0].getAttribute('lang')

var categories = [{
    'name': {
        'en': 'MOBILE APPS',
        'ar': 'تطبيقات الجوال'
    }
}, {
    'name': {
        'en': 'WEB DEVELOPMENT',
        'ar': 'تطوير المواقع'
    }
}, {
    'name': {
        'en': 'DESIGN',
        'ar': 'التصميم'
    }
}]

var category_ul = document.getElementById('filter-control')
// console.log(navigator.language.split('-')[0])

// alert(window.location.pathname)
if(window.location.pathname =="/")

for (let index = 0; index < categories.length; index++) {
    var li = document.createElement("li")
    li.appendChild(document.createTextNode(categories[index].name[lang]))
    // if(index==0) li.classList.add('active')
    // li.onclick = filterElement(event)
    li.setAttribute("data-filter", index + 1)
    li.style.margin = "0px 5px"
    category_ul.appendChild(li)
}

if(window.location.pathname =="/")

$('#filter-control li').click(function (e) {
    e.preventDefault()
    var category = e.target.getAttribute('data-filter')
    console.log(category)
    // console.log(e.target)
    if(category == 'all') {
        $('.filtr-item').show()
        return
    }
    $('.filtr-item').hide()
    $('.filtr-item[data-category='+category+']').show()
});

// =============================== [ CATEGORIES ] ===============================

// =============================== [ PROJECTS ] ===============================
var locations = [{
        'name': {
            'ar': 'اليمن - المكلا',
            'en': 'YE - Mukalla'
        }
    },
    {
        'name': {
            'ar': 'السعودية - الرياض',
            'en': 'KSA - Riyadh'
        }
    },
    {
        'name': {
            'ar': 'السعودية - جدة',
            'en': 'KSA - Jeddah'
        }
    }
]
var project_list = [
    // ======================================= [ MOBILE APPLICATION ] =====================================
    {
        'data-category': 1,
        'title': {
            'ar': 'خط الفخامة',
            'en': 'LuxuryLine'
        },
        'description': {
            'ar': 'تطبيق أندرويد تعريفي عن مؤسسة خط الفخامة وخدماتها واستعراض مشاريعها وإمكانية التواصل معها',
            'en': 'An introductory application about the Luxury Line Foundation and its services, you can browse its projects and you can contact it through the app'
        },
        'url': '',
        'image_basic': 'LuxuryLine.png',
        'additional_images': [],
        'location': 1
    },
    {
        'data-category': 1,
        'title': {
            'ar': 'تطبيق قبول',
            'en': 'Qobol'
        },
        'description': {
            'ar': 'تطبيق أندرويد لإدارة عملية التسجيل والقبول في الجامعات',
            'en': 'Android application to manage the registration and admission process in universities'
        },
        'url': '',
        'image_basic': 'qobol.png',
        'additional_images': [],
        'location': 0
    },
    {
        'data-category': 1,
        'title': {
            'ar': 'تطبيق متجر إلكتروني قيد العمل',
            'en': 'E-Store'
        },
        'description': {
            'ar': 'تطبيق أندرويد لفتح متجر إلكتروني خاص بأصحاب النشاطات لعرض منتجاتهم',
            'en': 'An Android application to open an online store for business owners to display their products'
        },
        'url': '',
        'image_basic': 'store_1.png',
        'additional_images': [],
        'location': 0
    },
    // ======================================= [ MOBILE APPLICATION ] =====================================

    // ============================================ [ WEBSITES ] ==========================================
    {
        'data-category': 2,
        'title': {
            'ar': 'أكاديمية الإمتياز الدولية',
            'en': 'Al-Imtiaz International Academy'
        },
        'description': {
            'ar': 'موقع تعريفي عن أكاديمية الإمتياز الدولية التي تقدم برامج تدريبية بالمكلا ويمكن من خلال الموقع الإستعلام والتأكد من الشهادات الصادرة من قبل الأكاديمية',
            'en': 'An introductory site about the International Excellence Academy, which offers training programs in Mukalla. Through the website, you can inquire and verify the certificates issued by the Academy'
        },
        'url': 'https://usa-council.com/iea',
        'image_basic': 'IIA-Yemen.png',
        'additional_images': [],
        'location': 0
    },
    {
        'data-category': 2,
        'title': {
            'ar': 'الإمتياز لإستشارات الأعمال',
            'en': 'Al-Imtiaz for Business Consultancy'
        },
        'description': {
            'ar': 'موقع تعريفي لشركة الإمتياز المتخصصة في استشارات الأعمال والتدريب',
            'en': 'Android application to manage the registration and admission process in universities'
        },
        'url': 'http://www.alimtiazpm.com/',
        'image_basic': 'imtiaz-ksa.png',
        'additional_images': [],
        'location': 1
    },
    {
        'data-category': 2,
        'title': {
            'ar': 'شركة مبادرات التعليم',
            'en': 'Education initiatives Company'
        },
        'description': {
            'ar': 'موقع يستعرض خدمات الشركة وبرامجها التدريبية ويوجد موقع مرتبط ببعض برامجها التدريبية',
            'en': 'Website displays the company\'s services and training programs, and there is Website linked to some of its training programs'
        },
        'url': 'http://ei-ksa.com/ar/',
        'image_basic': 'EI-Ksa.png',
        'additional_images': [],
        'location': 1
    },
    {
        'data-category': 2,
        'title': {
            'ar': 'برنامج تنمية لدعم سيدات الأعمال',
            'en': 'Tanmia Program to Support Business Women'
        },
        'description': {
            'ar': 'وهو تابع لشركة مبادرات التعليم يستعرض الخطة الزمنية للبرنامج وتفاصيل عن البرنامج',
            'en': 'It is belong to the Education Initiatives Company. It shows the program\'s time plan and it\'s details'
        },
        'url': 'http://www.ei-ksa.com/Tanmia1',
        'image_basic': 'Tanmia-Ksa.png',
        'additional_images': [],
        'location': 1
    },
    {
        'data-category': 2,
        'title': {
            'ar': 'فريق إثراء التطوعي',
            'en': 'Ethra\'a Voulunteering Team'
        },
        'description': {
            'ar': 'موقع للتعريف بالفريق ونشاطاته والتسجيل والإنضمام من خلال تعبئة الإستمارة الإلكترونية',
            'en': 'Website to shows the team idea and its activities, and you can register and join by filling out the online form'
        },
        'url': 'http://ethraa.rf.gd/index.php',
        'image_basic': 'ethraa1.png',
        'additional_images': [],
        'location': 2
    },
    {
        'data-category': 2,
        'title': {
            'ar': 'رؤى للتصميم الداخلي',
            'en': 'Roa\'a Interior Designer'
        },
        'description': {
            'ar': 'موقع للتعريف بالمؤسسة وخدماتها',
            'en': 'Portofolio Website'
        },
        'url': 'http://d-line.rf.gd/',
        'image_basic': 'RIDA.png',
        'additional_images': [],
        'location': 2
    },
    {
        'data-category': 2,
        'title': {
            'ar': 'مياه أروى',
            'en': 'Arwa Water'
        },
        'description': {
            'ar': 'موقع للتعريف بالمؤسسة وخدماتها',
            'en': 'Portofolio Website'
        },
        'url': 'http://arwa-water.rf.gd/',
        'image_basic': 'Arwa/bottled/water.png',
        'additional_images': [],
        'location': 2
    },
    // ============================================ [ WEBSITES ] ==========================================

    // ============================================ [ DESIGNS ] ==========================================
    {
        'data-category': 3,
        'title': {
            'ar': 'مجلة مركز البيئة',
            'en': 'KAU Environment Center Magazine'
        },
        'description': {
            'ar': 'تصميم مجلة تعريفية واستعراض الإنجازات وفريق مركز البيئة بجامعة الملك عبد العزيز',
            'en': 'Designing an introductory magazine and shows the achievements of the Environment Center at King Abdulaziz University'
        },
        'url': '',
        'image_basic': 'booklet2_kau_4.png',
        'additional_images': [],
        'location': 2
    },
    {
        'data-category': 3,
        'title': {
            'ar': 'برنامج قيادات السعودية',
            'en': 'Saudi Leadership Program'
        },
        'description': {
            'ar': 'تصميم الإنفوجرافيك ومنشورات وسائل التواصل الإجتماعي الخاصة ببرنامج قيادات السعودية بموسميه 2017 و 2018 وهي إحدى مبادرات مؤسسة"محمد بن سلمان" مسك الخيرية',
            'en': 'Designing infographics and Social media posts for the Saudi Womens Leadership Program for the 2017 and 2018 seasons, which is one of the initiatives of the "Mohammed bin Salman" Misk Foundation'
        },
        'url': '',
        'image_basic': 'SL-Program-ksa.png',
        'additional_images': [],
        'location': 1
    },
    {
        'data-category': 3,
        'title': {
            'ar': 'إنفوجرافيك ومجلات',
            'en': 'Infographic & Designs'
        },
        'description': {
            'ar': 'لصالح مركز البيئة بجامعة الملك عبد العزيز',
            'en': 'For Environment Center in King Abdulaziz University'
        },
        'url': '',
        'image_basic': 'booklet2_kau_1.png',
        'additional_images': ['booklet1_kau_1.png', 'booklet2_kau_1.png', 'booklet2_kau_2.png', 'booklet2_kau_3.png', 'booklet2_kau_4.png'],
        'location': 1
    },
    // ============================================ [ DESIGNS ] ==========================================

]

var project_container = document.getElementById('filtr-container')

// <div class="filtr-item" data-category="2" data-title="128 Web - HTML Website Template">
//     <img src="https://www.devaradise.com/id/wp-content/uploads/sites/4/2018/07/128-web-300x171.jpg" alt="128 Web Website Template" />
//     <div class="desc">
//         <a href="https://lab.devaradise.com/128web" target="_blank" rel="noopener">128 Web - HTML Website Template</a>
//     </div>
// </div>
// console.log(navigator.language.split('-')[0])
if(window.location.pathname =="/")
// alert(window.location.href)

for (let index = 0; index < project_list.length; index++) {
    // create link over image
    // var link = document.createElement("a")
    // link.classList.add('m-1')

    // link.href = project_list[index].url
    // link.target = "_blank"
    // link.classList.add('m-2')
    // link.style.width = "25%"

    // create div
    // var div = document.createElement("div")
    // div.classList.add('filtr-item', 'col-md-3','col-sm-6','col-12','card','text-center')
    // div.setAttribute('data-category', project_list[index]['data-category'])
    // div.setAttribute('data-title', project_list[index].title[navigator.language.split('-')[0]])
    // div.style.height = "120px"

    //     var divRowInside = document.createElement("div")
    //     divRowInside.classList.add('row','text-center','align-items-center','justify-content-center')
    //     divRowInside.style.borderTop = "3px solid #5f656c"

    //         var divIcon = document.createElement("div")
    //         divIcon.classList.add('col-4','project-icon-wrapper')
    //             var icon = document.createElement("i")
    //             icon.classList.add('fa-solid', 'fa-diagram-project','project-icon')

    //         var divInside = document.createElement("div")
    //         divInside.classList.add('card-body','align-items-center','justify-content-center','col-8')
    //             // console.log(locations[project_list[index].location].name[navigator.language.split('-')[0]])
    //             var location_badge = document.createElement("p")
    //             location_badge.classList.add("badge", "rounded-pill","text-bg-success")
    //             location_badge.appendChild(document.createTextNode(locations[project_list[index].location].name[navigator.language.split('-')[0]]))

    //             // create image
    //             // var img = document.createElement("img")
    //             // img.classList.add('img-fluid')
    //             // // img.setAttribute('src', project_list[index].image_basic)
    //             // img.setAttribute('src', "https://www.devaradise.com/id/wp-content/uploads/sites/4/2018/07/blkbekasi-300x171.jpg")

    //             var title = document.createElement("p")
    //             title.classList.add('card-title','fw-bold')
    //             title.innerHTML = project_list[index].title[navigator.language.split('-')[0]]
    //             title.style.fontSize = "13px"
    //             // var text = document.createElement('p')
    //             // text.classList.add('card-text')
    //             // text.innerHTML = project_list[index].title[navigator.language.split('-')[0]]
    //             // text.style.padding = "10px"

    //             // link.appendChild(div)
    //             // div.appendChild(img)
    // divIcon.appendChild(icon)
    // divRowInside.appendChild(divIcon)

    // divInside.appendChild(location_badge)
    // divInside.appendChild(title)
    // divRowInside.appendChild(divInside)

    // div.appendChild(divRowInside)

    // divInside.appendChild(line_break)
    // divInside.appendChild(title)
    // div.appendChild(line_break)
    // divInside.appendChild(text)
    // div.appendChild(document.createTextNode(categories[index].name[navigator.language.split('-')[0]]));
    // li.setAttribute("data-filter", index + 1);


    // -------------------------------------------- [ LAST ] ------------------------------------------------
    // console.log("navigator.language.split('-')[0] : ", document.getElementsByTagName('html')[0].getAttribute('lang'))
    var div = document.createElement("div")
    div.classList.add('filtr-item','cards-project','col-md-4','col-sm-6','col-12','mt-4')
    div.setAttribute('data-category', project_list[index]['data-category'])
    div.setAttribute('data-title', project_list[index].title[lang])
    // div.style.background = "url(https://www.devaradise.com/id/wp-content/uploads/sites/4/2018/07/128-web-300x171.jpg) no-repeat"
    div.style.background = "url(../img/projects_images/"+project_list[index].image_basic+") no-repeat"
    div.style.backgroundSize = "cover"
    div.style.backgroundPosition = "center"

    var divInside = document.createElement("div")
    divInside.classList.add('inside-project-card')

    var link = document.createElement("a")
    link.classList.add('project_details')
    link.href = "/project_details/"+(index+1)
    link.target = "_blank"
    // link.setAttribute('data-bs-toggle', "modal")
    // link.setAttribute('data-bs-target', "#exampleModal2")

    var location_badge = document.createElement("p")
    location_badge.classList.add("badge", "rounded-pill","text-bg-success",'ms-2')
    location_badge.appendChild(document.createTextNode(locations[project_list[index].location].name[lang]))

    var title = document.createElement("span")
    title.classList.add('card-title','fw-bold')
    title.innerHTML = project_list[index].title[lang]
    title.style.fontSize = "13px"

    divInside.appendChild(location_badge)
    divInside.appendChild(title)
    link.appendChild(divInside)
    // div.appendChild(divInside)
    div.appendChild(link)

    // $(div).click(function (e) {
    //     // e.preventDefault();
    //     console.log(index)
    //     load_details()
    //     // link.href = "{{url('/project_details')}}"
    // });

    project_container.appendChild(div)

    // -------------------------------------------- [ LAST ] ------------------------------------------------
}


// ----------------------------- [ MANAGE ITEMS ] -----------------------------

// ----------------------------- [ MANAGE ITEMS ] -----------------------------

// =============================== [ PROJECTS ] ===============================
