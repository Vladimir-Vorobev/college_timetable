<template>
<div>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <router-link to="/" class="router-link">
            <a class="navbar-brand">Главная</a>
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <router-link to="/groups-timetable" class="router-link">
                  <a class="nav-link">Расписание</a>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/upload-file" class="router-link">
                  <a class="nav-link">Добавить файл</a>
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
</div>

</template>


<script>

export default {
    name: 'MainPage',
    
}
</script>

<style scoped>
.router-link{
  text-decoration: none; /* отменяем подчеркивание ссылки */
  color: #fff;
}
</style>