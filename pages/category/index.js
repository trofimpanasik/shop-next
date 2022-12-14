import Head from "next/head";
import styles from '../../styles/Category.module.scss'
import {useState} from "react";
import suck from '../../public/suck.png'
import Image from "next/image";

const Filter = ({items, type, header, showMore = false}) => {
  const [active, setActive] = useState(null)
  return (
    <div className={styles.filter}>
      <h3>{header}</h3>
      <div className={styles.filterItem}>
        {items.map((item, index) => (
          <div key={index} onClick={() => setActive(item)}>
            <input checked={active === item} type={type} />
            <p>{item}</p>
          </div>
          ))}
      </div>
      {showMore && <p className={styles.showMore}>Показать еще</p>}
    </div>
  )
}
export default function Category() {
  return (
    <>
      <Head>
        <title>Категория</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.parent}>
        <div className={styles.info}>
          <p>
            Главная <i>/</i> Сад и дача <i>/</i> Бассейны
          </p>
          <h2>Бассейны и средства для чистки</h2>
        </div>
        <div className={styles.together}>
          <div className={styles.filters}>
            <div className={styles.dopCategories}>
              <p>
                Аксессуары для бассейнов
              </p>
              <p>
                Каркасные бассейны
              </p>
              <p>
                Надувные бассейны
              </p>
              <p>
                Надувные изделия и аксессуары для плавания
              </p>
              <p>
                Уход за бассейном
              </p>
            </div>
            <Filter type={'radio'} header={'Срок доставки'} items={['1 день', '2 дня', 'до 3 дней', 'до 5 дней']}/>
            <Filter type={'checkbox'} header={'Бренд'} showMore={true}
                    items={['БАРЬЕР(105)', 'Аквафор(34)', 'Город игр(11)', 'Happy baby(9)', 'Полесье(5)']}/>
            <Filter type={'checkbox'} header={'Продавец'} showMore={true} items={['Bondibon - для ярких идей и веселых затей!(40)', 'Недорогие. Игрушки и товары для дома(39)',
              'РосТуризм(14)', 'RICH FAMILY(13)', 'Спортмастер(11)']}/>
            <Filter type={'radio'} header={'Скидка'} items={['от 10% и выше', 'от 30% и выше', 'от 50% и выше', 'от 70% и выше']}/>
          </div>
          <div className={styles.products}>
            <div className={styles.product}>
              <div className={styles.productImage}>
                <Image src={suck} alt={'suck'} width={200} height={300}/>
              </div>
              <div className={styles.prices}>
                <p className={styles.newPrice}>14 192 Р</p>
                <p className={styles.oldPrice}>27 826 Р</p>
              </div>
              <p className={styles.productName}>vommy / Песочный фильтр насос для очистки бассейнов INTEX, BESTWAY</p>
              <p className={styles.delivery}>Доставка <strong>завтра</strong></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
