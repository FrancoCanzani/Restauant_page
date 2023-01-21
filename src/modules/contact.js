const createContact = () => {
  const addressText = document.createElement("h1");
  addressText.classList.add("addressText");
  addressText.innerHTML = "Our Locations";
  content.appendChild(addressText);
  const locationContainer = document.createElement("div");
  locationContainer.classList.add("locationContainer");
  content.appendChild(locationContainer);

  const createLocation = (address, number) => {
    const addressContainer = document.createElement("div");
    const location = document.createElement("h3");
    location.innerHTML = address;
    location.classList.add("location");
    addressContainer.appendChild(location);
    const phoneNumber = document.createElement("h3");
    phoneNumber.innerHTML = number;
    phoneNumber.classList.add("phoneNumber");
    addressContainer.appendChild(phoneNumber);
    addressContainer.classList.add("addressContainer");
    locationContainer.appendChild(addressContainer);
  };

  createLocation("8406 Evergreen Ave. Greenwood, SC 29646", "+1 202-918-2132");
  createLocation("757 Halifax Circle Erlanger, KY 41018", "+1 307-245-0596");
  createLocation(
    "7319 Greystone Ave. West Palm Beach, FL 33404",
    "+1 209-902-1572"
  );
  createLocation(
    "883 Blackburn Drive Jersey City, NJ 07302",
    "+1 505-646-1711"
  );
  createLocation(
    "94 Sheffield Ave. Bonita Springs, FL 34135",
    "+1 405-776-1284"
  );
  createLocation("8066 Fairground St. Green Bay, WI 54302", "+1 505-485-9892");
  createLocation("11 Vale Dr. Norcross, GA 30092", "+1 314-333-0452");
  createLocation(
    "49 Primrose Road Port Saint Lucie, FL 34952",
    "+1 505-646-6459"
  );
  createLocation(
    "8558 South Bayport Lane Fernandina Beach, FL 32034",
    "+1 339-343-5225"
  );
  createLocation("214 Miller St. Orange, NJ 07050", "+1 304-516-4843");
  createLocation("8632 Maple Street Canonsburg, PA 15317", "+1 618-791-0450");
  createLocation(
    "60 Buckingham Ave. Delray Beach, FL 33445",
    "+1 804-390-4442"
  );
  createLocation("665 South Vernon Dr. Depew, NY 14043", "+1 310-911-5164");
  createLocation("13 Meadow Avenue Marlton, NJ 08053", "+1 704-274-6094");
  createLocation("8967 Rockland Street Ocoee, FL 34761", "+1 346-414-7813");
  createLocation("7352 Mayflower St. Ronkonkoma, NY 11779", "+1 207-366-7935");
  createLocation("93 Bradford Road Rockledge, FL 32955", "+1 505-644-8788");
};

export default createContact;
