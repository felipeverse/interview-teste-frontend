<template>
  <div class="toolbar">
      <h2>Usuários</h2>
      <div class="button-group">
          <button class="button" @click="() => toggleForm()">Adicionar Usuário</button>
      </div>
  </div>
</template>

<script>
export default {
    name: 'ToolbarItem',
    props: ["toggleForm"]
}
</script>

<style>
.toolbar {
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.toolbar h2 {
    color: var(--dark);
    font-size: 32px;
    font-weight: 400;
}
</style>