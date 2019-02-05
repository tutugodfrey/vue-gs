<template>
  <div class="hello">
    <h1>welcome</h1>
    <p v-text='text'></p>
    <h3>Using for loop</h3>
    <p v-if="showNames"> list of learners</p>
    <p v-if="displayName" v-for="user in users">Firstname: {{user.firstName}}</br>
    Lastname:{{user.lastName}}</p>
    <div>
    <label for="firstname">Firstname</label>
    <input type='text' v-on:focus="clearMessage" id="firstname" v-model="firstName" />
    </div>
    <div>
    <label for="lastname">Lastname</label>
    <input type='text' v-on:focus="clearMessage" id="lastname" v-model="lastName" />
    </div>
    <span v-if='showError'>Please fill the input fields to add new user</span>
    <button v-on:click="addName">Submit</button>
    <button v-on:click="showNames">show names</button>
    <button v-on:click="hideNames">hide names</button>
    <p>{{userChoice}}</p>
    <h3>Using conditionals</h3>
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      msg: 'Getting started with Vue',
      text: 'welcome',
      html: '<p>Getting started with Vue</p>',
      firstName: '',
      lastName: '',
      showError: false,
      users: [
        {
          firstName: 'Godfrey',
          lastName: 'Tutu'
        },
        {
          firstName: 'John',
          lastName: 'Doe'
        },
        {
          firstName: 'Jane',
          lastName: 'Doe'
        }
      ],
      displayName: true,
      showNames: () => {
          this.displayName = true
      },
      hideNames: () => {
          this.displayName = false
      },
      addName: (e) => {
        console.log(e.target.value)
        if (!this.firstName || !this.lastName) {
          this.showError = true;
          return;
        }
        const newUser = {
          firstName: this.firstName,
          lastName: this.lastName,
        }
        this.users.push(newUser);
        this.firstName = '';
        this.lastName = '';
      },
      clearMessage: () => {
        this.showError = false;
      }
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
