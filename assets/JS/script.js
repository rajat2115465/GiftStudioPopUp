
document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById('searchBar');
    const cityList = document.getElementById('cityList');
    const cityNames = [
    "Adilabad", "Agra", "Aizawl", "Ajmer", "Akola", "Alappuzha", "Aligarh", "Alirajpur", "Allahabad", 
    "Almora", "Alwar", "Ambala", "Amravati", "Amreli", "Amritsar", "Anand", "Ananthapur", "Ananthnag", 
    "Angul", "Anuppur", "Araria", "Ariyalur", "Arwal", "Ashoknagar", "Auraiya", "Aurangabad", "Aurangabad(BH)", 
    "Azamgarh", "Bagalkot", "Bageshwar", "Bagpat", "Bahraich", "Balaghat", "Balangir", "Baleswar", "Ballia", 
    "Balrampur", "Banaskantha", "Banda", "Bandipur", "Banka", "Bankura", "Banswara", "Barabanki", "Baramulla", 
    "Baran", "Bardhaman", "Bareilly", "Bargarh", "Barmer", "Barnala", "Barpeta", "Barwani", "Bastar", "Basti", 
    "Bathinda", "Beed", "Begusarai", "Belgaum", "Bellary", "Betul", "Bhadrak", "Bhagalpur", "Bhandara", 
    "Bharatpur", "Bharuch", "Bhavnagar", "Bhilwara", "Bhind", "Bhiwani", "Bhojpur", "Bhopal", "Bidar", 
    "Bijapur(CGH)", "Bijapur(KAR)", "Bijnor", "Bikaner", "Bilaspur(CGH)", "Birbhum", "Bishnupur", "Bokaro", 
    "Bongaigaon", "Boudh", "Budaun", "Budgam", "Bulandshahr", "Buldhana", "Bundi", "Burhanpur", "Buxar", 
    "Cachar", "Chamba", "Chamoli", "Champaran", "Champawat", "Champhai", "Chamrajnagar", "Chandauli", "Chandel", 
    "Chandigarh", "Chandrapur", "Changlang", "Chatra", "Chennai", "Chhatarpur", "Chhindwara", "Chickmagalur", 
    "Chikkaballapur", "Chitradurga", "Chitrakoot", "Chittoor", "Chittorgarh", "Churachandpur", "Churu", 
    "Coimbatore", "Cuddalore", "Cuddapah", "Cuttack", "Dahod", "Daman", "Damoh", "Dantewada", "Darbhanga", 
    "Darjiling", "Darrang", "Datia", "Dausa", "Davangere", "Debagarh", "Dehradun", "Deoghar", "Deoria", "Dewas", 
    "Dhalai", "Dhamtari", "Dhanbad", "Dhar", "Dharmapuri", "Dharwad", "Dhemaji", "Dhenkanal", "Dholpur", "Dhubri", 
    "Dhule", "Dibrugarh", "Dimapur", "Dindigul", "Dindori", "Diu", "Doda", "Dumka", "Dungarpur", "Durg", 
    "Ernakulam", "Erode", "Etah", "Etawah", "Faizabad", "Faridabad", "Faridkot", "Farrukhabad", "Fatehabad", 
    "Fatehpur", "Fazilka", "Firozabad", "Firozpur", "Gadag", "Gadchiroli", "Gajapati", "Gandhinagar", 
    "Ganganagar", "Ganjam", "Garhwa", "Gariaband", "Gaya", "Ghaziabad", "Ghazipur", "Giridh", "Goa", "Goalpara", 
    "Godavari", "Godda", "Golaghat", "Gonda", "Gondia", "Gopalganj", "Gorakhpur", "Greater Noida", "Gulbarga", 
    "Gumla", "Guna", "Guntur", "Gurdaspur", "Gwalior", "Hailakandi", "Hamirpur", "Hanumangarh", "Harda", "Hardoi", 
    "Haridwar", "Hassan", "Hathras", "Haveri", "Hazaribag", "Hingoli", "Hisar", "Hooghly", "Hoshangabad", 
    "Hoshiarpur", "Howrah", "Idukki", "Indore", "Jabalpur", "Jagatsinghapur", "Jaisalmer", "Jajapur", "Jalandhar", 
    "Jalaun", "Jalgaon", "Jalna", "Jalor", "Jalpaiguri", "Jammu", "Jamnagar", "Jamtara", "Jamui", "Janjgir-Champa", 
    "Jashpur", "Jaunpur", "Jehanabad", "Jhabua", "Jhajjar", "Jhalawar", "Jhansi", "Jharsuguda", "Jhunjhunu", 
    "Jind", "Jodhpur", "Jorhat", "Junagadh", "Kachchh", "Kaithal", "Kalahandi", "Kamrup", "Kanchipuram", 
    "Kangra", "Kanker", "Kannauj", "Kannur", "Kanpur", "Kanyakumari", "Kapurthala", "Karaikal", "Karauli", 
    "Karimganj", "Karnal", "Karur", "Kasargod", "Kathua", "Katihar", "Katni", "Kaushambi", "Kendrapara", 
    "Kendujhar", "Khagaria", "Khammam", "Khandwa", "Khargone", "Kheda", "Kheri", "Khorda", "Kinnaur", 
    "Kodagu", "Koderma", "Kohima", "Kolhapur", "Kollam", "Koraput", "Korba", "Kota", "Kozhikode", "Krishna", 
    "Kullu", "Kupwara", "Kurnool", "Kurukshetra", "Lakhimpur", "Lalitpur", "Latur", "Leh", "Ludhiana", 
    "Madurai", "Mahasamund", "Maharajganj", "Malappuram", "Malda", "Malkangiri", "Mathura", "Mau", "Mayurbhanj", 
    "Meerut", "Midnapore", "Moga", "Moradabad", "Mumbai", "Mysore", "Nadia", "Nagapattinam", "Nagaur", "Nagpur", 
    "Nainital", "Nalanda", "Nalgonda", "Nanded", "Nandurbar", "Nashik", "Nellore", "Noida", "Osmanabad", 
    "Palakkad", "Patiala", "Patna", "Pondicherry", "Pune", "Raipur", "Rajkot", "Ranchi", "Rohtak", "Sagar", 
    "Saharanpur", "Salem", "Satna", "Shimla", "Sikar", "Silchar", "Siliguri", "Solapur", "Sonipat", "Surat", 
    "Thane", "Tirunelveli", "Tirupati", "Udaipur", "Ujjain", "Vadodara", "Varanasi", "Vellore", "Visakhapatnam", 
    "Warangal", "Yamunanagar"
];
const cityContainer = document.getElementById("cityContainer");

        cityNames.forEach(city => {
            const cityDiv = document.createElement("div");
            cityDiv.classList.add("city-name");
            cityDiv.innerHTML = `<p>${city}</p>`;
            cityContainer.appendChild(cityDiv);
        });


function showCityList() {
    cityNames.forEach(city => {
        let cityOption = document.createElement("div");
        cityOption.classList.add("city-option");
        cityOption.innerText = city;
        cityOption.onclick = function () {
            searchBar.value = city;
            cityList.style.display = "none";
        };
        cityList.appendChild(cityOption);
    });
    cityList.style.display = "block";
}

searchBar.addEventListener("click", showCityList);

function filterCities() {
    let input = searchBar.value.toLowerCase();
    cityList.innerHTML = "";
    let filteredCities = cityNames.filter(city => city.toLowerCase().includes(input));
    if (filteredCities.length === 0) {
        cityList.style.display = "none";
        return;
    }
    filteredCities.forEach(city => {
        let cityOption = document.createElement("div");
        cityOption.classList.add("city-option");
        cityOption.innerText = city;
        cityOption.onclick = function() {
            searchBar.value = city;
            cityList.style.display = "none";
        };
        cityList.appendChild(cityOption);
    });
    cityList.style.display = "block";
}
searchBar.addEventListener("keyup", filterCities);
function popUp() {
    document.getElementsByClassName("popup")[0].style.display = "flex";
}
function closeBtn() {
    document.getElementsByClassName("popup")[0].style.display = "none";
}
function togglebtn() {
    document.getElementById("other").style.display = "block";
    const cityContainer = document.querySelector('.city-container');
    cityContainer.classList.toggle('expanded');
    if(cityContainer.classList.contains('expanded'))document.getElementsByClassName('show-all')[0].innerHTML="Hide All Cities"
    else document.getElementsByClassName('show-all')[0].innerHTML="Show All Cities"
}
const btn=document.getElementById("drop-down");
const showall=document.getElementById("all");
const closeButton=document.getElementsByClassName("close-btn")[0];
const closeButtonMobile=document.getElementsByClassName("close-btn-mobile")[0];


btn.addEventListener("click", popUp);
closeButton.addEventListener("click",closeBtn);
closeButtonMobile.addEventListener("click",closeBtn);

showall.addEventListener("click",togglebtn);
document.querySelectorAll('.city img').forEach(img => {
    img.addEventListener('click', function() {
    document.querySelectorAll('.city img').forEach(el =>el.classList.remove('selected'));
    this.classList.toggle('selected');
    });
});
document.addEventListener("click", function(event) {
    if (!document.getElementById("searchContainer").contains(event.target)) {
        cityList.style.display = "none";
    }
});
})
