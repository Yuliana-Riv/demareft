 <template >
    <div>
        <h1>Error 404</h1>
                        <p>Parece que algo salió mal. Lamentamos las molestias.</p>
                        <a href="/">Regresar a Inicio</a>
    </div>
</template>
<script>
export default {
    name:'Error404',
    data(){
        return {
            status:'error',
            message:''
        }
    }
}
</script>
<style scoped>
    
</style>