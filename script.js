// الترجمات
const translations = {
  ar: {
    1: "نظام إدارة المواعيد",
    2: "الرئيسيه",
    3: "البحث",
    4: "موعد جديد",
    5: "مواعيدي",
    6: "المرضي المنتظرون",
    7: "المرضي المكتملون",
    8: "الامس الاثنين 18",
    9: "اليوم الثلاثاء 19",
    10: "غدا الاربعاء 20",
    11: " الخميس 21",
    12: " الجمعه 22",
    13: " السبت 23",
    14: " الاحد 24",
    15: "فلاتر البحث  ",
    16: "من تاريخ",
    17: "الي تاريخ",
    18: "رقم الملف المرضي",
    19: "رقم الجوال",
    20: "الهويه / الأقامه",
    21: "الطبيب",
    22: "د.احمد علي",
    23: "د.محمد حسن",
    24: "د.علي سعيد",
    25: "العياده",
    26: "عياده الصدر",
    27: "عياده العظام",
    28: "عياده الباطنه",
    29: "حاله الموعد",
    30: "مجدول",
    31: "منتظر",
    32: "مكتمل",
    33: "ملغي",
    34: "انشأ بواسطة",
    35: "المدير ",
    36: "الممرضه",
    37: "الاستقبال",
    38: "بحث",
    39: "الاطباء",
    40: "د.احمد",
    41: "مرضي 3",
    42: "د.احمد",
    43: "مرضي 3",
    44: "د.احمد",
    45: "مرضي 3",
    46: "د.احمد",
    47: "مرضي 3",
    48: "د.احمد",
    49: "مرضي 3",
    50: "د.احمد",

    51: "مرضي 3",
    52: "د.احمد",
    53: "مرضي 3",
    54: "د.علي",
    55: "مرضي 5",
    56: "الاجراءات",

    placeholders: {
      fromDate: "اختر التاريخ",
      toDate: "اختر التاريخ",
      patId: "ادخل رقم الملف",
      mobile: "ادخل رقم الجوال",
      idNumber: "ادخل رقم الهويه",
    },
  },
  en: {
    1: "Appointment Management System",
    2: "Home",
    3: "Search",
    4: "New Appointment",
    5: "My Appointments",
    6: "Waiting Patients",
    7: "Completed Patients",
    8: "Yesterday Monday 18",
    9: "Today Tuesday 19",
    10: "Tomorrow Wednesday 20",
    11: "Thursday 21",
    12: "Friday 22",
    13: "Saturday 23",

    14: "Sunday 24",
    15: "Search Filters",
    16: "From Date",
    17: "To Date",
    18: "Medical File Number",
    19: "Mobile Number",
    20: "ID / Residency",
    21: "Doctor",
    22: "Dr. Ahmed Ali",
    23: "Dr. Mohamed Hassan",
    24: "Dr. Ali Said",
    25: "Clinic",
    26: "Chest Clinic",
    27: "Orthopedic Clinic",
    28: "Internal Medicine Clinic",
    29: "Appointment Status",
    30: "Scheduled",
    31: "Waiting",
    32: "Completed",
    33: "Cancelled",
    34: "Created By",
    35: "Admin",
    36: "Nurse",
    37: "Reception",
    38: "Search",
    39: "Doctors",
    40: "Dr. Ahmed",
    41: "Patients 3",
    42: "Dr. Ahmed",
    43: "Patients 3",
    44: "Dr. Ahmed",
    45: "Patients 3",
    46: "Dr. Ahmed",
    47: "Patients 3",
    48: "Dr. Ahmed",
    49: "Patients 3",
    50: "Dr. Ahmed",
    51: "Patients 3",
    52: "Dr. Ahmed",

    53: "Patients 3",
    54: "Dr. Ali",
    55: "Patients 5",
    56: "Procedures",

    placeholders: {
      fromDate: "Select Date",
      toDate: "Select Date",
      patId: "Enter Medical File Number",
      mobile: "Enter Mobile Number",
      idNumber: "Enter ID Number",
    },
  },
};

let currentLang = "ar";

function changeLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll("[data-translate]").forEach((el) => {
    const key = el.getAttribute("data-translate");

    el.textContent = translations[lang][key];
  });
  document
    .getElementById("fromDate")
    .setAttribute("placeholder", translations[lang].placeholders.fromDate);
  document
    .getElementById("toDate")
    .setAttribute("placeholder", translations[lang].placeholders.toDate);
  document
    .getElementById("patId")
    .setAttribute("placeholder", translations[lang].placeholders.patId);
  document
    .getElementById("mobile")
    .setAttribute("placeholder", translations[lang].placeholders.mobile);
  document
    .getElementById("idNumber")
    .setAttribute("placeholder", translations[lang].placeholders.idNumber);
}

// زرار تغيير اللغة
document.getElementById("toggle-lang").addEventListener("click", () => {
  const newLang = currentLang === "ar" ? "en" : "ar";
  changeLanguage(newLang);
  document.getElementById("lang").textContent =
    newLang === "ar" ? " English" : " العربية";
});

// تحميل أول لغة
changeLanguage(currentLang);

// تفعيل العنصر النشط في القائمة الجانبية

const items = document.querySelectorAll(".main .item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((i) => i.classList.remove("active"));

    item.classList.add("active");
  });
});

// تفعيل العنصر النشط في الايام

const days = document.querySelectorAll(".date .day");
days.forEach((day) => {
  day.addEventListener("click", () => {
    days.forEach((d) => d.classList.remove("active"));

    day.classList.add("active");
  });
});

// تفعيل القائمة الفرعية عند الضغط على عنصر رئيسي

const toggleBtn = document.getElementById("toggleSidebar");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
});

const service = document.getElementById("service");
const servlist = document.getElementById("servlist");

service.addEventListener("click", () => {
  servlist.classList.toggle("hidden");
});

const setting = document.getElementById("setting");
const settlist = document.getElementById("settlist");

setting.addEventListener("click", () => {
  settlist.classList.toggle("hidden");
});
