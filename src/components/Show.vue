<template>
    <v-slide-y-transition>
        <v-alert closable :text="content" :color="this.color" :icon="icon" dense dismissible
            class="success-alert text-left"></v-alert>
    </v-slide-y-transition>
</template>
<script>
export default {
    name: "ShowView",
    props: {
        icon: String,
        color: String,
        content: String
    }
};
</script>
    
<style scoped>
.success-alert {
    position: fixed;
    top: 20px;
    right: 20px;
    max-width: 300px;
    width: 100%;
}
</style>