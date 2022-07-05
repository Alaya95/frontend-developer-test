<template>
    <div class="card" @mouseover="isVisibleBtnDelete = true" @mouseleave="isVisibleBtnDelete = false">
        <ButtonDelete v-show="isVisibleBtnDelete" class="card__delete"></ButtonDelete>

        <img class="card__img" src="../assets/product_img.png" alt="">

        <div class="card__content">
            <h4 class="card__title">Наименование товара</h4>
            <p class="card__description ">
                Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное
                описание товара в несколько строк
            </p>
            <p class="card__price">10 000 руб.</p>
        </div>

    </div>
</template>
<script>
import ButtonDelete from './ButtonDelete.vue'
export default {
    name: "ProductCard",
    components: { ButtonDelete },
    data: () => {
        return {
            isVisibleBtnDelete: false
        }
    },
}
</script>

<style lang="scss" scoped>

.card {
    height: 423px;
    position: relative;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;

    &__delete {
        width: 32px;
        height: 32px;
        position: absolute;
        right: -8px;
        top: -8px;
        border-radius: 10px;
        background: #FF8484;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

        &:hover {
            width: 36px;
            height: 36px;
            right: -10px;
            top: -10px;
            transition: all 0.2s ease-in;
        }
    }

    &__content {
        width: calc(100% - 32px);
        padding: 0 16px;
    }

    &__img, &__title {
        margin-bottom: 16px; 
    } 

    &__title,
    &__description {
        line-height: 20px;
    }
    &__title, &__price{
        font-weight: 600;
    }

    &__title, &__description, &__price {
        text-align: start;
    }


    &__title {
        font-size: 20px;
        letter-spacing: -1px;
    }

    &__description {
        font-size: 16px;
        letter-spacing: -0.4px;
        margin-bottom: 32px;
        word-wrap: break-word;
    }

    &__price {
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -1.2px;
    }
}
</style>