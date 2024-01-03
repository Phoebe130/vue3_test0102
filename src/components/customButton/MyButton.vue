<script>
export default {

}
</script>

<template>
    <section id="myBtn">
        <button class="btn" type="button">
            <!-- slot 是一個開孔 方便直接放+-X/ -->
            <slot name="placeA" />
        </button>
        <div>
            <slot name="placeB" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
#myBtn {
    .btn {
        @apply border border-[2px] hover:text-[white] bg-main-deep;
        padding: 5px 15px;
    }
}
</style>