<!-- Template -->
<template>
    <nav>
        <h2>Menu</h2>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>
</template>

<!-- Scripts -->
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Style -->
<style>
nav {
    text-align: center;

}
nav ul {
    padding: 0px 0px;
}

nav li {
    display: inline-block;
    list-style-type: none;
    margin: 0px 0px;
}
</style>
