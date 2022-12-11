import Head from 'next/head'
import banner from '../public/banner.png'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Container from "../components/Container";
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// export async function getStaticProps() {
//   // const allUsers = await prisma.users.findMany()
//   // console.log(allUsers)
//   return  {
//     props: {
//     }
//   }
// }
export default function Home() {
  const list = [
    {
      oldPrice: 1088,
      newPrice: 488,
      description: ' Крем-спрей для волос 15в1, 250 мл'
    },
    {
      oldPrice: 1490,
      newPrice: 262,
      description: '  Гель для пяток, с мочевиной, кератолитик'
    },
    {
      oldPrice: 1088,
      newPrice: 488,
      description: ' Вязаный комбинезон новорожденному малышу набор на выписку'
    },
    {
      oldPrice: 1088,
      newPrice: 488,
      description: ' Вязаный комбинезон новорожденному малышу набор на выписку'
    },
    {
      oldPrice: 1088,
      newPrice: 488,
      description: ' Вязаный комбинезон новорожденному малышу набор на выписку'
    },
    {
      oldPrice: 1088,
      newPrice: 488,
      description: ' Вязаный комбинезон новорожденному малышу набор на выписку'
    },
    {
      oldPrice: 1088,
      newPrice: 488,
      description: ' Вязаный комбинезон новорожденному малышу набор на выписку'
    }
    ]
  return (
    <Container className={styles.parent}>
      <div className={styles.banner}>
        <Image src={banner} width={1920} height={1080} alt={'banner'}/>
      </div>
      <div className={styles.sales}>
        {
          [1,2,3,4,5,6,7,8].map((item, index) => {
            return <Image src={`/../public/img${item}.png`} alt={'img'} width={300} height={200}/>
          })
        }
      </div>
      <div>
        <h2>Хиты продаж</h2>
        <div className={styles.list}>
          {
            list.map((item, index) => {
              return (
                <div className={styles.item}>
                  <div className={styles.image}></div>
                  <div className={styles.prices}>
                    <p className={styles.newPrice}>{item.newPrice}Р</p>
                    <p className={styles.oldPrice}>{item.oldPrice}Р</p>
                  </div>
                  <p className={styles.description}>
                    {item.description}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div className={styles.sales}>
        {
          [1,2,3,4,5,6,7,8].map((item, index) => {
            return <Image src={`/../public/img${item}.png`} alt={'img'} width={300} height={200}/>
          })
        }
      </div>
      <div className={styles.categories}>
        <h2>Популярные категории</h2>
        <div className={styles.items}>
          {
            [1,2].map((item, index) => {
              return <Image src={`/../public/category${item}.png`} alt={'img'} width={1000} height={200}/>
            })
          }
        </div>
      </div>
      <div>
        <div className={styles.list}>
          {
            list.map((item, index) => {
              return (
                <div className={styles.item}>
                  <div className={styles.image}></div>
                  <div className={styles.prices}>
                    <p className={styles.newPrice}>{item.newPrice}Р</p>
                    <p className={styles.oldPrice}>{item.oldPrice}Р</p>
                  </div>
                  <p className={styles.description}>
                    {item.description}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
      <div>
        <h2>Вы смотрели</h2>
        <div className={styles.list}>
          {
            list.map((item, index) => {
              return (
                <div className={styles.item}>
                  <div className={styles.image}></div>
                  <div className={styles.prices}>
                    <p className={styles.newPrice}>{item.newPrice}Р</p>
                    <p className={styles.oldPrice}>{item.oldPrice}Р</p>
                  </div>
                  <p className={styles.description}>
                    {item.description}
                  </p>
                </div>
              )
            })
          }
        </div>
      </div>
    </Container>
  )
}
