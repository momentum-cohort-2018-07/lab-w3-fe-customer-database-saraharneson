function titleCase(word) {
    return word[0].toUpperCase() + word.slice(1)
}

function capsEachWord (str) {
    str = str.toLowerCase().split(' ')
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    return str.join(' ')
}



class Customer {
    constructor(customerInfo) {
        this.info = customerInfo
    }

    // getHeadshot() {
    //     return this.getHeadshot
    // }

    getName() {
        return titleCase(this.info.name.first) +
            ' ' +
            titleCase(this.info.name.last)
    }


    getEmail() {
        return this.info.email
    }


    getAddress() {
        return capsEachWord (this.info.location.street + '\n' + this.info.location.city + ", " + this.info.location.state + " " + this.info.location.postcode)
    }

    getDates() {
        return moment(this.info.dob).format("MMM D YY") + '\n' + moment(this.info.registered).format("MMM D YY")
    }


    generateDOM() {
        let div = document.createElement('div')
        div.classList.add('customer')

        let headshotImg = document.createElement('img')
        div.classList.add('customer-photo')
        headshotImg.src = this.info.picture.large

        let nameH2 = document.createElement('h2')
        div.classList.add('customer-name')
        nameH2.innerText = this.getName()

        let emailP = document.createElement('p')
        emailP.innerText = this.getEmail()

        let addressP = document.createElement('p')
        addressP.innerText = this.getAddress()

        let datesP = document.createElement('p')
        datesP.innerText = this.getDates()
    

        div.appendChild(headshotImg)

        div.appendChild(nameH2)

        div.appendChild(emailP)

        div.appendChild(addressP)

        div.appendChild(datesP)

        return div
    }
}


let outputDiv = document.getElementById('output')
for (let customerInfo of customers) {
    let customer = new Customer(customerInfo)
    outputDiv.appendChild(customer.generateDOM())
}



///////////////////////////////////

// what I wrote before Clinton shared code

// class Employee {
//     constructor(customerInfo)


//     // (name, address, phone, cell, thumbnail, dob, registered) {
//     //   this.name = name;
//     //   this.startDate = startDate;
//     //   this.location = address;
//     //   this.phone = phone;
//     //   this.cell = cell;
//     //   this.thumbnail = thumbnail;
//     //   this.birthdate = birthdate;
//     //   this.registered = registered;
//     // }

//     getName() {
//     return this.name = name.first + "" name.last  
//     }

//     getAddress() {
//     return this.address = address
//     }

//     getPhone() {
//     return this.phone () = phone
//     }

//     getCell() {
//     return this.cell ()
//     }

//     getThumbnail() {
//     return this.thumbnail()
//     }

//     getBirthdate() {
//     return this.moment(dob).format("MMM Do YY")
//     }

//     getRegistered() {
//     return this.moment(registered).format("MMM Do YY")
//     }
// }


//////////////////////////////////////////////


// * `makeDOMNode()` - return the entire DOM node, probably a `div`, for displaying the customer



//   function createStaffDiv() {
//     let newSection = document.createElement('div')
//     let groupDiv = document.getElementById("customers")
//     groupDiv.appendChild(newSection) 
//   }




//     function createEmployeePanel() {
//         let employeeDiv = document.createElement('div')
//         let employeeDiv = 
//     }



// var phoenix = new Employee("Phoenix Carter",
//                            new Date(2017, 8, 1))

// phoenix.getFirstName()         // => Phoenix
// Object.getPrototypeOf(phoenix) // => Employee {}




// you will need their name, address, phone numbers, thumbnail, birthdate, and the date they became a customer, which is stored as `registered` in the data.

// Consider making a Customer class that takes one customer's data (one element of the `customers` array). Some methods you could implement:

//   * `getName()` - returns the full name, capitalized correctly
//   * `getAddress()` - returns the address, formatted correctly
//   * `makeDOMNode()` - return the entire DOM node, probably a `div`, for displaying the customer