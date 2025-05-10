document.addEventListener("DOMContentLoaded", async () => {
    const access = await Whop.hasAccess({
      id: "https://whop.com/seron-art/3-d-printable-designs-nghzLcIc8YBgki/app/", // ← Replace this with your real product slug
    });
  
    const content = document.getElementById("protected-content");
    const denied = document.getElementById("access-denied");
  
    if (access?.access === true) {
      content.style.display = "grid";
    } else {
      denied.style.display = "block";
    }
  });
