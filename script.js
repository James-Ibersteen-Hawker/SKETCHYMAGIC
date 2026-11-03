const items = [
  [
    "pills.jpg",
    "Prank Death Pills",
    "Special pills that make you look and behave dead, but wear off in several hours.",
    ["Slowed breathing", "Pale face", "Cold skin", "Increased probability of being buried alive"]
  ],
  [
    "",
    "Body Bag",
    "A sleeping bag to mask your body while you play dead from the Prank Death Pills."
  ],
  [
    "magicBook.jfif",
    "101 Magic Pranks",
    "The definitive guide to magic pranks that are sure to scare everybody away!",
    ["Bad ideas", "Negative consequences", "Getting scammed by this website"]
  ],
]
const container = document.querySelector("#card_container");
function addCards() {
  for (let i = 0; i < items.length; i++) {
    const current = items[i];
    const list = current?.[3];
    const hide = !list ? "hide" : "";
    const modalID = current[1].split(" ").join("");
    const card = `<div class="_card">
        <div class="_card-image">
          <img src="${current[0]}" />
        </div>
        <div class="_card-content">
          <div class="_card-title">${current[1]}</div>
          <div class="_card-description">
            ${current[2]}
          </div>
          <div class="mini-hr"></div>
          <div class="_card-extras ${hide}">
            Side Effects
            <ul>
              <li>Slowed breathing</li>
              <li>Pale face</li>
              <li>Cold skin</li>
              <li>Increased probability of being buried alive</li>
            </ul>
          </div>
          <div class="mini-hr ${hide}"></div>
          <div class="_card-footer">
            <div
              class="_card-button"
              data-bs-toggle="modal"
              data-bs-target="#${modalID}"
            >
              Add to Cart
            </div>
            <div class="_card-button"
              data-bs-toggle="modal"
              data-bs-target="#buy${modalID}"
            >Buy Now</div>
          </div>
        </div>
          </div>`
    const cartModal = `
        <div
      class="modal fade"
      id="${modalID}"
      tabindex="-1"
      aria-labelledby="${modalID}Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">Added <span>${current[1]}</span> to Cart</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
        `
    const buyModal = `
        <div
      class="modal fade"
      id="buy${modalID}"
      tabindex="-1"
      aria-labelledby="buy${modalID}Label"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">Purchase <span>${current[1]}</span> now?</div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Yes
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              No
            </button>
          </div>
        </div>
      </div>
    </div>
        `
    container.insertAdjacentHTML("beforeend", card)
    document.body.insertAdjacentHTML("beforeend", cartModal)
    document.body.insertAdjacentHTML("beforeend", buyModal)
  }
}
addCards();