import React, { Fragment, FC } from "react";
import { BeerProduct } from "../../interfaces";
import { ItemTable } from "../itemTable";

import "./styles.css";

interface Props {
    beerProduct: BeerProduct[];
}

export const Table: FC<Props> = ({ beerProduct }) => {
    if (!beerProduct.length) return <div></div>;

    return (
        <Fragment>
            <h2 className="title titleSeccion color_blue_dark">
                Comparative Analysis
            </h2>

            <div className="style_table">
                <div className="table_content-text bg_gray-400">
                    <p className="title titleItems ">nombre</p>
                </div>
                <div className="table_content-text bg_gray-400">
                    <p className="title titleItems ">SKU</p>
                </div>
                <div className="table_content-text bg_gray-400">
                    <p className="title titleItems ">% Presencia</p>
                </div>
                <div className="table_content-text bg_gray-400">
                    <p className="title titleItems ">Av. price</p>
                </div>
                <div className="table_content-text bg_gray-400">
                    <p className="title titleItems ">Av. Position</p>
                </div>

                {beerProduct.map(
                    (
                        {
                            averagePosition,
                            averagePrice,
                            id,
                            name,
                            persistence,
                            productImage,
                            sku,
                        },
                        index
                    ) => (
                        <ItemTable
                            key={id}
                            id={id}
                            sku={sku}
                            name={name}
                            persistence={persistence}
                            averagePrice={averagePrice}
                            productImage={productImage}
                            averagePosition={averagePosition}
                            index={index}
                        />
                    )
                )}
            </div>
        </Fragment>
    );
};
