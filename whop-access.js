document.addEventListener("DOMContentLoaded", async () => {
  const protectedContent = document.getElementById("protected-content");
  const accessDenied = document.getElementById("access-denied");

  // Show loading state immediately
  accessDenied.innerHTML = "<p>Verifying access...</p>";
  accessDenied.style.display = "block";

  try {
    // Check if Whop loaded properly
    if (typeof whop === "undefined" || !whop.checkAccess) {
      throw new Error("Whop not loaded. Disable ad-blockers or try later.");
    }

    // Use REAL product ID from Whop dashboard (Settings → API)
    const { hasAccess } = await whop.checkAccess({
      productId: "prod_jEAGM6zvFNVaA", // MUST replace this
      redirectUrl: window.location.href
    });

    if (hasAccess) {
      protectedContent.style.display = "grid";
      accessDenied.style.display = "none";
    } else {
      accessDenied.innerHTML = `
        <p>Premium content requires access.</p>
        <a href="https://whop.com/seron-art" class="cta">Unlock Now</a>
      `;
    }
  } catch (error) {
    console.error("Access check failed:", error);
    accessDenied.innerHTML = `
      <p style="color: red;">Error: ${error.message}</p>
      <a href="javascript:location.reload()" class="cta">Retry</a>
    `;
  }
});
  } catch (error) {
    console.error("Access check failed:", error);
    accessDenied.innerHTML = `
      <p style="color: red;">Error: ${error.message}</p>
});
