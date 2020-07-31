import { findPriceLessThan } from "./find-cars";
import { getDescriptions } from "./car-descriptions";

export function showPopup() {
    console.log("კონკრეტულ ფასად ავტომობილების პოვნის შემთხვევაში, ამ ავტომობილების მონაცემების დაბეჭდვა, თუ ვერ მოიძებნა ამ ფასად ავტომობილი, შესაბამისი შეტყობინების გამოტანა");
    let searchBar = document.getElementById("searchCars");
    let price = searchBar.value;
    let cars = findPriceLessThan(price);
    let description = getDescriptions(cars);
    if (description) {
      alert(description);
    } else {
      alert("სამწუხაროდ, ამ ფასად ავტომობილს ვერ შეიძენთ");
    }
  }



