<!-- Navbar -->
<template>
  <div class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link to="">
          <span class="nav-title">Ninja Smoothies</span>
        </router-link>
        <a href="" class="btn-floating btn-large halfway-fab pink">
          <router-link to="" >
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>
<!-- /Navbar -->

<script>
export default {
  name: "Navbar",
  data() {
    return {
    };
  }
};
</script>

<style>
.navbar nav{
  padding: 0px 20px;
}
</style>
