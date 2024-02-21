<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent width="auto">
            <v-card>
                <v-card-title class="text-h5">Thông báo</v-card-title>
                <v-card-text>Bạn có muốn xóa thông tin này ?</v-card-text>
                <v-card-actions>
                    <v-btn color="red-darken-1" variant="text" @click="Xoa()">Có</v-btn>
                    <v-spacer></v-spacer>

                    <v-btn color="green-darken-1" variant="text" @click="dialog = false">Không</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>
<script>
export default {
    name: 'AnnouncementView',
    props: {
        obj: {
            type: Number,
            default: 0
        },
    },
    data() {
        return {
            dialog: false,
        };
    },
    methods: {
        openDialog() {
            this.dialog = true;
        },
        Xoa() {
            this.$emit("deleteData", this.obj)
            this.dialog = false;
        }

    }
}
</script>

<style></style>