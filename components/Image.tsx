import React from "react";
import styles from "./Image.module.scss";
import { ReactNode } from "react";
interface Props {
    readonly image: ReactNode;
    readonly title: string;
}
const Image: React.FunctionComponent<Props> = props => {
    const { image, title } = props;
    return (
        <div className={styles.image_wrap}>
            {image}
            <p>{title}</p>
        </div>
    );
};

export default Image;
