<template>
    <div class="bill">
        <div class="finalbill">
            <h3>Bill</h3>
            <div class="culatebill">
                <p>Total: {{ total }}</p>
                <p>GST (0.11%): {{ gst }}</p>
                <p>----------------------------</p>
                <p
                    style="font-weight: bolder;font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif; ">
                    Total: {{ gst + total }}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        total: {
            type: Number
        },
        gst: {
            type: Number
        },
    }
}
</script>
<style scoped>
.bill {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

.culatebill {
    border: 1px dashed black;
    padding: 10px;
    font-weight: 100;
    font-family: 'Courier New', Courier, monospace;
}

.finalbill {
    background-color: white;
    box-shadow: 5px 5px 5px 5px #888888;
    height: fit-content;
    width: 300px;
    padding: 15px;
}
</style>