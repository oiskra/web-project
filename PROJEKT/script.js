const mainPage = document.getElementById("mainPage");
const membershipPage = document.getElementById("membership");
const activitiesPage = document.getElementById("activities");
const contactPage = document.getElementById("contact");
const mobileNav = document.getElementById("mobileNav");

function ChangeToMainPage() {
    membershipPage.style.display = "none";
    activitiesPage.style.display = "none";
    contactPage.style.display = "none";
    mainPage.style.display = "block";
}
function ChangeToMembershipPage() {
    mainPage.style.display = "none";
    activitiesPage.style.display = "none";
    contactPage.style.display = "none";
    membershipPage.style.display = "flex";
}
function ChangeToActivitiesPage() {
    mainPage.style.display = "none";
    membershipPage.style.display = "none";
    contactPage.style.display = "none";
    activitiesPage.style.display = "flex";
}
function ChangeToContactPage() {
    mainPage.style.display = "none";
    membershipPage.style.display = "none";
    activitiesPage.style.display = "none";
    contactPage.style.display = "block";
}
function SideBarTrigger() {
    
}