document.addEventListener("DOMContentLoaded", async () => {
    const access = await Whop.hasAccess({
      id: "seron-art", // ← Replace this with your real product slug
    });
  
    const content = document.getElementById("protected-content");
    const denied = document.getElementById("access-denied");
  
    if (access?.access === true) {
      content.style.display = "grid";
    } else {
      denied.style.display = "block";
    }
  });