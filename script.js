// Sample data for offers
const offers = [
  {
    id: 1,
    name: "Petra Adventure Tour",
    location: "Petra",
    city: "Petra",
    image:
      "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Explore the ancient city of Petra with our guided tour. Walk through the Siq and discover the Treasury, Monastery, and other magnificent structures carved into rose-colored rock.",
    discount: 34,
    category: "Tourism",
    rating: 4.8,
    reviewCount: 245,
    expirationDate: "2023-12-31",
    details:
      "Experience the wonder of Petra, one of the New Seven Wonders of the World. This full-day tour includes transportation from Amman, entrance fees, a professional guide, and lunch at a local restaurant. You'll explore the ancient Nabatean city, walking through the famous Siq canyon to the Treasury, and continuing to the Royal Tombs, the Colonnaded Street, and the Monastery.",
    reviews: [
      {
        name: "Sarah M.",
        rating: 5,
        comment: "Absolutely breathtaking! Our guide was knowledgeable and made the history come alive.",
      },
      {
        name: "John D.",
        rating: 4,
        comment: "Great experience, though it was quite crowded. The Treasury at sunrise was magical.",
      },
      {
        name: "Ahmed K.",
        rating: 5,
        comment: "Worth every penny! The lunch was delicious and the tour was well organized.",
      },
    ],
  },
  {
    id: 2,
    name: "Dead Sea Spa Day",
    location: "Dead Sea",
    city: "Dead Sea",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Relax and rejuvenate with a luxury spa day at the Dead Sea. Float in the mineral-rich waters and enjoy a mud treatment.",
    discount: 29,
    category: "Tourism",
    rating: 4.6,
    reviewCount: 189,
    expirationDate: "2023-11-30",
    details:
      "Indulge in a day of relaxation at the lowest point on Earth. This package includes access to a premium resort on the Dead Sea shore, where you can float effortlessly in the salt-rich waters, apply the famous mineral-rich mud, and enjoy spa facilities including pools, saunas, and steam rooms. A buffet lunch is included, featuring local and international cuisine.",
    reviews: [
      { name: "Lisa R.", rating: 5, comment: "The most relaxing day! The mud treatment left my skin feeling amazing." },
      { name: "Michael T.", rating: 4, comment: "Great facilities and beautiful views. The buffet was excellent." },
      { name: "Fatima H.", rating: 5, comment: "Therapeutic and rejuvenating experience. Will definitely come back!" },
    ],
  },
  {
    id: 3,
    name: "Wadi Rum Desert Camp",
    location: "Wadi Rum",
    city: "Wadi Rum",
    image:
      "https://images.unsplash.com/photo-1547636780-e41778614c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    description:
      "Experience Bedouin hospitality in the heart of the desert. Enjoy stargazing, traditional meals, and a jeep tour.",
    discount: 20,
    category: "Tourism",
    rating: 4.9,
    reviewCount: 312,
    expirationDate: "2023-10-15",
    details:
      "Immerse yourself in the stunning landscape of Wadi Rum, known as the Valley of the Moon. This overnight experience includes accommodation in a traditional Bedouin camp with comfortable beds and private facilities. You'll enjoy a sunset jeep tour through the desert, a traditional Zarb dinner (meat and vegetables cooked underground), and evening entertainment with Bedouin music around the campfire. Wake up to a beautiful desert sunrise before returning.",
    reviews: [
      {
        name: "David L.",
        rating: 5,
        comment: "The night sky was incredible! The camp was comfortable and the food was delicious.",
      },
      {
        name: "Emma S.",
        rating: 5,
        comment: "Magical experience. The Bedouin hosts were so welcoming and the jeep tour was thrilling.",
      },
      {
        name: "Omar J.",
        rating: 4,
        comment: "Great authentic experience. Just bring warm clothes as it gets cold at night.",
      },
    ],
  },
  {
    id: 4,
    name: "Amman City Tour",
    location: "Amman",
    city: "Amman",
    image:
      "https://images.unsplash.com/photo-1534240159986-e7e2f98c4863?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "Discover the highlights of Jordan's capital city, including the Citadel, Roman Theater, and vibrant souks.",
    discount: 26,
    category: "Tourism",
    rating: 4.5,
    reviewCount: 178,
    expirationDate: "2023-12-15",
    details:
      "Explore the fascinating city of Amman with this comprehensive guided tour. Visit the historic Citadel with its Temple of Hercules and Umayyad Palace, the well-preserved Roman Theater, and the Jordan Museum housing the Dead Sea Scrolls. Wander through traditional souks and modern shopping districts, and enjoy lunch at a local restaurant serving authentic Jordanian cuisine. The tour also includes visits to King Abdullah Mosque and the Royal Automobile Museum.",
    reviews: [
      {
        name: "Robert K.",
        rating: 4,
        comment: "Informative tour with a great guide. The Citadel views were spectacular.",
      },
      {
        name: "Noor A.",
        rating: 5,
        comment: "Excellent way to see the highlights of Amman in one day. Loved the local lunch!",
      },
      {
        name: "Patricia M.",
        rating: 4,
        comment: "Very educational and well-paced tour. The Roman Theater was impressive.",
      },
    ],
  },
  {
    id: 5,
    name: "Jerash Ancient City Tour",
    location: "Jerash",
    city: "Jerash",
    image:
      "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    description: "Step back in time at one of the best-preserved Roman provincial cities in the world.",
    discount: 23,
    category: "Tourism",
    rating: 4.7,
    reviewCount: 156,
    expirationDate: "2023-11-20",
    details:
      "Visit the remarkable ancient city of Jerash, often called the 'Pompeii of the East'. This half-day tour takes you through the incredibly well-preserved Roman ruins, including Hadrian's Arch, the Temple of Artemis, the Forum, and the Cardo Maximus with its original stone paving and columns. You'll witness a reenactment of Roman chariot races and gladiator fights at the Hippodrome (subject to schedule). Transportation from Amman and entrance fees are included.",
    reviews: [
      {
        name: "Thomas B.",
        rating: 5,
        comment: "The ruins are extensive and impressive. Our guide really brought ancient Jerash to life.",
      },
      {
        name: "Layla M.",
        rating: 4,
        comment: "Beautiful site with amazing columns and plazas. The chariot show was entertaining.",
      },
      {
        name: "George P.",
        rating: 5,
        comment: "One of the highlights of our Jordan trip. Much more impressive than I expected.",
      },
    ],
  },
  {
    id: 6,
    name: "Aqaba Snorkeling Adventure",
    location: "Aqaba",
    city: "Aqaba",
    image:
      "https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "Explore the vibrant coral reefs of the Red Sea with a guided snorkeling trip from Aqaba.",
    discount: 28,
    category: "Tourism",
    rating: 4.8,
    reviewCount: 203,
    expirationDate: "2023-10-30",
    details:
      "Discover the underwater wonders of the Red Sea with this snorkeling adventure from Aqaba. The package includes transportation to the best snorkeling spots, professional guides, all necessary equipment, and a seafood lunch on board. You'll have the opportunity to see colorful coral reefs, tropical fish, and possibly even sea turtles and rays. No previous snorkeling experience is required, and safety instructions are provided.",
    reviews: [
      {
        name: "Jennifer H.",
        rating: 5,
        comment: "Amazing marine life! We saw so many colorful fish and even a sea turtle.",
      },
      {
        name: "Khalid S.",
        rating: 4,
        comment: "Great experience for beginners. The guides were helpful and the equipment was good quality.",
      },
      {
        name: "Maria C.",
        rating: 5,
        comment: "The coral reefs were stunning. Lunch on the boat was delicious and fresh.",
      },
    ],
  },
  {
    id: 7,
    name: "Al-Ahliyya Amman University",
    location: "Amman",
    city: "Amman",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Special discount on tuition fees for new students enrolling in the upcoming semester.",
    discount: 15,
    category: "Schools",
    rating: 4.3,
    reviewCount: 112,
    expirationDate: "2023-09-30",
    details:
      "Al-Ahliyya Amman University is offering a special discount for new students. This offer includes reduced registration fees and a discount on the first semester's tuition. The university offers a wide range of undergraduate and graduate programs in various fields including Business, Engineering, Arts, and Medicine. Campus facilities include modern classrooms, laboratories, libraries, and recreational areas.",
    reviews: [
      { name: "Rami K.", rating: 5, comment: "Great university with excellent faculty and modern facilities." },
      { name: "Lina S.", rating: 4, comment: "Good academic programs and a nice campus environment." },
      { name: "Hassan M.\", rating: 4, comment: \"The discount made a big difference for my family. Quality "},
      { name: "Hassan M.", rating: 4, comment: "The discount made a big difference for my family. Quality education at a more affordable price." }
    ],
  },
  {
    id: 8,
    name: "Jordan International School",
    location: "Amman",
    city: "Amman",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Early registration discount for the upcoming academic year with special rates for siblings.",
    discount: 20,
    category: "Schools",
    rating: 4.7,
    reviewCount: 89,
    expirationDate: "2023-08-15",
    details:
      "Jordan International School is offering an early registration discount for the upcoming academic year. Families who register before the deadline will receive a 20% discount on registration fees. Additionally, there's a special sibling discount available. The school offers the International Baccalaureate program with state-of-the-art facilities including science labs, art studios, sports fields, and a swimming pool.",
    reviews: [
      {
        name: "Amal J.",
        rating: 5,
        comment: "Excellent curriculum and caring teachers. My children love this school.",
      },
      { name: "Mark T.", rating: 4, comment: "Great international environment and good academic standards." },
      { name: "Laila R.", rating: 5, comment: "The discount for siblings was very helpful for our family budget." },
    ],
  },
  {
    id: 9,
    name: "Arab Medical Center",
    location: "Amman",
    city: "Amman",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Special rates on comprehensive health check-ups and consultations with specialists.",
    discount: 30,
    category: "Hospitals",
    rating: 4.6,
    reviewCount: 203,
    expirationDate: "2023-10-31",
    details:
      "The Arab Medical Center is offering special rates on comprehensive health check-ups and specialist consultations. This package includes a complete physical examination, blood tests, ECG, chest X-ray, and consultations with specialists in internal medicine, cardiology, and nutrition. The center is equipped with the latest medical technology and staffed by highly qualified healthcare professionals.",
    reviews: [
      {
        name: "Sami H.",
        rating: 5,
        comment: "Excellent service and very professional staff. The discount made the check-up affordable.",
      },
      {
        name: "Rania M.",
        rating: 4,
        comment: "Clean facilities and efficient service. Doctors were knowledgeable and attentive.",
      },
      {
        name: "Ibrahim K.",
        rating: 5,
        comment: "Great value with the discount. Comprehensive tests and clear explanations from doctors.",
      },
    ],
  },
  {
    id: 10,
    name: "Jordan Hospital",
    location: "Amman",
    city: "Amman",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Discounted rates on dental services including check-ups, cleanings, and cosmetic procedures.",
    discount: 25,
    category: "Hospitals",
    rating: 4.5,
    reviewCount: 178,
    expirationDate: "2023-11-15",
    details:
      "Jordan Hospital is offering discounted rates on a wide range of dental services. This offer includes dental check-ups, professional cleanings, fillings, and cosmetic procedures such as teeth whitening and veneers. The dental department is staffed by experienced dentists and equipped with modern dental technology to ensure comfortable and effective treatments.",
    reviews: [
      { name: "Nadia S.", rating: 4, comment: "Professional dental service at a reasonable price with the discount." },
      {
        name: "Omar T.",
        rating: 5,
        comment: "Excellent dental care. The staff was friendly and the facilities were very clean.",
      },
      {
        name: "Yasmin A.",
        rating: 4,
        comment: "Good experience overall. The discount made the dental work much more affordable.",
      },
    ],
  },
  {
    id: 11,
    name: "Levant Restaurant",
    location: "Amman",
    city: "Amman",
    image:
      "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Traditional Jordanian cuisine with a modern twist. Special discount on dinner menu items.",
    discount: 20,
    category: "Restaurants",
    rating: 4.8,
    reviewCount: 245,
    expirationDate: "2023-12-31",
    details:
      "Levant Restaurant offers authentic Jordanian and Levantine cuisine with a contemporary presentation. The restaurant is offering a special discount on all dinner menu items. Signature dishes include mansaf, makloubeh, and a variety of mezze. The restaurant features traditional décor with modern touches, creating a warm and inviting atmosphere for diners.",
    reviews: [
      {
        name: "Fadi M.",
        rating: 5,
        comment: "Delicious authentic food and great service. The discount was a nice bonus!",
      },
      {
        name: "Sarah J.",
        rating: 4,
        comment: "Lovely atmosphere and tasty traditional dishes. Good value with the offer.",
      },
      { name: "Khalid R.", rating: 5, comment: "Best mansaf in Amman! The discount made it even more enjoyable." },
    ],
  },
  {
    id: 12,
    name: "Petra Kitchen",
    location: "Petra",
    city: "Petra",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Enjoy traditional Jordanian cooking classes and dinner with a special discount for groups.",
    discount: 15,
    category: "Restaurants",
    rating: 4.7,
    reviewCount: 156,
    expirationDate: "2023-11-30",
    details:
      "Petra Kitchen offers a unique culinary experience combining cooking classes with dinner. Learn to prepare traditional Jordanian dishes under the guidance of local chefs, then enjoy the meal you've created. This offer includes a special discount for groups of four or more. The experience takes place in a charming setting near the ancient city of Petra.",
    reviews: [
      {
        name: "Emma L.",
        rating: 5,
        comment: "Such a fun experience! Learned to make delicious local dishes and had a great time.",
      },
      {
        name: "Mohammed S.",
        rating: 4,
        comment: "Informative cooking class and the food was excellent. Good value with the group discount.",
      },
      {
        name: "Julia R.",
        rating: 5,
        comment: "Highlight of our trip to Petra. The chef was knowledgeable and entertaining.",
      },
    ],
  },
]

// City data
const cities = [
  {
    name: "Amman",
    image:
      "https://images.unsplash.com/photo-1534240159986-e7e2f98c4863?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Jordan's capital with modern and ancient attractions",
    offerCount: offers.filter((offer) => offer.city === "Amman").length,
  },
  {
    name: "Petra",
    image:
      "https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Ancient city carved into rose-colored rock",
    offerCount: offers.filter((offer) => offer.city === "Petra").length,
  },
  {
    name: "Dead Sea",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Lowest point on Earth with mineral-rich waters",
    offerCount: offers.filter((offer) => offer.city === "Dead Sea").length,
  },
  {
    name: "Aqaba",
    image: "https://images.unsplash.com/photo-1544551763-92ab472cad5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    description: "Coastal city with beautiful Red Sea beaches",
    offerCount: offers.filter((offer) => offer.city === "Aqaba").length,
  },
  {
    name: "Jerash",
    image: "https://images.unsplash.com/photo-1562979314-bee7453e911c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1374&q=80",
    description: "Well-preserved ancient Roman ruins",
    offerCount: offers.filter((offer) => offer.city === "Jerash").length,
  },
  {
    name: "Wadi Rum",
    image: "https://images.unsplash.com/photo-1547636780-e41778614c28?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80",
    description: "Dramatic desert landscape with Bedouin culture",
    offerCount: offers.filter((offer) => offer.city === "Wadi Rum").length,
  },
]

// Function to generate star rating HTML
function generateStarRating(rating) {
  let starsHTML = ""
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 >= 0.5

  for (let i = 0; i < 5; i++) {
    if (i < fullStars) {
      starsHTML += '<i class="fas fa-star"></i>'
    } else if (i === fullStars && halfStar) {
      starsHTML += '<i class="fas fa-star-half-alt"></i>'
    } else {
      starsHTML += '<i class="far fa-star"></i>'
    }
  }

  return starsHTML
}

// Function to format date
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

// Function to get category badge HTML
function getCategoryBadge(category) {
  const categoryClass = category.toLowerCase()
  return `<span class="category-badge ${categoryClass}">${category}</span>`
}

// Function to display city cards
function displayCities() {
  const citiesContainer = document.getElementById("cities-container")

  if (citiesContainer) {
    citiesContainer.innerHTML = ""

    cities.forEach((city) => {
      const cityHTML = `
        <div class="col-md-4 col-sm-6">
          <div class="city-card" data-city="${city.name}">
            <img src="${city.image}" alt="${city.name}">
            <div class="city-badge">${city.offerCount} offers</div>
            <div class="city-overlay">
              <h4>${city.name}</h4>
              <p>${city.description}</p>
            </div>
          </div>
        </div>
      `

      citiesContainer.innerHTML += cityHTML
    })

    // Add event listeners to city cards
    document.querySelectorAll(".city-card").forEach((card) => {
      card.addEventListener("click", function () {
        const cityName = this.getAttribute("data-city")

        // Clear all location checkboxes
        document.querySelectorAll(".location-filter").forEach((checkbox) => {
          checkbox.checked = false
        })

        // Check the selected city's checkbox
        const cityCheckbox = document.querySelector(`.location-filter[value="${cityName}"]`)
        if (cityCheckbox) {
          cityCheckbox.checked = true

          // Trigger filtering
          filterOffers()
        }
      })
    })
  }
}

// Function to display offers on the main page
function displayOffers(filteredOffers = offers) {
  const offersContainer = document.getElementById("offers-container")
  const noResultsElement = document.getElementById("no-results")

  if (offersContainer) {
    offersContainer.innerHTML = ""

    if (filteredOffers.length === 0) {
      noResultsElement.classList.remove("d-none")
    } else {
      noResultsElement.classList.add("d-none")

      filteredOffers.forEach((offer) => {
        const offerHTML = `
          <div class="col-md-6 col-lg-4 mb-4">
             <div class="card offer-card">
              <div class="discount-badge">-${offer.discount}%</div>
              <img src="${offer.image}" class="card-img-top" alt="${offer.name}" style="width: 100%; height: 200px; object-fit: cover;">
              <div class="card-body">
          <h5 class="card-title">${offer.name}</h5>
          <p class="card-text text-muted"><i class="fas fa-map-marker-alt me-2"></i>${offer.location}</p>
          ${getCategoryBadge(offer.category)}
          <div class="mb-2 star-rating">
            ${generateStarRating(offer.rating)}
            <span class="ms-2 text-muted">(${offer.reviewCount} reviews)</span>
          </div>
          <p class="card-text">${offer.description.substring(0, 100)}${offer.description.length > 100 ? "..." : ""}</p>
          <p class="expiration">Expires: ${formatDate(offer.expirationDate)}</p>
          <div class="d-flex justify-content-between align-items-center mt-auto">
            <a href="details.html?id=${offer.id}" class="btn btn-primary">Details</a>
          </div>
              </div>
            </div>
          </div>
        `

        offersContainer.innerHTML += offerHTML
      })
    }
  }
}

// Function to filter offers based on selected filters
function filterOffers() {
  // Get selected categories
  const selectedCategories = Array.from(document.querySelectorAll(".category-filter:checked")).map(
    (checkbox) => checkbox.value,
  )

  // Get selected locations
  const selectedLocations = Array.from(document.querySelectorAll(".location-filter:checked")).map(
    (checkbox) => checkbox.value,
  )

  // Filter offers
  let filteredOffers = offers

  if (selectedCategories.length > 0) {
    filteredOffers = filteredOffers.filter((offer) => selectedCategories.includes(offer.category))
  }

  if (selectedLocations.length > 0) {
    filteredOffers = filteredOffers.filter((offer) => selectedLocations.includes(offer.city))
  }

  // Display filtered offers
  displayOffers(filteredOffers)
}

// Function to sort offers
function sortOffers(sortType) {
  // Get currently filtered offers
  const selectedCategories = Array.from(document.querySelectorAll(".category-filter:checked")).map(
    (checkbox) => checkbox.value,
  )
  const selectedLocations = Array.from(document.querySelectorAll(".location-filter:checked")).map(
    (checkbox) => checkbox.value,
  )

  let filteredOffers = offers

  if (selectedCategories.length > 0) {
    filteredOffers = filteredOffers.filter((offer) => selectedCategories.includes(offer.category))
  }

  if (selectedLocations.length > 0) {
    filteredOffers = filteredOffers.filter((offer) => selectedLocations.includes(offer.city))
  }

  // Sort offers
  switch (sortType) {
    case "discount-high":
      filteredOffers.sort((a, b) => b.discount - a.discount)
      break
    case "discount-low":
      filteredOffers.sort((a, b) => a.discount - b.discount)
      break
    case "newest":
      filteredOffers.sort((a, b) => new Date(b.expirationDate) - new Date(a.expirationDate))
      break
    default:
      break
  }

  // Display sorted offers
  displayOffers(filteredOffers)
}

// Function to display offer details on the details page
function displayOfferDetails() {
  const offerDetailsContainer = document.getElementById("offer-details")
  const relatedOffersContainer = document.getElementById("related-offers")

  if (offerDetailsContainer) {
    // Get the offer ID from the URL
    const urlParams = new URLSearchParams(window.location.search)
    const offerId = Number.parseInt(urlParams.get("id"))

    // Find the offer with the matching ID
    const offer = offers.find((o) => o.id === offerId)

    if (offer) {
      // Generate reviews HTML
      let reviewsHTML = ""
      offer.reviews.forEach((review) => {
        reviewsHTML += `
          <div class="review-card">
            <div class="d-flex justify-content-between">
              <h6 class="mb-1">${review.name}</h6>
              <div class="star-rating">
                ${generateStarRating(review.rating)}
              </div>
            </div>
            <p class="mb-0">${review.comment}</p>
          </div>
        `
      })

      // Display offer details
      offerDetailsContainer.innerHTML = `
        <div class="col-lg-8">
          <img src="${offer.image}" alt="${offer.name}" class="detail-img mb-4">
          <h2>${offer.name}</h2>
          <p class="text-muted"><i class="fas fa-map-marker-alt me-2"></i>${offer.location}</p>
          ${getCategoryBadge(offer.category)}
          <div class="mb-3 star-rating">
            ${generateStarRating(offer.rating)}
            <span class="ms-2 text-muted">(${offer.reviewCount} reviews)</span>
          </div>
          <div class="alert alert-danger d-inline-block">
            <i class="far fa-clock me-2"></i>Offer expires on ${formatDate(offer.expirationDate)}
          </div>
          <h4 class="mt-4">Description</h4>
          <p>${offer.details}</p>
          
          <h4 class="mt-4">Location</h4>
          <div class="map-container mb-4">
            <iframe 
              width="100%" 
              height="100%" 
              frameborder="0" 
              scrolling="no" 
              marginheight="0" 
              marginwidth="0" 
              src="https://maps.google.com/maps?q=${encodeURIComponent(offer.location + ", Jordan")}&t=m&z=10&output=embed">
            </iframe>
          </div>
          
          <h4 class="mt-4">Reviews</h4>
          <div class="reviews-container">
            ${reviewsHTML}
          </div>
        </div>
        <div class="col-lg-4">
          <div class="card sticky-top" style="top: 20px;">
            <div class="card-body">
              <h5 class="card-title">Discount</h5>
              <div class="d-flex align-items-center mb-3">
                <span class="fs-3 fw-bold">${offer.discount}% OFF</span>
              </div>
              <button class="btn btn-primary w-100 mb-3">Claim Offer</button>
              <button class="btn btn-outline-secondary w-100">
                <i class="far fa-heart me-2"></i>Save for Later
              </button>
              <hr>
              <h6>Share this offer:</h6>
              <div class="social-share">
                <a href="#" class="btn btn-outline-primary me-2"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="btn btn-outline-info me-2"><i class="fab fa-twitter"></i></a>
                <a href="#" class="btn btn-outline-success"><i class="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
      `

      // Display related offers (excluding the current one)
      if (relatedOffersContainer) {
        // Get offers in the same category or location
        const relatedOffers = offers
          .filter((o) => o.id !== offerId && (o.category === offer.category || o.location === offer.location))
          .sort(() => 0.5 - Math.random()) // Shuffle array
          .slice(0, 3) // Get first 3 items

        relatedOffersContainer.innerHTML = ""

        relatedOffers.forEach((relatedOffer) => {
          const relatedOfferHTML = `
            <div class="col-md-4 mb-4">
              <div class="card offer-card">
                <div class="discount-badge">-${relatedOffer.discount}%</div>
                <img src="${relatedOffer.image}" class="card-img-top" alt="${relatedOffer.name}">
                <div class="card-body">
                  <h5 class="card-title">${relatedOffer.name}</h5>
                  <p class="card-text text-muted"><i class="fas fa-map-marker-alt me-2"></i>${relatedOffer.location}</p>
                  ${getCategoryBadge(relatedOffer.category)}
                  <div class="mb-2 star-rating">
                    ${generateStarRating(relatedOffer.rating)}
                  </div>
                  <div class="d-flex justify-content-between align-items-center mt-auto">
                    <a href="details.html?id=${relatedOffer.id}" class="btn btn-sm btn-primary">Details</a>
                  </div>
                </div>
              </div>
            </div>
          `

          relatedOffersContainer.innerHTML += relatedOfferHTML
        })
      }
    } else {
      offerDetailsContainer.innerHTML = `
        <div class="col-12">
          <div class="alert alert-warning">
            <h4>Offer Not Found</h4>
            <p>Sorry, the offer you're looking for could not be found.</p>
            <a href="index.html" class="btn btn-primary">Return to Offers</a>
          </div>
        </div>
      `
    }
  }
}

// Initialize the page
document.addEventListener("DOMContentLoaded", () => {
  // Check which page we're on and call the appropriate function
  if (document.getElementById("offers-container")) {
    // Display cities
    displayCities()

    // Display all offers initially
    displayOffers()

    // Add event listeners for filters
    document.querySelectorAll(".category-filter, .location-filter").forEach((checkbox) => {
      checkbox.addEventListener("change", filterOffers)
    })

    // Add event listener for clear filters button
    document.getElementById("clear-filters").addEventListener("click", () => {
      document.querySelectorAll(".category-filter, .location-filter").forEach((checkbox) => {
        checkbox.checked = false
      })
      displayOffers()
    })

    // Add event listeners for sort options
    document.querySelectorAll(".sort-option").forEach((option) => {
      option.addEventListener("click", function (e) {
        e.preventDefault()
        const sortType = this.getAttribute("data-sort")
        sortOffers(sortType)
      })
    })
  } else if (document.getElementById("offer-details")) {
    displayOfferDetails()
  }
})
