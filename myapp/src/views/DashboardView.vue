<template>
  <div class="dashboard">
        <HeaderItem/>
        <main>
            <ToolbarItem :toggleForm="toggleForm"/>
            <UsersItem :users="users" :toggleForm="toggleForm" :fetchUsers="fetchUsers"/>
            <UserForm v-if="formActive" :toggleForm="toggleForm" :fetchUsers="fetchUsers" :userId="userId"/>
        </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import APIController from '@/controllers/api';

import HeaderItem from '@/components/HeaderItem.vue';
import ToolbarItem from '@/components/ToolbarItem.vue';
import UsersItem from '@/components/UsersItem.vue';
import UserForm from '@/components/UserForm.vue';

export default {
    name: "DashboardView",
    components: {
        HeaderItem,
        ToolbarItem,
        UsersItem,
        UserForm
    },
    setup () {
        const users = ref([]);
        const formActive = ref(false);
        const userId = ref(false);

        const fetchUsers = async () => {
            users.value = await APIController.FetchUsers();
        }

        const toggleForm = (id = false) => {
            formActive.value = !formActive.value;
            userId.value = false;

            if (id)  {
                userId.value = id;
            }
        }

        return {
            users,
            fetchUsers,
            formActive,
            toggleForm,
            userId
        }
    },
    mounted () {
        this.fetchUsers();
    }
}
</script>