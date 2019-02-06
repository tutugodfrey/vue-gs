<template>
  <div class="hello">
    <h1>welcome</h1>
    <p v-text='text'></p>
    <h3>Using for loop</h3>
    <p v-if="showNames"> list of learners</p>
    <p v-if="displayName" v-for="user in users">Fullname: {{user.name}}</br>
    Email:{{user.email}} <button v-on:click="deleteUser(user)">X</button></p>
    <div>
    <label for="firstname">Firstname</label>
    <input type='text' v-on:focus="clearMessage" id="firstname" v-model="name" />
    </div>
    <div>
    <label for="email">email</label>
    <input type='text' v-on:focus="clearMessage" id="email" v-model="email" />
    </div>
    <span v-if='showError'>Please fill the input fields to add new user</span>
    <button v-on:click="addName">Submit</button>
    <button v-on:click="showNames">show names</button>
    <button v-on:click="hideNames">hide names</button>
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
      name: '',
      email: '',
      showError: false,
      users: [
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
        if (!this.name || !this.email) {
          this.showError = true;
          return;
        }
        const newUser = {
          name: this.name,
          email: this.email,
        }
        this.users.push(newUser);
        this.name = '';
        this.email = '';
      },
      clearMessage: () => {
        this.showError = false;
      }
    };
  },
  methods: {
    deleteUser: function (user) {
      return this.users.splice(this.users.indexOf(user), 1)
    }
  },
  created: function() {
    console.log('Created ran')
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      console.log(response.data)
      this.users =response.data 
    })
  }
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
