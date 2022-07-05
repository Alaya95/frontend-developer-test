<template>
    <div class="cards">
        <div class="cards__header">
            <button class="cards__filter" v-on:click="visibleFilterModal">
                По умолчанию
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.48532 1.24264L4.24268 4.48528L1.00003 1.24264" stroke="#B4B4B4" />
                </svg>
            </button>
            <ProductFilter v-show="isVisibleFilterModal" />
        </div>
        <div class="cards__wrapper">
            <ProductCard v-for="product in getProducts" :key="product.id" :product="product" />
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
import ProductCard from './ProductCard.vue';
import ProductFilter from './ProductFilter.vue';

export default {
    name: "ProductCards",
    components: { ProductCard, ProductFilter },
    data: () => {
        return {
            isVisibleFilterModal: false   
        }
    },
    methods: {
        visibleFilterModal() {
            this.isVisibleFilterModal = !this.isVisibleFilterModal
        },
    },
    computed: {
        ...mapGetters([
            "getProducts"
        ])
    }
}
</script>
<style lang="scss" scoped>
.cards {
    flex: 1;
    margin-top: 32px;
    margin-left: 16px;
   
    &__header {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: end;
        margin-bottom: 16px;
        position: relative;
    }

    &__filter {
        width: 121.49px;
        height: 36px;
        border: none;
        border-radius: 4px;
        outline: none;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
        background: #FFFEFB;
        font-size: 12px;
        line-height: 15px;
        color: #B4B4B4;
        letter-spacing: -0.2px;

        &:hover {
            cursor: pointer;
        }
     }

    &__wrapper {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 16px;
    }
}
</style>