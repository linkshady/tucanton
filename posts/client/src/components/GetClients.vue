<template>
  <div class="equipment">
    <h1>Clientes</h1>This file will list all the
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
    this.getClients();
  },
  methods: {
    async getClients() {
      const clientes = await PostsService.getClients({
        equipo_id: this.$route.params.equipo_id,
        usuario_id: this.$route.params.usuario_id
      });
      this.posts = clientes.data;
      console.log(this.$route.params.equipo_id);
    }
  }
};
</script>