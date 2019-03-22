<template>
  <div class="equipment">
    <h1>Usuarios</h1>
    This file will list all the Usuarios with this equipo_id:{{$route.params.id}} .
    <div v-for="(post, key) in posts">
      <p>
        <span>
          <b>{{ post }}</b>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "equipment",
  data() {
    return {
      posts: []
    };
  },
  mounted() {
    this.fetchEquipment();
  },
  methods: {
    async fetchEquipment() {
      const equipment = await PostsService.fetchEquipment({
        id: this.$route.params.id
      });
      this.posts = equipment.data;
      console.log(equipment.data);
    }
  }
};
</script>