import { hasAccess } from "@whop-apps/sdk";
import { headers } from "next/headers";
document.addEventListener("DOMContentLoaded", function () {
  // Replace 'your-product-id' with your actual product ID from Whop
  const productId = "seron-art/3-d-printable-designs-nghzLcIc8YBgki";

  // Function to check access
  function checkAccess() {
    // Assuming Whop provides a global function 'Whop.hasAccess'
    Whop.hasAccess("seron-art/3-d-printable-designs-nghzLcIc8YBgki")
      .then(function (hasAccess) {
        if (hasAccess) {
          document.getElementById("protected-content").style.display = "block";
        } else {
          document.getElementById("access-denied").style.display = "block";
        }
      })
      .catch(function (error) {
        console.error("Error checking access:", error);
        document.getElementById("access-denied").style.display = "block";
      });
  }

  // Call the access check function
  checkAccess();
});
