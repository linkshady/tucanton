<template>
  <div class="posts">
    <select v-model="busqueda.equipo" v-on:change="fetchEquipment()">
      <option v-for="post in posts" :value="post.id">{{post.nombre}}</option>
    </select>

    <select v-model="busqueda.usuarios" v-on:change="getClients()">
      <option v-for="user in usuarios" :value="user.id">{{user.nombre}}</option>
    </select>
    <div v-if="show">
      <table id class="display" style="width:100%">
        <thead>
          <tr>
            <th>id</th>
            <th>usuario_id</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in clientes">
            <td>{{cliente.id}}</td>
            <td>{{cliente.usuario_id}}</td>
            <td>{{cliente.email}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import PostsService from "@/services/PostsService";
export default {
  name: "posts",
  data() {
    return {
      posts: [],
      usuarios: [],
      busqueda: {
        equipo: [],
        usuarios: []
      },
      clientes: [],
      show: false
    };
  },
  mounted() {
    this.getEquipment();
    this.fetchEquipment();
  },
  methods: {
    async getEquipment() {
      const response = await PostsService.getEquipment();
      this.posts = response.data.equipments;
    },
    async fetchEquipment() {
      const equipment = await PostsService.fetchEquipment({
        id: this.busqueda.equipo
      });
      this.usuarios = equipment.data;
    },
    async getClients() {
      const clientes = await PostsService.getClients({
        equipo_id: this.busqueda.equipo,
        usuario_id: this.busqueda.usuarios
      });
      this.clientes = clientes.data;
       this.show = !this.show;
    }
  }
};
</script>

