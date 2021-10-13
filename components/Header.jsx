import styles from "./../styles/header/header.module.scss";

export default function Header() {
    return (

        <ul className={styles.navlist}>
            <img className={styles.logo} src="/static/images/feather3.png" alt="logo" />
            <li className={styles.navitem}><a className={styles.navlink} href="#home">Início</a></li>
            <li className={styles.navitem}><a className={styles.navlink} href="#news">Perfil</a></li>
            <li className={styles.navitem}><a className={styles.navlink} href="#contact">Comunidades</a></li>
            <li className={styles.navitemright}><a className={styles.navlink} href="#contact">Ajuda</a></li>
        </ul>

    )
}