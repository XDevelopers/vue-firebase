<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <Navbar />
    <AllFriends :friends="friends" @delete="deleteFriend" />
    <OnlineFriends :friends="friends" />
    <Blogs></Blogs>
  </div>
</template>

<script>

import Navbar from './Navbar';
import AllFriends from './AllFriends';
import OnlineFriends from './OnlineFriends';
import Blogs from './Blogs';

export default {
  name: 'app',
  components: {
    Navbar,
    AllFriends,
    OnlineFriends,
    Blogs
  },
  data () {
    return {
      title: 'My Vue & Firebase - Test, Wooo :)',
      friends: [
          { name: 'Mario', online: true},
          { name: 'Luigi', online: false},
          { name: 'Toad', online: true},
          { name: 'Bowser', online: false}
      ]
    }
  },
  methods: {
    deleteFriend(payload){
      console.log(payload);
      this.friends = this.friends.filter(friend => {
        return friend.name !== payload.name;
      });
    }
  }
}
</script>

<style>
body{
  font-family: Verdana, Geneva, Tahoma, sans-serif; 
}
h1{
  color: #444;
  font-weight: normal;
  text-align: center;
}
</style>

