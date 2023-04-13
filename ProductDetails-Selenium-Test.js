const {By} = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
const assert = require("assert");

let products = [{
    productId: "1",
    title: "Carrots",
    location: "Alexandria",
    images: "img/carrot.jpeg",
    description: "Local freshly grown 1lb carrots.",
    price: "$4.99/lb",
    phoneNumber: "2027782545",
    emailAddress: "Crag.Cena1233@gmail.com",
    contactName: "Craig Cena",
    listingDate: "02/18/2023",
},
    {
        productId: "2",
        title: "Zucchini",
        location: "Fairfax",
        images: "img/zucchini.jpg",
        description: "Local freshly grown 1lb zucchini.",
        price: "$1.99/lb",
        phoneNumber: "571-555-8888",
        emailAddress: "jack.smith@gmail.com",
        contactName: "Jack",
        listingDate: "08/02/2023",
    },
    {
        productId: "3",
        title: "Apples",
        location: "Alexandria, VA",
        images: "img/apples.jpg",
        description: "Local freshly grown 1lb apples.",
        price: "$2.99/lb",
        phoneNumber: "571-290-1146",
        emailAddress: "smith32@yahoo.com",
        contactName: "Smith",
        listingDate: "02-17-2023",
    },

    {
        productId: "4",
        title: "Bananas",
        location: "Arlington, VA",
        images: "img/banana.jpg",
        description: "Local freshly grown 1lb bananas.",
        price: "$2.49/lb",
        phoneNumber: "571-152-8745",
        emailAddress: "mike10@gmail.com",
        contactName: "Mike",
        listingDate: "02-16-2023",
    },

    {
        productId: "5",
        title: "Oranges",
        location: "Arlington, VA",
        images: "img/oranges.jpg",
        description: "Local freshly grown 1lb oranges.",
        price: "$3.49/lb",
        phoneNumber: "571-134-5472",
        emailAddress: "rose39@gmail.com",
        contactName: "Rose",
        listingDate: "02-17-2023",
    },

    {
        productId: "6",
        title: "Strawberries",
        location: "Fairfax, VA",
        images: "img/strawberry.jpg",
        description: "Local freshly grown 1lb strawberries.",
        price: "$4.99/lb",
        phoneNumber: "202-431-5423",
        emailAddress: "john123@gmail.com",
        contactName: "John",
        listingDate: "02-18-2023",
    },

    {
        productId: "7",
        title: "Tomatoes",
        location: "Fairfax, VA",
        images: "img/tomato.jpg",
        description: "Local freshly grown 1lb tomatoes.",
        price: "$2.99/lb",
        phoneNumber: "202-401-1343",
        emailAddress: "karoline123@gmail.com",
        contactName: "Karoline",
        listingDate: "02-18-2023",
    },

    {
        productId: "8",
        title: "Chillis",
        location: "Springfield, VA",
        images: "img/chillis.jpg",
        description: "Local freshly grown 1lb chillis.",
        price: "$2.39/lb",
        phoneNumber: "202-911-1312",
        emailAddress: "Simon@gmail.com",
        contactName: "Simon",
        listingDate: "02-16-2023",
    },
    {
        productId: "9",
        title: "Corn",
        location: "Falls Church, VA",
        images: "img/corn.jpg",
        description: "Local freshly grown 1lb corn.",
        price: "$1.99/lb",
        phoneNumber: "202-414-1043",
        emailAddress: "Hector2@gmail.com",
        contactName: "Hector",
        listingDate: "02-16-2023",
    },
    {
        productId: "10",
        title: "Pees",
        location: "Springfield, VA",
        images: "img/pees.jpg",
        description: "Local freshly grown 1lb pees.",
        price: "$3.99/lb",
        phoneNumber: "202-101-1193",
        emailAddress: "Jack@gmail.com",
        contactName: "Jack",
        listingDate: "02-17-2023",
    },

    {
        productId: "11",
        title: "Mushrooms",
        location: "McLean, VA",
        images: "img/mushrooms.jpg",
        description: "Local freshly grown 1lb mushrooms.",
        price: "$3.49/lb",
        phoneNumber: "202-123-1692",
        emailAddress: "Ally@gmail.com",
        contactName: "Ally",
        listingDate: "02-18-2023",
    },]

     start()
     async function start() {
         const driver = new webdriver.Builder().forBrowser("chrome").build();
         for(const listing of products){
            await driver.get('http://localhost:3000/listings/' + listing.productId);

            //Test Title
            let title = await driver.findElement(By.className("col-8")).getText();
            const assert = require('assert');
            assert.strictEqual(title, listing.title + "(" + listing.price + ")");
            console.log("Title Test Passed")


             //Test Listing Date
             let date = await driver.findElement(By.className("Listing-Date")).getText();
             assert.strictEqual(date, "Listed: " + listing.listingDate );
             console.log("Listing Date Test Passed")

             //Test Description
             let desc = await driver.findElement(By.className("Description")).getText();
             assert.strictEqual(desc,  listing.description );
             console.log("Description Test Passed")

             //Test Contact Name
             let name = await driver.findElement(By.className("Contact-Name")).getText();
             assert.strictEqual(name,  "Contact Name: " + listing.contactName );
             console.log("Contact Name Test Passed")

             //Test Phone Number
             let num = await driver.findElement(By.className("Phone-Number")).getText();
             assert.strictEqual(num, "Phone Number: " +  listing.phoneNumber );
             console.log("Phone Number Test Passed")

             //Test Email Address
             let email = await driver.findElement(By.className("Email")).getText();
             assert.strictEqual(email, "Email Address: " + listing.emailAddress );
             console.log("Email Address Test Passed")

             //Test Address
             let add = await driver.findElement(By.className("Address")).getText();
             assert.strictEqual(add,  "Address: " +listing.location );
             console.log("Address Test Passed")
         }
 }

//driver.quit()
