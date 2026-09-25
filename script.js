/* =====================================================
   VITAL ROOTS
   MOBILE-FIRST NUTRITION SHOP
===================================================== */


/* ================= SHOP DETAILS ================= */

const WHATSAPP_NUMBER = "917077247074";

const SHOP_NAME = "Vital Roots";

const SHOP_LOCATION = "Soro, Odisha";



/* ================= PRODUCT DATABASE ================= */

const products = [

    {
        id: 1,

        name: "Whey Protein",

        brand: "MuscleBlaze",

        category: "protein",

        price: "Demo Price",

        image:
        "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=900&q=90",

        description:
        "Quality whey protein for daily protein intake and training support.",

        benefits:
        "Helps support daily protein intake and muscle recovery when combined with proper nutrition and exercise.",

        use:
        "Use according to the serving instructions printed on the actual product label.",

        ingredients:
        "Demo information. Replace this with the exact ingredient list from the original product label.",

        authenticity:
        "For the final website, add the actual manufacturer's batch, QR, seal or authenticity verification method."
    },


    {
        id: 2,

        name: "Gold Standard Whey",

        brand: "Optimum Nutrition",

        category: "protein",

        price: "Demo Price",

        image:
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=900&q=90",

        description:
        "Popular whey protein product for active users.",

        benefits:
        "Provides protein to support daily dietary protein needs and exercise recovery.",

        use:
        "Follow the exact serving instructions printed on the product label.",

        ingredients:
        "Demo information. Add the exact ingredient panel from the product package.",

        authenticity:
        "Use the manufacturer's official verification method and batch information for the final listing."
    },


    {
        id: 3,

        name: "Creatine Monohydrate",

        brand: "AS-IT-IS",

        category: "performance",

        price: "Demo Price",

        image:
        "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=900&q=90",

        description:
        "Creatine monohydrate for strength and high-intensity training support.",

        benefits:
        "Creatine monohydrate is commonly used to support repeated high-intensity exercise performance.",

        use:
        "Follow the exact serving instructions on the actual product label.",

        ingredients:
        "Demo information. Replace with the exact ingredient details printed on the package.",

        authenticity:
        "Add the actual product batch and manufacturer's verification information."
    },


    {
        id: 4,

        name: "Mass Gainer",

        brand: "MuscleTech",

        category: "protein",

        price: "Demo Price",

        image:
        "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=900&q=90",

        description:
        "Calorie and protein-focused nutrition product.",

        benefits:
        "Can help increase calorie and protein intake when additional energy intake is appropriate.",

        use:
        "Prepare according to the actual serving instructions on the package.",

        ingredients:
        "Demo information. Replace with the exact protein, carbohydrate and other ingredients.",

        authenticity:
        "Add the actual manufacturer's authentication information before publishing."
    },


    {
        id: 5,

        name: "Daily Multivitamin",

        brand: "GNC",

        category: "wellness",

        price: "Demo Price",

        image:
        "https://images.unsplash.com/photo-1550572017-edd951aa8ca2?auto=format&fit=crop&w=900&q=90",

        description:
        "Daily vitamin and mineral nutrition support.",

        benefits:
        "Can provide selected vitamins and minerals when used as directed as part of a balanced diet.",

        use:
        "Follow the exact serving instructions on the product label.",

        ingredients:
        "Demo information. Replace with the actual vitamin and mineral ingredient panel.",

        authenticity:
        "Add actual manufacturer and product verification details."
    },


    {
        id: 6,

        name: "Whey Protein",

        brand: "Nutrabay",

        category: "protein",

        price: "Demo Price",

        image:
        "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&w=900&q=90",

        description:
        "Protein nutrition product for active lifestyles.",

        benefits:
        "Provides dietary protein to help meet daily protein requirements.",

        use:
        "Use according to the instructions printed on the actual product.",

        ingredients:
        "Demo information. Replace with exact label ingredients.",

        authenticity:
        "Add the actual manufacturer's authentication process."
    }

];



/* ================= PRODUCT GRID ================= */

const productGrid =
    document.getElementById("productGrid");



function renderProducts(
    brand = "all"
) {

    let list = products;


    if (brand !== "all") {

        list = products.filter(
            product =>
                product.brand === brand
        );

    }


    if (list.length === 0) {

        list = products;

    }


    productGrid.innerHTML = list.map(product => `

        <article
            class="product-card"
            onclick="openProduct(${product.id})"
        >

            <img
                class="product-image"
                src="${product.image}"
                alt="${product.name}"
                loading="lazy"

                onerror="
                this.src='https://placehold.co/800x800/101612/52d889?text=Vital+Roots'
                "
            >


            <div class="product-info">

                <span class="product-brand">
                    ${product.brand}
                </span>


                <h3 class="product-name">
                    ${product.name}
                </h3>


                <p class="product-desc">
                    ${product.description}
                </p>


                <div class="product-bottom">

                    <span class="product-price">
                        ${product.price}
                    </span>


                    <span class="details">
                        DETAILS →
                    </span>

                </div>

            </div>

        </article>

    `).join("");

}



/* ================= BRAND FILTER ================= */

function filterBrand(brand) {

    renderProducts(brand);

    document
        .getElementById("products")
        .scrollIntoView({
            behavior: "smooth"
        });

}



/* ================= PRODUCT MODAL ================= */

const modal =
    document.getElementById("productModal");



function openProduct(id) {

    const product =
        products.find(
            item => item.id === id
        );


    if (!product) return;


    document.getElementById(
        "detailImage"
    ).src = product.image;


    document.getElementById(
        "detailImage"
    ).alt = product.name;


    document.getElementById(
        "detailBrand"
    ).textContent = product.brand;


    document.getElementById(
        "detailName"
    ).textContent = product.name;


    document.getElementById(
        "detailPrice"
    ).textContent = product.price;


    document.getElementById(
        "detailBenefits"
    ).textContent = product.benefits;


    document.getElementById(
        "detailUse"
    ).textContent = product.use;


    document.getElementById(
        "detailIngredients"
    ).textContent = product.ingredients;


    document.getElementById(
        "detailAuth"
    ).textContent = product.authenticity;



    /* ================= WHATSAPP PRODUCT MESSAGE ================= */

    document.getElementById(
        "whatsappProduct"
    ).onclick = function() {

        const message =

`🌿 Welcome to Vital Roots!

Thank you for choosing Vital Roots.
We provide authentic and quality nutrition products.

🙏 Vital Roots କୁ ସ୍ୱାଗତ!

ଆମ ପାଖରେ authentic ଏବଂ quality nutrition products ଉପଲବ୍ଧ ଅଛି।

🛒 Product:
${product.name}

🏷️ Brand:
${product.brand}

💰 Price:
${product.price}

I would like to order this product.
Please confirm availability, final price and delivery details.

ମୁଁ ଏହି product ଅର୍ଡର କରିବାକୁ ଚାହୁଁଛି।
ଦୟାକରି availability, final price ଏବଂ delivery details ଜଣାନ୍ତୁ।

📍 Vital Roots
Soro, Odisha

Thank you! 🌿`;


        openWhatsApp(message);

    };


    modal.classList.add("show");

    document.body.style.overflow =
        "hidden";

}



/* ================= CLOSE PRODUCT ================= */

function closeProduct() {

    modal.classList.remove("show");

    document.body.style.overflow =
        "";

}



/* ================= GENERAL WHATSAPP ================= */

function openGeneralWhatsApp() {

    const message =

`🌿 Welcome to Vital Roots!

Thank you for contacting us.

We provide authentic and quality nutrition products.

🙏 Vital Roots କୁ ସ୍ୱାଗତ!

ଆମେ authentic ଏବଂ quality nutrition products ପ୍ରଦାନ କରୁଛୁ।

I would like to know about your available products, prices and offers.

ମୁଁ ଆପଣଙ୍କ available products, prices ଏବଂ offers ବିଷୟରେ ଜାଣିବାକୁ ଚାହୁଁଛି।

Please share the details.

📍 Vital Roots
Soro, Odisha

Thank you! 🌿`;


    openWhatsApp(message);

}



/* ================= WHATSAPP FUNCTION ================= */

function openWhatsApp(message) {

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);


    window.open(
        url,
        "_blank"
    );

}



/* ================= ESCAPE ================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeProduct();

        }

    }
);



/* ================= START ================= */

renderProducts("all");
