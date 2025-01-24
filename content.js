const observer = new MutationObserver(() => {
  const toolbar = document.querySelector(".mn-filters-toolbar");
  if (toolbar && !toolbar.querySelector("#accept-all-button")) {
    const acceptAllButton = document.createElement("button");
    acceptAllButton.id = "accept-all-button";
    acceptAllButton.className =
      "mt3 mr3 artdeco-pill artdeco-pill--blue artdeco-pill--3 artdeco-pill--toggle ember-view";
    acceptAllButton.style.margin = "0 4px";

    const textSpan = document.createElement("span");
    textSpan.className = "artdeco-pill__text";
    textSpan.innerHTML = "Accept All";
    acceptAllButton.appendChild(textSpan);

    acceptAllButton.addEventListener("click", () => {
      const invitationList = document.querySelector(".mn-invitation-list");
      if (invitationList) {
        const acceptButtons = invitationList.querySelectorAll(
          'button.artdeco-button--secondary[aria-label*="Accept"]'
        );

        acceptButtons.forEach((button, index) => {
          setTimeout(() => {
            button.click();
          }, index * 100);
        });
      }
    });

    toolbar.appendChild(acceptAllButton);
  }
});

observer.observe(document.body, { subtree: true, childList: true });
