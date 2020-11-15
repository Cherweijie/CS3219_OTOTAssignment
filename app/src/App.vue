<template>
  <div id="app">
    <div>
      <h1 class="display-4">Built with Bootstrap and Vue</h1>
      <p>
        Contact ID is only needed for Delete and Update requests.
      </p>
    </div>

    <div style="display:inline-block">
      <form>
      <div class="form-group row center-align">
        <label for="contact_id" class="col-sm-2 col-form-label"
          >Id</label
        >
        <div class="col-sm-9">
          <input
            type="text"
            placeholder="foi123asdno0913nxc"
            v-model="contact_id"
            class="form-control"
            id="contact_id"
          />
        </div>
      </div>
      <div class="form-group row center-align">
        <label for="name" class="col-sm-2 col-form-label">Name</label>
        <div class="col-sm-9">
          <input
            id="name"
            placeholder="John Appleseed"
            type="text"
            class="form-control"
            v-model="name"
            required
          />
        </div>
      </div>
      <div class="form-group row center-align">
        <label for="email" class="col-sm-2">Email</label>
        <div class="col-sm-9">
          <input
            type="email"
            class="form-control"
            id="email"
            placeholder="email@example.com"
            v-model="email"
            required
          />
        </div>
      </div>
      <div class="form-group row center-align">
        <label for="phoneNum" class="col-sm-2">Phone no.</label>
        <div class="col-sm-9">
          <input
            type="tel"
            minlength="8"
            class="form-control"
            id="phoneNum"
            placeholder="12345678"
            v-model="phone"
            required
          />
        </div>
      </div>
      <div class="form-group row center-align">
        <label for="gender" class="col-sm-2">Gender</label>
        <div class="col-sm-9">
          <select class="custom-select mr-sm-2" id="gender" v-model="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      <div>
      <button
        type="submit"
        class="btn btn-info mb-3"
        v-on:click="addContact"
      >
        Add Contact
      </button>
      <button type="submit" v-on:click="getContacts" class="btn btn-info mb-3 ml-3">
      Get Contacts
      </button>
      <button
        type="submit"
        class="btn btn-info mb-3 ml-3"
        v-on:click="updateContact"
      >
        Update Contact
      </button>
      <button
        type="submit"
        class="btn btn-info mb-3 ml-3"
        v-on:click="deleteContact"
      >
        Delete Contact
      </button>
      </div>
    </form>
    <div
      class="alert alert-dismissible fade show"
      v-bind:class="message == '' ? 'alert-light' : 'alert-danger'"
      role="alert"
    >
      {{ message }}
    </div>

    <div class="divider"/>
    <ul class="list-group" style="width: 100%">
      <li
        v-for="contact in contactList"
        :key="contact._id"
        class="list-group-item list-group-item-info"
      >
        <div class="d-flex flex-column w-100 justify-content-between">
          <medium>Id: {{ contact._id }}</medium>
          <medium>Name: {{ contact.name }}</medium>
          <medium>Email: {{ contact.email }}</medium>
          <medium>Phone: {{ contact.phone }}</medium>
          <medium>Gender: {{ contact.gender }}</medium>
        </div>
      </li>
    </ul>
  </div>
    </div>
</template>

<script>
 import axios from "axios";
 import Vue from "vue";

 export default {
 name: "App",
  data() {
   return {
      contactList: [],
      name: "",
      contact_id: "",
      email: "",
      gender: "",
      phone: "",
      message: "",
    };
   },
   methods:
   {
    validateForm(data) {
      var isValidEmail = this.validEmail(data.email);
      var isValidPhone = this.validPhone(data.phone);
      if (isValidPhone && isValidEmail) {
        return true;
      }
      return false;
    },
    validEmail(email) {
      if (email.includes("@")) {
        if (email.includes(".com") || email.includes(".org") || email.includes(".edu")) {
          return true;
        } else {
          return false;
        }
      }
    },
    validPhone(phone) {
      if (phone.length >=8) {
        return true;
      }
    },
    getContacts() {
     axios.get("/api/contacts").then((response) => {
      Vue.swal("The list of contacts has been generated!");
      this.contactList = response.data.data;
      for (var contact in this.contactList) {
       if (this.contactList[contact].gender == "") {
        this.contactList[contact].gender = "NIL";
       }
       if (this.contactList[contact].phone == "") {
        this.contactList[contact].phone = "NIL"
       }
      }
      this.phone = "";
      this.gender = "";
      this.name = "";
      this.email = "";
      this.message = "";
     }).catch((error) => {
      this.message = error.message;
     });
    },
    getContactsWithoutAlert() {
     axios.get("/api/contacts").then((response) => {
      this.contactList = response.data.data;
      for (var contact in this.contactList) {
       if (this.contactList[contact].gender == "") {
        this.contactList[contact].gender = "NIL";
       }
       if (this.contactList[contact].phone == "") {
        this.contactList[contact].phone = "NIL"
       }
      }
      this.phone = "";
      this.gender = "";
      this.name = "";
      this.email = "";
      this.message = "";
     }).catch((error) => {
      this.message = error.message;
     });
    },

    addContact(e) {
     e.preventDefault();
     const data = {
      name: this.name,
      email: this.email,
      gender: this.gender,
      phone: this.phone,
     };
     var state = this.validateForm(data);
     if (state) {
      axios.post("/api/contacts", data).then((response) => {
        if (response.data.message == "New contact has been added! :)") {
        Vue.swal("The contact has been added!");
        this.getContactsWithoutAlert();
        this.name = "";
        this.email = "";
        this.gender = "";
        this.phone = "";
        this.message = "";
        } else {
        if (response.data.errors.name && response.data.errors.email) {
          this.message = "Name and Email are required fields.";
        } else if (response.data.errors.name) {
          this.message = "Name field is required";
        } else if (response.data.errors.email) {
          this.message = "Email field is required";
        }
        }
      }).catch(()=>{
        this.message = "Please add the contact again. There was a problem sending the data to the database.";
      });
     } else {
       this.message = "The email and/or phone fields are not valid. Please ensure that the email is valid and phone contains at least 8 numbers"
     }
    },
    updateContact(e) {
     e.preventDefault();
     if (this.contact_id == "") {
      this.message = "Please specify the contact to be updated.";
     } else {
      var data = {};
      if (this.name != "") {
       data["name"] = this.name;
      }
      if (this.email != "") {
       data["email"] = this.email;
      }
      if (this.phone != "") {
       data["phone"] = this.phone;
      }
      if (this.gender != "") {
       data["gender"] = this.gender;
      }
      axios.put("/api/contacts/" + this.contact_id, data).then((response) => {
       var validityList = []
       for (var i=0; i<this.contactList.length; i++) {
         if (this.contactList[i]._id == this.contact_id) {
           validityList.push(true);
         } else {
           validityList.push(false);
         }
       }
       if (validityList.includes(true)) {
        if (response.data.message == "Contact Info updated") {
        Vue.swal("The contact was updated!");
        this.getContactsWithoutAlert();
       }
       } else {
         Vue.swal("The contact does not exist!");
       }
      }).catch((error) => {
       this.message = error.message;
      });
     }
    },
   deleteContact(e) {
    e.preventDefault();
    if (this.contact_id == "") {
     this.message = "Please specify the contact to be deleted.";
    } else {
     axios.delete("/api/contacts/" + this.contact_id).then((response) => {
      if (response.data.message == "Contact deleted") {
       Vue.swal("The contact was deleted!");
       this.getContactsWithoutAlert();
      }
      this.contact_id = "";
      this.name = "";
      this.email = "";
      this.gender = "";
      this.message = "";
     }).catch((error) => {
      this.message = error.message;
     });
    }
   },
 }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.divider {
  width: 50%;
}
.center-align {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>