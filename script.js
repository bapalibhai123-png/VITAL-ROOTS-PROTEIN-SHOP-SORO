/* =========================================================
   VITAL ROOTS
   DEMO PROTEIN / NUTRITION SHOP

   WhatsApp:
   7077247074
========================================================= */


/* ================= WHATSAPP NUMBER ================= */

const WHATSAPP_NUMBER = "917077247074";


/* =========================================================
   PRODUCT BANK

   FUTURE:
   You only need to edit products here.
========================================================= */

const products = [

  {
    id: 1,

    name: "Whey Protein",

    category: "protein",

    label: "Protein",

    price: "Demo Price",

    image:
      "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=900&q=85",

    short:
      "Protein supplement for daily nutrition and training support.",

    benefits:
      "Provides dietary protein that can help support daily protein intake and muscle recovery when combined with a balanced diet and appropriate exercise.",

    use:
      "Mix the serving amount recommended on the product's original label with water or another suitable beverage. Follow the actual label instructions.",

    ingredients:
      "Demo listing — replace with the exact ingredient list printed on the actual product label.",

    auth:
      "For the final website, add the exact authenticity method available for the product, such as batch/QR verification, invoice information or manufacturer verification."
  },


  {
    id: 2,

    name: "Creatine Monohydrate",

    category: "performance",

    label: "Performance",

    price: "Demo Price",

    image:
      "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=900&q=85",

    short:
      "A popular sports-nutrition ingredient used around strength training.",

    benefits:
      "Creatine monohydrate is commonly used to support repeated high-intensity exercise performance and training capacity.",

    use:
      "Use the serving and timing recommended on the actual product label. Maintain normal hydration and follow professional advice when needed.",

    ingredients:
      "Demo listing — replace with the exact ingredient and allergen information from the product label.",

    auth:
      "Add the product's actual batch, seal, QR or manufacturer verification information before publishing."
  },


  {
    id: 3,

    name: "Mass Gainer",

    category: "protein",

    label: "Weight Support",

    price: "Demo Price",

    image:
      "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=900&q=85",

    short:
      "Calorie and protein-focused nutrition product for active users.",

    benefits:
      "Can help increase calorie and protein intake as part of an overall nutrition plan when extra energy intake is appropriate.",

    use:
      "Prepare according to the actual serving instructions on the label. Serving size can vary significantly between products.",

    ingredients:
      "Demo listing — replace with the exact protein sources, carbohydrate sources, flavors and other ingredients from the label.",

    auth:
      "Final listing should include the real manufacturer's authenticity verification details."
  },


  {
    id: 4,

    name: "Fish Oil Omega-3",

    category: "wellness",

    label: "Wellness",

    price: "Demo Price",

    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&w=900&q=85",

    short:
      "Omega-3 supplement for users who choose fish-oil nutrition products.",

    benefits:
      "Provides omega-3 fatty acids such as EPA and DHA. Exact amounts depend on the product label.",

    use:
      "Take only according to the actual product label. Check the label for serving size and EPA/DHA amounts.",

    ingredients:
      "Demo listing — replace with the exact oil source, EPA, DHA, capsule ingredients and allergen details.",

    auth:
      "Add actual manufacturer, batch and verification information for the final product listing."
  },


  {
    id: 5,

    name: "Daily Multivitamin",

    category: "wellness",

    label: "Vitamins",

    price: "Demo Price",

    image:
      "https://images.unsplash.com/photo-1550572017-edd951aa8ca2?auto=format&fit=crop&w=900&q=85",

    short:
      "A multivitamin/mineral product for convenient daily nutrition support.",

    benefits:
      "Can provide selected vitamins and minerals when used as directed. It should complement, not replace, a balanced diet.",

    use:
      "Follow the serving instructions on the actual label and do not exceed the stated dose.",

    ingredients:
      "Demo listing — replace with the exact vitamin, mineral and other ingredient panel from the product label.",

    auth:
      "Use the actual manufacturer's authenticity verification details on the final listing."
  },


  {
    id: 6,

    name: "Pre-Workout",

    category: "performance",

    label: "Training",

    price: "Demo Price",

    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=85",

    short:
      "Sports-nutrition product designed for use around training.",

    benefits:
      "Formulas vary widely. Depending on the ingredients, pre-workout products may be used to support alertness, focus or training performance.",

    use:
      "Follow the exact label directions. Check caffeine content if present and avoid exceeding the stated serving.",

    ingredients:
      "Demo listing — replace with the exact ingredient panel and caffeine amount, if any.",

    auth:
      "Add the actual seal, batch, QR or manufacturer verification information."
  }

];



/* ================= PRODUCT GRID ================= */

const grid =
  document.getElementById("productGrid");


function renderProducts(category = "all") {

  const list =
    category === "all"
      ? products
      : products.filter(
          p => p.category === category
        );


  grid.innerHTML = list.map(p => `

    <article
      class="product-card"
      onclick="openProduct(${p.id})"
    >

      <img
        class="product-img"
        src="${p.image}"
        alt="${p.name}"
        loading="lazy"

        onerror="
          this.src='https://placehold.co/900x700/111713/55d68a?text=Vital+Roots'
        "
      >


      <div class="product-info">

        <span class="pill">
          ${p.label}
        </span>


        <h3>
          ${p.name}
        </h3>


        <p>
          ${p.short}
        </p>


        <div class="price-row">

          <span class="price">
            ${p.price}
          </span>

          <span class="view-btn">
            View Details →
          </span>

        </div>

      </div>

    </article>

  `).join("");

}



/* ================= MODAL ================= */

const modal =
  document.getElementById("productModal");



function openProduct(id) {

  const p =
    products.find(
      x => x.id === id
    );


  if (!p) return;


  document.getElementById("modalImage").src =
    p.image;


  document.getElementById("modalImage").alt =
    p.name;


  document.getElementById("modalCategory").textContent =
    p.label;


  document.getElementById("modalName").textContent =
    p.name;


  document.getElementById("modalPrice").textContent =
    p.price;


  document.getElementById("modalBenefits").textContent =
    p.benefits;


  document.getElementById("modalUse").textContent =
    p.use;


  document.getElementById("modalIngredients").textContent =
    p.ingredients;


  document.getElementById("modalAuth").textContent =
    p.auth;



  /* ================= PRODUCT WHATSAPP ================= */

  document.getElementById("modalOrder").onclick = () => {

    const message =

`Welcome to Vital Roots! 🌿

Thank you for choosing Vital Roots.
We provide authentic and quality nutrition products.

Vital Roots କୁ ସ୍ୱାଗତ! 🌿

ଆମ ପାଖରେ authentic ଏବଂ quality nutrition products ଉପଲବ୍ଧ ଅଛି।

🛒 Product: ${p.name}

💰 Price: ${p.price}

I would like to order this product.
Please share availability and delivery details.

ମୁଁ ଏହି product ଅର୍ଡର କରିବାକୁ ଚାହୁଁଛି।
ଦୟାକରି availability ଏବଂ delivery details ଜଣାନ୍ତୁ।

Thank you — Vital Roots 🌿`;


    openWhatsApp(message);

  };



  modal.classList.add("show");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow =
    "hidden";

}



/* ================= CLOSE MODAL ================= */

function closeModal() {

  modal.classList.remove("show");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.style.overflow =
    "";

}



/* ================= WHATSAPP ================= */

function openWhatsApp(message) {

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;


  window.open(
    url,
    "_blank"
  );

}



/* ================= CATEGORY FILTER ================= */

document
  .querySelectorAll(".filter")
  .forEach(btn => {

    btn.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(".filter")
          .forEach(
            b =>
              b.classList.remove("active")
          );


        btn.classList.add("active");


        renderProducts(
          btn.dataset.category
        );

      }
    );

  });



/* ================= ESCAPE KEY ================= */

document.addEventListener(
  "keydown",
  e => {

    if (e.key === "Escape") {

      closeModal();

    }

  }
);



/* ================= START WEBSITE ================= */

renderProducts();