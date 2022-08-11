import React, { FC, Fragment } from "react";
import { formaPercent } from "../../helpers/formatPercent";
import { VerifyNegative } from "../../helpers/verifyNegative";
import { BeerProduct } from "../../interfaces";
import "./styles.css";

export const ItemTable: FC<BeerProduct> = ({
    productImage,
    name,
    sku,
    persistence,
    averagePrice,
    averagePosition,
    index,
}) => {
    return (
        <Fragment>
            <div
                className={`col-image ${index! % 2 ? "bg_card-1" : "bg_card"}`}
            >
                <div className="box__img">
                    <img src={productImage} alt={name} />
                </div>
                <p className="title titleItems color_gray">{name}</p>
            </div>
            <div
                className={`col-normal ${index! % 2 ? "bg_card-1" : "bg_card"}`}
            >
                <p className="title titleItems color_gray">{sku}</p>
            </div>
            <div
                className={`col-normal ${index! % 2 ? "bg_card-1" : "bg_card"}`}
            >
                <p
                    className={`title titleItems ${
                        VerifyNegative(persistence)
                            ? "color_pita-500"
                            : "color_aqua-500"
                    }`}
                >
                    {formaPercent(persistence)}
                </p>
            </div>
            <div
                className={`col-normal ${index! % 2 ? "bg_card-1" : "bg_card"}`}
            >
                <p className="title titleItems color_gray">{averagePrice}</p>
            </div>
            <div
                className={`col-normal ${index! % 2 ? "bg_card-1" : "bg_card"}`}
            >
                <p className="title titleItems color_gray">{averagePosition}</p>
            </div>
        </Fragment>
    );
};
