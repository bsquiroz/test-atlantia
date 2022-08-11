import { FC } from "react";
import Chart from "react-apexcharts";
import { PriceEvolution, Series } from "../../interfaces";
import "./styles.css";

interface Props {
    priceEvolution: PriceEvolution[];
}

export const DiagramPriceEvol: FC<Props> = ({ priceEvolution }) => {
    const organizateData = priceEvolution.reduce((acum: any, current) => {
        if (acum[current.name]) {
            acum[current.name].data = [
                ...acum[current.name].data,
                current.price,
            ];
        } else {
            acum[current.name] = {
                data: [current.price],
                name: current.name,
            };
        }

        return acum;
    }, {});

    const series: Series[] = Object.values(organizateData);

    return (
        <div className="container_priceEvolution bg_card">
            <h2 className="title titleSeccion color_blue_dark">
                Price Evolution
            </h2>

            <Chart
                type="area"
                width={"100%"}
                height={"100%"}
                series={series}
                options={{
                    tooltip: {
                        y: {
                            formatter: (v) => `${v}`,
                        },
                    },
                }}
            ></Chart>
        </div>
    );
};
