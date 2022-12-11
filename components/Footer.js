import styles from '../styles/Footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div>
        <div className={styles.client}>
          <h3>Покупателям</h3>
          <p>Как сделать заказ</p>
          <p>Способы оплаты</p>
          <p>Способы доставки</p>
          <p>Возврат товара</p>
          <p>Возврат денежных средств</p>
          <p>Правила продажи</p>
          <p>Вопросы и ответы</p>
        </div>
        <div className={styles.parent}>
          <div className={styles.partners}>
            <h3>Партнерам</h3>
            <p>Перевозчикам</p>
            <p>Продавайте на РосТуризм</p>
          </div>
          <div className={styles.progects}>
            <h3>Наши проекты</h3>
            <p>Цифровые товары</p>
            <p>Трудоустройство</p>
          </div>
        </div>
        <div className={styles.company}>
          <h3>Компании</h3>
          <p>О нас</p>
          <p>Контакты</p>
          <p>Пресс-центр</p>
          <p>Реквезиты</p>
        </div>
        <div className={styles.sn}>
          <h3>Социальные сети</h3>
          <p>ВКонтакте</p>
          <p>Одноклассники</p>
          <p>Youtube</p>
          <p>Телеграм</p>
        </div>
      </div>
      <div className={styles.check}>
        <p>2022 РосТуризм</p>
        <p>Проверка совместимости</p>
      </div>
    </div>
  )
}