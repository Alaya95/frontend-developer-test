<template>
    <div class="form">
        <div class="form__title">
            Добавление товара
        </div>

        <form class="form__content">
            <label class="form__field-name form__field-name_circle" for="">Наименование товара</label>
            <input class="form__field form__field-input" type="text" placeholder="Введите наименование товара" />

            <label class="form__field-name" for="">Описание товара</label>
            <textarea class="form__field form__field-textarea" type="text"
                placeholder="Введите описание товара"></textarea>

            <label class="form__field-name form__field-name_circle" for="">Ссылка на изображение товара</label>
            <input class="form__field form__field-input" type="text" placeholder="Введите ссылку" />

            <label class="form__field-name form__field-name_circle" for="">Цена товара</label>
            <input class="form__field form__field-input" type="text" placeholder="Введите цену" />

            <button class="form__btn">Добавить товар</button>
        </form>

    </div>
</template>
<script>
export default {
    name: "AddProduct"
}
</script>
<style lang="scss" scoped>

.form {
    width: 332px;
    
    &__title {
        font-weight: 600;
        font-size: 2.6rem;
        line-height: 3.6rem;
        margin-top: 32px;
        margin-bottom: 16px;
        letter-spacing: -0.45px;
        text-align: start;
    }

    &__content {
        width: calc(332px - 48px);
        height: calc(440px - 48px);
    
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    
        padding: 24px; 
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
    }
    
    &__field {
        border: none;
        border-radius: 4px;
        outline: none;
        background: #FFFEFB;
        box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

        &:last-child {
            margin-bottom: 24px;
        }
    
        &-input::placeholder {
            line-height: 20px;
            letter-spacing: -0.38px;
        }
    
    
        &-textarea {
            height: calc(108px - 20px);
    
            &::placeholder {     
                line-height: 16px;
                letter-spacing: -0.74px;
            }
        }
    
        &-input,
        &-textarea {
            width: calc(100% - 32px);
            margin-bottom: 16px;
            padding: 10px 16px;
    
            &::placeholder {
                font-size: 1.2rem;
                font-style: normal;
                color: #B4B4B4;
            }
        }
    
        &-name {
            font-size: 1rem;
            line-height: 13px;
            letter-spacing: -0.05em;
            color: #49485E;
            margin-bottom: 4px;
            position: relative;

            &_circle::after {
                content: "";
                position: absolute;
                top: -1px;
                right: -6px;
                width: 4px;
                height: 4px;
                background: #FF8484;
                border-radius: 4px;
                transform: translateX(-50%);
            }
        }

        &-error {
            outline: 1px solid #FF8484
        }
    }

    &__btn {
        width: 100%;
        height: 36px;
        margin-top: 8px;
        border: none;
        border-radius: 10px;
        outline: none;
        background: #EEEEEE;
        font-weight: 600;

        font-size: 1.2rem;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.02em;
    }
}
</style>