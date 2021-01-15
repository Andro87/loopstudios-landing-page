import styles from "./Image.module.scss";

export default function Image(props) {
    const { image, title } = props;
    return (
        <div className={styles.image_wrap}>
            {image}
            <p>{title}</p>
        </div>
    );
}
