// Hide splash screen after 4 seconds
setTimeout(() => {
  const splash = document.getElementById("splash-screen");
  if (!splash) return;

  splash.style.animation = "fadeOut 1s ease forwards";
  setTimeout(() => {
    splash.style.display = "none";
  }, 1000);
}, 4000);

// Floating Cash
// const openBtn = document.getElementById("openPayment");
// const closeBtn = document.getElementById("closePayment");
// const popupCash = document.getElementById("paymentPopup");
// const overlay = document.getElementById("paymentOverlay");
// const methods = document.querySelectorAll(".payment-method");
// const resultBox = document.getElementById("paymentResult");
// const numberText = document.getElementById("paymentNumber");
// const copyBtn = document.getElementById("copyNumber");
// const copyMsg = document.getElementById("copyMsg");

// openBtn.onclick = () => {
//   popupCash.classList.add("active");
//   overlay.classList.add("active");
// };

// methods.forEach(method => {
//   method.addEventListener("click", () => {
//     const number = method.dataset.number;

//     numberText.textContent = number;
//     resultBox.style.display = "block";
//     copyMsg.style.display = "none";
//   });
// });

// copyBtn.addEventListener("click", () => {
//   navigator.clipboard.writeText(numberText.textContent);
//   copyMsg.style.display = "block";
// });

// function closePopup() {
//   popupCash.classList.remove("active");
//   overlay.classList.remove("active");
// }

// closeBtn.onclick = closePopup;
// overlay.onclick = closePopup;

const openBtn = document.getElementById("openPayment");
const closeBtn = document.getElementById("closePayment");
const popupcash = document.getElementById("paymentPopup");
const overlay = document.getElementById("paymentOverlay");
const details = document.getElementById("paymentDetails");
const toast = document.getElementById("toast");

let toastTimer = null;

openBtn.onclick = () => {
  popupcash.classList.add("active");
  overlay.classList.add("active");
};

function closePopup() {
  popupcash.classList.remove("active");
  overlay.classList.remove("active");
  resetState();
}

closeBtn.onclick = closePopup;
overlay.onclick = closePopup;

function resetState() {
  details.style.display = "none";
  details.innerHTML = "";
  toast.classList.remove("show");
  clearTimeout(toastTimer);
}

function showToast() {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function copyText(text) {
  navigator.clipboard.writeText(text);
  showToast();
}

document.querySelectorAll(".method").forEach((method) => {
  method.onclick = () => {
    const type = method.dataset.type;

    if (type === "vodafone") {
      details.innerHTML = `
  <strong>Vodafone Cash</strong>

  <div class="copy-row" onclick="copyText('01006067349')">
    <span>📞 01006067349</span>
    <i class="fa-regular fa-copy"></i>
  </div>
`;
    }

    if (type === "instapay") {
      details.innerHTML = `
  <strong>InstaPay</strong>

  <div class="copy-row">
    <span>👤 Emad Mohamed Nagib</span>
  </div>

  <div class="copy-row" onclick="copyText('01006067349')">
    <span>🔗 01006067349</span>
    <i class="fa-regular fa-copy"></i>
  </div>
`;
    }

    details.style.display = "block";
  };
});

/* NewYearCode
// Fireworks effect
// const canvas = document.getElementById("fireworks");
// const ctx = canvas.getContext("2d");
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const fireworks = [];
// const particles = [];

// function random(min, max) {
//   return Math.random() * (max - min) + min;
// }

// class Firework {
//   constructor() {
//     this.x = random(0, canvas.width);
//     this.y = canvas.height;
//     this.targetY = random(100, canvas.height / 2);
//     this.speed = random(3, 6);
//     this.exploded = false;
//   }
//   update() {
//     if (!this.exploded) {
//       this.y -= this.speed;
//       if (this.y <= this.targetY) {
//         this.explode();
//         this.exploded = true;
//       }
//     }
//   }
//   explode() {
//     const particleCount = 30;
//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle(this.x, this.y));
//     }
//   }
//   draw() {
//     if (!this.exploded) {
//       ctx.beginPath();
//       ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
//       ctx.fillStyle = "white";
//       ctx.fill();
//     }
//   }
// }

// class Particle {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//     this.speedX = random(-4, 4);
//     this.speedY = random(-4, 4);
//     this.alpha = 1;
//     this.color = `hsl(${random(0, 360)}, 100%, 50%)`;
//   }
//   update() {
//     this.x += this.speedX;
//     this.y += this.speedY;
//     this.alpha -= 0.02;
//   }
//   draw() {
//     ctx.save();
//     ctx.globalAlpha = this.alpha;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//     ctx.restore();
//   }
// }

// function animate() {
//   ctx.fillStyle = "rgba(0,0,0,0.1)";
//   ctx.fillRect(0, 0, canvas.width, canvas.height);

//   if (Math.random() < 0.05) {
//     fireworks.push(new Firework());
//   }

//   fireworks.forEach((fw, i) => {
//     fw.update();
//     fw.draw();
//     if (fw.exploded) fireworks.splice(i, 1);
//   });

//   particles.forEach((p, i) => {
//     p.update();
//     p.draw();
//     if (p.alpha <= 0) particles.splice(i, 1);
//   });

//   requestAnimationFrame(animate);
// }

// animate();
*/

// Close Navbar
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    let navbar = document.querySelector(".navbar-collapse");
    let bsCollapse = new bootstrap.Collapse(navbar, {
      toggle: false,
    });
    bsCollapse.hide();
  });
});

// Active Navbar
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", function () {
    document
      .querySelectorAll(".navbar-nav .nav-link")
      .forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      new bootstrap.Collapse(navbarCollapse).toggle();
    }
  });
});

// Back To Top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 🛒 جلب الكارت من localStorage
function getCart() {
  const data = JSON.parse(localStorage.getItem("cart"));
  if (!data) return [];

  const now = Date.now();
  const expiryTime = 2 * 60 * 60 * 1000; // ساعتين بالملي ثانية

  if (now - data.savedAt > expiryTime) {
    // 🧹 امسح الكارت لو عدّى وقت الصلاحية
    localStorage.removeItem("cart");
    return [];
  }

  return data.items;
}

// 🛒 حفظ الكارت
function saveCart(cart) {
  const data = {
    items: cart,
    savedAt: Date.now(), // وقت الحفظ بالميللي ثانية
  };
  localStorage.setItem("cart", JSON.stringify(data));
}

// 🛒 تحديث العداد
function updateCartCount() {
  const cart = getCart();
  document.getElementById("cart-count").textContent = cart.length;
}

// 🛒 إضافة منتج
function addToCart(product) {
  let cart = getCart();
  const existing = cart.find((item) => item.id === String(product.id));

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, id: String(product.id), qty: 1 }); // 🔴 هنا
  }

  saveCart(cart);
  updateCartCount();
}

// 🛒 حذف منتج
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter((item) => item.id !== String(productId)); // 🔴 هنا
  saveCart(cart);
  updateCartCount();
}

// 🛒 تحديث حالة الأزرار (إضافة / حذف)
function syncButtons() {
  const cart = getCart();
  const buttons = document.querySelectorAll(".btn-add-to-cart");

  buttons.forEach((btn) => {
    const id = String(btn.dataset.id); // 🔴 هنا
    const inCart = cart.some((item) => item.id === id);

    if (inCart) {
      btn.classList.add("added", "btn-danger");
      btn.innerHTML = `<i class="fas fa-trash"></i> حذف`;
    } else {
      btn.classList.remove("added", "btn-danger");
      btn.innerHTML = `<i class="fas fa-plus"></i> إضافة`;
    }
  });
}

// 🛒 Toggle الزرار
document.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn-add-to-cart");
  if (!btn) return;

  const product = {
    id: String(btn.dataset.id), // 🔴 هنا
    name: btn.dataset.name,
    price: parseFloat(btn.dataset.price),
  };

  if (btn.classList.contains("added")) {
    removeFromCart(product.id);
  } else {
    addToCart(product);
  }

  syncButtons(); // بعد أي أكشن نحدث كل الأزرار
});

// 🛒 عرض/إخفاء البوب أب
function togglePopup() {
  const popup = document.getElementById("cart-popup");
  const cart = getCart();

  if (cart.length === 0) {
    popup.style.display = "none";
    return;
  }

  renderCartPopup();
  popup.style.display = popup.style.display === "flex" ? "none" : "flex";
}

// 🛒 إعادة رسم محتويات البوب أب
// 🛒 إعادة رسم محتويات البوب أب
function renderCartPopup() {
  const cart = getCart();
  const cartItemsDiv = document.getElementById("cart-items");
  const totalDiv = document.getElementById("cart-total");
  const popup = document.getElementById("cart-popup");

  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    totalDiv.textContent = "";
    popup.style.display = "none"; // 🔴 قفل البوب أب لو فاضي
    return;
  }

  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
  <h6>${item.name}</h6>
  <div class="cart-item-details">
    <span class="text-warning fw-bold">${item.price} ج</span>
    <div class="qty-control d-flex align-items-center">
      <button class="qty-btn btn btn-sm btn-outline-secondary" onclick="updateQty('${item.id}', -1)">-</button>
      <span>${item.qty}</span>
      <button class="qty-btn btn btn-sm btn-outline-secondary" onclick="updateQty('${item.id}', 1)">+</button>
    </div>
    <span class="fw-bold text-success">${itemTotal} ج</span>
  </div>
`;
    cartItemsDiv.appendChild(div);
  });

  totalDiv.textContent = `الإجمالي: ${total} ج`;
}

// 🛒 تعديل الكمية
function updateQty(productId, change) {
  let cart = getCart();
  const item = cart.find((p) => p.id === String(productId)); // 🔴 هنا
  if (!item) return;

  item.qty += change;

  if (item.qty <= 0) {
    const confirmDelete = confirm("هل تريد حذف المنتج؟");
    if (confirmDelete) {
      cart = cart.filter((p) => String(p.id) !== String(productId));
    } else {
      item.qty = 1;
    }
  }

  saveCart(cart);
  updateCartCount();
  renderCartPopup();
  syncButtons();
}

// 🛒 عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  syncButtons();

  document.getElementById("cart-icon").addEventListener("click", togglePopup);
});

// ✨ إغلاق البوب أب لما تدوس برا المحتوى
// ✨ إغلاق البوب أب لما تدوس على الـ overlay (مش المحتوى)
const popup = document.getElementById("cart-popup");
if (popup) {
  popup.addEventListener("click", (e) => {
    if (e.target === popup) {
      popup.style.display = "none";
    }
  });
}

// 🛒 حذف كل المنتجات
function clearCart() {
  const confirmDelete = confirm(
    "هل أنت متأكد أنك تريد حذف كل المنتجات من السلة؟"
  );
  if (confirmDelete) {
    localStorage.removeItem("cart"); // فضي ال localStorage
    updateCartCount(); // حدث العداد
    syncButtons(); // رجع الأزرار "إضافة"
    const popup = document.getElementById("cart-popup");
    popup.style.display = "none"; // اقفل البوب أب
  }
}


// Ramadan Menu

document.addEventListener("DOMContentLoaded", function () {
  const bg = document.querySelector(".ramadan-bg");
  const icons = ["🌙", "🏮"];
  const count = 22; // عدد الأشكال

  for (let i = 0; i < count; i++) {
    const span = document.createElement("span");
    span.textContent = icons[Math.floor(Math.random() * icons.length)];

    span.style.left = Math.random() * 100 + "%";
    span.style.fontSize = 16 + Math.random() * 22 + "px";
    span.style.animationDuration = 4 + Math.random() * 6 + "s";
    span.style.animationDelay = Math.random() * 5 + "s";

    const moveX = Math.random() * 80 - 40; // حركة جانبية عشوائية
    span.style.setProperty("--moveX", moveX + "px");

    bg.appendChild(span);
  }
});

    document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) return;

      e.preventDefault();
      const target = this.getAttribute('href');

      document.querySelector('.page-transition').classList.add('fade-out');

      setTimeout(() => {
        window.location.href = target;
      }, 400);
    });
  });