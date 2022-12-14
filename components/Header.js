import {useState} from "react";
import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logo from "../public/logo.png";
import preview from "../public/pull.png";
import russia from "../public/russia.png";
import {BiMap} from "react-icons/bi";
import {AiOutlineClose, AiOutlineSearch} from "react-icons/ai";
import {BsCart2} from "react-icons/bs";
import {RiAccountCircleLine} from "react-icons/ri";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const [dopMenu, setDopMenu] = useState(false);
  const [item, setItem] = useState(false);
  return (
    <header className={styles.parent}>
      <div className={styles.upper}>
        <div className={styles.flex}>
          <Image height={48} width={48} src={russia} alt={'flag'}/>
          <p>RUS</p>
        </div>
        <div className={styles.flex}>
          <BiMap/>
          <p>Москва</p>
        </div>
        <div className={styles.background}>
          <p>
            Продавайте на РосТуризм
          </p>
        </div>
        <div className={styles.background}>
          <p>
            Работа
          </p>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.burger} onClick={() => setMenu(true)}>
          <span></span>
        </div>
        <div className={styles.logo}>
          <Image height={48} width={48} src={logo} alt={'flag'}/>
          <p>РосТуризм</p>
        </div>
        <div className={styles.search}>
          <input type="text" placeholder={'Я ищу...'}/>
          <AiOutlineSearch/>
        </div>
        <div className={styles.links}>
          <a>
            <BiMap/>
            <p>Адреса</p>
          </a>
          <a>
            <RiAccountCircleLine/>
            <p>Войти</p>
          </a>
          <a>
            <BsCart2 />
            <p>Корзина</p>
          </a>
        </div>
      </div>
      <div style={{left: menu ? 0 : '-300px'}} className={styles.menu}>
        <ul className={styles.list}>
          <li>
            Сад и дача
          </li>
          <li onMouseEnter={() => setDopMenu(true)}>
            Бассейны
          </li>
          <li>
            Горшки, опоры и все для рассады
          </li>
          <li>
            Грили, мангалы и барбекю
          </li>
          <li>
            Дачные умывальники, души и туалеты
          </li>
          <li>
            Мойки высокого давления и аксессуары
          </li>
          <li>
            Полив и водоснабжение
          </li>
          <li>
            Растения, семена и грунты
          </li>
          <li>
            Садовая мебель
          </li>
          <li>
            Садовая техника
          </li>
          <li>
            Садовый декор
          </li>
          <li>
            Садовый инструмент
          </li>
          <li>
            Теплицы, парники, укрывной материал
          </li>
          <li>
            Товары для бани и сауны
          </li>
          <li>
            Товары для кемпинга и отдыха
          </li>
        </ul>
        {dopMenu && <ul className={styles.list}>
          <li onMouseEnter={() => setItem(true)}>
            Каркасные бассейны
          </li>
          <li>
            Надувные бассейны
          </li>
          <li>
            Надувные изделия и аксессуары для плавания
          </li>
          <li>
            Уход за бассейном
          </li>
        </ul>}
        {item &&
          <div className={styles.preview}>
            <Image width={400} height={400} alt={'preview'} src={preview}/>
          </div>
        }
        {menu && <AiOutlineClose className={styles.close} onClick={() => {setMenu(false); setDopMenu(false); setItem(false)}}/>}
      </div>
    </header>
  )
}