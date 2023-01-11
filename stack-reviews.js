let reviews = [
    {
        id: 1,
        img: "./review-img/rev-1.jpg",
        texts: "Ethical waistcoat stumptown poke franzen. Helvetica 8-bit cardigan lomo +1 jianbing brunch fanny pack live-edge single-origin coffee pok pok banh mi tonx paleo. Cornhole gochujang cold-pressed vape williamsburg bespoke. Af deep v celiac messenger bag selvage chia. Lo-fi freegan pour-over artisan, meggings yes plz whatever fit 3 wolf moon kale chips synth tilde. Man braid lyft snackwave williamsburg, deep v cornhole banjo same cardigan affogato.",
        cname:"ella johnson",
        role: `co-founder paypal`

    },
    {
        id: 2,
        img: "./review-img/rev-2.jpg",
        texts: "Flannel fingerstache venmo banjo tilde roof party iPhone crucifix DIY XOXO vice shaman thundercats farm-to-table. Pinterest cronut yuccie, leggings same truffaut poke venmo actually slow-carb crucifix air plant semiotics you probably haven't heard of them. Selfies sustainable beard roof party gastropub. Quinoa enamel pin subway tile tbh chillwave same. Lyft prism brunch, thundercats cliche taiyaki actually. Stumptown pitchfork raclette paleo cliche chicharrones kogi whatever hammock pour-over chambray vegan everyday carry hell of umami.",
        cname:`david smart`,
        role: `product designer`

    },
    {
        id: 3,
        img: "./review-img/rev-3.jpg",
        texts: `Microdosing swag fanny pack craft beer 90's post-ironic meh put a bird on it blog pinterest kitsch messenger bag air plant wayfarers kickstarter. Hot chicken bushwick selfiesDrinking vinegar trust fund post-ironic tacos vape mustache. Bespoke pug lo-fi pour-over swag cardigan. Shoreditch quinoa fingerstache taxidermy cardigan tattooed disrupt keffiyeh portland succulents. Wolf snackwave fixie swag bicycle rights locavore meggings. Kale chips sus cloud bread, lyft master cleanse beard vinyl. Cold-pressed big mood vibecession, locavore flannel shabby chic hoodie vaporware lumbersexual quinoa mlkshk lo-fi.`,
        cname:`rita mitchell`,
        role: `manager evan boots`

    },
    {
        id: 4,
        img: "./review-img/rev-4.jpg",
        texts: `helvetica retro mukbang locavore cornhole fashion axe kogi biodiesel. Keffiyeh semiotics jean shorts bodega boys before they sold out beard tousled neutra mlkshk meditation snackwave. Quinoa chambray 8-bit, fanny pack plaid meggings flannel. Craft beer cold-pressed bitters scenester la croix live-edge celiac.

        Shaman synth artisan vexillologist keytar post-ironic next level actually JOMO listicle hashtag. Selvage lomo tonx, you probably haven't heard of them vice glossier leggings same heirloom vexillologist. Tumblr kogi crucifix shoreditch taxidermy, adaptogen vexillologist williamsburg. Tattooed cred man braid cliche.`,
        cname:`cynthia norman`,
        role: `accountant dangote group`

    },
    {
        id: 5,
        img: "./review-img/rev-5.jpg",
        texts:`Cold-pressed chia tousled chartreuse tote bag, authentic cardigan. Tonx shoreditch man braid, activated charcoal yr everyday carry cold-pressed bitters. Tofu hella tattooed, jianbing wayfarers pork belly locavore yr DIY try-hard whatever organic thundercats. Pug PBR&B 90's letterpress same post-ironic brunch. DSA keffiyeh kombucha twee retro plaid selvage sus hell of hammock. Man bun 8-bit shabby chic, ascot ennui umami praxis dreamcatcher wolf pabst iceland. Mumblecore poutine etsy, beard authentic copper mug iceland Brooklyn banh mi plaid williamsburg slow-carb wolf.`,
        cname:`nwodoh joseph`,
        role: `web developer`

    }
]
 const img = document.querySelector(".rev-img")
 
 const clientTexts = document.querySelector(".client-texts")
 const clientName = document.querySelector(".client-name")
 const position = document.querySelector(".client-position")
 const arrowRight = document.querySelector(".check-reviews")

window.addEventListener("DOMContentLoaded", function() {
 condition(displayReviews)
})

let displayReviews = 0

function condition(person) {
    let item = reviews[person]
    img.src = item.img
    clientTexts.textContent = item.texts
    clientName.textContent = item.cname
    position.textContent = item.role
}

arrowRight.addEventListener("click", function() {
    displayReviews ++
    if (displayReviews == reviews.length) {
        displayReviews = 0
    }
    condition(displayReviews)
})